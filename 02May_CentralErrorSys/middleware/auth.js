module.exports=(req,res,next)=>{
    const token = req.headers['authorization']?.split(' ')[1];
    if(!token || token!=='secrettoken'){
        return res.status(401).json({error:'Unauthorized'});
    }
    next();
};
