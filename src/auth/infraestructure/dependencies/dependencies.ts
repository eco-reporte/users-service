import { AuthRepository } from '../../domain/repository/authRepository';
import { MysqlAuthRepository } from '../mysqlAuthRepo';

export const authRepository: AuthRepository = new MysqlAuthRepository();