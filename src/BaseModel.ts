import { Sequelize, Model, DataTypes, ModelCtor, Optional, ModelAttributes } from 'sequelize';

export interface BaseModelAttributes {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

// export abstract class BaseModel<T extends BaseModelAttributes> extends Model<T> {
//     public id!: number;
//     public createdAt!: Date;
//     public updatedAt!: Date;

//     static initialize<T extends BaseModelAttributes>(
//         this: ModelCtor<BaseModel<T>>,
//         sequelize: Sequelize
//     ): void {
//         (this.init as (attributes: ModelAttributes<BaseModel<T>, any>, options?: any) => void)(
//             {
//                 id: {
//                     type: DataTypes.INTEGER,
//                     autoIncrement: true,
//                     primaryKey: true,
//                 },
//                 createdAt: {
//                     type: DataTypes.DATE,
//                     allowNull: false,
//                 },
//                 updatedAt: {
//                     type: DataTypes.DATE,
//                     allowNull: false,
//                 },
//             },
//             {
//                 sequelize,
//                 modelName: this.name,
//             }
//         );
//     }
// }