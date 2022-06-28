const dotenv = require("dotenv");
dotenv.config({path: "./config.env"});
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("../config/db");
const router = require("express").Router();
const hbs = require("hbs");
const static_path = path.join(__dirname, "../public")

//Routes

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");

const staticPath = __dirname("")


app.use('/api/files',require('../routes/files'));

app.use("/files",require("../routes/show"));



app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})