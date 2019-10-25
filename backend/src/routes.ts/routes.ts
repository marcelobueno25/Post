import express from "express";
const routes = express.Router();
import { UserController } from '../controller.ts/UserController'
const userController: any = new UserController();
import { RegisterController } from '../controller.ts/RegisterController'
const registerController: any = new RegisterController();


routes.post("/login", userController.store);
routes.post("/register", registerController.store);
routes.get("/teste", (_, res) => {
    res.send({ message: 'teste' })
});

module.exports = routes;