const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");
const { Socket } = require("dgram");

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000", //React Frontend
        methods:["GET","POST"],
    },
});

let patients =[];
io.on("connection",(socket)=>{
    console.log("New client connected: ",socket.id);
    //send initial data
    socket.emit("updatePatients",patients);
    //Handle adding a new patient
    socket.on("addPatient",(patient)=>{
        patients.push(patient);
        io.emit("updatePatients",patients); //Broadcast update
    });
    socket.on("disconnect",()=>{
        console.log("Client dissconnected: ", socket.id);
    });
});
server.listen(5000,()=>{
    console.log("server running on http://localhost:5000");
});
