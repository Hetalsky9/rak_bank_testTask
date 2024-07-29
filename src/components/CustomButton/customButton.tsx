import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';

type customButtonType = {
  name: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
};

const CustomButton = ({
  name,
  style,
  onPress,
  disabled = false,
}: customButtonType) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, style, disabled && styles.disabled]}>
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: colors.primary,
    opacity: 0.5,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    justifyContent: 'center',
  },
});
