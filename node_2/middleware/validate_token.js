const async_handler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validate_token = async_handler( async (req,res,next)=>{
    let token;
    let authHeader = req.headers.authorization;
    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
            if(err){
                res.status(403);
                throw new Error("User not Authorized")
            }
            else{
                req.user = decoded.user;
                next();

            }
        });
        if(!token){
            res.status(403);
            throw new Error("Token Missing!");
        }
    }
    
})

module.exports = validate_token;