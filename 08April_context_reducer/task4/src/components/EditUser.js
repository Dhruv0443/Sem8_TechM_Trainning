// src/components/EditUser.js
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const EditUser = () => {
    const { id } = useParams();
    const { state, dispatch } = useContext(UserContext);
    const user = state.find(user => user.id === parseInt(id));
    const [name, setName] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_USER", payload: { id: parseInt(id), name, email } });
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditUser;