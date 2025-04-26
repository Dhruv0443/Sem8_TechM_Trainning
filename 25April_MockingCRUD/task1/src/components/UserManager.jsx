import { useEffect, useState } from "react";
export default function UserManager() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const fetchUsers = () => {
        fetch("/api/users")
            .then((res) => res.json())
            .then(setUsers)
            .catch(() => setError("Failed to load users"));
    };
    useEffect(fetchUsers, []);
    const addUser = () => 
        fetch('/api/users', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name}),
        })
        .then((res) => res.json())
        .then((newUser) => setUsers((prev) => [...prev, newUser]))
        .catch(() => setError("Failed to add user"));
    const deleteUser = (id) => 
        fetch(`/api/users/${id}`, { method: "DELETE" })
        .then(() => setUsers((prev) => prev.filter((u) => u.id !== id)))
        .catch(() => setError("Failed to delete user"));
    return (
        <div>
            <h2>User Manager</h2>
            {error && <p role="alert">{error}</p>}
            <input placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="name-input"
            />
            <button onClick={addUser} data-testid="add-button">Add User</button>
            <ul>
            {users.map((u) => (
                <li key={u.id}>
                {u.name}
                <button onClick={() => deleteUser(u.id)} data-testid={`delete-${u.id}`}>
                    Delete
                </button>
                </li>
            ))}
            </ul>
        </div>
    );
}