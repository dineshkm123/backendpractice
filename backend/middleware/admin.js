const  JWT_SECRET  = require("..");
const {Admin}=require("../db") 
const jwt=require("jsonwebtoken")
function adminMiddleware(req,res,next){
    // const username=req.headers.username;
    // const password =req.headers.password;
    //  Admin.findOne({
    //     username:username,
    //     password:password
    //  })
    //  .then(function (value){
    //     if(value){
    //         next();
    //     }
    //     else{
    //         res.status(403).json({
    //             msg:"Admin doesnot exists"
    //         })
    //     }
    //  })
     


     const token=req.headers.authorization;
     const words=token.split(" ");
     const jwttoken=words[1];
     const decodedvalue=jwt.verify(jwttoken,JWT_SECRET.JWT_SECRET,)
     if (decodedvalue.username){
        next();
     }
     else
     {
        res.status(403).json({
            msg:"u r not authenticated"
        })
     }


    }
module.exports ={adminMiddleware}