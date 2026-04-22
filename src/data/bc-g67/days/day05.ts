import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 5,
  part: 1,
  title: 'Factors and Multiples',
  subtitle: 'Finding GCF and LCM using lists and prime factorization (약수와 배수 — 최대공약수·최소공배수)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d5-c1',
      title: 'Factors and Multiples',
      content: '**Factors** (약수) of a number are integers that divide into it evenly (no remainder).\n\n**Multiples** (배수) are the products you get by multiplying a number by $1, 2, 3, \\ldots$\n\n**Factors of 12:** $1, 2, 3, 4, 6, 12$\n(because $12 \\div 1 = 12$, $12 \\div 2 = 6$, $12 \\div 3 = 4$, $12 \\div 4 = 3$, $12 \\div 6 = 2$, $12 \\div 12 = 1$)\n\n**Multiples of 5:** $5, 10, 15, 20, 25, 30, \\ldots$\n(because $5 \\times 1, 5 \\times 2, 5 \\times 3, \\ldots$)\n\n**Key relationship:** If $a$ is a factor of $b$, then $b$ is a multiple of $a$.\nExample: $4$ is a factor of $12$ ↔ $12$ is a multiple of $4$.',
      type: 'definition',
    },
    {
      id: 'bcg67-d5-c2',
      title: 'Greatest Common Factor (GCF)',
      content: 'The **Greatest Common Factor** (최대공약수, GCF or GCD) is the largest factor shared by two or more numbers.\n\n**Method 1 — List all factors:**\nFind GCF of 18 and 24:\n- Factors of 18: $1, 2, 3, \\mathbf{6}, 9, 18$\n- Factors of 24: $1, 2, 3, 4, \\mathbf{6}, 8, 12, 24$\n- Common factors: $1, 2, 3, 6$\n- **GCF = 6**\n\n**Method 2 — Prime factorization:**\n$$18 = 2 \\times 3^2 \\qquad 24 = 2^3 \\times 3$$\nTake the **lowest power** of each shared prime:\n$$\\text{GCF} = 2^1 \\times 3^1 = 6$$\n\n**팁:** GCF is used to **simplify fractions** and **split things into equal groups**.',
      type: 'formula',
    },
    {
      id: 'bcg67-d5-c3',
      title: 'Least Common Multiple (LCM)',
      content: 'The **Least Common Multiple** (최소공배수, LCM) is the smallest multiple shared by two or more numbers.\n\n**Method 1 — List multiples:**\nFind LCM of 4 and 6:\n- Multiples of 4: $4, 8, \\mathbf{12}, 16, 20, 24, \\ldots$\n- Multiples of 6: $6, \\mathbf{12}, 18, 24, \\ldots$\n- **LCM = 12**\n\n**Method 2 — Prime factorization:**\n$$4 = 2^2 \\qquad 6 = 2 \\times 3$$\nTake the **highest power** of each prime that appears:\n$$\\text{LCM} = 2^2 \\times 3 = 12$$\n\n**팁:** LCM is used to **add fractions** (finding a common denominator) and **synchronizing events**.',
      type: 'formula',
    },
    {
      id: 'bcg67-d5-c4',
      title: 'GCF vs LCM — Knowing Which to Use',
      content: '**Use GCF when:**\n- Splitting into equal groups (largest possible group)\n- Simplifying fractions\n- "Greatest/largest number that divides both"\n\n**Use LCM when:**\n- Events repeat and you want them to coincide again\n- Finding a common denominator\n- "Smallest number both divide into"\n\n**Example — GCF:** You have 24 apples and 36 oranges. You want to make identical bags with no fruit left over. Maximum bags = $\\text{GCF}(24, 36) = 12$ bags (2 apples + 3 oranges each).\n\n**Example — LCM:** Bus A comes every 8 minutes, Bus B every 12 minutes. Next time they arrive together = $\\text{LCM}(8, 12) = 24$ minutes.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg67-d5-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following is a factor of 36?',
      options: ['8', '9', '10', '14'],
      answer: '9',
      explanation: 'A factor of 36 divides into 36 with no remainder.\n$$36 \\div 8 = 4.5 \\text{ (not whole)} \\quad 36 \\div 9 = 4 \\checkmark$$\n$$36 \\div 10 = 3.6 \\text{ (not whole)} \\quad 36 \\div 14 = 2.57\\ldots \\text{ (not whole)}$$\n\n**Answer: 9** is a factor of 36.',
      relatedConcept: 'bcg67-d5-c1',
    },
    {
      id: 'bcg67-d5-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Find the GCF of 30 and 45.',
      answer: '15',
      explanation: 'List factors:\n- Factors of 30: $1, 2, 3, 5, 6, 10, \\mathbf{15}, 30$\n- Factors of 45: $1, 3, 5, 9, \\mathbf{15}, 45$\n- Common factors: $1, 3, 5, 15$\n- **GCF = 15**\n\nUsing prime factorization: $30 = 2 \\times 3 \\times 5$, $45 = 3^2 \\times 5$\n$$\\text{GCF} = 3 \\times 5 = 15$$',
      relatedConcept: 'bcg67-d5-c2',
    },
    {
      id: 'bcg67-d5-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Find the LCM of 8 and 10.',
      answer: '40',
      explanation: 'List multiples:\n- Multiples of 8: $8, 16, 24, 32, \\mathbf{40}, 48, \\ldots$\n- Multiples of 10: $10, 20, 30, \\mathbf{40}, 50, \\ldots$\n- **LCM = 40**\n\nUsing prime factorization: $8 = 2^3$, $10 = 2 \\times 5$\n$$\\text{LCM} = 2^3 \\times 5 = 40$$',
      relatedConcept: 'bcg67-d5-c3',
    },
    {
      id: 'bcg67-d5-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Two buses leave the station together. Bus A departs every 15 minutes; Bus B every 20 minutes. After how many minutes will they leave together again?',
      options: ['5 minutes', '35 minutes', '60 minutes', '300 minutes'],
      answer: '60 minutes',
      explanation: 'We need the **LCM** of 15 and 20.\n\n$$15 = 3 \\times 5 \\qquad 20 = 2^2 \\times 5$$\n$$\\text{LCM} = 2^2 \\times 3 \\times 5 = 60$$\n\nThe buses will leave together again in **60 minutes**.\n\n**힌트:** 두 사건이 동시에 일어나는 주기 → LCM!',
      relatedConcept: 'bcg67-d5-c4',
    },
    {
      id: 'bcg67-d5-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'You have 48 red beads and 60 blue beads. You want to make identical bracelets using all the beads. What is the maximum number of bracelets you can make?',
      options: ['6', '12', '20', '24'],
      answer: '12',
      explanation: 'We need the **GCF** of 48 and 60.\n\n$$48 = 2^4 \\times 3 \\qquad 60 = 2^2 \\times 3 \\times 5$$\n$$\\text{GCF} = 2^2 \\times 3 = 12$$\n\nYou can make **12 bracelets** (each with $48 \\div 12 = 4$ red beads and $60 \\div 12 = 5$ blue beads).\n\n**힌트:** 동등하게 나누는 최대 그룹 수 → GCF!',
      relatedConcept: 'bcg67-d5-c4',
    },
    {
      id: 'bcg67-d5-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'The GCF of two numbers is 6 and their LCM is 60. One of the numbers is 12. What is the other number?',
      answer: '30',
      explanation: 'There is a useful relationship:\n$$\\text{GCF} \\times \\text{LCM} = \\text{Number 1} \\times \\text{Number 2}$$\n$$6 \\times 60 = 12 \\times \\text{Number 2}$$\n$$360 = 12 \\times \\text{Number 2}$$\n$$\\text{Number 2} = 360 \\div 12 = 30$$\n\n**Check:** $\\text{GCF}(12, 30) = 6$ ✓, $\\text{LCM}(12, 30) = 60$ ✓',
      relatedConcept: 'bcg67-d5-c2',
    },
  ],
  realLifeExample:
    'Music rhythm relies on LCM! A drummer hits every 4 beats and a cymbal every 6 beats. They coincide every LCM(4,6) = 12 beats. GCF is used when tiling a floor — what is the largest square tile that fits a 48 cm × 60 cm room with no cutting? GCF(48,60) = 12 cm! 타일 크기와 박자에도 GCF와 LCM이 쓰여요.',
};

export default dayContent;
