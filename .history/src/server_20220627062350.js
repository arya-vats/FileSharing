const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require("../config/db")

// require("dotenv").config();





app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})