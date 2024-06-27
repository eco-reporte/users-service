import { MysqlUserRepository } from "./mysqlUserRepository";
import { GetUserUseCase } from "../appliaction/getUserUseCase";
import { GetUserController } from "./controllers/getUserController";
import { RegisterUserController } from "./controllers/registerUserController";
import { RegisterUserUseCase } from "../appliaction/registerUserUseCase";


// Repositorios y casos de uso para usuarios
const mysqlUserRepository = new MysqlUserRepository();
const getUsersUseCase = new GetUserUseCase(mysqlUserRepository);
export const getUserController = new GetUserController(getUsersUseCase);
const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);
const registerUserController = new RegisterUserController(registerUserUseCase);



