import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
const UserCRUD = () => {
  const [users, setUsers] = useState([]); // State to hold an array of user objects
  const [user, setUser] = useState({ name: '', email: '' }); // State for a single user
  const [editingUserId, setEditingUserId] = useState(null); // Track user being edited
  const API_URL = 'http://localhost:5000/users'; // Backend API URL
  // Fetch Users
  const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    const usersArray = Object.keys(response.data || {}).map((id) => ({
      id, // Include the ID in each user object
      ...response.data[id], // Spread the rest of the user details
    }));
    setUsers(usersArray);
  };
  // Add User
  const addUser = async () => {
    await axios.post(API_URL, { id: uuidv4(), ...user });
    setUser({ name: '', email: '' }); // Reset form
    fetchUsers();
  };
  // Update User
  const updateUser = async () => {
    const updatedData = {};
    if (user.name) updatedData.name = user.name;
    if (user.email) updatedData.email = user.email;
    await axios.put(`${API_URL}/${editingUserId}`, updatedData);
    setUser({ name: '', email: '' }); // Reset form
    setEditingUserId(null); // Reset editing state
    fetchUsers();
  };
  // Start Editing User
  const editUser = (id) => {
    const selectedUser = users.find((u) => u.id === id); // Find the user being edited
    setEditingUserId(id);
    setUser({
      name: selectedUser?.name || '',
      email: selectedUser?.email || '',
    }); // Pre-fill form with user details
  };
  // Delete User
  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">User Management</h1>
      <div className="p-4 mb-4">
        <h4 className="mb-3 text-center">
          {editingUserId ? 'Edit User' : 'Add User'}
        </h4>
        <div className="row">
          <div className="col-md-4 mb-3"></div>
          <div className="col-md-4 p-3 mb-3" style={{border:'1px solid grey'}}>
            <input
              type="text" className="form-control" value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Enter User Name"
            /><br/>
            <input
              type="email" className="form-control" value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter User Email"
            /><br/>
            <button className={'btn btn-success'}
            onClick={editingUserId ? updateUser : addUser}>
              {editingUserId ? 'Update User' : 'Add User'}
            </button>
          </div>
        </div>
      </div>
      <div >
        <h4 className="text-center mb-4">User List</h4>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  <button className="btn btn-warning btn-sm mx-2"
                  onClick={() => editUser(user.id)}>
                    Edit
                  </button>
                  <button className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(user.id)}>
                      Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserCRUD;
