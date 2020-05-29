const express = require('express')
require('dotenv/config')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('../api/auth')

// Middleware to enable CORS in expressjs 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

app.user((req, res, next) =>{
    res.status(503).send('Site down')
})

// Routes
app.use('/auth', authRoutes)


// db.connect
mongoose.connect( 'mongodb://localhost:27017' , { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('db connected')
})

// boot up server
app.listen(8000)