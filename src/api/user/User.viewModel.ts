const { body } = require('express-validator');
const userSignUpViewModel = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const userSignInViewModel = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().isLength({ min: 6 }).withMessage('Password is required'),
]

module.exports = {
    userSignUpViewModel,
    userSignInViewModel
};