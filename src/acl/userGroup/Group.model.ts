
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../../utils/sequelize';

export class Group extends Model<
    InferAttributes<Group>,
    InferCreationAttributes<Group>
> {
    declare id: CreationOptional<number>
    declare name: string | null;
    declare description: string | null;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}


Group.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        description: {
            type: new DataTypes.STRING(128),
            allowNull: true
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'groups',
        sequelize // passing the `sequelize` instance is required
    }
);



