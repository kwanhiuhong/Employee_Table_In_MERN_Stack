import React from "react";
import Container from "@material-ui/core/Container";
import EmployeeTableController from "./controllers/EmployeeTableController";
import StickyHeadTable from "./components/Table";
import EmployeeTableView from "./pages/EmployeeTable";
const App = () => (
  <Container maxWidth="sm" justify="center">
    {/* <NewsLetterFormController>
      <NewsLetterFormView />
    </NewsLetterFormController> */}
    <EmployeeTableController>
      <EmployeeTableView />
    </EmployeeTableController>
    {/* <StickyHeadTable /> */}
  </Container>
);

export default App;
