const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./")






app.listen(port, ()=>{
    console.log(`Listening to port number ${port}`);
})