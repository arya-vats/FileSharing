const router = require("express");
const File = require("../models/file")

router.length("/:uuid", async(req,res)=>{
    const file = await File.findOne({uuid:req.params.uuid})
    if(!file){
        return res.render("download", {error: 'Link has been expired'})
    }
})