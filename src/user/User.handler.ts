
import { User } from "./User.model";
import { Request, Response } from 'express';
import UserRepository from "./User.repository";
// import UserRepository from "./User.repository";
// const getUsers = async (req, res) => {
//     try {
//         // const data = await User.findAll({ raw: true });
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// };
const userRepository = new UserRepository();


export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await userRepository.findAll({ raw: true });
        console.log("aa----", data);
        res.status(200).json(data);
    } catch (error: any) {
        console.log(error);

        res.status(400).json({ msg: error.message });
    }
};

export const postUsers = async (req: Request, res: Response) => {
    try {
        const user = req.body
        const data = await userRepository.create(user)
        // console.log("user is", req.app)
        res.status(200).json(data)
        // const data = await User.create(user)
    }
    catch (error: any) {
        res.status(400).json({ msg: error.message });
    }
}

