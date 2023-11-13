"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const BaseModel_1 = require("../BaseModel");
class User extends BaseModel_1.BaseModel {
    static associate(models) {
        // define association here
    }
}
exports.User = User;
