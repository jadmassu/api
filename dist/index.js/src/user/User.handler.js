"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUsers = exports.getUsers = void 0;
const User_model_1 = require("./User.model");
// const getUsers = async (req, res) => {
//     try {
//         // const data = await User.findAll({ raw: true });
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(400).json({ msg: error.message });
//     }
// };
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield User_model_1.User.findAll({ raw: true });
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
exports.getUsers = getUsers;
const postUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        // console.log("user is", req.app)
        res.status(200).json(user);
        // const data = await User.create(user)
    }
    catch (error) {
        res.status(400).json({ msg: error.message });
    }
});
exports.postUsers = postUsers;