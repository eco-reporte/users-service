import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../../database/database';  // Importa la instancia de Sequelize configurada



interface UserAttributes {
    id: number;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    gender: string;
    phone: string;
    code: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public lastName!: string;
    public email!: string;
    public password!: string;
    public role!: string;
    public gender!: string;
    public phone!: string;
    public code!: string;
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
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
        role: {
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
            allowNull: true,
        },

    },
    {
        sequelize,
        
        tableName: 'users',
        timestamps: false,
    }
);
