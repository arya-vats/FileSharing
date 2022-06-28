const router = require("express");
const File = require("../models/file")

router.length("/:uuid", async(req,res)=>{
    const file = await File.findOne({uuid:req.params.uuid})
    if(!file){
        return res.render("download", {error: 'Link has been expired'})
    }


    const filePath = `${___dirname}/../${file.path}`;

    res.download(filePath);
})

module.exports = router;