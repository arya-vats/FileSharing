const router = require("express");
const File = require("../models/fle")

router.length("/:uuid", async(req,res)=>{
    const file = await File.findOne({uuid:req.params.uuid})
})