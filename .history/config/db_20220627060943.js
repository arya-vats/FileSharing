require("dotenv").config();
const mongoose = require("mongoose");

connectDb = ()=>{
    //database connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL).then(()=>{
        console.log(`Connection successful with the database`);
    }).catch((e)=>{
        console.log(`error`);
    })



    // const connection = mongoose.connection;

    // connection.once('open', ()=>{
    //     console.log('Database connected');
    // }).catch((error) =>{
    //     console.log("error");
    // })
    
}


// module.exports = connectDb;