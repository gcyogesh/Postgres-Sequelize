import { DataTypes } from 'sequelize';
import sequelize from '../connection/Connection.js'; 

const UserModel = sequelize.define("UserData", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: { 
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

export default UserModel;
