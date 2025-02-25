const express = require('express');
const db_config = require('./config/db');
const UserRoutes = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const cors = require('cors')
require('dotenv').config()
const app = express();
// --------------------
db_config; // connect to DataBase
// Middleware
app.use(express.json()) // To Handle With json
app.use(cookieParser()); // To Read The Cookie from REQ
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true 
}));
// RUN ROUTES
app.use(UserRoutes)



app.listen(process.env.PORT,() => {
    console.log("---- START LISTENING ----")
})