const express = require("express");
const multipart = require("connect-multiparty");
const CourseController = require("../controllers/course");
const md_auth = require("../middlewares/authenticated");

const md_upload = multipart({ uploadDir: "./uploads/course" });
const api = express.Router();

api.post("/course", [md_auth.asureAuth, md_upload], CourseController.createCourse);
api.get("/courses", CourseController.getCourses);
api.patch("/course/:id", [md_auth.asureAuth, md_upload], CourseController.updateCourse);
api.delete("/course/:id", [md_auth.asureAuth], CourseController.deleteCourse);

module.exports = api;
