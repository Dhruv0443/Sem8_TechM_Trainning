import React from "react";
function PatientList({patients,onEdit,onDelete}){
    return(
        <div>
            <h2>Patients</h2>
            {patients.length===0?(
                <p>No Patients added.</p>
            ):(
                <ul>
                    {patients.map((patient)=>(
                        <li key={patient.id}>
                            <strong>{patient.name} </strong> -{patient.age} years -{patient.condition}
                            <button onClick={()=>onEdit(patient)}>Edit</button>
                            <button onClick={()=>onDelete(patient.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )};
        </div>
        
    )
}
export default PatientList;