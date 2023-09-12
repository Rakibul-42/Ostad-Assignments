const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const expressMongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const validator = require('validator');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');

dotenv.config({path:'./config.env'});
const app = express();
const apiRouter = require('./src/Routes/api');

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressMongoSanitize());
app.use(hpp());
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use('/api', limiter);

app.use('/api', apiRouter);

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = app;
