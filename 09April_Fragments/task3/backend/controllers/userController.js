const { model } = require('mongoose');
const User = require('../models/User');
exports.getUsers = async(req,res)=>{
    const users = await User.find();
    res.json(users);
};
exports.createUser = async(req,res)=>{
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};
exports.updateUser = async(req,res)=>{
    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updateUser);
};
exports.deleteUser = async (req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted '})
}; 