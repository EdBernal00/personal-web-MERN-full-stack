const express = require("express");
const multipart = require("connect-multiparty");
const CourseController = require("../controllers/course");
const md_auth = require("../middlewares/authenticated");

const md_upload = multipart({ uploadDir: "./uploads/course" });
const api = express.Router();

// APIs

module.exports = api;
