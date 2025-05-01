import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantForm from '../components/RestaurantForm';
describe('RestaurantForm', () => {
  const mockSubmit = jest.fn();

  beforeEach(() => {
    mockSubmit.mockClear();
  });
  test('renders add mode form with empty inputs', () => {
    render(<RestaurantForm onSubmit={mockSubmit} />);
    expect(screen.getByText('Add New Restaurant')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toHaveValue('');
    expect(screen.getByLabelText('Location')).toHaveValue('');
    expect(screen.getByLabelText('Cuisine')).toHaveValue('');
    expect(screen.getByRole('button')).toHaveTextContent('Add Restaurant');
  });

  test('submits form with entered values in add mode', () => {
    render(<RestaurantForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Testaurant' } });
    fireEvent.change(screen.getByLabelText('Location'), { target: { value: 'NYC' } });
    fireEvent.change(screen.getByLabelText('Cuisine'), { target: { value: 'Mexican' } });
    fireEvent.click(screen.getByRole('button'));
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'Testaurant',
      location: 'NYC',
      cuisine: 'Mexican',
    });
  });

  test('renders edit mode form with pre-filled data', () => {
    const editData = {
      id: '123',
      name: 'Old Place',
      location: 'LA',
      cuisine: 'Italian',
    };

    render(<RestaurantForm onSubmit={mockSubmit} editData={editData} />);

    expect(screen.getByText('Edit Restaurant')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toHaveValue('Old Place');
    expect(screen.getByLabelText('Location')).toHaveValue('LA');
    expect(screen.getByLabelText('Cuisine')).toHaveValue('Italian');
    expect(screen.getByRole('button')).toHaveTextContent("Update Restaurant");
  });

  test('submits edited values in edit mode', () => {
    const editData = {
      id: '123',
      name: 'Old Place',
      location: 'LA',
      cuisine: 'Italian',
    };

    render(<RestaurantForm onSubmit={mockSubmit} editData={editData} />);
    fireEvent.change(screen.getByLabelText('Cuisine'), { target: { value: 'French' } });
      fireEvent.click(screen.getByRole('button'));
    expect(mockSubmit).toHaveBeenCalledWith({
      id: '123',
      name: 'Old Place',
      location: 'LA',
      cuisine: 'French',
    });
  });

});