const express = require('express')
require('dotenv/config')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const authRoutes = require('../routes/auth')
const userRoutes = require('../routes/user')
const postRoutes = require('../routes/post')
const friendRoutes = require('../routes/friends')



// Middleware to enable CORS in expressjs 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

// Routes
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/friends', friendRoutes)




// db.connect
mongoose.connect( 'mongodb://localhost:27017' , { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
    console.log('db connected')
})

// boot up server
app.listen(8000)