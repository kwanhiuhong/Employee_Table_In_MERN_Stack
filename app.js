var express = require("express");
var path = require("path");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// Database
var mongo = require("mongodb");
var monk = require("monk");
var db = monk("localhost:27017/employee_table_in_mern");

// var indexRouter = require('./routes/index');
var backendRouter = require("./src/backend/EmployeeTableBackend.js");

var app = express();

app.use(cors());

// Make our db accessible to our router
app.use(function (req, res, next) {
  req.db = db;
  next();
});

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "keyboard cat",
  })
);

app.use("/", backendRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

module.exports = app;
