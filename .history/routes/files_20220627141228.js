const router = require("express").Router();
const multer = require("multer");


let storage = multer.diskStorage({
    destination: (req,file,cb) =>cb(null, '') //agar error nahi h then null pass karenge cb  = callback
})

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