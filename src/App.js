import React from "react";
import Container from "@material-ui/core/Container";
import EmployeeTableController from "./controllers/EmployeeTableController";
import EmployeeTableView from "./pages/EmployeeTable";
const App = () => (
  <Container maxWidth="sm" justify="center">
    <EmployeeTableController>
      <EmployeeTableView />
    </EmployeeTableController>
  </Container>
);

export default App;
