import React, { useEffect, useReducer, createContext } from "react";
import initialModel from "../models/EmployeeTableModel";
import reducer from "../models/reducers/EmployeeTableReducer";
import actions from "../models/actions/EmployeeTableAction";
import Button from "@material-ui/core/Button";

const api = async (url, method, headers, body) => {
  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: body,
  });
  return await response.json();
};

const load = async () => {
  return await api("http://localhost:3000/load", "POST");
};

const fetchData = async () => {
  return await api("http://localhost:3000/get", "GET");
};

const addData = async (data) => {
  const response = await api(
    "http://localhost:3000/edit",
    "PUT",
    {
      "Content-Type": "application/json",
    },
    JSON.stringify(data)
  );
  response.msg
    ? window.alert("Success")
    : window.alert(`Error! See: ${JSON.stringify(response)}`);
};

const deleteRecord = async () => {
  const response = await api(
    "http://localhost:3000/delete",
    "DELETE",
    {
      "Content-Type": "application/json",
    },
    JSON.stringify({
      firstName: "JJJ",
      lastName: "Kwan",
      salary: 3000,
    })
  );
};

const EmployeeTableController = ({ children }) => {
  const [model, dispatch] = useReducer(reducer, initialModel);

  const handleAdd = () => {
    dispatch({
      type: actions.SET_OPEN_POPUP_FORM,
      payload: true,
    });
  };

  const handleClose = () => {
    dispatch({
      type: actions.SET_OPEN_POPUP_FORM,
      payload: false,
    });
  };

  const handleSubmit = async (input) => {
    await addData(input);
    const data = await fetchData();
    dispatch({
      type: actions.SET_EMPLOYEES_DATA,
      payload: {
        ...model.employeesData,
        rows: appendButtonsToEachData(data),
      },
    });
  };

  const appendButtonsToEachData = (data) => {
    return data.map((each) => {
      return {
        ...each,
        button: (
          <>
            <Button
              color="primary"
              onClick={() => {
                dispatch({
                  type: actions.SET_OPEN_POPUP_FORM,
                  payload: true,
                });
              }}
            >
              Edit
            </Button>
            <Button color="secondary">Delete</Button>
          </>
        ),
      };
    });
  };

  useEffect(async () => {
    await load();
    const data = await fetchData();
    console.log(`checkout ${JSON.stringify(data)}`);
    dispatch({
      type: actions.SET_FORM_DATA,
      payload: {
        title: "Add/Edit Employee's Information",
        description: "Please add or edit your employee info below",
      },
    });
    dispatch({
      type: actions.SET_EMPLOYEES_DATA,
      payload: {
        title: "Employees",
        columns: model.formHeader,
        rows: appendButtonsToEachData(data),
      },
    });
  }, []);

  return (
    <>
      <EmployeeTableControllerContext.Provider
        value={{ model, handleClose, handleAdd, handleSubmit }}
      >
        {children}
      </EmployeeTableControllerContext.Provider>
    </>
  );
};

export const EmployeeTableControllerContext = createContext();
export default EmployeeTableController;
