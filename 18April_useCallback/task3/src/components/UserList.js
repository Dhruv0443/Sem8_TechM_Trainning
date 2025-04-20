import React from "react";
const UserList = ({ users, onDelete }) => {
  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <UserListItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};
const UserListItem = React.memo(({user,onDelete})=>{
    console.log('Rendering:',user.name);
    return(
        <li className="flex justify-between items-center border p-2 rounded">
            <span>{user.name} </span>
            <button className="btn btn-danger text-white px-2 py-1" onClick={()=>onDelete(user.id)}>
                Delete
            </button>
        </li>
    );
});
export default React.memo(UserList);