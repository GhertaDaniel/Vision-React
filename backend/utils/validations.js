import { body } from 'express-validator';

export const registerValidation = [
  body('name', 'Min 3 symbols').isLength({ min: 3 }),
  body('email', 'Wrong format').isEmail(),
  body('phone')
    .matches(/^[0-9]{9}$/)
    .withMessage('Phone number must be a 9-digit number'),
  body('password', 'Min 5 symbols').isLength({ min: 5 }),
];

export const loginValidation = [
  body('email', 'Wrong format').isEmail(),
  body('password', 'Min 5 symbols').isLength({ min: 5 }),
];
