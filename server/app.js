const express = require("express");
const bodyParser = require("cors");
const cors = require("body-parser");
const { API_VERSION } = require("./constants");

const app = express();

// Import routings
// ...

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure static folder
app.use(express.static("uploads"));

// Configure Header HTTP - CORS
app.use(cors());

// Configure routings
// ...

module.exports = app;
