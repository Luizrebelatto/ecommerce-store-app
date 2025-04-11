import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import Home from '../src/screens/Home/home'; // Adjust path as needed
import { sortingBooks } from '../src/utils/sorting';

jest.mock('../src/stores/data.json', () => ({
  books: [
    { id: 1, title: 'Book A', author: 'Author A', price: 9.99, description: 'Description A' },
    { id: 2, title: 'Book B', author: 'Author B', price: 14.99, description: 'Description B' },
    { id: 3, title: 'Book C', author: 'Author C', price: 7.99, description: 'Description C' },
  ]
}));

jest.mock('../src/utils/sorting.ts', () => ({
  sortingBooks: jest.fn()
}));

describe('Home Component', () => {
  it('should components render correctly', () => {
    render(<Home />);
  
    expect(screen.getByText('BOOK STORE')).toBeDefined();
    expect(screen.getByTestId('sort-picker')).toBeDefined();
  });

  it('calls sortingBooks when a sorting rule is selected', () => {
    render(
      <Home />
    );
    
    fireEvent(screen.getByTestId('sort-picker'), 'onValueChange', 'A-Z');
    
    expect(sortingBooks).toHaveBeenCalledWith('A-Z', expect.any(Array));
  });

  it("should open the modal by pressing the '+'", () => {
    const { getByText } = render(<Home />);

    const openButton = getByText('+');
    fireEvent.press(openButton);

    const modalTitle = getByText('New Item');
    expect(modalTitle).toBeTruthy();
  });

  it('must close the modal by pressing “Cancel”', async () => {
    const { getByText, queryByText } = render(<Home />);
  
    fireEvent.press(getByText('+'));
    expect(getByText('New Item')).toBeTruthy();
  
    fireEvent.press(getByText('Cancel'));
  
    await waitFor(() => {
      expect(queryByText('New Item')).toBeNull();
    });
  });
});
