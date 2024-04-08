import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/User.js';

export const register = async (req, res) => {
  try {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(400).json({ message: 'passwords do not match' });
    }

    const doc = new UserModel({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    const user = await doc.save();

    // const token = jwt.sign(
    //   {
    //     _id: user._id,
    //   },
    //   process.env.ACCESS_TOKEN_SECRET,
    //   {
    //     expiresIn: '30d',
    //   },
    // );
    const { password, confirmPassword, ...userData } = user._doc;

    res.json({ ...userData });
  } catch (err) {
    console.log('register Err', err);
    res.status(500).json({
      message: 'Register error',
    });
  }
};

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }
    const isValidPass = await bcrypt.compare(req.body.password, user._doc.password);
    if (!isValidPass) {
      return res.status(404).json({
        message: 'Incorrect login or password',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '30d',
      },
    );

    const { password, ...userData } = user._doc;

    // res.json({ ...userData, token });
    res
      .cookie('login-token', token, {
        maxAge: 4 * 60 * 60 * 1000, // 1h
      })
      .json({ ...userData });
  } catch (err) {
    console.log('Failed to login ', err);
    res.status(500).json({
      message: 'Failed to login',
    });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const { password, ...userData } = user._doc;
    res.json(userData);
  } catch (err) {
    console.log('Get me Error', err);
    res.status(500).json({
      message: 'No Access',
    });
  }
};

export * as UserController from './UserController.js';
