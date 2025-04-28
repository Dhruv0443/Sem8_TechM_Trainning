import React ,{useState,useEffect} from 'react';
export default function RestaurantForm({onSubmit, editData}){
    const [form,setForm] = useState({name:'',location:'',cuisine:''});
    useEffect(() => {
      if(editData){
        setForm(editData);
      }
    }, [editData]);
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(editData){
            onSubmit(editData._id,form);
        }
        else{
            onSubmit(form);
        }
        setForm({name:'',location:'',cuisine:''});
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' placeholder='Name' value={form.name} onChange={handleChange}required/>
                <input name='location' placeholder='Location' value={form.location} onChange={handleChange}required/>
                <input name='cuisine' placeholder='Cuisine' value={form.cuisine} onChange={handleChange}required/>
                <button type='submit'>
                    {editData? 'Update':'Add'}
                </button>
            </form>
        </div>
    );
}