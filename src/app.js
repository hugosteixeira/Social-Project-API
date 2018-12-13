const express = require('express');
const cors = require('cors')

//Initializing app;
const app = express();
app.use(express.json())
app.use(cors());

//Rotas
const index = require('./routes/index');
const projectRoute = require('./routes/socialProjectRoute');
app.use('/', index);
app.use('/projects', projectRoute);

module.exports = app;
