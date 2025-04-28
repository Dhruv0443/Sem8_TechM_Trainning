import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
test('renders app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Restaurant Manager/i);
  expect(headerElement).toBeInTheDocument();
});
test('adds a new restaurant', () => {
  render(<App />);
  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Taco Spot' } });
  fireEvent.change(screen.getByPlaceholderText('Location'), { target: { value: 'Texas' } });
  fireEvent.change(screen.getByPlaceholderText('Cuisine'), { target: { value: 'Mexican' } });

  // Simulate clicking the "Add" button
  fireEvent.click(screen.getByText(/Add/i));

  // Verify the new restaurant is displayed
  const restaurantElement = screen.getByText(/Taco Spot/i);
  expect(restaurantElement).toBeInTheDocument();
});

test('edits a restaurant', () => {
  render(<App />);
  

  // Simulate adding a restaurant first
  fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Burger Joint' } });
  fireEvent.change(screen.getByPlaceholderText('Location'), { target: { value: 'Los Angeles' } });
  fireEvent.change(screen.getByPlaceholderText('Cuisine'), { target: { value: 'American' } });
  fireEvent.click(screen.getByText(/Add/i));

  // Simulate editing the restaurant
  fireEvent.click(screen.getByText(/Edit/i));
  fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Updated Burger Joint' } });
  fireEvent.click(screen.getByText(/Update/i));

  // Verify the updated restaurant is displayed
  const updatedRestaurantElement = screen.getByText(/Updated Burger Joint/i);
  expect(updatedRestaurantElement).toBeInTheDocument();
});

test('deletes a restaurant', () => {
  render(<App />);

  // Simulate adding a restaurant first
  fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Pizza Palace' } });
  fireEvent.change(screen.getByPlaceholderText('Location'), { target: { value: 'New York' } });
  fireEvent.change(screen.getByPlaceholderText('Cuisine'), { target: { value: 'Italian' } });
  fireEvent.click(screen.getByText(/Add/i));

  // Simulate deleting the restaurant
  fireEvent.click(screen.getByText(/Delete/i));

  // Verify the restaurant is removed
  const deletedRestaurantElement = screen.queryByText(/Pizza Palace/i);
  expect(deletedRestaurantElement).not.toBeInTheDocument();
});
