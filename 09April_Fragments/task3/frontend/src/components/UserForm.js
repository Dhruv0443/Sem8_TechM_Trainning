import React, {useState,useEffect} from "react";
function UserForm({onSubmit,selectedUser}){
    const [formData, setFormData]=useState({name:'',email:''});
    useEffect(()=>{
        if(selectedUser){
            setFormData(selectedUser);
        }else{
            setFormData({name:'',email:''});
        }
    },[selectedUser]);
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit(formData);
        setFormData({name:'',email:''});
    };
    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name}onChange={handleChange} placeholder="Name" required/>
            <input name="email" value={formData.email}onChange={handleChange} placeholder="Email" required/>
            <button type="submit">{selectedUser? "Update":"Add"}</button>
        </form>
    )
}
export default UserForm;