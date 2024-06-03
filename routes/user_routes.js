import express from 'express'
import UserController from '../controller/user_controller.js'
import { authentication } from '../middleware/authentication.js'
import { userAuthorization } from '../middleware/authorization.js'

const user_routes = express.Router();

user_routes.post("/register", UserController.register);
user_routes.post("/login", UserController.login);

user_routes.get("/users", authentication, UserController.getAllUser);
user_routes.get("/user/:id", authentication, UserController.getuserById);
user_routes.put("/edit/user", authentication, UserController.updateUser);

user_routes.delete("/delete/:id", authentication, userAuthorization, UserController.deleteUser);

export {user_routes};