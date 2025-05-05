import React ,{useRef} from "react";
function FocusInput(){
  const inputRef = useRef(null); //Create a refference to the input element 
  const handleFocus=()=>{
    inputRef.current.focus(); //Focus the input when button is clicked
  };
  return(
    <div style={{padding:'20px'}}>
      <h2>useRef - Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me"/>
      <br/>
      <br/>
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <FocusInput/>
    </div>
  );
}
export default App;
