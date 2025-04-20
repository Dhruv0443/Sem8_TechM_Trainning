import React from "react";
const UserList = React.memo(({users,onDelete})=>{
    return(
        <ul className="list-disc pl-5 space-y-2">
            {users.map((user ,index)=>(
                <li key={index} className="flex justify-between items-center">
                    <span>{user}</span>
                    <button onClick={()=>onDelete(index)} className="text-red-500 hover:underline"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
});
export default UserList;