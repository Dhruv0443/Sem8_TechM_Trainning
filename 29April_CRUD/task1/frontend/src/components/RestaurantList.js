import React from 'react';
import RestaurantItem from './RestaurantItem';
export default function RestaurantList({ restaurants, onDelete, onEdit }) {
    return (
        <div className='container mt-4'>
            <h2 className='mb-4'>Restaurant List</h2>
            <div className='row'>
                {restaurants.map(r => (
                    <div className='col-md-6 mb-3' key={r.id}>
                        <RestaurantItem 
                        restaurant={r} 
                        onDelete={onDelete} 
                        onEdit={onEdit} 
                        />
                    </div>
                ))}
            </div> 
        </div>
    );
}
