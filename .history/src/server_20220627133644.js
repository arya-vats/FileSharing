const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const DB = 'mongodb+srv://inShare:aryavats@cluster0.ywyf7ap.mongodb.net/inshare?retryWrites=true&w=majority'

mongoose.connect(DB).then(() =>{
    console.log(`connection successfull`);
}).catch((err)=>{
    console.log(`error no conn`);
})

// require("dotenv").config();





app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})