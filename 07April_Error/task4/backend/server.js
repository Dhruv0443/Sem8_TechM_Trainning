const express = require("express");
const cors =require("cors");
const app = express();
app.use(cors({
    origin:"http://localhost:3000"
}));
const fs = require("fs");
app.use(express.json());
app.post("/log-error",(req,res)=>{
    const log =`[${new Date().toISOString()}]${JSON.stringify(req.body)}\n`;
    fs.appendFile("error-log.txt",log,err=>{
        if(err){
            console.error("Logging failed",err);
            return res.status(500).send("Failed to log");
        }
        res.send("Logged");
    });
});
app.listen(5000,()=>{
    console.log("Error log server running on http://localhost:5000");
});