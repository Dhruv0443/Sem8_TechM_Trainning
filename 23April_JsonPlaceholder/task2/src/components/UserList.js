import React from "react";

const UserList= ({data,loading,error}) =>{
    if(loading) return <p>Loading users...</p>
    if(error) return <p>Error:{error}</p>
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {data.map((user)=>(
                    <li key={user.id}>
                        <strong>{user.name}</strong>-{user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;