import React from 'react';
import UserRow from './UserRow';
const users = [
    { id: 1, name: 'John',  email: 'john@example.com' },
    { id: 2, name: 'Dev',  email: 'dev@gmail.com' },
];
function UserList() {
    return (
        <table border="1" style={{ width: '50%', margin: 'auto' }}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <UserRow key={user.id} user={user} />
                ))}
            </tbody>
        </table>
    );
}
export default UserList;