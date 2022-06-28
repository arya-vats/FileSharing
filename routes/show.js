const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", async(req,res)=>{//colon means this is a dynamic parameter which means it can change for every file
    try{
        const file = await File.findOne({uuid:req.params.uuid});
        if(!file){
            return res.render('download', {error:'Link has been Expired.'})
        }

        return res.render("download", {
            uuid: file.uuid,
            fileName : file.filename,
            fileSize: file.fileSize,
            downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        })
    }catch(err){
        return res.render('download', {error:'Something went Wrong.'})
    }
    
})




module.exports = router;