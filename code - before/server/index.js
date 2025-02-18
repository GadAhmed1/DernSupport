require('dotenv').config();
const express = require('express');
const path = require('node:path');
const cookieParser = require('cookie-parser')
const PageRouter = require('./routes/page')
const DB_CONNECT = require('./config/db')
const UserRouter = require('./routes/user');
const app = express();
// CONNECT TO DB
DB_CONNECT;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// MiddleWare To Read Views
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
// MiddleWare to Read CSS&&Imahes
app.use(express.static(path.join(__dirname,'views/css')))
app.use(express.static(path.join(__dirname,'views/images')))
// MiddleWare To Read HTML
app.use('/',PageRouter)
// MiddleWare for users
app.use('/api/users',UserRouter)





const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`START LISTENING ON PORT ${PORT}`)
})