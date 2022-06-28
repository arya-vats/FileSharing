require("dotenv").config();
const mongoose = require("mongoose");

connectDb = ()=>{
    //database connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL)


    mongoose.connection
    .once('open', function () {
      console.log('MongoDB running');
    })
    .on('error', function (err) {
      console.log(err);
    });
    
}


module.exports = connectDb;