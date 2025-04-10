import React,{useEffect} from "react";
import{useNavigate} from 'react-router-dom';
const withAuth =(WrappedComponent)=>{
    const AuthHOC =(props)=>{
        const navigate = useNavigate();
        useEffect(()=>{
            const isAuthenticated= !!localStorage.getItem('authToken');
            if(!isAuthenticated){
                navigate('/login');
            }
        },[navigate]);
        const isAuthenticated = !!localStorage.getItem("authToken");
        //Optionally show a loader while checking auth
        if(!isAuthenticated){
            return null; //or a spinner
        }
        return <WrappedComponent {...props}/>
    };
    return AuthHOC;
};
export default withAuth;