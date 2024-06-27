import { User } from "./user";

export interface UserRepository {
    registeruser(user: User): Promise<User | null>;
    getUser(id: number): Promise<User | null>;
    getUsers(): Promise<User[] | null>;
}
