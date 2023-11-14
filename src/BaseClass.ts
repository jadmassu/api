
import { Model, ModelCtor, FindOptions } from 'sequelize';

export class GenericModel<T extends Model> {
    private model: ModelCtor<T>;

    constructor(model: ModelCtor<T>) {
        this.model = model;
    }

    async findOne(options?: FindOptions): Promise<T | null> {
        const result = await this.model.findOne(options);
        return result ? result.toJSON() as T : null;
    }

    async findAll(options?: FindOptions): Promise<T[]> {
        const results = await this.model.findAll(options);
        return results.map((result) => result.toJSON() as T);
    }

    // async create(data: Partial<T>): Promise<T> {
    //     const result = await this.model.create(data) ;
    //     return result.toJSON() as T;
    // }

    // async update(data: Partial<T>, options?: FindOptions): Promise<T | null> {
    //     const [rowsAffected] = await this.model.update(data, options);
    //     if (rowsAffected === 0) {
    //         return null;
    //     }
    //     const updatedData = await this.model.findOne(options);
    //     return updatedData ? updatedData.toJSON() as T : null;
    // }

    async delete(options?: FindOptions): Promise<boolean> {
        const rowsAffected = await this.model.destroy(options);
        return rowsAffected > 0;
    }
}
