const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.post("/users", UserController.post);

module.exports = routes;
