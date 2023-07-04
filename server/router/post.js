const express = require("express");
const multipart = require("connect-multiparty");
const PostController = require("../controllers/post");
const md_auth = require("../middlewares/authenticated");

const md_upload = multipart({ uploadDir: "./uploads/blog" });
const api = express.Router();

// APIs

module.exports = api;