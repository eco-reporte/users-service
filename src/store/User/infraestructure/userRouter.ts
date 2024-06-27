import express from 'express';
import { GetUserUseCase } from '../appliaction/getUserUseCase';
import { GetUsersController } from './controllers/getUsersController';
import { MysqlUserRepository } from './mysqlUserRepository';
import { RegisterUserController } from './controllers/registerUserController';
import { GetUsersUseCase } from '../appliaction/getUsersUseCase';
import { RegisterUserUseCase } from '../appliaction/registerUserUseCase';
import { getUserController } from './dependencies';

export const userRouter = express.Router();
const userRepository = new MysqlUserRepository();

const getUsersUseCase = new GetUsersUseCase(userRepository);
const getUsersController = new GetUsersController(getUsersUseCase);

const registerUserUseCase = new RegisterUserUseCase(userRepository);
const registerUserController = new RegisterUserController(registerUserUseCase);

userRouter.get("/all-users", getUsersController.getUsers.bind(getUsersController));
userRouter.get("/:id", getUserController.getByPublic.bind(getUserController));
userRouter.post("/create-user", registerUserController.register.bind(registerUserController));



