import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {AppNavigationProps, AppStackParams} from '../../../App';
import {colors} from '../../theme/colors';
import CustomButton from '../../components/CustomButton/customButton';

type ResultRouteProps = RouteProp<AppStackParams, 'ResultScreen'>;

const ResultScreen = () => {
  const {params} = useRoute<ResultRouteProps>();
  const navigation = useNavigation<AppNavigationProps>();
  const calculatedRisk = params.totalScore;

  const getRisk = () => {
    if (calculatedRisk <= 6) return 'Low Risk';
    else if (calculatedRisk <= 12) return 'Medium Risk';
    else return 'High Risk';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Result</Text>
      <View style={styles.riskWrapper}>
        <View style={styles.centeredViewWithGap}>
          <Text style={styles.calculatedRiskText}>
            Your Calculated Risk Score{' '}
          </Text>
          <View style={styles.centeredView}>
            <Text style={styles.riskTextStyle}>{calculatedRisk}</Text>
            <Text style={styles.riskTextStyle}>{getRisk()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnStyle}
          name={'Done'}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 30,
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '900',
    color: colors.white,
  },
  descriptionContainer: {
    gap: 15,
  },
  descriptionText: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 18,
    color: colors.white,
  },
  riskWrapper: {
    alignItems: 'center',
    gap: 40,
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    paddingHorizontal: 10,
    paddingVertical: 30,
    elevation: 10,
    margin: 20,
    borderRadius: 10,
    shadowRadius: 5,
  },
  centeredViewWithGap: {
    alignItems: 'center',
    gap: 20,
  },
  calculatedRiskText: {
    fontSize: 20,
    color: colors.white,
  },
  centeredView: {
    alignItems: 'center',
  },
  buttonContainer: {
    gap: 20,
  },
  btnStyle: {
    backgroundColor: colors.primary,
  },
  riskTextStyle: {
    fontWeight: '900',
    fontSize: 24,
    color: colors.white,
  },
});
