var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

const successReturn = {
  msg: "success",
};

const logError = (msg) => {
  console.log("Fail to modify database collection: Employees, see error:");
  console.log(msg);
};

const logSuccess = () => {
  console.log("Successfully modify database collection: Employees");
};

// read the employee data file in
const fs = require("fs");
var employeeData;
fs.readFile("./data.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  employeeData = JSON.parse(jsonString);
});

router.get("/get", function (req, res) {
  let db = req.db;
  let employeesDB = db.get("Employees");
  employeesDB.find({}, function (error, result) {
    if (error == null) {
      logSuccess();
      res.json(result);
    } else {
      logError(error);
      res.json(error);
    }
  });
});

// load data into the MongoDB database
router.post("/load", bodyParser.json(), function (req, res) {
  let db = req.db;
  let employeesDB = db.get("Employees");

  // set up unique key to avoid duplicate records
  employeesDB.createIndex({ firstName: 1, lastName: 2 }, { unique: true });

  employeesDB.insert(
    employeeData["employees"],
    { upsert: true },
    function (error) {
      if (error == null) {
        logSuccess();
        res.json(successReturn);
      } else {
        logError(error);
        res.json(error);
      }
    }
  );
});

router.put("/edit", bodyParser.json(), function (req, res) {
  let db = req.db;
  let employeesDB = db.get("Employees");
  employeesDB.update(
    { firstName: req.body.firstName, lastName: req.body.lastName },
    { $set: req.body },
    { upsert: true },
    function (error) {
      if (error == null) {
        logSuccess();
        res.json(successReturn);
      } else {
        logError(error);
        res.json(error);
      }
    }
  );
});

router.delete("/delete", bodyParser.json(), function (req, res) {
  let db = req.db;
  let employeesDB = db.get("Employees");
  employeesDB.remove(req.body, function (error) {
    if (error == null) {
      logSuccess();
      res.json(successReturn);
    } else {
      logError(error);
      res.json(error);
    }
  });
});

module.exports = router;
