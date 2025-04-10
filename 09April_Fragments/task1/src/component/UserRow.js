import React from 'react';
function UserRow({user}){
    return(
        <>
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
        </>
    );
}
export default UserRow;