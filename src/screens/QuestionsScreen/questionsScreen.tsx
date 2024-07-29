import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProps} from '../../../App';
import {Option, questionData} from '../../utility/constants';
import {colors} from '../../theme/colors';
import CustomButton from '../../components/CustomButton/customButton';
import RadioTile from '../../components/RadioTile/radioTile';

const QuestionsScreen = () => {
  const navigation = useNavigation<AppNavigationProps>();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answerArray, setAnswerArray] = useState<Option[]>([]);

  const next = () => {
    setCurrentIndex(prev => prev + 1);
  };

  const onSelecdted = (item: Option) => {
    setAnswerArray(prev => {
      prev[currentIndex] = item;
      return [...prev];
    });
  };

  const finish = () => {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'HomeScreen'},
        {
          name: 'ResultScreen',
          params: {
            totalScore: getTotalScore,
          },
        },
      ],
    });
  };

  const getTotalScore = () => {
    let score = 0;
    answerArray.forEach(answer => {
      score += answer.points;
    });
    return score;
  };

  const getQuestionCount = useMemo(() => {
    return ((currentIndex + 1) / 5) * 100;
  }, [currentIndex]);

  return (
    <View style={styles.fullScreen}>
      <SafeAreaView style={styles.container}>
        <View style={styles.contentStyle}>
          <View style={styles.progressBarBackground}>
            <View
              style={[styles.progressBar, {width: `${getQuestionCount}%`}]}
            />
          </View>
          <View style={styles.questionContainer}>
            <View style={styles.questionCard}>
              <Text style={styles.questionText}>
                {questionData[currentIndex].question}
              </Text>
            </View>
            <View style={styles.optionsContainer}>
              {questionData[currentIndex].options.map(item => {
                return (
                  <RadioTile
                    name={item.title}
                    key={item.id}
                    onPress={() => {
                      onSelecdted(item);
                    }}
                    isSelected={answerArray?.[currentIndex]?.id === item.id}
                  />
                );
              })}
            </View>
          </View>

          <CustomButton
            name={
              currentIndex === questionData.length - 1 ? 'Complete' : 'Next'
            }
            disabled={!answerArray[currentIndex]}
            style={styles.btnStyle}
            onPress={currentIndex === questionData.length - 1 ? finish : next}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default QuestionsScreen;

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: colors.black,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 90,
    paddingVertical: 10,
  },
  contentStyle: {
    paddingHorizontal: 15,
    flex: 1,
    gap: 30,
  },
  progressBarBackground: {
    backgroundColor: colors.gray,
    borderRadius: 20,
  },
  progressBar: {
    height: 10,
    borderColor: colors.primary,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  questionContainer: {
    flex: 1,
    gap: 30,
  },
  questionCard: {
    padding: 20,
    borderRadius: 10,
    gap: 40,
  },
  questionText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
  optionsContainer: {
    gap: 20,
  },
  btnStyle: {
    backgroundColor: colors.primary,
  },
});
