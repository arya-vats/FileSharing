const router = require("express").Router();
const File = require("../models/file");

router.get("/:uuid", async(req,res)=>{//colon means this is a dynamic parameter which means it can change for every file
    try{
        const file = await File.findOne({uuid:req.params.uuid});
        if(!file){
            return res.render('download', {error:'Link has been Expired.'})
        }
    }catch(err){
        return res.render('download', {error:'Something went Wrong.'})
    }
    
})




module.exports = router;