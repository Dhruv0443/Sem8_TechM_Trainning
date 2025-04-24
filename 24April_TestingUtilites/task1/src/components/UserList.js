import React, { useEffect, useState } from "react";
export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error("Fetch error:", err);
            setLoading(false);
        });
    }, []);
    if (loading) return <div>Loading...</div>;
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id} data-testid='user-item'>
                    {user.name}
                </li>
            ))}
        </ul>
    );
}
