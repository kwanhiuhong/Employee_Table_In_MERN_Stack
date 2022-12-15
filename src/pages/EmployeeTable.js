import React, { useContext, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ControllerContext } from "../controllers/EmployeeTableController";

const EmployeeTableView = () => {
  const [selectedNewsletter, setSelectedNewsletter] = useState("");
  const {
    model: {
      isLoading,
      isValid,
      fields: { newsletter },
    },
    handleFieldChange,
    submit,
  } = context;

  return <div></div>;
};

export default EmployeeTableView;
