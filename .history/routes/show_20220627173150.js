const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", (req,res)=>{//colon means this is a dynamic parameter which means it can change for every file

    const file = await File
})




module.exports = router;