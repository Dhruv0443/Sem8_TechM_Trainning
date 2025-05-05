import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
function App() {
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const addPatient = (patient) => {
    setPatients([...patients, { ...patient, id: Date.now() }]);
  };
  const updatePatient = (updatedPatient) => {
    setPatients(patients.map((p) => (p.id === updatedPatient.id ? updatedPatient : p)));
    setEditingPatient(null);
  };
  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };
  const editPatient = (patient) => {
    setEditingPatient(patient);
  };
  return (
    <div className="container" style={{ padding: '20px' }}>
      <h1>Patient Management</h1>
      <PatientForm
        onSubmit={editingPatient ? updatePatient : addPatient}
        editingPatient={editingPatient}
      />
      <PatientList patients={patients} onEdit={editPatient} onDelete={deletePatient} />
    </div>
  );
}
export default App;

