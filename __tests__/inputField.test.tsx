import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputField from '../src/components/InputField';

describe('InputField Component', () => {
  it('should render input field and your props', () => {
    const mockOnChangeText = jest.fn();
    
    const { getByPlaceholderText } = render(
      <InputField
        value="Title Book"
        onChangeText={mockOnChangeText}
        placeholder="Enter a value"
        keyboardType='default'
      />
    );

    const input = getByPlaceholderText("Enter a value");

    expect(input.props.value).toBe("Title Book");
    expect(input.props.keyboardType).toBe("default");
    expect(input.props.placeholder).toBe("Enter a value");

    fireEvent.changeText(input, "New title");

    expect(mockOnChangeText).toHaveBeenCalledWith("New title");
  });
});
