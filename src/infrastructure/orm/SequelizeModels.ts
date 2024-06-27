import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

class User extends Model {}

User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM('user', 'admin'),
        defaultValue: 'user'
    }
}, {
    sequelize,
    modelName: 'User'
});

export default User;
