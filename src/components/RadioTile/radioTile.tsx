import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';

type radioContainerProps = {
  name: string;
  onPress?: () => void;
  isSelected?: boolean;
};

const RadioTile = ({
  name,
  onPress,
  isSelected = false,
}: radioContainerProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.optionstyle,
        isSelected ? styles.selectedOptionStyle : styles.unselectedOptionStyle,
      ]}>
      <Text
        style={[
          styles.textStyle,
          isSelected && styles.selectedOptionTextColor,
        ]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioTile;

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    width: '85%',
    fontWeight: '700',
  },
  optionstyle: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderColor: colors.primary,

    padding: 20,
    borderRadius: 10,
  },
  selectedOptionStyle: {
    backgroundColor: colors.primary,
  },
  unselectedOptionStyle: {
    backgroundColor: colors.white,
  },
  selectedOptionTextColor: {
    color: colors.white,
  },
});
