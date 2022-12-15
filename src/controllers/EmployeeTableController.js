import React, { useState, useEffect, useReducer, createContext } from "react";
import initialModel from "../models/EmployeeTableModel";
import actions from "../models/actions/EmployeeTableAction";
import reducer from "../models/reducers/EmployeeTableReducer";

const EmployeeTableController = ({ children }) => {
  const testBackend = async () => {
    const response = await fetch("http://localhost:3000/helloworld");
    const rspJson = await response.json();
    console.log("the response is");
    window.alert(`Connected to backend! See rsp: ${JSON.stringify(rspJson)}`);
    console.log(rspJson);
    // if (!response.ok) {
    //   const message = `An error has occurred: ${response.statusText}`;
    //   window.alert(message);
    //   return;
    // }

    // const record = await response.json();
    // if (!record) {
    //   window.alert(`Record with id ${id} not found`);
    //   navigate("/");
    //   return;
    // }
  };

  return (
    <>
      <button onClick={testBackend}>test backend</button>
    </>
  );
};

export default EmployeeTableController;
