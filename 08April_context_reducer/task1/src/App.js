import React, {useContext} from "react";
import MyContext from "./MyContext";
const Profile = ()=>{
  const {user,setUser} = useContext(MyContext);
  return(
    <div>
      <h2>User: {user? user.name: 'Guest'}</h2>
      <button onClick={()=>setUser({name:'Dhruv'})}>Login</button>
    </div>
  );
};
function App() {
  return (
    <div>
      <Profile/>
    </div>
  );
}

export default App;
