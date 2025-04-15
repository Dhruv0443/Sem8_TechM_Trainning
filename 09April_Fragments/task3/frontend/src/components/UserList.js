import React, {useEffect,useState} from "react";
import UserRow from "./UserRow";
import UserForm from "./UserForm";
import { getUsers,addUser,updateUser,deleteUser } from "../services/userService";
function UserList(){
    const[user,setUsers]=useState([]);
    const[selectedUser,setSelectedUser]=useState(null);
    const fetchUser=async()=>{
        const res = await getUsers();
        setUsers(res.data);
    };
    useEffect(()=>{
        fetchUser();
    },[]);
    const handleAddOrUpdate =async (user)=>{
        if(user.id){
            await updateUser(user.id,user);
        }else{
            await addUser(user);
        }
        setSelectedUser(null);
        fetchUser();
    };
    const handleDelete =async(id)=>{
        await deleteUser(id);
        fetchUser();
    };
    const handleEdit =(user)=>{
        setSelectedUser(user);
    };
    return(
        <div>
            <UserForm onSubmit={handleAddOrUpdate} selectedUser={selectedUser}/>
            <table border="1" style={{marginTop:'20px'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>{
                        <UserRow
                        key={user.id}
                        user={user}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        />
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default UserList;