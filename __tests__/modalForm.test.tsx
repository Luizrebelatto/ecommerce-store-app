import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import ModalForm from '../src/components/ModalForm';

describe('ModalForm Component', () => {
  const onSubmitForm = jest.fn();
  const onClose = jest.fn();

  const setup = () =>
    render(
      <ModalForm visible={true} onClose={onClose} onSubmitForm={onSubmitForm}/>
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

  it("should cancel modal when the user click button 'cancel'", () => {
    const { getByText } = setup();

    fireEvent.press(getByText('Cancel'));

    expect(onClose).toHaveBeenCalled();
  });

  it('should show "Invalid description" when description is invalid', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(getByPlaceholderText('Enter a title'), 'Some title');
    fireEvent.changeText(getByPlaceholderText('Enter an author'), 'Author Name');
    fireEvent.changeText(getByPlaceholderText('Enter a description'), 'The Pragmatic Programmer: From Journeyman to Master is a book about computer programming and software engineering');
    fireEvent.changeText(getByPlaceholderText('Enter a price'), '10');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(getByText('Invalid description')).toBeTruthy();
    });
  });

  it('should show "Invalid price format" when price is invalid', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(getByPlaceholderText('Enter a title'), 'Some title');
    fireEvent.changeText(getByPlaceholderText('Enter an author'), 'Author Name');
    fireEvent.changeText(getByPlaceholderText('Enter a description'), 'short');
    fireEvent.changeText(getByPlaceholderText('Enter a price'), '99,');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(getByText('Invalid price format')).toBeTruthy();
    });
  });

  it('should show "Author Required" when author is required', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(getByPlaceholderText('Enter a title'), 'Some title');
    fireEvent.changeText(getByPlaceholderText('Enter an author'), '');
    fireEvent.changeText(getByPlaceholderText('Enter a description'), 'short');
    fireEvent.changeText(getByPlaceholderText('Enter a price'), '99,');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(getByText('Author Required')).toBeTruthy();
    });
  });

  it('should show "Invalid Title" when title is invalid', async () => {
    const { getByPlaceholderText, getByText } = render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(getByPlaceholderText('Enter a title'), 'Some title@');
    fireEvent.changeText(getByPlaceholderText('Enter an author'), '');
    fireEvent.changeText(getByPlaceholderText('Enter a description'), 'short');
    fireEvent.changeText(getByPlaceholderText('Enter a price'), '99,');

    fireEvent.press(getByText('Save'));

    await waitFor(() => {
      expect(getByText('Invalid Title')).toBeTruthy();
    });
  });
});
