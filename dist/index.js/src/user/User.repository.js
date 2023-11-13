"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_model_1 = require("./User.model");
const BaseRepository_1 = require("../BaseRepository");
class UserRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(User_model_1.User);
    }
}
exports.UserRepository = UserRepository;
exports.default = UserRepository;
