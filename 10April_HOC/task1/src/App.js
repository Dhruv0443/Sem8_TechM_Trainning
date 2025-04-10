import React,{useState} from "react";
import withLogger from "./component/withLogger";
import Hello from "./component/Hello";
const HellowithLogger = withLogger(Hello);
function App() {
  const [name,setName]= useState('Dhruv');
  return (
    <div>
      <HellowithLogger name={name}/>
      <button onClick={()=>setName(name === 'Dhruv'? 'Dev':'Dhruv')}>
        Toggle Name
      </button>
    </div>
  );
}
export default App;
