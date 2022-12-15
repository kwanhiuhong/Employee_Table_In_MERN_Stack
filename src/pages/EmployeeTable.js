import React, { useContext } from "react";
import StickyHeadTable from "../components/Table";
import PopupFrom from "../components/PopupForm";
import Dialog from "@mui/material/Dialog";
import { EmployeeTableControllerContext } from "../controllers/EmployeeTableController";
import Box from "@mui/material/Box";

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
      <Box m={2}>
        <StickyHeadTable data={employeesData} />
      </Box>
    </>
  );
};

export default EmployeeTableView;
