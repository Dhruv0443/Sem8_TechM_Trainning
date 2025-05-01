import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantList from '../components/RestaurantList';
import RestaurantItem from '../components/RestaurantItem';
jest.mock('../components/RestaurantItem', () => ({ restaurant, onDelete, onEdit }) => (
    <div>
      <h5>{restaurant.name}</h5>
      <button onClick={() => onEdit(restaurant)}>Edit</button>
      <button onClick={() => onDelete(restaurant._id)}>Delete</button>
    </div>
  ));
  
  describe('RestaurantList', () => {
    const mockDelete = jest.fn();
    const mockEdit = jest.fn();
    
    const restaurants = [
      { _id: '123', name: 'Testaurant', location: 'NYC', cuisine: 'Mexican' },
      { _id: '456', name: 'Food Place', location: 'LA', cuisine: 'Italian' },
    ];
  
    beforeEach(() => {
      mockDelete.mockClear();
      mockEdit.mockClear();
    });
  
    test('renders list of restaurants', () => {
      render(<RestaurantList restaurants={restaurants} onDelete={mockDelete} onEdit={mockEdit} />);
      expect(screen.getByText('Testaurant')).toBeInTheDocument();
      expect(screen.getByText('Food Place')).toBeInTheDocument();
    });
  
    test('calls onEdit when the Edit button is clicked', () => {
      render(<RestaurantList restaurants={restaurants} onDelete={mockDelete} onEdit={mockEdit} />);
      fireEvent.click(screen.getAllByText('Edit')[0]);
      expect(mockEdit).toHaveBeenCalledWith(restaurants[0]);
    });
  
    test('calls onDelete when the Delete button is clicked', () => {
      render(<RestaurantList restaurants={restaurants} onDelete={mockDelete} onEdit={mockEdit} />);
      fireEvent.click(screen.getAllByText('Delete')[0]);
      expect(mockDelete).toHaveBeenCalledWith(restaurants[0]._id);
    });
  
    test('renders no restaurants when list is empty', () => {
      render(<RestaurantList restaurants={[]} onDelete={mockDelete} onEdit={mockEdit} />);
      expect(screen.queryByText('Testaurant')).nottoBeInTheDocument();
      expect(screen.queryByText('Food Place')).nottoBeInTheDocument();
    });
  });