const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("../config/db");
const router = require("express").Router();


//Routes

app.use('/api/files',require('../routes/files'));




app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})