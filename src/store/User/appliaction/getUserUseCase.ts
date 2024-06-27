import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class GetUserUseCase {
    private readonly userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    async getUser(id: number): Promise<User | null> {
        try {
            return await this.userRepository.getUser(id);
        } catch (error) {
            console.error("Error getting user:", error);
            return null;
        }
    }
}