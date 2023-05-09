const express = require("express");
const { API_VERSION } = require("./constants");

const app = express();

// Import routings
// ...

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure Header HTTP - CORS
// ...

// Configure routings
// ...

module.exports = app;
