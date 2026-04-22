import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 9,
  part: 2,
  title: 'Equivalent Fractions',
  subtitle: 'Finding fractions that represent the same value and simplifying to lowest terms (동치 분수)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d9-c1',
      title: 'What Are Equivalent Fractions?',
      content: '**Equivalent fractions** (동치 분수) are different fractions that represent the **same value**.\n\n$$\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8} = \\frac{50}{100}$$\n\nThink of a pizza cut into different numbers of slices:\n- $\\frac{1}{2}$ of a pizza = $\\frac{2}{4}$ of the same pizza — same amount!\n\n**How to create an equivalent fraction:**\nMultiply (or divide) both the **numerator** (분자) and **denominator** (분모) by the **same non-zero number**.\n\n$$\\frac{2}{3} \\times \\frac{4}{4} = \\frac{8}{12} \\qquad \\frac{2}{3} \\times \\frac{5}{5} = \\frac{10}{15}$$\n\n**Why does this work?** Multiplying by $\\frac{4}{4} = 1$ — you are multiplying by 1, which never changes the value!',
      type: 'definition',
    },
    {
      id: 'bcg67-d9-c2',
      title: 'Simplifying Fractions to Lowest Terms',
      content: 'A fraction is in **lowest terms** (기약분수) when the numerator and denominator share no common factor other than 1.\n\n**To simplify:** divide both numerator and denominator by their **GCF**.\n\n**Example:** Simplify $\\dfrac{24}{36}$\n\n$\\text{GCF}(24, 36) = 12$\n\n$$\\frac{24}{36} = \\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$$\n\n**Check:** Do 2 and 3 share any common factor (other than 1)? No → **lowest terms!**\n\n**팁:** You can simplify step by step (divide by 2, then 2, then 3) or all at once using the GCF.',
      type: 'formula',
    },
    {
      id: 'bcg67-d9-c3',
      title: 'Comparing Fractions',
      content: 'To compare fractions, give them the **same denominator** (공통분모) first.\n\n**Example:** Is $\\dfrac{3}{4}$ greater or less than $\\dfrac{5}{7}$?\n\nFind the LCM of 4 and 7: $\\text{LCM}(4, 7) = 28$\n\n$$\\frac{3}{4} = \\frac{3 \\times 7}{4 \\times 7} = \\frac{21}{28} \\qquad \\frac{5}{7} = \\frac{5 \\times 4}{7 \\times 4} = \\frac{20}{28}$$\n\nSince $\\frac{21}{28} > \\frac{20}{28}$:\n$$\\frac{3}{4} > \\frac{5}{7}$$\n\n**Cross-multiplication shortcut:**\n$$3 \\times 7 = 21 \\quad \\text{vs} \\quad 5 \\times 4 = 20 \\implies \\frac{3}{4} > \\frac{5}{7}$$',
      type: 'tip',
    },
    {
      id: 'bcg67-d9-c4',
      title: 'Mixed Numbers and Improper Fractions',
      content: 'A **mixed number** (대분수) has a whole part and a fraction part: $2\\frac{3}{4}$\n\nAn **improper fraction** (가분수) has numerator ≥ denominator: $\\frac{11}{4}$\n\n**Converting mixed → improper:**\n$$2\\frac{3}{4} = \\frac{2 \\times 4 + 3}{4} = \\frac{11}{4}$$\n\n**Converting improper → mixed:**\n$$\\frac{17}{5}: \\quad 17 \\div 5 = 3 \\text{ remainder } 2 \\implies 3\\frac{2}{5}$$\n\n**팁:** For improper fractions, the whole number = quotient, and the remainder becomes the new numerator.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg67-d9-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which fraction is equivalent to $\\dfrac{3}{5}$?',
      options: ['$\\dfrac{6}{15}$', '$\\dfrac{9}{15}$', '$\\dfrac{12}{25}$', '$\\dfrac{6}{25}$'],
      answer: '$\\dfrac{9}{15}$',
      explanation: 'Multiply both numerator and denominator by the same number:\n$$\\frac{3}{5} \\times \\frac{3}{3} = \\frac{9}{15}$$\n\n**Check the others:**\n- $\\frac{6}{15} = \\frac{2}{5} \\neq \\frac{3}{5}$\n- $\\frac{12}{25}$: $\\text{GCF}(12,25)=1$, not equivalent to $\\frac{3}{5}$\n\n**Answer: $\\dfrac{9}{15}$**',
      relatedConcept: 'bcg67-d9-c1',
    },
    {
      id: 'bcg67-d9-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Simplify $\\dfrac{30}{45}$ to lowest terms.',
      answer: '2/3',
      explanation: '$\\text{GCF}(30, 45) = 15$\n\n$$\\frac{30}{45} = \\frac{30 \\div 15}{45 \\div 15} = \\frac{2}{3}$$\n\n**Check:** GCF(2, 3) = 1 → lowest terms ✓',
      relatedConcept: 'bcg67-d9-c2',
    },
    {
      id: 'bcg67-d9-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which symbol makes this true? $\\dfrac{5}{8} \\ \\square \\ \\dfrac{3}{5}$',
      options: ['$<$', '$>$', '$=$', 'Cannot be determined'],
      answer: '$>$',
      explanation: 'Find a common denominator: $\\text{LCM}(8, 5) = 40$\n\n$$\\frac{5}{8} = \\frac{25}{40} \\qquad \\frac{3}{5} = \\frac{24}{40}$$\n\n$$\\frac{25}{40} > \\frac{24}{40}$$\n\n$$\\therefore \\frac{5}{8} > \\frac{3}{5}$$',
      relatedConcept: 'bcg67-d9-c3',
    },
    {
      id: 'bcg67-d9-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Convert $3\\dfrac{4}{7}$ to an improper fraction.',
      answer: '25/7',
      explanation: '$$3\\frac{4}{7} = \\frac{3 \\times 7 + 4}{7} = \\frac{21 + 4}{7} = \\frac{25}{7}$$\n\n**Check:** $25 \\div 7 = 3$ remainder $4$ → $3\\frac{4}{7}$ ✓',
      relatedConcept: 'bcg67-d9-c4',
    },
    {
      id: 'bcg67-d9-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Convert $\\dfrac{41}{6}$ to a mixed number.',
      options: ['$6\\dfrac{5}{6}$', '$7\\dfrac{1}{6}$', '$6\\dfrac{1}{6}$', '$7\\dfrac{5}{6}$'],
      answer: '$6\\dfrac{5}{6}$',
      explanation: '$$41 \\div 6 = 6 \\text{ remainder } 5$$\n\n$$\\frac{41}{6} = 6\\frac{5}{6}$$\n\n**Check:** $6 \\times 6 + 5 = 36 + 5 = 41$ ✓',
      relatedConcept: 'bcg67-d9-c4',
    },
    {
      id: 'bcg67-d9-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'Find a fraction equivalent to $\\dfrac{4}{9}$ with a numerator of 28.',
      answer: '28/63',
      explanation: 'We need: $\\dfrac{4}{9} = \\dfrac{28}{?}$\n\nSince $28 \\div 4 = 7$, we multiplied the numerator by 7.\nMultiply the denominator by 7 too:\n$$9 \\times 7 = 63$$\n\n$$\\frac{4}{9} = \\frac{28}{63}$$\n\n**Check:** $\\frac{28}{63} \\div \\frac{7}{7} = \\frac{4}{9}$ ✓',
      relatedConcept: 'bcg67-d9-c1',
    },
  ],
  realLifeExample:
    'Recipes use equivalent fractions all the time! If a recipe calls for $\\frac{3}{4}$ cup of sugar but you want to triple it, you need $\\frac{9}{4} = 2\\frac{1}{4}$ cups. If your measuring cup only has half-cup marks, you need $\\frac{3}{4} = \\frac{6}{8}$ — same amount, different representation! 요리 레시피에서 분수 변환이 매일 일어나요.',
};

export default dayContent;
