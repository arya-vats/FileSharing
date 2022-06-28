const router = require("express").Router();
const multer = require("multer");

router.post('/' ,(req,res)=>{
    //validate req
    if(!req.file){
        return res.json({error : 'All fields are required.'})
    }


    //store file




    //Store into Database



    ///Response ->link

});

module.exports = router;