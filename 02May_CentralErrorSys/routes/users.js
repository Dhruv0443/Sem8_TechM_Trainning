const express = require('express');
const router =express.Router();
const validateEmail = require('../utils/validateEmail');
const auth = require('../middleware/auth');
let users =[];//Dummy DB
router.post('/',auth,(req,res,next)=>{
    try{
        const {name,email} = req.body;
        if(!name || !email || !validateEmail(email)){
            const error = new Error('Invalid name or email');
            error.status = 400;
            throw error;
        }
        const user = {id:users.length+1,name,email};
        users.push(user);
        res.status(201).json(user);
    }catch(err){
        next(err);//send error to middleware
    }
});
router.get('/',(req,res)=>{
    res.json(users);
});
module.exports =router;
