"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validationErrorsMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const formattedErrors = [];
        errors.array().forEach((error) => {
            console.log("error", error);
            formattedErrors.push({ msg: error.msg, param: error.path, value: error.value });
        });
        res.status(400).json({ errors: formattedErrors });
    }
    else {
        next(); // Move on to the next middleware/route handler
    }
};
// export default validationErrorsMiddleware;
// const validationErrorsMiddleware = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         const formattedErrors = [];
//         errors.array().forEach(error => {
//             formattedErrors.push({ msg: error.msg, param: error.path, value: error.value });
//         });
//         // return formattedErrors;
//         return res.status(400).json({ errors: formattedErrors });
//     }
//     next(); // Move on to the next middleware/route handler
// };
// module.exports = validationErrorsMiddleware;
exports.default = validationErrorsMiddleware;
