import React,{forwardRef} from "react";
const Child = forwardRef((props,ref)=>{
    return <input ref={ref}/>
});
export default Child;
