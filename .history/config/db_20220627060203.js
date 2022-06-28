require("dotenv").config();
const mongoose = require("mongoose");

connectDb = ()=>{
    //database connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL)



    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log(`Database connected`);
    }).catch(error =>{
        console.log(`Connection with the database Failed`);
    })
    
}


module.exports = connectDb;