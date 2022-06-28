const mongoose = require("mongoose");
require("dotenv").config();
connectDb = ()=>{
    //database connection

    mongoose.connect(url)



    const connection = mongoose.connection;

    connection.once('open', ()=>{
        console.log(`Database connected`);
    }).catch(error =>{
        console.log(`Connection with the database Failed`);
    })
    
}


module.exports = connectDb;