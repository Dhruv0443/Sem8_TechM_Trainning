import React, { useEffect, useState } from 'react';
import { addData, readData, deleteData, getSingleData } from './firebase/firebase';

function App() {
  const [form, setForm] = useState({ id: '',name: '', age: ''});
  const [info, setInfo] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await readData();
    setInfo(data || {});
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    await addData(form.id,form.name, form.age);
    setMessage('Added');
    setForm({ id: '',name: '', age: '' });
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteData(id);
    setMessage('Deleted');
    fetchData();
  };

  const handleUpdate = async (id) => {
    const data = await getSingleData(id);
    setForm(data);
  };

  return (
    <div>
      <span>{message}</span>
      <h1 >Names</h1>
      <input type="text" id="id" placeholder="Enter ID" value={form.id} onChange={handleChange} />
      <input type="text" id="name" placeholder="Enter name" value={form.name} onChange={handleChange} />
      <input type="text" id="age" placeholder="Enter age" value={form.age} onChange={handleChange} />
      
      <button onClick={handleSubmit}>Add Data</button> <br/> <br/> 

      <table border={2} style={{padding:'10px'}}>
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Number</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(info).map(([key, val]) => (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.number}</td>
              <td>
                <button onClick={() => handleDelete(val.number)}>Delete</button>
                <button onClick={() => handleUpdate(val.number)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;