const express = require("express");
const NewsletterController = require("../controllers/newsletter");
const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/newsletter", NewsletterController.suscribeEmail);
api.get("/newsletters", [md_auth.asureAuth], NewsletterController.getEmails);

module.exports = api;