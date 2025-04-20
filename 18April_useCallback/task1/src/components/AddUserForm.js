import React, { useState } from "react";
const AddUserForm = React.memo(({onAddUser})=>{
    const [name,setName]= useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(name.trim()){
            onAddUser(name.trim());
            setName("");
        }
    };
    return(
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input type="text" 
            className="border p-2 flex-grow"
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter user Name"
            />
            <button type="submit" className="btn btn-info text-white px-4 py-2">
                Add
            </button>
        </form>
    );
});
export default AddUserForm;

