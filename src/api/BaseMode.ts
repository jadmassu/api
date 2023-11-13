// models/BaseModel.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

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

// models/User.ts
import { DataTypes, Sequelize } from 'sequelize';
import { BaseModel } from './BaseModel';

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

// repositories/BaseRepository.ts
import { Model, DestroyOptions } from 'sequelize';

export abstract class BaseRepository<T extends Model<T>> {
    constructor(private model: typeof Model) { }

    async create(data: Partial<T>): Promise<T> {
        try {
            return await this.model.create(data);
        } catch (error) {
            throw new Error(`Error creating record: ${error.message}`);
        }
    }

    // ... other methods

    async deleteMultiple(ids: number[]): Promise<number> {
        const destroyOptions: DestroyOptions = {
            where: { id: ids },
        };

        try {
            return await this.model.destroy(destroyOptions);
        } catch (error) {
            throw new Error(`Error deleting multiple records: ${error.message}`);
        }
    }
}

// repositories/UserRepository.ts
import { Model } from 'sequelize';
import User, { UserAttributes } from '../models/User';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository<User> {
    constructor() {
        super(User);
    }

    // additional methods specific to User model can be implemented here
}

export default UserRepository;