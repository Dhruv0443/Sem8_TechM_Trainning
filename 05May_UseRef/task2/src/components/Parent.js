import React, { useEffect, useRef } from "react";
import Child from "./Child";
function Parent(){
    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus();//focuses the input in child
    },[]);
    return <Child ref={inputRef}/>
}
export default Parent;