import React from "react";
export default function RestaurantItem({restaurant,onDelete,onEdit}){
    return(
        <div className=" card mb-3 shadow-sm">
            <div className="card-body">
                <h5 className="card-tittle">{restaurant.name}</h5>
                <p className="card-text">
                    <strong>Location: </strong> {restaurant.location} <br/>
                    <strong>Cuisine</strong>
                    {restaurant.cuisine}
                </p>
                <div className="d-flex gap-2">
                    <button className="btn btn-primary btn-sm" onClick={()=>onEdit(restaurant)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={()=>onDelete(restaurant._id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}