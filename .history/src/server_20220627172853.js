const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("../config/db");
const router = require("express").Router();


//Routes

app.use('/api/files',require('../routes/files'));

app.use("/files",require("../routes/show"));



app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})