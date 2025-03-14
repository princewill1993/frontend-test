import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from '../src/components/ItemList';

describe('ItemList component', () => {
  it('allows adding items to the list', () => {
    render(<ItemList />);
    
    // Check if there's an input field
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    
    // Check if there's an add button
    const addButton = screen.getByRole('button');
    expect(addButton).toBeInTheDocument();
    
    // Add an item
    fireEvent.change(input, { target: { value: 'Test Item' } });
    fireEvent.click(addButton);
    
    // Check if the item appears in the list
    const listItem = screen.getByText(/test item/i);
    expect(listItem).toBeInTheDocument();
  });
});