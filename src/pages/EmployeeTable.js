import React, { useContext } from "react";
import StickyHeadTable from "../components/Table";
import PopupFrom from "../components/PopupForm";
import Dialog from "@mui/material/Dialog";
import { EmployeeTableControllerContext } from "../controllers/EmployeeTableController";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
  },
}));

const EmployeeTableView = () => {
  const classes = useStyles();
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
      <Box m={2} alignItems="flex-end">
        <StickyHeadTable data={employeesData} />
        <Box
          m={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button variant="contained" classes={{ root: classes.success }}>
            ADD EMPLOYEE
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EmployeeTableView;
