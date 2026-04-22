import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 10,
  part: 2,
  title: 'Adding and Subtracting Fractions',
  subtitle: 'Using common denominators to add and subtract fractions and mixed numbers (분수 덧셈·뺄셈)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d10-c1',
      title: 'Adding and Subtracting — Same Denominator',
      content: 'When fractions have the **same denominator** (공통분모), simply add or subtract the numerators. Keep the denominator.\n\n$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c} \\qquad \\frac{a}{c} - \\frac{b}{c} = \\frac{a - b}{c}$$\n\n**Examples:**\n$$\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$$\n$$\\frac{7}{9} - \\frac{4}{9} = \\frac{3}{9} = \\frac{1}{3} \\quad \\text{(simplify!)}$$\n\n**Always simplify the final answer** to lowest terms.',
      type: 'definition',
    },
    {
      id: 'bcg67-d10-c2',
      title: 'Adding and Subtracting — Different Denominators',
      content: 'When denominators are different, find the **LCD (Least Common Denominator)** first.\n\n**LCD** (최소공통분모) = LCM of the denominators.\n\n**Example:** $\\dfrac{2}{3} + \\dfrac{3}{4}$\n\n**Step 1:** LCD of 3 and 4 → $\\text{LCM}(3, 4) = 12$\n\n**Step 2:** Convert both fractions:\n$$\\frac{2}{3} = \\frac{8}{12} \\qquad \\frac{3}{4} = \\frac{9}{12}$$\n\n**Step 3:** Add:\n$$\\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$$\n\n**팁:** The LCD is the smallest number that both denominators divide into evenly.',
      type: 'formula',
    },
    {
      id: 'bcg67-d10-c3',
      title: 'Adding and Subtracting Mixed Numbers',
      content: 'Two methods for mixed numbers:\n\n**Method 1 — Add/subtract whole parts and fraction parts separately:**\n$$3\\frac{1}{4} + 2\\frac{1}{3}$$\nWhole: $3 + 2 = 5$\nFraction: $\\frac{1}{4} + \\frac{1}{3} = \\frac{3}{12} + \\frac{4}{12} = \\frac{7}{12}$\nResult: $5\\frac{7}{12}$\n\n**Method 2 — Convert to improper fractions first:**\n$$3\\frac{1}{4} = \\frac{13}{4} \\qquad 2\\frac{1}{3} = \\frac{7}{3}$$\n$$\\frac{13}{4} + \\frac{7}{3} = \\frac{39}{12} + \\frac{28}{12} = \\frac{67}{12} = 5\\frac{7}{12}$$\n\n**팁:** Method 2 is safer when the fraction sum would exceed 1 (requires "borrowing" with Method 1).',
      type: 'example',
    },
    {
      id: 'bcg67-d10-c4',
      title: 'Subtracting Mixed Numbers with Borrowing',
      content: 'When the fraction part being subtracted is larger, you need to **borrow** from the whole number.\n\n**Example:** $4\\dfrac{1}{5} - 1\\dfrac{3}{5}$\n\nSince $\\dfrac{1}{5} < \\dfrac{3}{5}$, borrow 1 from the 4:\n$$4\\frac{1}{5} = 3 + 1\\frac{1}{5} = 3 + \\frac{6}{5} = 3\\frac{6}{5}$$\n\nNow subtract:\n$$3\\frac{6}{5} - 1\\frac{3}{5} = 2\\frac{3}{5}$$\n\n**Alternatively:** Use improper fractions:\n$$\\frac{21}{5} - \\frac{8}{5} = \\frac{13}{5} = 2\\frac{3}{5}$$\n\n**팁:** If borrowing confuses you, always convert to improper fractions for subtraction!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg67-d10-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $\\dfrac{5}{12} + \\dfrac{7}{12}$',
      answer: '1',
      explanation: 'Same denominator — add numerators:\n$$\\frac{5}{12} + \\frac{7}{12} = \\frac{12}{12} = 1$$\n\n$\\frac{12}{12} = 1$ (a whole!)',
      relatedConcept: 'bcg67-d10-c1',
    },
    {
      id: 'bcg67-d10-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $\\dfrac{1}{3} + \\dfrac{1}{4}$',
      options: ['$\\dfrac{2}{7}$', '$\\dfrac{7}{12}$', '$\\dfrac{5}{12}$', '$\\dfrac{1}{12}$'],
      answer: '$\\dfrac{7}{12}$',
      explanation: 'LCD of 3 and 4 = 12\n$$\\frac{1}{3} = \\frac{4}{12} \\qquad \\frac{1}{4} = \\frac{3}{12}$$\n$$\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$\n\n**Common mistake:** Adding numerators AND denominators: $\\frac{2}{7}$ — this is wrong!',
      relatedConcept: 'bcg67-d10-c2',
    },
    {
      id: 'bcg67-d10-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $\\dfrac{5}{6} - \\dfrac{1}{4}$. Write your answer in lowest terms.',
      answer: '7/12',
      explanation: 'LCD of 6 and 4 = 12\n$$\\frac{5}{6} = \\frac{10}{12} \\qquad \\frac{1}{4} = \\frac{3}{12}$$\n$$\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$$\n\nGCF(7, 12) = 1 → already in lowest terms. **Answer: $\\frac{7}{12}$**',
      relatedConcept: 'bcg67-d10-c2',
    },
    {
      id: 'bcg67-d10-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A recipe calls for $2\\dfrac{3}{4}$ cups of flour. You already added $1\\dfrac{1}{2}$ cups. How much more do you need?',
      options: ['$1\\dfrac{1}{4}$', '$1\\dfrac{1}{2}$', '$\\dfrac{5}{4}$', '$\\dfrac{3}{4}$'],
      answer: '$1\\dfrac{1}{4}$',
      explanation: 'Find: $2\\dfrac{3}{4} - 1\\dfrac{1}{2}$\n\nLCD of 4 and 2 = 4:\n$$2\\frac{3}{4} - 1\\frac{2}{4} = 1\\frac{1}{4}$$\n\nYou need $\\mathbf{1\\frac{1}{4}}$ more cups.',
      relatedConcept: 'bcg67-d10-c3',
    },
    {
      id: 'bcg67-d10-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Calculate: $3\\dfrac{1}{6} - 1\\dfrac{5}{6}$',
      answer: '1 1/3',
      explanation: 'Since $\\dfrac{1}{6} < \\dfrac{5}{6}$, borrow from the whole number:\n$$3\\frac{1}{6} = 2\\frac{7}{6}$$\n\n$$2\\frac{7}{6} - 1\\frac{5}{6} = 1\\frac{2}{6} = 1\\frac{1}{3}$$\n\n**Or using improper fractions:**\n$$\\frac{19}{6} - \\frac{11}{6} = \\frac{8}{6} = \\frac{4}{3} = 1\\frac{1}{3}$$',
      relatedConcept: 'bcg67-d10-c4',
    },
    {
      id: 'bcg67-d10-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Maria walked $\\dfrac{3}{4}$ km in the morning and $\\dfrac{2}{3}$ km in the afternoon. She plans to walk a total of $2$ km. How much more does she need to walk?',
      options: ['$\\dfrac{7}{12}$ km', '$\\dfrac{5}{12}$ km', '$\\dfrac{11}{12}$ km', '$1\\dfrac{5}{12}$ km'],
      answer: '$\\dfrac{7}{12}$ km',
      explanation: 'Total walked: $\\dfrac{3}{4} + \\dfrac{2}{3}$\n\nLCD = 12:\n$$\\frac{9}{12} + \\frac{8}{12} = \\frac{17}{12} = 1\\frac{5}{12}$$\n\nRemaining: $2 - 1\\dfrac{5}{12} = \\dfrac{24}{12} - \\dfrac{17}{12} = \\dfrac{7}{12}$ km\n\nShe needs to walk $\\mathbf{\\dfrac{7}{12}}$ km more.',
      relatedConcept: 'bcg67-d10-c2',
    },
  ],
  realLifeExample:
    'Carpenters and builders constantly add and subtract fractions. A shelf needs $1\\frac{3}{8}$ inches of clearance on each side of a door frame that is $3\\frac{1}{4}$ inches wide. Total width needed: $3\\frac{1}{4} + 1\\frac{3}{8} + 1\\frac{3}{8} = 6$ inches. Fractions keep construction precise! 건축 현장에서 분수 계산은 필수예요.',
};

export default dayContent;
