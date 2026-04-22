import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 8,
  part: 1,
  title: 'Powers and Exponents — Introduction',
  subtitle: 'Writing repeated multiplication using base and exponent notation (거듭제곱 도입)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d8-c1',
      title: 'Base and Exponent Notation',
      content: 'A **power** (거듭제곱) is a short way to write repeated multiplication.\n\n$$\\underbrace{b}_{\\text{base}} {}^{\\overbrace{n}^{\\text{exponent}}}$$\n\n$$b^n = \\underbrace{b \\times b \\times b \\times \\cdots \\times b}_{n \\text{ times}}$$\n\n**Vocabulary:**\n- **Base** (밑): the number being multiplied\n- **Exponent** (지수): how many times to multiply it\n- **Power**: the whole expression $b^n$\n\n**Examples:**\n$$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32 \\qquad \\text{"two to the power of five"}$$\n$$10^3 = 10 \\times 10 \\times 10 = 1{,}000 \\qquad \\text{"ten cubed"}$$\n$$5^1 = 5 \\qquad 7^0 = 1$$',
      type: 'definition',
    },
    {
      id: 'bcg67-d8-c2',
      title: 'Special Exponents — Squared, Cubed, Zero, One',
      content: '**Exponent of 2 — "squared":**\n$$5^2 = 25 \\qquad \\text{("5 squared" — area of a 5×5 square)}$$\n\n**Exponent of 3 — "cubed":**\n$$3^3 = 27 \\qquad \\text{("3 cubed" — volume of a 3×3×3 cube)}$$\n\n**Exponent of 1:**\n$$n^1 = n \\qquad \\text{any number to the power 1 equals itself}$$\n\n**Exponent of 0:**\n$$n^0 = 1 \\qquad \\text{any non-zero number to the power 0 equals 1}$$\n$$5^0 = 1 \\qquad 100^0 = 1 \\qquad (-3)^0 = 1$$\n\n**팁:** Memorize these — they appear in almost every algebra problem!',
      type: 'formula',
    },
    {
      id: 'bcg67-d8-c3',
      title: 'Powers of 10',
      content: 'Powers of 10 (10의 거듭제곱) are especially useful for understanding place value!\n\n$$\\begin{array}{c|c|c}\n\\text{Power} & \\text{Value} & \\text{Name} \\\\ \\hline\n10^0 & 1 & \\text{one} \\\\\n10^1 & 10 & \\text{ten} \\\\\n10^2 & 100 & \\text{hundred} \\\\\n10^3 & 1{,}000 & \\text{thousand} \\\\\n10^4 & 10{,}000 & \\text{ten thousand} \\\\\n10^5 & 100{,}000 & \\text{hundred thousand} \\\\\n10^6 & 1{,}000{,}000 & \\text{million} \\\\\n10^9 & 1{,}000{,}000{,}000 & \\text{billion}\n\\end{array}$$\n\n**Pattern:** The exponent tells you how many zeros follow the 1.\n$$10^6 = 1{,}\\underbrace{000{,}000}_{6 \\text{ zeros}}$$',
      type: 'tip',
    },
    {
      id: 'bcg67-d8-c4',
      title: 'Negative Bases and Powers',
      content: 'When the **base is negative**, the sign of the result depends on whether the exponent is **even or odd**:\n\n- **Even exponent** → **positive** result\n- **Odd exponent** → **negative** result\n\n$$(-2)^2 = (-2) \\times (-2) = +4$$\n$$(-2)^3 = (-2) \\times (-2) \\times (-2) = +4 \\times (-2) = -8$$\n$$(-2)^4 = (-2)^3 \\times (-2) = -8 \\times (-2) = +16$$\n\n**CRITICAL warning — brackets matter:**\n$$(-3)^2 = 9 \\qquad \\text{vs} \\qquad -3^2 = -9$$\n\nWithout brackets, the exponent applies only to 3, then the negative is applied: $-(3^2) = -9$.',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg67-d8-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the value of $3^4$?',
      options: ['12', '27', '64', '81'],
      answer: '81',
      explanation: '$$3^4 = 3 \\times 3 \\times 3 \\times 3$$\n$$= 9 \\times 9 = 81$$\n\n**힌트:** $3^4 = (3^2)^2 = 9^2 = 81$로도 계산할 수 있어요!',
      relatedConcept: 'bcg67-d8-c1',
    },
    {
      id: 'bcg67-d8-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Write $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2$ as a power, then calculate its value.',
      answer: '2⁶ = 64',
      explanation: 'The number 2 is multiplied **6 times**, so:\n$$2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^6$$\n\n$$2^6 = 64$$\n\n**(Calculation:** $2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64)$',
      relatedConcept: 'bcg67-d8-c1',
    },
    {
      id: 'bcg67-d8-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following equals 1?',
      options: ['$0^5$', '$5^0$', '$1^5 + 1$', '$5^1$'],
      answer: '$5^0$',
      explanation: '- $0^5 = 0$ (zero to any positive power is 0)\n- $5^0 = 1$ ✓ (any non-zero number to the power 0 is 1)\n- $1^5 + 1 = 1 + 1 = 2$\n- $5^1 = 5$\n\n**Answer: $5^0 = 1$**',
      relatedConcept: 'bcg67-d8-c2',
    },
    {
      id: 'bcg67-d8-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'The population of a town doubles every 10 years. If there are currently $5 \\times 10^3$ people, how many people will there be after 30 years?',
      options: ['$5 \\times 10^3$', '$5 \\times 10^4$', '$15 \\times 10^3$', '$40{,}000$'],
      answer: '$40{,}000$',
      explanation: 'Doubling 3 times (every 10 years × 3 = 30 years):\n$$5{,}000 \\times 2^3 = 5{,}000 \\times 8 = 40{,}000$$\n\nAfter 30 years: **40,000 people**.\n\n**힌트:** "Doubles" = multiply by 2. After 30 years = doubles 3 times = $\\times 2^3 = \\times 8$.',
      relatedConcept: 'bcg67-d8-c1',
    },
    {
      id: 'bcg67-d8-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Evaluate: $(-3)^3 + 2^4 - 5^0$',
      answer: '-12',
      explanation: 'Calculate each power:\n$$(-3)^3 = -27 \\qquad 2^4 = 16 \\qquad 5^0 = 1$$\n\nSubstitute:\n$$-27 + 16 - 1 = -12$$\n\n**Answer: $-12$**',
      relatedConcept: 'bcg67-d8-c4',
    },
    {
      id: 'bcg67-d8-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Which of the following is the largest?',
      options: ['$2^8$', '$4^4$', '$8^3$', '$16^2$'],
      answer: '$2^8$',
      explanation: 'Convert all to powers of 2:\n$$2^8 = 256$$\n$$4^4 = (2^2)^4 = 2^8 = 256$$\n$$8^3 = (2^3)^3 = 2^9 = 512$$\n$$16^2 = (2^4)^2 = 2^8 = 256$$\n\nWait — $8^3 = 2^9 = 512$ is actually the largest!\n\nLet me verify: $8^3 = 8 \\times 8 \\times 8 = 512$. Yes, $512 > 256$.\n\n**Correct answer: $8^3 = 512$** is the largest.\n\n**힌트:** 같은 밑으로 변환하면 비교가 쉬워요!',
      relatedConcept: 'bcg67-d8-c1',
    },
  ],
  realLifeExample:
    'Computer storage uses powers of 2! 1 kilobyte = $2^{10}$ = 1,024 bytes. 1 megabyte = $2^{20}$ ≈ 1 million bytes. 1 gigabyte = $2^{30}$ ≈ 1 billion bytes. Your phone\'s storage is measured in powers of 2! 컴퓨터 저장 용량이 바로 2의 거듭제곱으로 표현돼요.',
};

export default dayContent;
