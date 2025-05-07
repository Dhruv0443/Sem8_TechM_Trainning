const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  condition: String
});

const Patient = mongoose.model('Patient', patientSchema);

// Create
router.post('/', async (req, res) => {
  const patient = new Patient(req.body);
  await patient.save();
  res.json(patient);
});

// Read
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Update
// Update Patient
router.put('/:id', async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).send("Patient not found");
  res.json(updated);
});

// Delete Patient
router.delete('/:id', async (req, res) => {
  const result = await Patient.findByIdAndDelete(req.params.id);
  if (!result) return res.status(404).send("Patient not found");
  res.json({ success: true });
});

module.exports = { router, Patient };