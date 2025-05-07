import React, { useRef } from "react";
import Child from "./Child";
const Parent =()=>{
    const childRef = useRef();
    const handleFocus =()=>{
        childRef.current.FocusInput(); //Calling child function from parent
    };
    return(
        <div>
            <Child ref={childRef}/>
            <button onClick={handleFocus}>Focus Input in Child</button>
        </div>
    );
};
export default Parent;