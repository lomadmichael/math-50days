import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 11,
  part: 2,
  title: 'Multiplying and Dividing Fractions',
  subtitle: 'Multiplying across numerators and denominators; dividing by multiplying by the reciprocal (분수 곱셈·나눗셈)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d11-c1',
      title: 'Multiplying Fractions',
      content: 'To multiply fractions, multiply the **numerators** together and the **denominators** together.\n\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\n\n**No need to find a common denominator!**\n\n**Example 1:** $\\dfrac{2}{3} \\times \\dfrac{4}{5} = \\dfrac{2 \\times 4}{3 \\times 5} = \\dfrac{8}{15}$\n\n**Example 2:** $\\dfrac{3}{4} \\times \\dfrac{2}{9} = \\dfrac{6}{36} = \\dfrac{1}{6}$\n\n**Tip — Simplify before multiplying (cross-cancel):**\n$$\\frac{3}{4} \\times \\frac{2}{9}: \\quad \\frac{\\cancel{3}^1}{4} \\times \\frac{2}{\\cancel{9}^3} = \\frac{1 \\times 2}{4 \\times 3} = \\frac{2}{12} = \\frac{1}{6}$$\n\nCross-cancelling makes the numbers smaller and easier to work with!',
      type: 'formula',
    },
    {
      id: 'bcg67-d11-c2',
      title: 'Multiplying Mixed Numbers',
      content: 'Always **convert mixed numbers to improper fractions** before multiplying.\n\n**Example:** $2\\dfrac{1}{3} \\times 1\\dfrac{1}{2}$\n\n**Step 1:** Convert:\n$$2\\frac{1}{3} = \\frac{7}{3} \\qquad 1\\frac{1}{2} = \\frac{3}{2}$$\n\n**Step 2:** Multiply:\n$$\\frac{7}{3} \\times \\frac{3}{2} = \\frac{7 \\times 3}{3 \\times 2} = \\frac{21}{6} = \\frac{7}{2} = 3\\frac{1}{2}$$\n\n**Cross-cancel shortcut:**\n$$\\frac{7}{\\cancel{3}} \\times \\frac{\\cancel{3}}{2} = \\frac{7}{2} = 3\\frac{1}{2}$$\n\n**경고:** Never multiply mixed numbers directly as $2 \\times 1 = 2$ and $\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$ — this is incorrect!',
      type: 'example',
    },
    {
      id: 'bcg67-d11-c3',
      title: 'Dividing Fractions — Multiply by the Reciprocal',
      content: 'The **reciprocal** (역수) of a fraction is the fraction flipped upside down.\n\n$$\\text{Reciprocal of } \\frac{3}{5} = \\frac{5}{3} \\qquad \\text{Reciprocal of } 4 = \\frac{1}{4}$$\n\n**Rule for dividing fractions:**\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$\n\n**"Keep, Change, Flip" (KCF):**\n1. **Keep** the first fraction\n2. **Change** ÷ to ×\n3. **Flip** the second fraction (use its reciprocal)\n\n**Example:** $\\dfrac{3}{4} \\div \\dfrac{2}{5} = \\dfrac{3}{4} \\times \\dfrac{5}{2} = \\dfrac{15}{8} = 1\\dfrac{7}{8}$',
      type: 'formula',
    },
    {
      id: 'bcg67-d11-c4',
      title: 'Understanding Division of Fractions',
      content: 'Why does "keep, change, flip" work?\n\n**Think of it this way:** $6 \\div 2 = 3$ means "how many groups of 2 fit in 6?"\n\nSimilarly, $\\dfrac{3}{4} \\div \\dfrac{1}{8}$ asks: "how many $\\frac{1}{8}$s fit in $\\frac{3}{4}$?"\n\n$\\frac{3}{4} = \\frac{6}{8}$, and $\\frac{6}{8}$ contains **6 groups** of $\\frac{1}{8}$.\n\n$$\\frac{3}{4} \\div \\frac{1}{8} = \\frac{3}{4} \\times \\frac{8}{1} = \\frac{24}{4} = 6 \\checkmark$$\n\n**Real-life example:** You have $\\frac{3}{4}$ of a pizza and each person gets $\\frac{1}{8}$. How many people can you serve? → $6$ people.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg67-d11-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $\\dfrac{3}{5} \\times \\dfrac{5}{6}$',
      options: ['$\\dfrac{8}{11}$', '$\\dfrac{15}{30}$', '$\\dfrac{1}{2}$', '$\\dfrac{3}{6}$'],
      answer: '$\\dfrac{1}{2}$',
      explanation: '$$\\frac{3}{5} \\times \\frac{5}{6} = \\frac{3 \\times 5}{5 \\times 6} = \\frac{15}{30} = \\frac{1}{2}$$\n\n**Cross-cancel shortcut:** $\\frac{\\cancel{3}^1}{\\cancel{5}_1} \\times \\frac{\\cancel{5}^1}{\\cancel{6}^2} = \\frac{1}{2}$\n\n**Answer: $\\frac{1}{2}$**',
      relatedConcept: 'bcg67-d11-c1',
    },
    {
      id: 'bcg67-d11-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $\\dfrac{4}{7} \\div \\dfrac{2}{3}$. Simplify your answer.',
      answer: '6/7',
      explanation: 'Keep, Change, Flip:\n$$\\frac{4}{7} \\div \\frac{2}{3} = \\frac{4}{7} \\times \\frac{3}{2}$$\n\n$$= \\frac{4 \\times 3}{7 \\times 2} = \\frac{12}{14} = \\frac{6}{7}$$\n\n**Answer: $\\frac{6}{7}$**',
      relatedConcept: 'bcg67-d11-c3',
    },
    {
      id: 'bcg67-d11-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the reciprocal of $2\\dfrac{1}{4}$?',
      options: ['$\\dfrac{4}{1}$', '$2\\dfrac{4}{1}$', '$\\dfrac{4}{9}$', '$\\dfrac{1}{4}$'],
      answer: '$\\dfrac{4}{9}$',
      explanation: 'First convert the mixed number to an improper fraction:\n$$2\\frac{1}{4} = \\frac{9}{4}$$\n\nThe reciprocal of $\\dfrac{9}{4}$ is $\\dfrac{4}{9}$.',
      relatedConcept: 'bcg67-d11-c3',
    },
    {
      id: 'bcg67-d11-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Calculate: $1\\dfrac{2}{3} \\times 2\\dfrac{1}{5}$. Give your answer as a mixed number.',
      answer: '3 2/3',
      explanation: 'Convert to improper fractions:\n$$1\\frac{2}{3} = \\frac{5}{3} \\qquad 2\\frac{1}{5} = \\frac{11}{5}$$\n\nMultiply:\n$$\\frac{5}{3} \\times \\frac{11}{5} = \\frac{\\cancel{5} \\times 11}{3 \\times \\cancel{5}} = \\frac{11}{3} = 3\\frac{2}{3}$$\n\n**Answer: $3\\frac{2}{3}$**',
      relatedConcept: 'bcg67-d11-c2',
    },
    {
      id: 'bcg67-d11-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A ribbon is $\\dfrac{7}{8}$ m long. It is cut into pieces each $\\dfrac{1}{16}$ m long. How many pieces are there?',
      options: ['7', '10', '14', '16'],
      answer: '14',
      explanation: 'Number of pieces = total length ÷ piece length\n$$\\frac{7}{8} \\div \\frac{1}{16} = \\frac{7}{8} \\times \\frac{16}{1} = \\frac{7 \\times 16}{8} = \\frac{112}{8} = 14$$\n\nThere are **14 pieces**.',
      relatedConcept: 'bcg67-d11-c4',
    },
    {
      id: 'bcg67-d11-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'Calculate: $2\\dfrac{2}{3} \\div 1\\dfrac{1}{3}$',
      answer: '2',
      explanation: 'Convert to improper fractions:\n$$2\\frac{2}{3} = \\frac{8}{3} \\qquad 1\\frac{1}{3} = \\frac{4}{3}$$\n\nKeep, Change, Flip:\n$$\\frac{8}{3} \\div \\frac{4}{3} = \\frac{8}{3} \\times \\frac{3}{4} = \\frac{8 \\times 3}{3 \\times 4} = \\frac{24}{12} = 2$$\n\n**Answer: 2**\n\nThis makes sense — $1\\frac{1}{3}$ goes into $2\\frac{2}{3}$ exactly 2 times.',
      relatedConcept: 'bcg67-d11-c3',
    },
  ],
  realLifeExample:
    'When you scale a recipe up or down, you multiply fractions. A cookie recipe makes 24 cookies and calls for $\\frac{3}{4}$ cup butter. If you want to make $\\frac{1}{3}$ of the recipe (8 cookies), you need $\\frac{3}{4} \\times \\frac{1}{3} = \\frac{1}{4}$ cup of butter. 레시피 조절할 때 분수 곱셈을 항상 사용해요!',
};

export default dayContent;
