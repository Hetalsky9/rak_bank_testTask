import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {QuestionType, questionData} from '../../utility/constants';
import QuestionsScreen from '../QuestionsScreen/questionsScreen';

// Mock Data
const mockQuestions: QuestionType[] = questionData;

// Mock for useNavigation hook
const mockNavigation = {
  reset: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => mockNavigation,
}));

describe('QuestionsScreen', () => {
  it('should navigate to Result screen with correct totalScore on Finish button click', () => {
    // Render the QuestionsScreen component
    render(<QuestionsScreen />);

    expect(screen.getByText(mockQuestions[0].question)).toBeTruthy();
    // Select and submit the first question's option
    fireEvent.press(screen.getByText(mockQuestions[0].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[1].question)).toBeTruthy();
    // // Select and submit the second question's option
    fireEvent.press(screen.getByText(mockQuestions[1].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[2].question)).toBeTruthy();
    // Select and submit the third question's option
    fireEvent.press(screen.getByText(mockQuestions[2].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[3].question)).toBeTruthy();
    // Select and submit the fourth question's option
    fireEvent.press(screen.getByText(mockQuestions[3].options[0].title));
    fireEvent.press(screen.getByText('Next')); // Click Next button

    expect(screen.getByText(mockQuestions[4].question)).toBeTruthy();
    // Select and submit the fifth question's option
    fireEvent.press(screen.getByText(mockQuestions[4].options[2].title));
    fireEvent.press(screen.getByText('Complete')); // Click Next button

    // Check if the navigation.reset was called with correct parameters
    expect(mockNavigation.reset).toHaveBeenCalledWith({
      index: 1,
      routes: [
        {name: 'HomeScreen'},
        {
          name: 'ResultScreen',
          params: {totalScore: 7}, // sum of selected points
        },
      ],
    });
  });
});
