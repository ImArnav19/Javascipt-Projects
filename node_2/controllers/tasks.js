const Contact = require('../models/contact')

const async_handler = require('express-async-handler');

const get_all_con = async_handler( async (req,res)=>{
    const contacts = await Contact.find({user_id:req.user_id});
    res.status(200).json(contacts)
});

const create_con = async_handler( async(req,res)=>{
    const {name,email,phone} = req.body;

    if(!name || !phone || !email){
        res.status(400);
        throw new Error("All fields required")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user_id,
    });
    res.status(201).json(contact);
});

const get_con = async_handler(async (req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not FOund!")
    }
    res.status(200).json(contact);
})

const up_con = async_handler(async (req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not FOund!")
    }

    if(contact.user_id.toString() !== req.user_id){
        req.status(403)
        throw new Error("Not defined")
    }

    const updated_con = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );


    res.status(200).json(updated_con);
})

const del_con = async_handler(async (req,res)=>{
    
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("No COntact FOund!");
    }
    await Contact.deleteOne({_id : req.params.id});

    if(contact.user_id.toString() !== req.user_id){
        req.status(403)
        throw new Error("Not defined")
    }


    
    res.status(200).json(contact);
})

module.exports = {get_all_con,create_con,get_con,up_con,del_con}