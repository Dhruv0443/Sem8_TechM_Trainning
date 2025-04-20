import React, { useCallback, useMemo, useState } from "react";
import Child from "./components/Child";
function App() {
  const[count,setCount] = useState(0);
  const[other,setOther] = useState(0);
  const increment = useCallback(()=>{
    setCount((prev)=>prev+1);
  },[]);
  const decrement = useCallback(()=>{
    setCount((prev)=>prev-1);
  },[]);
  const doubleCount = useMemo(()=>{
    console.log('Calculating double count...');
    return count*2;
  },[count]);
  return (
    <div style={{padding:'2rem', fontFamily:'Arial'}}>
      <h1>useCallback + useMemo + React.Memo Demo</h1>
      <p>Count:{count}</p>
      <p>Double Count (useMemo) :{doubleCount}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{marginLeft:'10px'}}>Decrement</button>
      <hr/>
      <button onClick={()=>setOther((prev)=>prev+1)}>
        Change Unrelated State:{other}
      </button>
      <Child count={count} onIncrement={increment}/>
    </div>
  );
};

export default App;