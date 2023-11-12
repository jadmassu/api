// const { INTEGER, STRING, BOOLEAN } = require("sequelize");
// const User = sequelize.define("users", {
//     id: {
//         type: INTEGER,
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     userName: {
//         type: STRING,
//         allowNull: false
//     },
//     password: {
//         type: STRING,
//         allowNull: false
//     },
//     active: {
//         type: BOOLEAN,
//         allowNull: false
//     }
// })

// module.exports = User

// models/User.ts
import { DataTypes, Sequelize } from 'sequelize';
import { BaseModel } from '../BaseModel';

export interface UserAttributes {
    firstName: string;
    lastName: string;
    email: string;
}

export class User extends BaseModel<User> implements UserAttributes {
    firstName!: string;
    lastName!: string;
    email!: string;

    static associate(models: any): void {
        // define association here
    }
}