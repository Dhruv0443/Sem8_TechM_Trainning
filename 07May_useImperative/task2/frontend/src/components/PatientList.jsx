const PatientList = ({ patients, onEdit, onDelete }) => (
  <ul>
    {patients.map(p => (
      <li key={p._id}>
        {p.name} ({p.age})
        <button onClick={() => onEdit(p)}>Edit</button>
        <button onClick={() => onDelete(p._id)}>Delete</button> {/* Change 'id' to '_id' */}
      </li>
    ))}
  </ul>
);

export default PatientList;