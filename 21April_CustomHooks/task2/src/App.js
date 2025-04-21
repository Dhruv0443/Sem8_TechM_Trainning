import React from "react";
import useFetch from "./hooks/useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const {data:patients, loading} = useFetch('http://localhost:3001/patients',10000);
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Hospital Patients Records</h1>
      {loading?(
        <div className="alert alert-info">Loading Patient data...</div>
      ):(
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Condition</th>
              <th>Room</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient=>(
              <tr key={patient.id}>
                <td>{patient.id}</td>
                <td>{patient.name}</td>
                <td>{patient.condition}</td>
                <td>{patient.room}</td>
                <td>{patient.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default App;
