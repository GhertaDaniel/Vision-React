import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import mongoose from 'mongoose';
import { UserController } from './controllers/UserController.js';
import multer from 'multer';
import cookieParser from 'cookie-parser';

import {
  handleValidationErrors,
  checkAuth,
  registerValidation,
  loginValidation,
} from './utils/index.js';

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => console.log('DB Error', err));

const app = express();
const corsConfig = { credentials: true, origin: true };

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.set('trust proxy', 1);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors(corsConfig));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  fs.readFile('sunglasses.json', (err, data) => {
    if (err) {
      throw err;
    }
    res.send(JSON.parse(data));
  });
});

app.get('/glasses/:id', (req, res) => {
  let id = parseInt(req.params.id);
  fs.readFile('sunglasses.json', (err, data) => {
    if (err) {
      throw err;
    }

    const product = JSON.parse(data);
    res.json(product[id - 1]);
  });
});

app.post('/upload', upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post('/register', registerValidation, handleValidationErrors, UserController.register);
app.post('/login', loginValidation, handleValidationErrors, UserController.login);
app.get('/profile', checkAuth, UserController.getMe);

app.listen(3001, () => {
  console.log(`Server is running on ${process.env.BACKEND_URL}`);
});
