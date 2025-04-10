import React,{useEffect} from "react";
const withLogger = (WrappedComponent)=>{
    return(props)=>{
        useEffect(()=>{
            console.log(`[withLogger] Mounted :${WrappedComponent.name}`);
            console.log(`[withLogger] initial props :props`);
            return()=>{
                console.log(`[withLogger] Unmounted: ${WrappedComponent.name}`);
            };
        },[]);
        useEffect(()=>{
            console.log(`[withLogger] Updated props:`,props);
        },[props]);
        return <WrappedComponent {...props}/>
    };
};
export default withLogger;