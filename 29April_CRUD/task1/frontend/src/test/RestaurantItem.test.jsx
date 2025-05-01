import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantItem from '../components/RestaurantItem';

describe('RestaurantItem', () => {
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();
  const restaurant = {
    _id: '123',
    name: 'Testaurant',
    location: 'NYC',
    cuisine: 'Mexican',
  };

  beforeEach(() => {
    mockDelete.mockClear();
    mockEdit.mockClear();
  });

  test('renders restaurant details correctly', () => {
    const restaurant = {
      name: 'Testaurant',
      location: 'NYC',
      cuisine: 'Mexican',
    };
  
    render(<RestaurantItem restaurant={restaurant} onDelete={mockDelete} onEdit={mockEdit} />);
  
    expect(screen.getByText('Testaurant')).toBeInTheDocument();
    expect(screen.getByText(/Location:/i)).toBeInTheDocument();
    expect(screen.getByText(/NYC/i)).toBeInTheDocument();        
    expect(screen.getByText(/Cuisine:/i)).toBeInTheDocument();
    expect(screen.getByText(/Mexican/i)).toBeInTheDocument();
  });
    test('calls onEdit when the Edit button is clicked', () => {
    render(<RestaurantItem restaurant={restaurant} onDelete={mockDelete} onEdit={mockEdit} />);
    fireEvent.click(screen.getByText('Edit'));
    expect(mockEdit).toHaveBeenCalledWith(restaurant);
  });
  test('calls onDelete when the Delete button is clicked', () => {
    render(<RestaurantItem restaurant={restaurant} onDelete={mockDelete} onEdit={mockEdit} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockDelete).toHaveBeenCalledWith(restaurant._id);
  });
});