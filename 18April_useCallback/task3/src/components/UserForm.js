import React, { useState } from "react";
const UserForm = ({onAddUser})=>{
    const [name,setName] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name.trim()) return;
        onAddUser({name});
        setName('');
    };
    return(
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
            <input type="text" value={name}
            onChange={(e)=>setName(e.target.value)}
            className="border p-2 flex-1"
            placeholder="Enter user name"
            />
            <button type="submit" className="btn btn-info text-white px-2 py-2">
                Add
            </button>
        </form>
    );
};
export default React.memo(UserForm);