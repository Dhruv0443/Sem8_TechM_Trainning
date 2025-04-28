const Restaurant = require('../models/Restaurant');
exports.getAll = async (req,res)=>{
    const data = await Restaurant.find();
    res.json(data);
};
exports.create = async (req,res)=>{
    const restaurant = new Restaurant(req.body);
    const saved = await restaurant.save();
    res.json(saved);
};
exports.update = async(req,res)=>{
    const updated = await Restaurant.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updated);
};
exports.delete = async(req,res)=>{
    await Restaurant.findByIdAndDelete(req.params.id);
    res.json({message:'Deleted'});
};
