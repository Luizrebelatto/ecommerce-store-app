import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ModalForm from '../src/components/ModalForm';

describe('ModalForm Component', () => {
  const onSubmitForm = jest.fn();
  const onClose = jest.fn();

  const setup = () =>
    render(
      <ModalForm visible={true} onClose={onClose} onSubmitForm={onSubmitForm} />
    );

  beforeEach(() => {
    onSubmitForm.mockClear();
    onClose.mockClear();
  });

  it('should render components correctly', () => {
    const { getByPlaceholderText } = setup();

    expect(getByPlaceholderText('Enter a title')).toBeTruthy();
    expect(getByPlaceholderText('Enter an author')).toBeTruthy();
    expect(getByPlaceholderText('Enter a description')).toBeTruthy();
    expect(getByPlaceholderText('Enter a price')).toBeTruthy();
  });

  it('should render the right messages', async () => {
    const { getByText } = setup();

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(getByText('Required Title')).toBeTruthy();
      expect(getByText('Author Required')).toBeTruthy();
      expect(getByText('Description Required')).toBeTruthy();
      expect(getByText('Price required')).toBeTruthy();
    });
  });

  it('should call onSubmitForm with the correct data', async () => {
    const { getByPlaceholderText, getByText } = setup();

    fireEvent.changeText(getByPlaceholderText('Enter a title'), 'Harry Potter');
    fireEvent.changeText(getByPlaceholderText('Enter an author'), 'J.K Rowling');
    fireEvent.changeText(getByPlaceholderText('Enter a description'), 'Harry Potter and the Philosophers Stone');
    fireEvent.changeText(getByPlaceholderText('Enter a price'), '29.90');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(onSubmitForm).toHaveBeenCalledWith({
        title: 'Harry Potter',
        author: 'J.K Rowling',
        description: "Harry Potter and the Philosophers Stone",
        price: '29.90',
      });

      expect(onClose).toHaveBeenCalled();
    });
  });

  it("should cancel modal when the user click button 'cancel'", () => {
    const { getByText } = setup();

    fireEvent.press(getByText('Cancel'));

    expect(onClose).toHaveBeenCalled();
  });
});
