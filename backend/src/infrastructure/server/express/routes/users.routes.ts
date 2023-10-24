import { Router } from "express";

import { CreateUserController } from "@presentation/controllers/CreateUserController";
import { ListUsersController } from "@presentation/controllers/ListUsersController";
import { UpdateUserController } from "@presentation/controllers/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.put("/", updateUserController.handle);

export { usersRoutes };
