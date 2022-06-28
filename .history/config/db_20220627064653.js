require("dotenv").config();
const mongoose = require("mongoose");

connectDB = ()=>{
    //database connection

    mongoose.connect("mongodb+srv://localhost:3000/inShare:aryavats@cluster0.ywyf7ap.mongodb.net/inshare?retryWrites=true&w=majority")



    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log('Database connected');
    })
    
}


module.exports = connectDB;