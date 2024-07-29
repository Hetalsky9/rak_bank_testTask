import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import ResultScreen from '../ResultScreen/resultScreen';

// Mock the useNavigation and useRoute hooks
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('<ResultScreen />', () => {
  let navigateMock: jest.Mock;
  let goBackMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
    goBackMock = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({goBack: goBackMock});
    (useRoute as jest.Mock).mockReturnValue({
      params: {
        totalScore: 10,
      },
    });
  });

  it('renders correctly and displays the correct risk level', () => {
    const {getByText} = render(<ResultScreen />);

    // Check if the result title is rendered
    expect(getByText('Result')).toBeTruthy();

    // Check if the calculated risk score is rendered
    expect(getByText('Your Calculated Risk Score')).toBeTruthy();
    expect(getByText('10')).toBeTruthy();
    expect(getByText('Medium Risk')).toBeTruthy();
  });

  it('goes back to the previous screen on button press', () => {
    const {getByText} = render(<ResultScreen />);
    const doneButton = getByText('Done');

    fireEvent.press(doneButton);

    // Check if goBack function is called
    expect(goBackMock).toHaveBeenCalled();
  });
});
