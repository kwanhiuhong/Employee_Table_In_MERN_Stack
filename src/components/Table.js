import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PopupFrom from "./PopupForm";
import Dialog from "@mui/material/Dialog";

const StickyHeadTable = () => {
  const [openPopupForm, setOpenPopupForm] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClose = () => {
    setOpenPopupForm(false);
  };

  const columns = [
    { id: "employeeId", label: "Employee ID" },
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
  ];

  function createData(employeeId, firstName, lastName, salary) {
    return {
      employeeId,
      firstName,
      lastName,
      salary,
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
  }

  const title = "Employees";

  const rows = [
    createData(1, "Michelle", "Yau", "$12000"),
    createData(2, "Terry", "Kwan", "$1000"),
    createData(3, "Man Sze", "Yau", "$5000"),
    createData(4, "Yau", "Yau", "$7000"),
    createData(5, "Poor", "Girl", "$9000"),
    createData(6, "AU", 25475400, 7692024),
    createData(7, "DE", 83019200, 357578),
    createData(8, "IE", 4857000, 70273),
    createData(9, "MX", 126577691, 1972550),
    createData(10, "JP", 126317000, 377973),
    createData(11, "FR", 67022000, 640679),
    createData(12, "GB", 67545757, 242495),
  ];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <Dialog open={openPopupForm} onClose={handleClose}>
        <PopupFrom />
      </Dialog>
      <Box m={2}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StickyHeadTable;
