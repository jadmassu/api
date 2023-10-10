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
