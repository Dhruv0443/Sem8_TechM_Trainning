import { useCallback, useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users,setUsers] = useState(["dev","dhruv"]);
  const addUser = useCallback((name)=>{
    setUsers((prevUsers)=>[...prevUsers,name])
  },[]);
  const deleteUser = useCallback((index)=>{
    setUsers((prevUsers)=>prevUsers.filter((_,i)=>i!==index))
  },[]);
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className='text-2xl font-bold mb-4'>User Manager</h1>
      <AddUserForm onAddUser={addUser}/>
      <UserList users={users} onDeleteUser = {deleteUser}/>
    </div>
  );
}
export default App;