const router = require("express").Router();
const multer = require("multer");
const path = require("path");

let storage = multer.diskStorage({
    destination: (req,file,cb) =>cb(null, 'uploads/'), //agar error nahi h then null pass karenge cb  = callback

    filename:(req,file,cb) =>{
        const uniqueName = `${Date.now()}=${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;//ye basically 1billion ka ek unique name generate krega jisse file name uniquely save ho
        cb(null, uniqueName)
    }
})

let upload = multer({
    storage:storage,
    limits:{fileSize:1000000 * 100}, //100mb ki file
}).single('myfile'); //jo user submit karega file ka naam

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