import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 13,
  part: 2,
  title: 'Converting Fractions, Decimals, and Percents',
  subtitle: 'Moving between three representations of the same value (분수·소수·% 변환)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d13-c1',
      title: 'The Big Three: Fractions, Decimals, Percents',
      content: 'Fractions (분수), decimals (소수), and percents (백분율) are three ways to express the **same value**.\n\n$$\\frac{1}{2} = 0.5 = 50\\%$$\n\n**Percent** (%) means "out of 100" — "per cent" from Latin *per centum*.\n\n$$50\\% = \\frac{50}{100} = \\frac{1}{2} = 0.5$$\n\n**Common conversions to memorize:**\n$$\\begin{array}{c|c|c}\n\\text{Fraction} & \\text{Decimal} & \\text{Percent} \\\\ \\hline\n\\frac{1}{2} & 0.5 & 50\\% \\\\\n\\frac{1}{4} & 0.25 & 25\\% \\\\\n\\frac{3}{4} & 0.75 & 75\\% \\\\\n\\frac{1}{5} & 0.2 & 20\\% \\\\\n\\frac{1}{10} & 0.1 & 10\\% \\\\\n\\frac{1}{3} & 0.\\overline{3} & 33.\\overline{3}\\%\n\\end{array}$$',
      type: 'definition',
    },
    {
      id: 'bcg67-d13-c2',
      title: 'Fraction ↔ Decimal',
      content: '**Fraction → Decimal:** Divide the numerator by the denominator.\n$$\\frac{3}{4} = 3 \\div 4 = 0.75$$\n$$\\frac{5}{8} = 5 \\div 8 = 0.625$$\n\n**Decimal → Fraction:** Read the decimal place value, then simplify.\n$$0.6 = \\frac{6}{10} = \\frac{3}{5}$$\n$$0.35 = \\frac{35}{100} = \\frac{7}{20}$$\n$$0.125 = \\frac{125}{1000} = \\frac{1}{8}$$\n\n**Repeating decimals** (순환소수): Some fractions create decimals that repeat.\n$$\\frac{1}{3} = 0.\\overline{3} = 0.333\\ldots \\qquad \\frac{2}{3} = 0.\\overline{6} = 0.666\\ldots$$',
      type: 'formula',
    },
    {
      id: 'bcg67-d13-c3',
      title: 'Decimal ↔ Percent',
      content: 'The conversions are simple shifts:\n\n**Decimal → Percent:** Multiply by 100 (move decimal 2 places **right**), add %.\n$$0.45 \\rightarrow 45\\% \\qquad 0.07 \\rightarrow 7\\% \\qquad 1.3 \\rightarrow 130\\%$$\n\n**Percent → Decimal:** Divide by 100 (move decimal 2 places **left**), remove %.\n$$62\\% \\rightarrow 0.62 \\qquad 8\\% \\rightarrow 0.08 \\qquad 150\\% \\rightarrow 1.5$$\n\n**Memory trick:** "Percent to decimal — point jumps 2 to the left (De-crease). Decimal to percent — point jumps 2 to the right (Per-cent up)."\n\n**팁:** Percentages over 100% are possible! $150\\%$ means the value is 1.5 times as large.',
      type: 'formula',
    },
    {
      id: 'bcg67-d13-c4',
      title: 'Fraction ↔ Percent',
      content: '**Fraction → Percent:**\n\nMethod 1: Convert fraction to decimal, then to percent.\n$$\\frac{3}{5} = 0.6 = 60\\%$$\n\nMethod 2: Scale denominator to 100 (if possible).\n$$\\frac{3}{5} = \\frac{60}{100} = 60\\%$$\n\n**Percent → Fraction:**\nWrite percent over 100, then simplify.\n$$35\\% = \\frac{35}{100} = \\frac{7}{20}$$\n$$120\\% = \\frac{120}{100} = \\frac{6}{5} = 1\\frac{1}{5}$$\n\n**경고:** When the denominator cannot be scaled to 100 easily (e.g., $\\frac{1}{7}$), divide to get the decimal first:\n$$\\frac{1}{7} = 0.\\overline{142857} \\approx 14.3\\%$$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg67-d13-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Convert $\\dfrac{3}{8}$ to a decimal.',
      options: ['0.35', '0.375', '0.38', '0.3'],
      answer: '0.375',
      explanation: 'Divide numerator by denominator:\n$$3 \\div 8 = 0.375$$\n\n**Long division:** $3.000 \\div 8$:\n$30 \\div 8 = 3$ remainder $6$\n$60 \\div 8 = 7$ remainder $4$\n$40 \\div 8 = 5$ exactly\n\n$$\\frac{3}{8} = 0.375$$',
      relatedConcept: 'bcg67-d13-c2',
    },
    {
      id: 'bcg67-d13-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Convert $0.64$ to a fraction in lowest terms.',
      answer: '16/25',
      explanation: '$0.64 = \\dfrac{64}{100}$\n\nSimplify: $\\text{GCF}(64, 100) = 4$\n\n$$\\frac{64 \\div 4}{100 \\div 4} = \\frac{16}{25}$$\n\n**Check:** $16 \\div 25 = 0.64$ ✓',
      relatedConcept: 'bcg67-d13-c2',
    },
    {
      id: 'bcg67-d13-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Convert $7\\%$ to a decimal.',
      options: ['7', '0.7', '0.07', '0.007'],
      answer: '0.07',
      explanation: 'Percent → decimal: divide by 100 (move decimal 2 places left).\n\n$$7\\% = \\frac{7}{100} = 0.07$$\n\n**Common mistake:** $7\\% = 0.7$ is **wrong** — that would be 70%.',
      relatedConcept: 'bcg67-d13-c3',
    },
    {
      id: 'bcg67-d13-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A basketball player makes $\\dfrac{7}{10}$ of her free throws. What percentage does she make?',
      options: ['7%', '17%', '70%', '0.7%'],
      answer: '70%',
      explanation: '$$\\frac{7}{10} = \\frac{70}{100} = 70\\%$$\n\nOr: $7 \\div 10 = 0.7 \\rightarrow 0.7 \\times 100 = 70\\%$\n\nShe makes **70%** of her free throws.',
      relatedConcept: 'bcg67-d13-c4',
    },
    {
      id: 'bcg67-d13-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Convert $37.5\\%$ to a fraction in lowest terms.',
      answer: '3/8',
      explanation: '$$37.5\\% = \\frac{37.5}{100} = \\frac{375}{1000}$$\n\n$\\text{GCF}(375, 1000) = 125$\n\n$$\\frac{375 \\div 125}{1000 \\div 125} = \\frac{3}{8}$$\n\n**Check:** $3 \\div 8 = 0.375 = 37.5\\%$ ✓',
      relatedConcept: 'bcg67-d13-c4',
    },
    {
      id: 'bcg67-d13-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Order these from smallest to largest: $\\dfrac{5}{6}$, $\\quad 0.83$, $\\quad 84\\%$',
      options: [
        '$0.83 < 84\\% < \\dfrac{5}{6}$',
        '$\\dfrac{5}{6} < 0.83 < 84\\%$',
        '$84\\% < 0.83 < \\dfrac{5}{6}$',
        '$0.83 < \\dfrac{5}{6} < 84\\%$',
      ],
      answer: '$0.83 < \\dfrac{5}{6} < 84\\%$',
      explanation: 'Convert all to decimals:\n$$\\frac{5}{6} = 0.8\\overline{3} \\approx 0.833$$\n$$0.83 = 0.830$$\n$$84\\% = 0.840$$\n\nOrder: $0.830 < 0.833 < 0.840$\n\n$$0.83 < \\frac{5}{6} < 84\\%$$',
      relatedConcept: 'bcg67-d13-c2',
    },
  ],
  realLifeExample:
    'On a test, you score 36 out of 40. That\'s $\\frac{36}{40} = \\frac{9}{10} = 0.9 = 90\\%$. A clothing sale offers "30% off" — you pay $\\frac{70}{100} = 0.7$ of the original price. Converting between representations helps you make quick comparisons! 시험 점수와 할인율 모두 분수·소수·%로 표현할 수 있어요.',
};

export default dayContent;
