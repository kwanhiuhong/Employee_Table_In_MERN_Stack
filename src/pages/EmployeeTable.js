import React, { useContext, useState } from "react";
import StickyHeadTable from "../components/Table";
import PopupFrom from "../components/PopupForm";
import Dialog from "@mui/material/Dialog";
import { EmployeeTableControllerContext } from "../controllers/EmployeeTableController";

const EmployeeTableView = () => {
  const context = useContext(EmployeeTableControllerContext);
  const {
    model: { shouldOpenPopupForm, employeesData },
    handleClose,
  } = context;
  return (
    <>
      <Dialog open={shouldOpenPopupForm} onClose={handleClose}>
        <PopupFrom />
      </Dialog>
      <StickyHeadTable data={employeesData} />
    </>
  );
};

export default EmployeeTableView;
