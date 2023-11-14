// repositories/BaseRepository.ts
import { Model, DestroyOptions, ModelCtor, FindOptions } from 'sequelize';
import { Model as TypeModel } from 'sequelize-typescript';

export abstract class BaseRepository<T extends Model> {
    constructor(private model: ModelCtor<Model>) {

    }



    async findAll(options?: FindOptions): Promise<T[]> {
        const results = await this.model.findAll(options);
        return results.map((result) => result.toJSON() as T);
    }

    async create(data: Partial<T>): Promise<T> {
        try {
            return await this.model.create(data) as T;
        } catch (error) {
            throw new Error(`Error creating record: ${(error as Error).message}`);
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
            throw new Error(`Error creating record: ${(error as Error).message}`);
        }
    }
}

// repositories/UserRepository.ts
