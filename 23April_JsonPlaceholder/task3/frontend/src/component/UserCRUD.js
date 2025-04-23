import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCRUD = () => {
  const [users, setUsers] = useState({});
  const [newUserId, setNewUserId] = useState('');
  const [newUserName, setNewUserName] = useState('');

  const API_URL = 'http://localhost:5000/users'; // Backend API URL

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data || {});
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Add User
  const addUser = async () => {
    try {
      if (newUserId.trim() && newUserName.trim()) {
        await axios.post(API_URL, { id: newUserId, name: newUserName });
        setNewUserId('');
        setNewUserName('');
        fetchUsers();
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Update User
  const updateUser = async (id) => {
    try {
      const newName = prompt('Enter new name:');
      if (newName.trim()) {
        await axios.put(`${API_URL}/${id}`, { name: newName });
        fetchUsers();
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Realtime Database CRUD</h1>
      <input
        type="text"
        value={newUserId}
        onChange={(e) => setNewUserId(e.target.value)}
        placeholder="Enter User ID"
      />
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter User Name"
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {Object.keys(users).map((id) => (
          <li key={id}>
            {id}: {users[id].name}{' '}
            <button onClick={() => updateUser(id)}>Edit</button>
            <button onClick={() => deleteUser(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserCRUD;
