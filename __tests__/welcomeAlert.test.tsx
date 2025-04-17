import React from 'react';
import { render, fireEvent, act, within, cleanup } from '@testing-library/react-native';
import WelcomeAlert from '../src/components/WelcomeAlert';

jest.useFakeTimers();
afterEach(cleanup);

describe('Welcome Alert Component', () => {
  it('should show message when press button', async () => {
    const { getByTestId } = render(<WelcomeAlert />);

    const input = getByTestId('name-input');
    const button = getByTestId('submit-button');

    fireEvent.changeText(input, 'Luiz');
    fireEvent.press(button);

    await act(async () => {
      jest.advanceTimersByTime(1000);
    });

    const messageContainer = getByTestId('message-container');
    const { getByText } = within(messageContainer);
    expect(getByText('Welcome, Luiz!')).toBeTruthy();
  });

  it("shouldn't show message before button was pressed", () => {
    const { queryByText } = render(<WelcomeAlert />);
    expect(queryByText(/Welcome/)).toBeNull();
  });
});
