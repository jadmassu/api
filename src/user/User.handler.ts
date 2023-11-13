
import { User } from "./User.model";
import { Request, Response } from 'express';
// const getUsers = async (req, res) => {
//     try {
//         // const data = await User.findAll({ raw: true });
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// };



export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: User[] = await User.findAll({ raw: true });
        res.status(200).json(data);
    } catch (error: any) {
        res.status(400).json({ msg: error.message });
    }
};

export const postUsers = async (req: Request, res: Response) => {
    try {
        const user = req.body
        // console.log("user is", req.app)
        res.status(200).json(user)
        // const data = await User.create(user)
    }
    catch (error: any) {
        res.status(400).json({ msg: error.message });
    }
}

