// models/BaseModel.ts
import { Sequelize } from 'sequelize';
const { Model, DataTypes } = require("sequelize");
// const Sequelize = require("sequelize");
export abstract class BaseModel<T extends BaseModel<T>> extends Model<T> {
    id!: number;
    createdAt!: Date;
    updatedAt!: Date;

    static initialize(sequelize: Sequelize): void {
        this.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                createdAt: DataTypes.DATE,
                updatedAt: DataTypes.DATE,
            },
            { sequelize, modelName: this.name }
        );
    }
}
