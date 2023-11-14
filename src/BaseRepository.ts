// repositories/BaseRepository.ts
import { Model, DestroyOptions, ModelCtor, FindOptions, Identifier, UpdateOptions } from 'sequelize';
import { Model as TypeModel } from 'sequelize-typescript';

export abstract class BaseRepository<T extends Model> {
    constructor(private model: ModelCtor<Model>) {

    }

    async findOne(options?: FindOptions, identifier?: Identifier): Promise<T | null> {
        try {
            const result = await this.model.findByPk(identifier, options);
            return result ? result.toJSON() as T : null;
        }
        catch (error) {
            throw new Error(`Error creating record: ${(error as Error).message}`);

        }

    }

    async findAll(options?: FindOptions): Promise<T[]> {
        try {
            const results = await this.model.findAll(options);
            return results.map((result) => result.toJSON() as T);
        }
        catch (error) {
            throw new Error(`Error creating record: ${(error as Error).message}`);

        }
    }

    async create(data: Partial<T>): Promise<T> {
        try {
            return await this.model.create(data) as T;
        } catch (error) {
            throw new Error(`Error creating record: ${(error as Error).message}`);
        }
    }


    async update(data: Partial<T>, options?: UpdateOptions): Promise<T | null> {
        try {
            const [rowsAffected] = await this.model.update(data, options!);
            if (rowsAffected === 0) {
                return null;
            }
            const updatedData = await this.model.findOne(options);
            return updatedData ? updatedData.toJSON() as T : null;
        }
        catch (error) {
            throw new Error(`Error creating record: ${(error as Error).message}`);
        }

    }

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

    async delete(options?: FindOptions): Promise<boolean> {
        try {
            const rowsAffected = await this.model.destroy(options);
            return rowsAffected > 0;
        }
        catch (error) {
            throw new Error(`Error creating record: ${(error as Error).message}`);
        }
    }
}

// repositories/UserRepository.ts
