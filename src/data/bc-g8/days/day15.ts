import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 15,
  part: 3,
  title: 'Fraction Operations — Multiplication & Division',
  subtitle: 'Multiply and divide fractions (분수) confidently — including using reciprocals (역수).',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Multiplying and Dividing Fractions',
      description: 'Watch this lesson to master fraction multiplication and division, including mixed numbers.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d15-c1',
      title: 'Multiplying Fractions (분수 곱셈)',
      content: 'To multiply fractions, multiply the **numerators** (분자) together and the **denominators** (분모) together:\n\n$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$\n\nExample:\n$$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$$\n\nAlways simplify your answer if possible!',
      type: 'formula',
    },
    {
      id: 'bcg8-d15-c2',
      title: 'What is a Reciprocal? (역수)',
      content: 'The **reciprocal** (역수) of a fraction is found by flipping it upside down:\n\n$$\\text{Reciprocal of } \\frac{a}{b} = \\frac{b}{a}$$\n\nExamples:\n- Reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$\n- Reciprocal of $5$ (which is $\\frac{5}{1}$) is $\\frac{1}{5}$\n- Reciprocal of $\\frac{1}{7}$ is $7$\n\nKey fact: A number times its reciprocal = 1.\n$$\\frac{3}{4} \\times \\frac{4}{3} = 1$$',
      type: 'definition',
    },
    {
      id: 'bcg8-d15-c3',
      title: 'Dividing Fractions — Keep, Change, Flip',
      content: 'To divide fractions, use **Keep, Change, Flip (KCF)**:\n1. **Keep** the first fraction the same\n2. **Change** ÷ to ×\n3. **Flip** the second fraction (use its reciprocal)\n\n$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$\n\nExample:\n$$\\frac{3}{4} \\div \\frac{2}{5} = \\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$$',
      type: 'formula',
    },
    {
      id: 'bcg8-d15-c4',
      title: 'Mixed Numbers — Convert First! (대분수)',
      content: 'If you see a **mixed number** (대분수) like $2\\frac{1}{3}$, convert it to an improper fraction (가분수) first:\n\n$$2\\frac{1}{3} = \\frac{2 \\times 3 + 1}{3} = \\frac{7}{3}$$\n\nThen multiply or divide as normal.\n\nExample: $1\\frac{1}{2} \\times 2\\frac{2}{3}$\n$$= \\frac{3}{2} \\times \\frac{8}{3} = \\frac{24}{6} = 4$$',
      type: 'tip',
    },
    {
      id: 'bcg8-d15-c5',
      title: 'Cross-Cancelling to Simplify (약분)',
      content: 'Before multiplying, look for **common factors** (공약수) to cancel diagonally:\n\n$$\\frac{4}{9} \\times \\frac{3}{8} = \\frac{\\cancel{4}^1}{\\cancel{9}^3} \\times \\frac{\\cancel{3}^1}{\\cancel{8}^2} = \\frac{1}{6}$$\n\nThis makes numbers smaller and easier to work with.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d15-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $\\frac{3}{5} \\times \\frac{2}{7}$',
      options: ['$\\frac{5}{12}$', '$\\frac{6}{35}$', '$\\frac{6}{12}$', '$\\frac{21}{10}$'],
      answer: '$\\frac{6}{35}$',
      explanation: '$\\frac{3}{5} \\times \\frac{2}{7} = \\frac{3 \\times 2}{5 \\times 7} = \\frac{6}{35}$',
    },
    {
      id: 'bcg8-d15-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'What is the reciprocal of $\\frac{7}{3}$?',
      answer: '3/7',
      explanation: 'Flip the fraction: reciprocal of $\\frac{7}{3} = \\frac{3}{7}$',
    },
    {
      id: 'bcg8-d15-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $\\frac{5}{6} \\div \\frac{1}{3}$',
      options: ['$\\frac{5}{18}$', '$\\frac{5}{2}$', '$\\frac{6}{15}$', '$\\frac{5}{9}$'],
      answer: '$\\frac{5}{2}$',
      explanation: 'Keep, Change, Flip:\n$\\frac{5}{6} \\div \\frac{1}{3} = \\frac{5}{6} \\times \\frac{3}{1} = \\frac{15}{6} = \\frac{5}{2}$',
    },
    {
      id: 'bcg8-d15-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A recipe needs $\\frac{3}{4}$ cup of sugar per batch. If you want to make $2\\frac{1}{2}$ batches, how many cups of sugar do you need?',
      answer: '$\\frac{15}{8}$ cups (or $1\\frac{7}{8}$ cups)',
      explanation: 'Convert $2\\frac{1}{2} = \\frac{5}{2}$\n\n$\\frac{3}{4} \\times \\frac{5}{2} = \\frac{15}{8} = 1\\frac{7}{8}$ cups',
    },
    {
      id: 'bcg8-d15-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A piece of ribbon is $\\frac{9}{4}$ m long. If you cut it into pieces each $\\frac{3}{8}$ m long, how many pieces do you get?',
      options: ['3', '4', '6', '8'],
      answer: '6',
      explanation: '$\\frac{9}{4} \\div \\frac{3}{8} = \\frac{9}{4} \\times \\frac{8}{3} = \\frac{72}{12} = 6$ pieces',
    },
    {
      id: 'bcg8-d15-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'Simplify: $1\\frac{3}{5} \\div 2\\frac{2}{3}$',
      answer: '$\\frac{3}{5}$',
      explanation: 'Convert to improper fractions:\n$1\\frac{3}{5} = \\frac{8}{5}$ and $2\\frac{2}{3} = \\frac{8}{3}$\n\n$\\frac{8}{5} \\div \\frac{8}{3} = \\frac{8}{5} \\times \\frac{3}{8} = \\frac{24}{40} = \\frac{3}{5}$',
    },
  ],
  realLifeExample: 'If a pizza is cut into $\\frac{1}{8}$ slices and you eat $\\frac{3}{4}$ of the pizza, you ate $\\frac{3}{4} \\div \\frac{1}{8} = 6$ slices. (피자를 8분의 1로 잘랐을 때 4분의 3을 먹으면 몇 조각인지 분수 나눗셈으로 구할 수 있어요!)',
};

export default dayContent;
