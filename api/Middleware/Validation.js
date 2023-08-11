const { validationResult } = require('express-validator');

const validationErrorsMiddleware = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const formattedErrors = [];
        errors.array().forEach(error => {
            formattedErrors.push({ msg: error.msg, param: error.path, value: error.value });
        });
        // return formattedErrors;
        return res.status(400).json({ errors: formattedErrors });
    }

    next(); // Move on to the next middleware/route handler
};

module.exports = validationErrorsMiddleware;