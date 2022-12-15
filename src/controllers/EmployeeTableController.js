import React, { useState, useEffect, useReducer, createContext } from "react";
import initialModel from "../models/EmployeeTableModel";
import actions from "../models/actions/EmployeeTableAction";
import reducer from "../models/reducers/EmployeeTableReducer";
import StickyHeadTable from "../components/Table";
import Button from "@material-ui/core/Button";
import PopupFrom from "../components/PopupForm";
import Dialog from "@mui/material/Dialog";

const api = async (url, method, headers, body) => {
  const response = await fetch(url, {
    method: method,
  });
  return await response.json();
};

const load = async () => {
  return await api("http://localhost:3000/load", "POST");
};

const getData = async () => {
  return await api("http://localhost:3000/get", "GET");
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
  const rspJson = await response.json();
};

const EmployeeTableController = ({ children }) => {
  const [data, setData] = useState({});
  const [openPopupForm, setOpenPopupForm] = useState(false);

  const handleClose = () => {
    setOpenPopupForm(false);
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
                setOpenPopupForm(true);
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
    const data = await getData();
    setData({
      title: "Employees",
      columns: [
        { id: "firstName", label: "First Name" },
        {
          id: "lastName",
          label: "Last Name",
        },
        {
          id: "salary",
          label: "Salary",
        },
        {
          id: "button",
        },
      ],
      rows: appendButtonsToEachData(data),
    });
  }, []);

  return (
    <>
      <Dialog open={openPopupForm} onClose={handleClose}>
        <PopupFrom />
      </Dialog>
      <StickyHeadTable data={data} />
      {/* <button onClick={testBackend}>test backend</button> */}
    </>
  );
};

export default EmployeeTableController;
