const dotenv = require("dotenv");
dotenv.config({path: "../src/config.env"});
const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const File = require("../models/file");
const {v4: uuid4} = require("uuid");

let storage = multer.diskStorage({
    destination: (req,file,cb) =>cb(null, '../uploads/'), //agar error nahi h then null pass karenge cb  = callback

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
  
    


    //store file
    upload(req,res,async(err)=>{
            //validate req
            if(!req.file){
                return res.json({error : 'All fields are required.'})
            }
       
            if(err){
            return res.status(500).send({error:err.message})
            }
        //Store into database
            const file = new File({
            filename:req.file.filename,
            uuid:uuid4(),
            path:req.file.path,
            size:req.file.size
        })

        const response = await file.save();
        return res.json({file: `${process.env.APP_BASE_URL}/files/${response.uuid}`});
    })


 



    ///Response ->link

});

router.post('/send' ,async(req,res)=>{
    
   

    const {uuid, emailTo, emailFrom} = req.body //object destructuring
    //validate request
if(!uuid || !emailTo || !emailFrom ){
    return res.status(422).send({error:'All fields are required'})
}
//Get data from database
const file = await File.findOne({uuid:uuid});
if(file.sender){
    return res.status(422).send({error:'Email already sent'});
}

    file.sender = emailFrom;
    file.receiver = emailTo;
    const response = await file.save();

    //Send email;
    const sendMail = require("../src/services/emailService");
    sendMail({
        from: emailFrom,
        to: emailTo,
        subject:'inShare file sharing made easy',
        text: `${emailFrom} shared a file with you `,
        html: require('../src/services/emailTemplate')({
            emailFrom:emailFrom,
            downloadLink: `${process.env.APP_BASE_URL}/files/4${file.uuid}`,
            size: parseInt(file.size/1000) + 'KB',
            expires: '24 hours',
        })
    });
});

module.exports = router;