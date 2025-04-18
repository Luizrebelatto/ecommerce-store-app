import React from 'react';
import { Text, TextInput } from "react-native";
import { render, fireEvent, screen } from '@testing-library/react-native';
import InputField from '../src/components/InputField';
import renderer from 'react-test-renderer';

describe('InputField Component', () => {
  it('should render input field and your props', () => {
    const mockOnChangeText = jest.fn();
    
    render(
      <InputField
        label='Title field'
        value="Title Book"
        onChangeText={mockOnChangeText}
        placeholder="Enter a value"
        keyboardType='default'
      />
    );

    const input = screen.getByPlaceholderText("Enter a value");

    expect(input.props.value).toBe("Title Book");
    expect(input.props.keyboardType).toBe("default");
    expect(input.props.placeholder).toBe("Enter a value");
    expect(screen.getByDisplayValue('Title Book')).toBeDefined()

    fireEvent.changeText(input, "New title");

    expect(mockOnChangeText).toHaveBeenCalledWith("New title");
  });
});

describe('InputField Structure', () => {
  it('renders correctly and matches snapshot (toJSON)', () => {
    const tree = renderer.create(
      <InputField
        label="Title"
        value="Value InputField"
        onChangeText={() => {}}
        placeholder="Title Book"
        keyboardType="default"
      />
    );

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders Text and TextInput with correct props (root)', () => {
    const tree = renderer.create(
      <InputField
        label="Title"
        value="Value InputField"
        onChangeText={() => {}}
        placeholder="Title Book"
        keyboardType="default"
      />
    );

    const root = tree.root;

    const labelText = root.findByType(Text);
    const input = root.findByType(TextInput);

    expect(labelText.props.children).toBe('Title');
    expect(input.props.value).toBe('Value InputField');
    expect(input.props.placeholder).toBe('Title Book');
    expect(input.props.keyboardType).toBe('default');

    expect(input.props).toHaveProperty('value', 'Value InputField');
    expect(input.props).toHaveProperty('placeholder', 'Title Book');
  });
});
