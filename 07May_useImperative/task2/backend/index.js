const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const { Server } = require('socket.io');
const { router, Patient } = require('./patient');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "http://localhost:3800"], 
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});


app.use(cors());
app.use(express.json());
app.use('/api/patients', router);

// WebSocket events
io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
    socket.on('patient-updated', () => {
        io.emit('refresh-patients');
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

mongoose.connect('mongodb://localhost:27017/patientsCrud')
    .then(() => {
        server.listen(4000, () => {
            console.log('Server running on http://localhost:4000');
        });
    });