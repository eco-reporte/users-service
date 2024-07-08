// src/infrastructure/database/models/UserModel.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../database/database';  // Importa la instancia de Sequelize configurada

class User extends Model {
    public email!: string;
    public password!: string;
    public role!: string;
    public name!: string;
    public lastName!: string;
    public gender!: string;
    public phone!: string;
    public code!: string;

    // Aquí podrías agregar métodos personalizados o relaciones con otros modelos
}

User.init(
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
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
