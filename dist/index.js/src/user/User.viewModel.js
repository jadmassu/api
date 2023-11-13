"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignInViewModel = exports.userSignUpViewModel = void 0;
const express_validator_1 = require("express-validator");
exports.userSignUpViewModel = [
    (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
exports.userSignInViewModel = [
    (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('password').notEmpty().isLength({ min: 6 }).withMessage('Password is required'),
];
// module.exports = {
//     userSignUpViewModel,
//     userSignInViewModel
// };
