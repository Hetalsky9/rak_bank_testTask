import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../App';
import {colors} from '../../theme/colors';
import CustomButton from '../../components/CustomButton/customButton';

const HomeScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome to RAK-bank</Text>
      <View style={{gap: 30}}>
        <Text style={styles.readyText}>
          Are you ready to elevate your investment portfolio to new heights?
        </Text>
        <Text style={styles.description}>
          Answer a few questions about your investment preferences to find out
          your risk profile. This will help us recommend the best options for
          opening a bank account that suits your needs.
        </Text>
      </View>
      <View>
        <CustomButton
          name="Lets get started"
          onPress={() => {
            navigation.navigate('QuestionsScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: colors.black,
  },
  welcome: {
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    color: colors.primary,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: colors.white,
  },
  readyText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontWeight: '800',
    color: colors.white,
  },
});
