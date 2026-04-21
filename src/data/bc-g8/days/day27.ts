import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 27,
  part: 5,
  title: 'Probability of Independent Events',
  subtitle: 'Multiply probabilities when events do not affect each other!',
  lectures: [],
  concepts: [
    {
      id: 'bcg8-d27-c1',
      title: 'Review: Basic Probability (확률 기초)',
      content:
        '**Probability (확률)** measures how likely an event is to happen:\n\n$$P(\\text{event}) = \\frac{\\text{number of favorable outcomes}}{\\text{total number of outcomes}}$$\n\nProbability is always between 0 and 1:\n- $P = 0$: impossible (절대 일어나지 않음)\n- $P = 1$: certain (반드시 일어남)\n- $P = 0.5$: equally likely (반반)\n\nExample: flipping a fair coin → $P(\\text{Heads}) = \\frac{1}{2}$',
      type: 'definition',
    },
    {
      id: 'bcg8-d27-c2',
      title: 'Independent Events (독립 사건)',
      content:
        '**Independent events (독립 사건)** are events where the outcome of one does NOT affect the outcome of the other.\n\nExamples of independent events:\n- Flipping a coin AND rolling a die\n- Drawing a card, replacing it, then drawing again\n\nExamples of NOT independent (dependent 종속 사건):\n- Drawing a card WITHOUT replacing it (the deck changes!)',
      type: 'definition',
    },
    {
      id: 'bcg8-d27-c3',
      title: 'Multiplication Rule for Independent Events (곱의 법칙)',
      content:
        'For two independent events A and B:\n\n$$P(A \\text{ and } B) = P(A) \\times P(B)$$\n\nExample: Flip a coin AND roll a die. What is $P(\\text{Heads and 4})$?\n\n$P(\\text{Heads}) = \\frac{1}{2}$, $P(4) = \\frac{1}{6}$\n\n$P(\\text{Heads and 4}) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$',
      type: 'formula',
    },
    {
      id: 'bcg8-d27-c4',
      title: 'Extending to Three Events (3개 사건으로 확장)',
      content:
        'The multiplication rule extends to any number of independent events:\n\n$$P(A \\text{ and } B \\text{ and } C) = P(A) \\times P(B) \\times P(C)$$\n\nExample: Flip a coin three times. $P(\\text{all Heads})$?\n\n$= \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{8}$\n\nOut of 8 equally likely outcomes, only 1 gives HHH.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d27-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'A bag has 3 red and 2 blue marbles. You draw one, look at it, put it back, then draw again. Are these events independent?',
      options: [
        'Yes — replacing the marble means the second draw is unaffected',
        'No — the color of the first changes the bag',
        'Yes — only if you drew red first',
        'No — the bag is the same',
      ],
      answer: 'Yes — replacing the marble means the second draw is unaffected',
      explanation:
        'Since the marble is replaced (with replacement = 교체 있음), the bag is exactly the same for the second draw. The two draws are **independent**.',
    },
    {
      id: 'bcg8-d27-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'A spinner has 4 equal sections (1, 2, 3, 4). You spin it twice. What is $P(\\text{getting 3 both times})$?',
      answer: '1/16',
      explanation:
        '$P(3) = \\frac{1}{4}$ for each spin.\nThe spins are independent, so:\n$P(3 \\text{ and } 3) = \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$',
    },
    {
      id: 'bcg8-d27-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question:
        'You flip a fair coin and roll a standard 6-sided die. What is $P(\\text{Tails and 6})$?',
      options: ['$\\frac{1}{12}$', '$\\frac{1}{8}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
      answer: '$\\frac{1}{12}$',
      explanation:
        '$P(\\text{Tails}) = \\frac{1}{2}$, $P(6) = \\frac{1}{6}$\n$P(\\text{Tails and } 6) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$',
    },
    {
      id: 'bcg8-d27-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'A student guesses randomly on a 2-question multiple choice quiz. Each question has 4 options. What is the probability of guessing BOTH correct?',
      answer: '1/16',
      explanation:
        '$P(\\text{correct}) = \\frac{1}{4}$ for each question (independent guesses).\n$P(\\text{both correct}) = \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16} \\approx 6.25\\%$\nGuessing is risky!',
    },
    {
      id: 'bcg8-d27-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'The probability it rains on any given day in Surrey is $0.4$. Assuming days are independent, what is the probability it rains on exactly none of the next 3 days?',
      answer: '0.216',
      explanation:
        '$P(\\text{no rain}) = 1 - 0.4 = 0.6$\n$P(\\text{no rain 3 days}) = 0.6 \\times 0.6 \\times 0.6 = 0.6^3 = 0.216$\nAbout a 21.6% chance of three dry days in a row.',
    },
  ],
  realLifeExample:
    'In sports, coaches use probability to plan strategy. If a basketball player makes 70% of free throws ($P = 0.7$), the probability of making two in a row is $0.7 \\times 0.7 = 0.49$ — just under 50%! (농구 자유투 성공률 70%인 선수가 연속 2개를 성공할 확률: 49%!)',
};

export default dayContent;
