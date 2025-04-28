import React from "react";
export default function RestaurantItem({restaurant,onDelete,onEdit}){
    return(
        <div>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.location}-{restaurant.cuisine} </p>
            <button onClick={()=>onEdit(restaurant)}>Edit</button>
            <button onClick={()=>onDelete(restaurant._id)}>Delete</button>
        </div>
    );
}