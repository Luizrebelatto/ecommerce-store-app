import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
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
    setup();

    expect(screen.getByPlaceholderText('Enter a title')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter an author')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter a description')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter a price')).toBeTruthy();
  });

  it("should cancel modal when the user click button 'cancel'", () => {
    setup();

    fireEvent.press(screen.getByText('Cancel'));

    expect(onClose).toHaveBeenCalled();
  });

  it('should show "Invalid description" when description is invalid', async () => {
    render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(screen.getByPlaceholderText('Enter a title'), 'Some title');
    fireEvent.changeText(screen.getByPlaceholderText('Enter an author'), 'Author Name');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a description'), 'The Pragmatic Programmer: From Journeyman to Master is a book about computer programming and software engineering');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a price'), '10');

    fireEvent.press(screen.getByText('Save'));

    await waitFor(() => {
      expect(screen.getByText('Invalid description')).toBeTruthy();
    });
  });

  it('should show "Invalid price format" when price is invalid', async () => {
    render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(screen.getByPlaceholderText('Enter a title'), 'Some title');
    fireEvent.changeText(screen.getByPlaceholderText('Enter an author'), 'Author Name');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a description'), 'short');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a price'), '99,');

    fireEvent.press(screen.getByText('Save'));

    await waitFor(() => {
      expect(screen.getByText('Invalid price format')).toBeTruthy();
    });
  });

  it('should show "Author Required" when author is required', async () => {
    render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(screen.getByPlaceholderText('Enter a title'), 'Some title');
    fireEvent.changeText(screen.getByPlaceholderText('Enter an author'), '');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a description'), 'short');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a price'), '99,');

    fireEvent.press(screen.getByText('Save'));

    await waitFor(() => {
      expect(screen.getByText('Author Required')).toBeTruthy();
    });
  });

  it('should show "Invalid Title" when title is invalid', async () => {
    render(
      <ModalForm visible={true} onClose={() => {}} onSubmitForm={onSubmitForm}/>
    );

    fireEvent.changeText(screen.getByPlaceholderText('Enter a title'), 'Some title@');
    fireEvent.changeText(screen.getByPlaceholderText('Enter an author'), '');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a description'), 'short');
    fireEvent.changeText(screen.getByPlaceholderText('Enter a price'), '99,');

    fireEvent.press(screen.getByText('Save'));

    await waitFor(() => {
      expect(screen.getByText('Invalid Title')).toBeTruthy();
    });
  });
});
