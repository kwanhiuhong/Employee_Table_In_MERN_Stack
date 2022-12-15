const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(require("../src/backend/EmployeeTableBackend.js"));
// get driver connection

app.listen(port, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});

var mongo = require("mongodb");
var monk = require("monk");
var db = monk("localhost:27017/employee_table_in_mern");

// var indexRouter = require('./routes/index');
// var backendRouter = require("./src/backend/EmployeeTableBackend.js");

// Make our db accessible to our router
app.use(function (req, res, next) {
  req.db = db;
  next();
});
