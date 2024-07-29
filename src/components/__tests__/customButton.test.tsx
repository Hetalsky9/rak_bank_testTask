import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {colors} from '../../theme/colors';
import CustomButton from '../CustomButton/customButton';

describe('CustomButton', () => {
  it('renders correctly with given props', () => {
    const {getByText} = render(<CustomButton name="Test Button" />);
    const buttonText = getByText('Test Button');
    expect(buttonText).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <CustomButton name="Test Button" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
