import React from "react";
import Container from "@material-ui/core/Container";
import NewsLetterFormController from "./controllers/EmployeeTableController";
import NewsLetterFormView from "./pages/EmployeeTable";
import StickyHeadTable from "./components/Table";

const App = () => (
  <Container maxWidth="sm" justify="center">
    {/* <NewsLetterFormController>
      <NewsLetterFormView />
    </NewsLetterFormController> */}
    <StickyHeadTable />
  </Container>
);

export default App;
