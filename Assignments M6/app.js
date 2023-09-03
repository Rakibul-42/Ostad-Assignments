const express = require('express');
const app = express();
const apiRouter = require('./src/Routes/api');
const port = 3000;


app.use('/src/Routes/api', apiRouter);
module.exports = app;
