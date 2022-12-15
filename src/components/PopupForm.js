import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormDialog = ({ formDate }) => {
  const formData = [
    {
      id: "name",
      label: "Employee ID",
      value: "12",
    },
    {
      id: "name",
      label: "Employee First Name",
    },
  ];

  return (
    <>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        {formData.map((data) => {
          return (
            <TextField
              id={data.id}
              label={data.label}
              fullWidth
              variant="standard"
              value={data.value}
            />
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {}}>Submit / Edit</Button>
      </DialogActions>
    </>
  );
};

export default FormDialog;
