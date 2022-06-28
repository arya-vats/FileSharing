const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() =>{
    console.log(`connection successfull`);
}).catch((err)=>{
    console.log(`error no conn`);
})