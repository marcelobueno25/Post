import { Router } from "express";

import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/users", UserController.index);

routes.post("/login", UserController.store);

routes.post("/register", UserController.create);

export default routes;
