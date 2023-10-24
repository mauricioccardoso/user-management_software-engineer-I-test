import { Router } from "express";

import { CreateUserController } from "@presentation/controllers/CreateUserController";
import { ListUsersController } from "@presentation/controllers/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);

export { usersRoutes };
