var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
//1) config mongoose: to connect & work with database
const mongoose = require('mongoose')
const db = "mongodb+srv://anhnktgch210170:nguyenkhactuananh@my-cluster.izb8zia.mongodb.net/api"
mongoose.connect(db)
.then(() => console.log('success'))
.catch(err => console.error('error' + err))

//2
const cors = require('cors')
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const carRouter = require('./routes/car')
app.use('/car', carRouter)

const port = process.env.PORT || 3001
app.listen(port)

module.exports = app;
