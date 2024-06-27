import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";
import { v4 as uuid } from "uuid";




export class RegisterUserUseCase {
    constructor(readonly userRepository: UserRepository) {}

    async run(user: User): Promise<User | null> {

        try {
            const newUser = {

                id: user.id,
                name: user.name,
                lastname: user.lastname,
                phone: user.phone,
                email: user.email,
                birthday: user.birthday,
                password: user.password,

            };

            return await this.userRepository.registeruser(newUser);
        } catch (error) {
            return null;
        }
    }
}