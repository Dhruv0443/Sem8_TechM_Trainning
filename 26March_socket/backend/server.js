// const WebSocket = require('ws');
// const wss =new WebSocket.Server({port:8080});

// wss.on('connection',(ws)=>{
//     console.log('Client connected');

//     //Send a welcome message to client
//     ws.send(JSON.stringify({message: "Welcome to the WebSocket server"}));

//     //handle incoming message from clients
//     ws.on('message',(message)=>{
//         console.log(`Received:${message}`);

//         //broacast the message to all connected clients
//         wss.clients.forEach(client=>{
//             if(client.readyState===WebSocket.OPEN){
//                 client.send(message);
//             }
//         });
//     });

//     //handle diconncetion
//     ws.on('close',()=>{
//         console.log('Client diconnected');
//     });
// });
// console.log('WebSocket server is running on ws://localhost:8080');

const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

let users = [];

io.on("connection", (socket) => {
  console.log("New client connected");

  // Send the list of users
  socket.on("getUsers", () => {
    socket.emit("users", users);
  });

  // Get a specific user by ID
  socket.on("getUser", (id) => {
    const user = users.find((u) => u.id === id);
    socket.emit("user", user);
  });

  // Add a new user
  socket.on("addUser", (user) => {
    user.id = Date.now().toString(); // Unique ID
    users.push(user);
    io.emit("users", users); // Broadcast updated users list
  });

  // Edit an existing user
  socket.on("editUser", (updatedUser) => {
    users = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    io.emit("users", users); // Broadcast updated users list
  });

  // Delete a user
  socket.on("deleteUser", (id) => {
    users = users.filter((user) => user.id !== id);
    io.emit("users", users); // Broadcast updated users list
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("Socket.IO server is running on http://localhost:5000");
});