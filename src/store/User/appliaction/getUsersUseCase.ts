import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";


export class GetUsersUseCase{
    constructor(readonly userRepository: UserRepository){}

    async run():Promise<User[] | null>{
        try {
            const getAll = await this.userRepository.getUsers();
            return getAll;
            
        } catch (error) {
            return null;
        }
    }
}