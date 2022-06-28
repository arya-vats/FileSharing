const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("../config/db")






app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})