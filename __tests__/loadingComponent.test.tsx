import React from 'react';
import { render, screen } from '@testing-library/react-native';
import LoadingComponent from '../src/components/Loading';

describe('Loading Component', () => {
  it('should update the message when the status changes', () => {
   const { getByText, rerender, unmount, queryByText, debug } = render(<LoadingComponent status="loading" />);

    expect(getByText('Loading...')).toBeTruthy();

    rerender(<LoadingComponent status="success" />);
    expect(getByText('Loaded successfully!')).toBeTruthy();

    rerender(<LoadingComponent status="error" />);
    expect(getByText('Error!')).toBeDefined();
    

    unmount()
  });

  it('when accessibilityElementsHidden is true', () => {
    const {getByText, debug} = render(<LoadingComponent status="error" />);
    const errorText = getByText('Error!')
    expect(errorText).toBeDefined();
    debug()
    expect(errorText.props.accessibilityElementsHidden).toBe(true);
    expect(errorText.props.importantForAccessibility).toBe('no-hide-descendants');
  });
});