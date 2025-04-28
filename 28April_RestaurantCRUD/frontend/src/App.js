import { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantForm from './components/RestaurantForm';
import RestaurantList from './components/RestaurantList';
function App() {
  const [restaurants,setRestaurants] = useState([]);
  const [editData,setEditData] =useState(null);
  const fetchRestaurants = async ()=>{
    const res = await axios.get('http://localhost:5000/api/restaurants');
    setRestaurants(res.data);
  };
  useEffect(()=>{
    fetchRestaurants();
  },[]);
  const handleCreate = async(restaurant)=>{
    await axios.post('http://localhost:5000/api/restaurants',restaurant);
    fetchRestaurants();
  };
  const handleUpdate = async (id,updatedData)=>{
    await axios.put(`http://localhost:5000/api/restaurants/${id}`,updatedData);
    fetchRestaurants();
    setEditData(null);
  };
  const handleDelete = async(id)=>{
    await axios.delete(`http://localhost:5000/api/restaurants/${id}`);
    fetchRestaurants();
  };
  return (
    <div>
      <h1>Restaurant Manager</h1>
      <RestaurantForm onSubmit={editData? handleUpdate:handleCreate} editData={editData}/>
      <RestaurantList restaurants={restaurants} onDelete={handleDelete} onEdit={(data)=>setEditData(data)}
      />
    </div>
  );
}
export default App;
