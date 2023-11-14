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
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../utils/sequelize';

export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    declare id: CreationOptional<number>
    declare email: string;

    declare name: string | null;

    // declare userId: ForeignKey<User['id']>;
    // declare address: string;

    // createdAt can be undefined during creation
    declare createdAt: CreationOptional<Date>;
    // updatedAt can be undefined during creation
    declare updatedAt: CreationOptional<Date>;
}


User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        email: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'users',
        sequelize // passing the `sequelize` instance is required
    }
);

// export class User implements UserAttributes {
//     id!: number;
//     firstName!: string;
//     lastName!: string;
//     email!: string;

//     // static associate(models: any): void {
//     //     // define association here
//     // }
// }

