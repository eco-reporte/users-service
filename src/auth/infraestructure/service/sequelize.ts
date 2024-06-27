// src/infrastructure/database/models/UserModel.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../database/database';  // Importa la instancia de Sequelize configurada

class User extends Model {
    public email!: string;
    public password!: string;

    // Aquí podrías agregar métodos personalizados o relaciones con otros modelos
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,           // Pasa la instancia de Sequelize configurada
        modelName: 'User',   // Nombre del modelo
        tableName: 'users',  // Nombre real de la tabla en la base de datos
        timestamps: false,   // Si no tienes campos createdAt y updatedAt en tu tabla
    }
);

export default User;
