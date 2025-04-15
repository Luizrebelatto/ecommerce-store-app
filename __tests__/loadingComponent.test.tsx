import React from 'react';
import { render, screen } from '@testing-library/react-native';
import LoadingComponent from '../src/components/Loading';

describe('Loading Component', () => {
  it('should update the message when the status changes', () => {
   render(<LoadingComponent status="loading" />);

    expect(screen.getByText('Loading...')).toBeTruthy();

    screen.rerender(<LoadingComponent status="success" />);
    expect(screen.getByText('Loaded successfully!')).toBeTruthy();

    screen.rerender(<LoadingComponent status="error" />);
    expect(screen.getByText('Error!')).toBeDefined();
  });
});