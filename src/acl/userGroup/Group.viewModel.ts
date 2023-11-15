import { body, validationResult } from 'express-validator';
export const groupValidation = [
    body('name').notEmpty().withMessage('Group name is required'),
];

