import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
const Login =()=>{
    const[email,setEmail]=useState('');
    const navigate = useNavigate();
    const handleLogin =()=>{
        //fake login logic
        localStorage.setItem("authToken",'fake-token');
        navigate('/dashboard');
    };
    return(
        <div className="p-4 max-w-sm mx-auto">
            <h2 className="text-lg font-bold mb-2">Login</h2>
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}
            className="border p-2 w-full mb-2"/>
            <button onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded">
                Login
            </button>
        </div>
    );
};
export default Login;