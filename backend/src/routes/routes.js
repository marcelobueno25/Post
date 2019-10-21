const express = require("express");
const routes = express.Router();
const UserController = require("../controllers/UserController");
const RegisterController = require("../controllers/RegisterController");

routes.post("/users", UserController.store);
routes.post("/register", RegisterController.store);

module.exports = routes;