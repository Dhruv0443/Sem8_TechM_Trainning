import React from 'react';
import RestaurantItem from './RestaurantItem';
export default function RestaurantList({ restaurants, onDelete, onEdit }) {
    return (
        <div>
            {restaurants.map(r => (
                <RestaurantItem 
                    key={r.id} 
                    restaurant={r} 
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                />
            ))}
        </div>
    );
}
