const router = require("express").Router();

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