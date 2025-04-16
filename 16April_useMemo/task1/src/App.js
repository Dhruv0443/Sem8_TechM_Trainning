import { useMemo, useState } from "react";
import UserList from "./components/UserList";

export default function App() {
  const[search, setSearch]=useState('');
  const[counter, setCounter]=useState(0);
  const allUsers =[
    {id:1, name:'Jai'},
    {id:2, name:'Dev'},
    {id:3, name:'Ram'},
    {id:4, name:'Rajeev'},
    {id:5, name:'Roy'},
  ];
  //Memorize the filtered users usingMemo
  const filteredUsers = useMemo(()=>{
    console.log('Filtering users...');
    return allUsers.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  },[search]);
  return (
    <div>
      <h2>Search Users</h2>
      <input
      type="text"
      value={search}
      onChange={e=> setSearch(e.target.value)}
      placeholder="Search by name"
      />
      <UserList users ={filteredUsers}/>
      <hr/>
      <button onClick={()=> setCounter(c=>c+1)}>
      Increment Counter ({counter})
      </button>
    </div>
  );
}

