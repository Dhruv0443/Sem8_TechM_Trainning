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
            <form onSubmit={handleSubmit} className='container mt-4 p-4 border rounded shadow-sm bg-light'>
                <h4 className='mb-3'>{editData? 'Edit Restaurant':'Add New Restaurant'} </h4>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type='text'
                    name='name' id='name' 
                    className='form-control'
                    placeholder='Enter restaurant name' value={form.name} onChange={handleChange}required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='location' className='form-label'>Location</label>
                    <input type='text' name='location'
                    id='location'
                    className='form-control' placeholder='Enter location' value={form.location} onChange={handleChange}required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='cuisine' className='form-label'>Cuisine</label>
                    <input
                    type='text' name='cuisine'
                    id='cuisine'className='form-control' 
                    placeholder='Enter cuisine type' value={form.cuisine} onChange={handleChange}required/>
                </div>
                <button type='submit' className='btn btn-primary w-100'>
                    {editData? 'Update Restaurant':'Add Restaurant'}
                </button>
            </form>
        </div>
    );
}