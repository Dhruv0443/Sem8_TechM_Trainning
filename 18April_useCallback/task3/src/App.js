import { useCallback, useMemo, useState } from "react";
import {v4 as uuidv4} from 'uuid';
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
function App() {
  const[users,setUsers] = useState([]);
  const addUser = useCallback((user)=>{
    setUsers((prev)=>[...prev,{...user,id:uuidv4()}]);
  },[]);
  const deleteUser = useCallback((id)=>{
    setUsers((prev)=>prev.filter((user)=>user.id!==id));
  },[]);
  const sortedUsers = useMemo(()=>{
    return [...users].sort((a,b)=>a.name.localeCompare(b.name));
  },[users]);
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">User CRUD with Memoization</h1>
      <UserForm onAddUser={addUser}/>
      <UserList users={sortedUsers} onDelete={deleteUser}/>
    </div>
  );
};
export default App;
