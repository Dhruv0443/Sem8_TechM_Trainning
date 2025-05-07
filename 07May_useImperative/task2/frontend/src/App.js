import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';

const socket = io('http://localhost:4000');

function App() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);
  const formRef = useRef();

  const fetchPatients = async () => {
    const res = await axios.get("http://localhost:4000/api/patients");
    setPatients(res.data);
  };

  useEffect(() => {
    fetchPatients();
    // Listen for real-time updates
    socket.on("refresh-patients", fetchPatients);

    return () => {
      socket.off("refresh-patients");
    };
  }, []);

  const savePatient = async (patient) => {
    const patientData = { name: patient.name, age: patient.age };
    if (selected && selected._id) {
        await axios.put(`http://localhost:4000/api/patients/${selected._id}`, patientData);
    } else {
        await axios.post('http://localhost:4000/api/patients', patientData);
    }
    formRef.current.reset();
    setSelected(null);
    socket.emit("patient-updated");
};


  const deletePatient = async (_id) => { // Use _id instead of id
    await axios.delete(`http://localhost:4000/api/patients/${_id}`);
    socket.emit("patient-updated");
  };


  return (
    <div>
      <h2>Patient Management</h2>
      <PatientForm
        ref={formRef}
        onSave={savePatient}
        selected={selected}
        onPatientChange={() => socket.emit("patient-updated")}
      />

      <PatientList
        patients={patients}
        onEdit={setSelected}
        onDelete={deletePatient}
      />
    </div>
  );
}

export default App;