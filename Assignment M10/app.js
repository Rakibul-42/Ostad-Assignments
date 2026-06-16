const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const studentsRouter = require('./routes/students');
const worksRouter = require('./routes/works');

app.use('/students', studentsRouter);
app.use('/works', worksRouter);

module.exports = app;
