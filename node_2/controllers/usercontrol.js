const async_handler = require('express-async-handler');
const User = require('../models/user_models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const get_reg = async_handler(async (req,res)=>{

    const {username, email,password} = req.body;

    if(!username || !email || !password){
        res.status(400)
        throw new Error('PLease enter The Details');
    }
    const check_email = await User.findOne({email});
    if(check_email){
        res.status(400)
        throw new Error('Already Taken');

    }

    const hashpass = await bcrypt.hash(password,10);
    
    const user = await User.create({
        username,
        email,
        password:hashpass,
    });
    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({_id:user.id,email:user.email})
    }
    else{
        res.status(400);
        throw new Error("USer data not stored");

    }
});

const get_log = async_handler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(401)
        throw new Error("Please Enter Something");
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const access_token = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },

        },
        process.env.ACCESS_TOKEN,
        
        {expiresIn:"1m"}
        
        );
        
        res.status(200).json({access_token});
    }
    else{
        res.status(401)
        throw new Error("Email or Pass Not Valid!");

    }
    
});

const get_all = async_handler(async (req,res)=>{
    res.status(200).json(req.user);
});

module.exports = {get_reg,get_log,get_all};