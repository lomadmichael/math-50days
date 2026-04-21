import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 18,
  part: 3,
  title: 'Ratios & Rates',
  subtitle: 'Understand ratios (비) and rates (비율) — how to write, simplify, and compare them.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Ratios and Rates',
      description: 'Watch this lesson to learn the difference between ratios and rates and how to work with them.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d18-c1',
      title: 'What is a Ratio? (비)',
      content: 'A **ratio** (비) compares two quantities that have the **same units**.\n\nWe write a ratio as:\n- $a : b$ (colon notation)\n- $\\frac{a}{b}$ (fraction notation)\n- "$a$ to $b$" (word form)\n\nExample: In a class of 12 boys and 18 girls:\n$$\\text{Ratio of boys to girls} = 12 : 18 = 2 : 3$$\n\nRatios can be simplified like fractions — divide both parts by the GCF (최대공약수).',
      type: 'definition',
    },
    {
      id: 'bcg8-d18-c2',
      title: 'What is a Rate? (비율)',
      content: 'A **rate** (비율) compares two quantities with **different units**.\n\nExamples:\n- 120 km in 2 hours → rate of travel\n- $\\$3.50$ for 1 kg of apples → rate of price\n- 60 words per minute → rate of typing\n\n**Key difference:**\n- **Ratio**: boys $:$ girls (same type → people)\n- **Rate**: km $:$ hours (different types)',
      type: 'definition',
    },
    {
      id: 'bcg8-d18-c3',
      title: 'Simplifying Ratios (비 간략화)',
      content: 'To simplify a ratio $a : b$, divide both numbers by their **GCF** (최대공약수).\n\nExample: Simplify $24 : 36$\n- GCF of 24 and 36 = 12\n- $24 \\div 12 = 2$, $36 \\div 12 = 3$\n- Simplified: $2 : 3$\n\nEquivalent ratios (동치비) are equal:\n$$1 : 2 = 3 : 6 = 5 : 10 \\quad (\\text{all the same ratio})$$',
      type: 'example',
    },
    {
      id: 'bcg8-d18-c4',
      title: 'Three-Part Ratios (세 수의 비)',
      content: 'Ratios can compare three quantities:\n\nExample: A fruit salad uses 2 bananas, 3 apples, and 5 grapes.\n$$\\text{Bananas : Apples : Grapes} = 2 : 3 : 5$$\n\nThe total parts $= 2 + 3 + 5 = 10$\n\nThis means:\n- Bananas make up $\\frac{2}{10} = 20\\%$ of the fruit\n- Apples: $\\frac{3}{10} = 30\\%$\n- Grapes: $\\frac{5}{10} = 50\\%$',
      type: 'example',
    },
    {
      id: 'bcg8-d18-c5',
      title: 'Order Matters! (순서 주의)',
      content: 'The order in a ratio matters!\n\n$3 : 5$ is NOT the same as $5 : 3$.\n\nAlways read the question carefully:\n- "Ratio of **boys** to **girls**" → boys first\n- "Ratio of **red** to **blue** to **green**" → that exact order\n\nMixing up the order is the most common mistake!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg8-d18-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Simplify the ratio $18 : 24$.',
      options: ['6 : 8', '3 : 4', '9 : 12', '2 : 3'],
      answer: '3 : 4',
      explanation: 'GCF of 18 and 24 = 6\n$18 \\div 6 = 3$, $24 \\div 6 = 4$\nSimplified: $3 : 4$',
    },
    {
      id: 'bcg8-d18-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following is a RATE (not a ratio)?',
      options: ['3 red to 5 blue', 'boys to girls = 2:3', '80 km per hour', '6 apples to 10 oranges'],
      answer: '80 km per hour',
      explanation: 'A **rate** compares quantities with **different units**.\n"80 km per hour" compares km (distance) to hours (time) — different units, so it\'s a rate.\nAll others compare the same type of thing.',
    },
    {
      id: 'bcg8-d18-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'A bag contains 15 red marbles and 25 blue marbles. Write the ratio of red to blue in simplest form.',
      answer: '3 : 5',
      explanation: 'GCF of 15 and 25 = 5\n$15 \\div 5 = 3$, $25 \\div 5 = 5$\nRatio of red to blue $= 3 : 5$',
    },
    {
      id: 'bcg8-d18-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Orange paint is mixed in the ratio of red to yellow = $3 : 2$. If you use 12 cups of red, how many cups of yellow do you need?',
      answer: '8 cups',
      explanation: 'The ratio is $3 : 2$, so for every 3 red, use 2 yellow.\n\nScale factor: $12 \\div 3 = 4$\n\nYellow needed: $2 \\times 4 = 8$ cups',
    },
    {
      id: 'bcg8-d18-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A recipe uses flour, sugar, and butter in the ratio $4 : 2 : 1$. If you use 28 cups total, how many cups of flour do you use?',
      options: ['4 cups', '8 cups', '14 cups', '16 cups'],
      answer: '16 cups',
      explanation: 'Total parts $= 4 + 2 + 1 = 7$\n\nFlour $= \\frac{4}{7} \\times 28 = 16$ cups',
    },
  ],
  realLifeExample: 'When mixing concrete, builders use a ratio of cement : sand : gravel = $1 : 2 : 3$. For every 1 bag of cement, they need 2 bags of sand and 3 bags of gravel. (건설 현장에서 콘크리트를 섞을 때 비율이 아주 중요해요!)',
};

export default dayContent;
