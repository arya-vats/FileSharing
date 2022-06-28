require("dotenv").config();
const mongoose = require("mongoose");

connectDB = ()=>{
    //database connection

    mongoose.connect("process.env.MONGO_CONNECTION_URL")



    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log('Database connected');
    })
    
}


module.exports = connectDB;