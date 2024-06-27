import { query } from "../../../database/mysql";
import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class MysqlUserRepository implements UserRepository {
    async registeruser(user: User): Promise<User | null> {
        try {
            const sql = "INSERT INTO user (id, name, lastname, phone, email, birthday, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
            await query(sql, [user.id, user.name, user.lastname, user.phone, user.email, user.birthday, user.password]);

            return user;

        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            throw new Error('Error al registrar el usuario');
        }
    }

    async getUser(id: number): Promise<User | null> {
        try {
            const sql = "SELECT * FROM user WHERE id = ?";
            const [rows]: any = await query(sql, [id]);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null;
            }

            const row = rows[0];

            const user = new User(
                row.id,
                row.name,
                row.lastname,
                row.phone,
                row.email,
                row.birthday,
                row.password
            );

            return user;

        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw new Error('Error al obtener el usuario');
        }
    }

    async getUsers(): Promise<User[] | null> {
        try {
            const sql = "SELECT * FROM user";
            const [rows]: any = await query(sql);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null;
            }

            const users = rows.map((row: any) => {
                return new User(
                    row.id,
                    row.name,
                    row.lastname,
                    row.phone,
                    row.email,
                    row.birthday,
                    row.password
                );
            });

            return users;

        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
            throw new Error('Error al obtener los usuarios');
        }
    }
}

