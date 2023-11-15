
import { User } from "./User.model";
// import { Request, Response } from 'express';
import UserRepository from "./User.repository";

import { BaseHandler } from "../BaseHandler";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";





// export const getUsers = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const data = await userRepository.findAll({ raw: true });
//         console.log("aa----", data);
//         res.status(200).json(data);
//     } catch (error: any) {
//         console.log(error);

//         res.status(400).json({ msg: error.message });
//     }
// };

// export const postUsers = async (req: Request, res: Response) => {
//     try {
//         const user = req.body
//         const data = await userRepository.create(user)
//         // console.log("user is", req.app)
//         res.status(200).json(data)
//         // const data = await User.create(user)
//     }
//     catch (error: any) {
//         res.status(400).json({ msg: error.message });
//     }
// }

export class UserHandler extends BaseHandler<User> {
    constructor() {
        super(new UserRepository());

    }
}