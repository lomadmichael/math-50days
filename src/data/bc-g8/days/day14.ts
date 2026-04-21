import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 14,
  part: 3,
  title: 'Integer Operations — Multiplication & Division',
  subtitle: 'Master multiplying and dividing integers (정수) using sign rules: same signs → positive, different signs → negative.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Multiplying and Dividing Integers',
      description: 'Watch this lesson to learn the sign rules for multiplying and dividing positive and negative numbers.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d14-c1',
      title: 'Review: What are Integers? (정수)',
      content: '**Integers** (정수) are whole numbers and their negatives:\n$$\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$$\n\n- **Positive integers** (양의 정수): $1, 2, 3, \\ldots$\n- **Negative integers** (음의 정수): $-1, -2, -3, \\ldots$\n- **Zero**: neither positive nor negative',
      type: 'definition',
    },
    {
      id: 'bcg8-d14-c2',
      title: 'The Sign Rules (부호 규칙)',
      content: 'When you multiply or divide two integers:\n\n| Signs | Result |\n|-------|--------|\n| $(+) \\times (+)$ | $+$ (positive) |\n| $(-) \\times (-)$ | $+$ (positive) |\n| $(+) \\times (-)$ | $-$ (negative) |\n| $(-) \\times (+)$ | $-$ (negative) |\n\n**Memory trick:** Same signs → Positive. Different signs → Negative.\n\nThis rule works for **both** multiplication and division!',
      type: 'formula',
    },
    {
      id: 'bcg8-d14-c3',
      title: 'Multiplication Examples',
      content: '$$4 \\times 3 = 12 \\quad (+ \\times + = +)$$\n$$(-4) \\times (-3) = 12 \\quad (- \\times - = +)$$\n$$4 \\times (-3) = -12 \\quad (+ \\times - = -)$$\n$$(-4) \\times 3 = -12 \\quad (- \\times + = -)$$\n\nFor multiple factors, count the negative signs:\n- **Even** number of negatives → **positive** result\n- **Odd** number of negatives → **negative** result\n\nExample: $(-2) \\times (-3) \\times (-4) = -24$ (3 negatives = odd → negative)',
      type: 'example',
    },
    {
      id: 'bcg8-d14-c4',
      title: 'Division Examples',
      content: 'The same sign rules apply to division:\n\n$$12 \\div 4 = 3 \\quad (+ \\div + = +)$$\n$$(-12) \\div (-4) = 3 \\quad (- \\div - = +)$$\n$$12 \\div (-4) = -3 \\quad (+ \\div - = -)$$\n$$(-12) \\div 4 = -3 \\quad (- \\div + = -)$$',
      type: 'example',
    },
    {
      id: 'bcg8-d14-c5',
      title: 'Tip: Find the Number, Then the Sign',
      content: 'Use a two-step approach:\n1. **Ignore the signs** and calculate the absolute value\n2. **Apply the sign rule** at the end\n\nExample: $(-8) \\times (-7)$\n- Step 1: $8 \\times 7 = 56$\n- Step 2: $(- \\times -) = +$, so the answer is $+56$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d14-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is $(-6) \\times 4$?',
      options: ['-24', '24', '-10', '10'],
      answer: '-24',
      explanation: 'Different signs (- and +) → negative result.\n$6 \\times 4 = 24$, so $(-6) \\times 4 = -24$',
    },
    {
      id: 'bcg8-d14-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is $(-5) \\times (-9)$?',
      options: ['-45', '45', '-14', '14'],
      answer: '45',
      explanation: 'Same signs (- and -) → positive result.\n$5 \\times 9 = 45$, so $(-5) \\times (-9) = +45$',
    },
    {
      id: 'bcg8-d14-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $(-36) \\div (-9)$',
      answer: '4',
      explanation: 'Same signs (- and -) → positive result.\n$36 \\div 9 = 4$, so $(-36) \\div (-9) = +4$',
    },
    {
      id: 'bcg8-d14-p4',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is $(-3) \\times (-2) \\times (-5)$?',
      options: ['30', '-30', '10', '-10'],
      answer: '-30',
      explanation: 'Three negative signs = odd number of negatives → negative result.\n$3 \\times 2 \\times 5 = 30$, so the answer is $-30$',
    },
    {
      id: 'bcg8-d14-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'The temperature drops 3°C every hour for 8 hours. Write a multiplication expression and find the total change in temperature.',
      answer: '-24°C',
      explanation: 'A drop is represented as $-3$°C per hour.\nTotal change $= (-3) \\times 8 = -24$°C\n\nThe temperature drops 24°C in total.',
    },
    {
      id: 'bcg8-d14-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'If $a$ is negative and $b$ is positive, which expression gives a positive result?',
      options: ['$a \\times b$', '$a \\div b$', '$a \\times a$', '$a + b$ (when $|a| > |b|$)'],
      answer: '$a \\times a$',
      explanation: 'If $a$ is negative:\n- $a \\times b$: (negative)(positive) = negative\n- $a \\div b$: (negative)(positive) = negative\n- $a \\times a$: (negative)(negative) = **positive** ✓\n- $a + b$ when $|a| > |b|$: negative + smaller positive = negative',
    },
  ],
  realLifeExample: 'If you spend $5 every day, after 7 days your balance changes by $(-5) \\times 7 = -35$ dollars. You have $35 less! (하루에 5달러씩 7일 동안 쓰면 잔액이 -35달러 변해요. 음수 곱셈이 실생활에서 이렇게 쓰여요!)',
};

export default dayContent;
