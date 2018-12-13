const app = require('../src/app');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

const port = 3000;

//Initializing mongo
mongoose.connect('mongodb://localhost:27017/socialProjects', {useNewUrlParser : true})


app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})