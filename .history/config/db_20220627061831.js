require("dotenv").config();
const mongoose = require("mongoose");

connectDB = ()=>{
    //database connection

    mongoose.connect( "mongodb+srv://inShare:UAkb8ssjfq45IuBg@cluster0.ywyf7ap.mongodb.net/inShare?retryWrites=true&w=majority")



    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log('Database connected');
    }).catch((e) =>{
        console.log("error");
    })
    
}


module.exports = connectDB;