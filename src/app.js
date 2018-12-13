const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/socialProjectRoute');
app.use('/', index);
app.use('/projects', personRoute);
module.exports = app;
