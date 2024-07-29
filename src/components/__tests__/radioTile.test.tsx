import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {colors} from '../../theme/colors';
import {StyleSheet} from 'react-native';
import RadioTile from '../RadioTile/radioTile';

describe('RadioTile', () => {
  it('renders correctly with given props', () => {
    const {getByText} = render(<RadioTile name="Option 1" />);
    const optionText = getByText('Option 1');
    expect(optionText).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <RadioTile name="Option 1" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Option 1'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
