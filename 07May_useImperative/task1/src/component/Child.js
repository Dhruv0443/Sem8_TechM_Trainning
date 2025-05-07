import React, { forwardRef, useImperativeHandle, useRef } from "react";
const Child = forwardRef((props,ref)=>{
    const inputRef=useRef();
    //Function to be called by parent
    const FocusInput = ()=>{
        inputRef.current.focus();
    };
    //Expose the focusInput function to the parent
    useImperativeHandle(ref,()=>({
        FocusInput
    }));
    return(
        <div>

            <input ref={inputRef} type="text" placeholder="Type something...."/>
        </div>
    );
});
export default Child;