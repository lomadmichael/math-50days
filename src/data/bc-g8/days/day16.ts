import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 16,
  part: 3,
  title: 'Percents — Percent of a Number',
  subtitle: 'Learn what percent (퍼센트) means and how to find N% of any number.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Percents — Finding a Percent of a Number',
      description: 'Watch this lesson to understand what percent means and how to calculate it.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d16-c1',
      title: 'What is Percent? (퍼센트)',
      content: '**Percent** (퍼센트) means "per hundred" (백분의).\n\nThe symbol is **%**.\n\n$$25\\% = \\frac{25}{100} = 0.25$$\n\nSo 25% of something means 25 out of every 100 parts.\n\nKey equivalents to memorize:\n- $50\\% = \\frac{1}{2} = 0.5$\n- $25\\% = \\frac{1}{4} = 0.25$\n- $10\\% = \\frac{1}{10} = 0.1$\n- $100\\% = 1$ (the whole thing)',
      type: 'definition',
    },
    {
      id: 'bcg8-d16-c2',
      title: 'Finding N% of a Number — Two Methods',
      content: '**Method 1: Decimal**\nConvert the percent to a decimal, then multiply.\n\n$$N\\% \\text{ of } x = \\frac{N}{100} \\times x$$\n\nExample: $30\\%$ of $80$\n$$= 0.30 \\times 80 = 24$$\n\n**Method 2: Fraction**\nWrite the percent as a fraction over 100.\n\n$$30\\% \\text{ of } 80 = \\frac{30}{100} \\times 80 = \\frac{2400}{100} = 24$$',
      type: 'formula',
    },
    {
      id: 'bcg8-d16-c3',
      title: 'Converting Between Percent, Decimal, and Fraction',
      content: '| Fraction | Decimal | Percent |\n|----------|---------|--------|\n| $\\frac{1}{2}$ | $0.5$ | $50\\%$ |\n| $\\frac{1}{4}$ | $0.25$ | $25\\%$ |\n| $\\frac{3}{4}$ | $0.75$ | $75\\%$ |\n| $\\frac{1}{5}$ | $0.2$ | $20\\%$ |\n| $\\frac{1}{3}$ | $0.333...$ | $33.3\\%$ |\n\n**Percent → Decimal:** divide by 100 (move decimal 2 left)\n**Decimal → Percent:** multiply by 100 (move decimal 2 right)',
      type: 'tip',
    },
    {
      id: 'bcg8-d16-c4',
      title: 'Finding the Whole (전체 구하기)',
      content: 'Sometimes you know a percent and the part, and need to find the whole:\n\n$$\\text{Whole} = \\frac{\\text{Part}}{\\text{Percent}} \\times 100$$\n\nExample: 20% of a number is 14. Find the number.\n$$\\text{Whole} = \\frac{14}{20} \\times 100 = 70$$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg8-d16-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is 40% of 150?',
      options: ['40', '60', '90', '100'],
      answer: '60',
      explanation: '$40\\%$ of $150 = 0.40 \\times 150 = 60$\n\nOr: $\\frac{40}{100} \\times 150 = \\frac{6000}{100} = 60$',
    },
    {
      id: 'bcg8-d16-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Convert 65% to a decimal.',
      answer: '0.65',
      explanation: '$65\\% = \\frac{65}{100} = 0.65$\n\nDivide by 100: move the decimal point 2 places to the left.',
    },
    {
      id: 'bcg8-d16-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which fraction is equal to 75%?',
      options: ['$\\frac{7}{5}$', '$\\frac{3}{4}$', '$\\frac{7}{10}$', '$\\frac{4}{3}$'],
      answer: '$\\frac{3}{4}$',
      explanation: '$75\\% = \\frac{75}{100} = \\frac{3}{4}$ (dividing numerator and denominator by 25)',
    },
    {
      id: 'bcg8-d16-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A jacket costs $120. It is on sale for 35% off. How much is the discount?',
      answer: '$42',
      explanation: 'Discount $= 35\\%$ of $120 = 0.35 \\times 120 = \\$42$\n\nThe jacket\'s discount is $42.',
    },
    {
      id: 'bcg8-d16-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '15% of a number is 9. What is the number?',
      options: ['45', '60', '75', '135'],
      answer: '60',
      explanation: '$\\text{Whole} = \\frac{\\text{Part}}{\\text{Percent}} \\times 100 = \\frac{9}{15} \\times 100 = 0.6 \\times 100 = 60$',
    },
    {
      id: 'bcg8-d16-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'In a class of 30 students, 60% are girls. How many boys are in the class?',
      answer: '12 boys',
      explanation: 'Girls $= 60\\%$ of $30 = 0.60 \\times 30 = 18$ girls\n\nBoys $= 30 - 18 = 12$ boys',
    },
  ],
  realLifeExample: 'When you leave a tip at a restaurant, you calculate a percent of the bill. A 15% tip on a $40 meal is $0.15 \\times 40 = \\$6$. (레스토랑에서 팁을 낼 때 퍼센트 계산을 해요. 40달러 음식에 15% 팁이면 6달러예요!)',
};

export default dayContent;
