import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 29,
  part: 5,
  title: 'Data Analysis — Central Tendency',
  subtitle: 'Mean, median, mode, and range — four powerful ways to describe data!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d29-c1',
      title: 'Mean (평균)',
      content:
        '**Mean (평균)** is the average — add up all values, then divide by the count.\n\n$$\\text{Mean} = \\frac{\\text{sum of all values}}{\\text{number of values}}$$\n\nExample: Scores: 70, 80, 85, 90, 95\n$\\text{Mean} = \\frac{70 + 80 + 85 + 90 + 95}{5} = \\frac{420}{5} = 84$\n\nThe mean is sensitive to **outliers (극단값)** — one very large or small value can pull it.',
      type: 'definition',
    },
    {
      id: 'bcg8-d29-c2',
      title: 'Median (중앙값)',
      content:
        '**Median (중앙값)** is the middle value when data is sorted in order.\n\nSteps:\n1. Arrange data from smallest to largest\n2. Find the middle value\n\nOdd count: middle value\n**Example (5 values):** 3, 7, 9, 12, 15 → Median = **9**\n\nEven count: average of the two middle values\n**Example (4 values):** 4, 8, 10, 14 → Median = $\\frac{8+10}{2} = 9$',
      type: 'definition',
    },
    {
      id: 'bcg8-d29-c3',
      title: 'Mode (최빈값)',
      content:
        '**Mode (최빈값)** is the value that appears most often.\n\nExample: 2, 3, 3, 5, 7, 3, 8\nMode = **3** (appears 3 times)\n\nA data set can have:\n- **No mode**: all values appear once\n- **One mode** (unimodal)\n- **Two modes** (bimodal 이봉형)\n- **More modes** (multimodal 다봉형)\n\nMode is the only measure that works for **non-numeric data** (e.g., most popular color).',
      type: 'definition',
    },
    {
      id: 'bcg8-d29-c4',
      title: 'Range (범위) and Choosing the Best Measure',
      content:
        '**Range (범위)** = maximum − minimum\n\nExample: 4, 8, 15, 16, 23\nRange = $23 - 4 = 19$\n\nRange measures **spread (분포)**, not central tendency.\n\n**Which measure to use?**\n- **Mean**: for symmetric data without outliers\n- **Median**: when there are outliers (e.g., house prices)\n- **Mode**: for most frequent / most popular (e.g., shoe sizes)\n- **Range**: to describe how spread out the data is',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d29-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'Find the mean of: 12, 15, 18, 21, 24',
      answer: '18',
      explanation:
        '$\\text{Mean} = \\frac{12 + 15 + 18 + 21 + 24}{5} = \\frac{90}{5} = 18$',
    },
    {
      id: 'bcg8-d29-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'Find the median of: 7, 2, 14, 5, 9, 3, 11\n(Hint: sort them first!)',
      answer: '7',
      explanation:
        'Sorted: 2, 3, 5, **7**, 9, 11, 14\n7 values → middle value is the 4th → **Median = 7**',
    },
    {
      id: 'bcg8-d29-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'What is the mode of: 4, 7, 4, 9, 2, 7, 4, 1?',
      options: ['$2$', '$4$', '$7$', 'No mode'],
      answer: '$4$',
      explanation:
        'Count frequencies:\n4 appears 3 times ← most\n7 appears 2 times\nOthers appear once\n**Mode = 4**',
    },
    {
      id: 'bcg8-d29-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'House prices on a street: $400K, $420K, $430K, $410K, $2,100K. Which measure best represents a "typical" house price?',
      options: ['Mean', 'Median', 'Mode', 'Range'],
      answer: 'Median',
      explanation:
        'The $2,100K house is an extreme outlier that would inflate the mean significantly.\nSorted: $400K, $410K, **$420K**, $430K, $2,100K → Median = $420K.\nThe median is not affected by the outlier, making it the best representative.',
    },
    {
      id: 'bcg8-d29-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'The mean of five test scores is 78. Four of the scores are 72, 80, 85, and 70. What is the fifth score?',
      answer: '83',
      explanation:
        'Mean = 78, so total sum = $78 \\times 5 = 390$\nSum of four known scores: $72 + 80 + 85 + 70 = 307$\nFifth score: $390 - 307 = 83$',
    },
  ],
  realLifeExample:
    'Sports teams track player statistics using mean (average points per game), median (to avoid outlier games skewing the picture), and mode (most common score). Data analysis helps coaches make strategic decisions! (스포츠 팀은 평균/중앙값/최빈값으로 선수 성적을 분석해 전략을 세웁니다.)',
};

export default dayContent;
