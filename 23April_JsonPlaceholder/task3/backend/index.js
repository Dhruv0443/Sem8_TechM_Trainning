const express = require('express');
const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase Admin (Server-Side)
const serviceAccount = require('./serviceAccountKey.json'); // Place your Firebase Admin SDK JSON file here
initializeApp({
  credential: require('firebase-admin').credential.cert(serviceAccount),
  databaseURL: "https://sem8firebase-default-rtdb.firebaseio.com" // Use your Firebase Realtime Database URL
});

const db = getDatabase();

// CRUD API Routes

// Create User
app.post('/users', (req, res) => {
  const { id, name } = req.body;
  db.ref('users/' + id).set({ name })
    .then(() => res.status(201).json({ id, name }))
    .catch((err) => res.status(500).json({ message: err.message }));
});

// Read All Users
app.get('/users', (req, res) => {
  db.ref('users').once('value')
    .then((snapshot) => {
      const users = snapshot.val();
      res.status(200).json(users);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

// Update User
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.ref('users/' + id).update({ name })
    .then(() => res.status(200).json({ id, name }))
    .catch((err) => res.status(500).json({ message: err.message }));
});

// Delete User
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.ref('users/' + id).remove()
    .then(() => res.status(200).json({ id }))
    .catch((err) => res.status(500).json({ message: err.message }));
});

// Start Server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
