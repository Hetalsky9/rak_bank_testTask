export type QuestionType = {
  id: string;
  question: string;
  options: Option[];
};

export type Option = {
  id: string;
  title: string;
  points: number;
};

export const questionData: QuestionType[] = [
  {
    id: '1',
    question: 'How would you describe your investment knowledge?',
    options: [
      {id: '1', title: 'Novice', points: 1},
      {
        id: '2',
        title: 'Intermediate',
        points: 2,
      },
      {
        id: '3',
        title: 'Advanced',
        points: 3,
      },
    ],
  },
  {
    id: '2',
    question: 'Your preferred Investment Duration?',
    options: [
      {
        id: '1',
        title: 'Short-term (less than 1 year)',
        points: 1,
      },
      {
        id: '2',
        title: 'Medium-term (1-5 years)',
        points: 2,
      },
      {
        id: '3',
        title: 'Long-term (more than 5 years)',
        points: 3,
      },
    ],
  },
  {
    id: '3',
    question: 'How comfortable are you with taking risks?',
    options: [
      {
        id: '1',
        title: 'Very risk-averse',
        points: 1,
      },
      {
        id: '2',
        title: 'Somewhat risk-averse',
        points: 2,
      },
      {
        id: '3',
        title: 'Neutral Somewhat risk-tolerant',
        points: 3,
      },
      {
        id: '4',
        title: 'Very risk-tolerant',
        points: 4,
      },
    ],
  },
  {
    id: '4',
    question: 'What percentage of your income are you willing to invest?',
    options: [
      {
        id: '1',
        title: 'Less than 10%',
        points: 1,
      },
      {
        id: '2',
        title: '10-25%',
        points: 2,
      },
      {
        id: '3',
        title: '25-50%',
        points: 3,
      },
      {
        id: '4',
        title: 'More than 50%',
        points: 4,
      },
    ],
  },
  {
    id: '5',
    question:
      'How would you react to a sudden drop in the value of your investments?',
    options: [
      {
        id: '1',
        title: 'Panic and sell immediately',
        points: 1,
      },
      {
        id: '2',
        title: 'Monitor closely and consider selling',
        points: 2,
      },
      {
        id: '3',
        title: 'Hold and wait for recovery',
        points: 3,
      },
      {
        id: '4',
        title: 'See it as a buying opportunity and invest more',
        points: 4,
      },
    ],
  },
];
