import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormDialog = ({ data }) => {
  const { title, description, formData, handleSubmit } = data;
  let contentRefs = {};
  for (const eachData of formData) {
    if (eachData.id && eachData.label) contentRefs[eachData.id] = useRef(null);
  }

  const gatherFormData = (refs) => {
    let data = {};
    for (const [key, ref] of Object.entries(refs)) {
      data[key] = ref.current.value;
    }
    return data;
  };

  const handleFormSubmit = async () => {
    let data = gatherFormData(contentRefs);
    console.log("see data");
    console.log(data);
    await handleSubmit(data);
  };

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        {formData.map((data) => {
          return data.id && data.label ? (
            <TextField
              id={data.id}
              label={data.label}
              fullWidth
              variant="standard"
              value={data.value}
              inputRef={contentRefs[data.id]}
            />
          ) : (
            <></>
          );
        })}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormSubmit}>Submit</Button>
      </DialogActions>
    </>
  );
};

export default FormDialog;
