import React from "react";
function UserRow({user, onEdit, onDelete}){
    return(
        <>
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td/>
                <button onClick={()=>onEdit(user)}>Edit</button>
                <button onClick={()=>onDelete(user.id)}>Delete</button>
            </tr>
        </>
    );
}
export default UserRow;