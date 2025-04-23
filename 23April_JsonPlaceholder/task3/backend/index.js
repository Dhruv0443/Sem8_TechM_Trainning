const express = require('express');
const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
// Initialize Firebase Admin
const serviceAccount = require('./serviceAccountKey.json'); // Place Firebase Admin SDK JSON here
initializeApp({
  credential: require('firebase-admin').credential.cert(serviceAccount),
  databaseURL: "https://sem8firebase-default-rtdb.firebaseio.com" // Replace with your Firebase Database URL
});
const db = getDatabase();
// Create User
app.post('/users', (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ message: 'ID, Name, and Email are required' });
  }
  db.ref('users/' + id).set({ name, email })
    .then(() => res.status(201).json({ id, name, email }))
    .catch((err) => res.status(500).json({ message: err.message }));
});
// Read All Users
app.get('/users', (req, res) => {
  db.ref('users').once('value')
    .then((snapshot) => {
      const users = snapshot.val() || {};
      res.status(200).json(users);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});
// Update User
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and Email are required' });
  }
  db.ref('users/' + id).update({ name, email })
    .then(() => res.status(200).json({ id, name, email }))
    .catch((err) => res.status(500).json({ message: err.message }));
});
// Delete User
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  db.ref('users/' + id).remove()
    .then(() => res.status(200).json({ id }))
    .catch((err) => res.status(500).json({ message: err.message }));
});
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
