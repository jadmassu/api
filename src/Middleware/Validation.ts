import { Request, Response, NextFunction } from 'express';
import { ValidationError, validationResult } from 'express-validator';


const validationErrorsMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const formattedErrors: { msg: string; param: string; value: any }[] = [];
        errors.array().forEach((error: any) => {
            console.log("error", error)
            formattedErrors.push({ msg: error.msg, param: error.path, value: error.value });
        });

        res.status(400).json({ errors: formattedErrors });
    } else {
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







export default validationErrorsMiddleware;