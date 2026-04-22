import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 5,
  part: 1,
  title: 'Scientific Notation',
  subtitle: 'Express very large or very small numbers as a product of a number and a power of 10.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d5-c1',
      title: 'What is Scientific Notation?',
      content:
        '**Scientific notation** (과학적 표기법) is a way to write very large or very small numbers compactly.\n\nA number in scientific notation has the form:\n$$a \\times 10^n$$\n\nwhere $1 \\leq |a| < 10$ and $n$ is an integer.\n\n**Large numbers (양수 지수):**\n- $3{,}400{,}000 = 3.4 \\times 10^6$\n- $93{,}000{,}000 = 9.3 \\times 10^7$ (distance from Earth to Sun in miles)\n\n**Small numbers (음수 지수):**\n- $0.000045 = 4.5 \\times 10^{-5}$\n- $0.000000001 = 1 \\times 10^{-9}$',
      type: 'definition',
    },
    {
      id: 'bcg9-d5-c2',
      title: 'Converting to Scientific Notation',
      content:
        'To convert a number **to** scientific notation:\n\n**Step 1:** Place the decimal point after the first non-zero digit.\n**Step 2:** Count how many places the decimal moved — that count is your exponent.\n- Moved **left** (large number) → **positive** exponent\n- Moved **right** (small number) → **negative** exponent\n\n**Example 1:** $456{,}000$\nDecimal moves 5 places left: $4.56 \\times 10^5$\n\n**Example 2:** $0.00072$\nDecimal moves 4 places right: $7.2 \\times 10^{-4}$\n\n**Example 3:** $8$ (a single digit)\nDecimal doesn\'t move: $8 \\times 10^0 = 8 \\times 1$',
      type: 'formula',
    },
    {
      id: 'bcg9-d5-c3',
      title: 'Converting from Scientific Notation',
      content:
        'To convert **from** scientific notation to standard form:\n\n- **Positive exponent** → move decimal **right** (number gets larger)\n- **Negative exponent** → move decimal **left** (number gets smaller)\n\n**Example 1:** $2.7 \\times 10^4$\nMove decimal 4 places right: $27{,}000$\n\n**Example 2:** $6.03 \\times 10^{-3}$\nMove decimal 3 places left: $0.00603$\n\n**Tip:** The exponent tells you the number of positions to shift. Fill with zeros as needed.',
      type: 'example',
    },
    {
      id: 'bcg9-d5-c4',
      title: 'Multiplying and Dividing in Scientific Notation',
      content:
        'To **multiply** numbers in scientific notation:\n1. Multiply the coefficients\n2. Add the exponents (product of powers rule)\n\n$$(3 \\times 10^4) \\times (2 \\times 10^3) = (3 \\times 2) \\times 10^{4+3} = 6 \\times 10^7$$\n\nTo **divide**:\n1. Divide the coefficients\n2. Subtract the exponents\n\n$$\\frac{8 \\times 10^6}{2 \\times 10^2} = \\frac{8}{2} \\times 10^{6-2} = 4 \\times 10^4$$\n\n**If the result\'s coefficient is not between 1 and 10**, adjust:\n$$(5 \\times 10^3) \\times (4 \\times 10^2) = 20 \\times 10^5 = 2.0 \\times 10^6$$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d5-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following is $72{,}000$ written in scientific notation?',
      options: ['$72 \\times 10^3$', '$7.2 \\times 10^4$', '$0.72 \\times 10^5$', '$7.2 \\times 10^5$'],
      answer: '$7.2 \\times 10^4$',
      explanation:
        '$72{,}000 = 7.2 \\times 10{,}000 = 7.2 \\times 10^4$\n\nThe coefficient must satisfy $1 \\leq |a| < 10$, so $7.2$ is correct (not 72 or 0.72).',
      relatedConcept: 'bcg9-d5-c2',
    },
    {
      id: 'bcg9-d5-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Write $0.0000058$ in scientific notation.',
      answer: '$5.8 \\times 10^{-6}$',
      explanation:
        'Move the decimal 6 places to the right to get $5.8$.\nMoving right → negative exponent.\n$0.0000058 = 5.8 \\times 10^{-6}$',
      relatedConcept: 'bcg9-d5-c2',
    },
    {
      id: 'bcg9-d5-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Convert $3.04 \\times 10^5$ to standard form.',
      answer: '$304{,}000$',
      explanation:
        'Positive exponent 5 → move decimal 5 places to the right.\n$3.04 \\rightarrow 304{,}000$',
      relatedConcept: 'bcg9-d5-c3',
    },
    {
      id: 'bcg9-d5-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'Calculate $(4 \\times 10^5) \\times (3 \\times 10^{-2})$. Give your answer in scientific notation.',
      answer: '$1.2 \\times 10^4$',
      explanation:
        'Coefficients: $4 \\times 3 = 12$\nExponents: $10^{5+(-2)} = 10^3$\nResult: $12 \\times 10^3$\nAdjust: $12 \\times 10^3 = 1.2 \\times 10^4$',
      relatedConcept: 'bcg9-d5-c4',
    },
    {
      id: 'bcg9-d5-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'The speed of light is approximately $3 \\times 10^8$ m/s. Light takes about $500$ seconds to travel from the Sun to Earth. How far away is the Sun in metres?',
      options: ['$1.5 \\times 10^9$ m', '$1.5 \\times 10^{10}$ m', '$1.5 \\times 10^{11}$ m', '$1.5 \\times 10^{12}$ m'],
      answer: '$1.5 \\times 10^{11}$ m',
      explanation:
        'Distance $= $ speed $\\times$ time\n$= 3 \\times 10^8 \\text{ m/s} \\times 500 \\text{ s}$\n$= 3 \\times 10^8 \\times 5 \\times 10^2$\n$= 15 \\times 10^{10}$\n$= 1.5 \\times 10^{11}$ m',
      relatedConcept: 'bcg9-d5-c4',
    },
    {
      id: 'bcg9-d5-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Evaluate $\\dfrac{6.4 \\times 10^9}{1.6 \\times 10^{-3}}$. Express your answer in scientific notation.',
      answer: '$4 \\times 10^{12}$',
      explanation:
        'Divide coefficients: $\\dfrac{6.4}{1.6} = 4$\n\nSubtract exponents: $10^{9-(-3)} = 10^{9+3} = 10^{12}$\n\nResult: $4 \\times 10^{12}$\n\nThe coefficient 4 is already between 1 and 10, so no adjustment needed.',
      relatedConcept: 'bcg9-d5-c4',
    },
  ],
  realLifeExample:
    'The mass of a single proton is $1.67 \\times 10^{-27}$ kg and the mass of the Sun is $2 \\times 10^{30}$ kg. Without scientific notation, we would need to write 27 or 30 zeros! 과학 분야에서 극단적으로 크거나 작은 값을 다룰 때 과학적 표기법은 필수예요.',
};

export default dayContent;
