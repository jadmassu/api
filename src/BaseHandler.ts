import { Request, Response } from 'express';

import { BaseRepository } from './BaseRepository';
import { Model } from 'sequelize';

export abstract class BaseHandler<T extends Model> {
    protected repository: BaseRepository<T>;

    constructor(repository: BaseRepository<T>) {
        this.repository = repository;
        console.log("BaseHandler", this.repository)

    }

    // abstract handleRequest(req: Request, res: Response): Promise<void>;

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            console.log("getAll",)
            // console.log("---", this.repository)
            const data = await this.repository.findAll();
            res.status(200).json(data);
        } catch (error: any) {
            console.log("error", error);

            res.status(400).json({ msg: error.message });
        }
    }

    async post(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.repository.create(req.body);
            res.status(201).json(result);
        } catch (error: any) {
            res.status(400).json({ msg: error.message });
        }
    }
}