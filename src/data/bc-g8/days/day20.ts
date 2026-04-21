import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 20,
  part: 3,
  title: 'Proportional Reasoning',
  subtitle: 'Solve proportions (비례식) using cross-multiplication and apply proportional reasoning to real-world problems.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Proportional Reasoning',
      description: 'Watch this lesson to learn how to set up and solve proportions using cross-multiplication.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d20-c1',
      title: 'What is a Proportion? (비례식)',
      content: 'A **proportion** (비례식) is an equation that says two ratios are equal:\n\n$$\\frac{a}{b} = \\frac{c}{d}$$\n\nRead as "$a$ is to $b$ as $c$ is to $d$".\n\nExamples of proportions:\n$$\\frac{2}{3} = \\frac{8}{12} \\quad \\text{(both simplify to } \\frac{2}{3}\\text{)}$$\n$$\\frac{1}{4} = \\frac{5}{20} \\quad \\text{(both equal } 0.25\\text{)}$$',
      type: 'definition',
    },
    {
      id: 'bcg8-d20-c2',
      title: 'Cross-Multiplication (교차 곱셈)',
      content: 'To solve for an unknown in a proportion, use **cross-multiplication**:\n\n$$\\frac{a}{b} = \\frac{c}{d} \\implies a \\times d = b \\times c$$\n\nExample: Solve for $x$:\n$$\\frac{3}{5} = \\frac{x}{20}$$\n\nCross-multiply: $3 \\times 20 = 5 \\times x$\n$$60 = 5x$$\n$$x = 12$$',
      type: 'formula',
    },
    {
      id: 'bcg8-d20-c3',
      title: 'Setting Up a Proportion (비례식 세우기)',
      content: 'The key to proportional reasoning is setting up the proportion correctly.\n\n**Always keep the same quantities in the same position (top or bottom).**\n\nExample: If 4 tickets cost $\\$20$, how much do 10 tickets cost?\n\nSet up: $\\frac{\\text{tickets}}{\\text{cost}} = \\frac{\\text{tickets}}{\\text{cost}}$\n\n$$\\frac{4}{20} = \\frac{10}{x}$$\n\nCross-multiply: $4x = 200$, so $x = \\$50$.',
      type: 'example',
    },
    {
      id: 'bcg8-d20-c4',
      title: 'Direct vs Inverse Proportion (정비례 vs 반비례)',
      content: '**Direct proportion** (정비례): As one quantity increases, the other increases.\n- More workers → more work done\n- $y = kx$ (constant ratio)\n\n**Inverse proportion** (반비례): As one quantity increases, the other decreases.\n- More workers → less time to finish\n- $xy = k$ (constant product)\n\nIn Grade 8, most problems are **direct proportion**.',
      type: 'definition',
    },
    {
      id: 'bcg8-d20-c5',
      title: 'Checking with Unit Rates',
      content: 'You can always check a proportion by finding the unit rate:\n\nExample: $\\frac{4}{20} = \\frac{10}{x}$\n\nUnit rate: $\\frac{20}{4} = \\$5$ per ticket\n\nCheck: $10 \\times \\$5 = \\$50$ ✓\n\nBoth methods should give the same answer!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d20-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Solve for $x$: $\\frac{3}{7} = \\frac{x}{28}$',
      options: ['4', '9', '12', '21'],
      answer: '12',
      explanation: 'Cross-multiply: $3 \\times 28 = 7 \\times x$\n$84 = 7x$\n$x = 12$',
    },
    {
      id: 'bcg8-d20-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve for $n$: $\\frac{5}{8} = \\frac{15}{n}$',
      answer: '24',
      explanation: 'Cross-multiply: $5 \\times n = 8 \\times 15$\n$5n = 120$\n$n = 24$',
    },
    {
      id: 'bcg8-d20-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Are these ratios proportional? $\\frac{4}{6}$ and $\\frac{10}{15}$',
      options: ['Yes, because 4 + 6 = 10', 'Yes, because 4 × 15 = 6 × 10', 'No, because 4 ≠ 10', 'No, because the numbers are different'],
      answer: 'Yes, because 4 × 15 = 6 × 10',
      explanation: 'Check cross-products: $4 \\times 15 = 60$ and $6 \\times 10 = 60$.\nSince the cross-products are equal, the ratios are proportional.\nAlso: $\\frac{4}{6} = \\frac{2}{3}$ and $\\frac{10}{15} = \\frac{2}{3}$ ✓',
    },
    {
      id: 'bcg8-d20-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A car travels 180 km in 2 hours. At the same speed, how far will it travel in 5 hours?',
      answer: '450 km',
      explanation: 'Set up: $\\frac{180 \\text{ km}}{2 \\text{ h}} = \\frac{x}{5 \\text{ h}}$\n\nCross-multiply: $180 \\times 5 = 2 \\times x$\n$900 = 2x$\n$x = 450$ km',
    },
    {
      id: 'bcg8-d20-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A map has a scale of $1 \\text{ cm} : 50 \\text{ km}$. Two cities are 7 cm apart on the map. What is the real distance between them?',
      options: ['7 km', '57 km', '350 km', '700 km'],
      answer: '350 km',
      explanation: 'Set up: $\\frac{1 \\text{ cm}}{50 \\text{ km}} = \\frac{7 \\text{ cm}}{x}$\n\nCross-multiply: $1 \\times x = 50 \\times 7 = 350$ km',
    },
    {
      id: 'bcg8-d20-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'In a school, the ratio of students to teachers is $18 : 1$. If there are 540 students, how many teachers are there? If the school wants to reduce the ratio to $15 : 1$, how many more teachers are needed?',
      answer: '30 teachers now; 6 more teachers needed',
      explanation: '**Current teachers:**\n$\\frac{18}{1} = \\frac{540}{t}$ → $18t = 540$ → $t = 30$ teachers\n\n**At $15:1$ ratio:**\n$\\frac{15}{1} = \\frac{540}{t}$ → $15t = 540$ → $t = 36$ teachers\n\nMore teachers needed: $36 - 30 = 6$',
    },
  ],
  realLifeExample: 'Maps use proportional reasoning: if the scale is $1 \\text{ cm} = 20 \\text{ km}$, then 4.5 cm on the map is $4.5 \\times 20 = 90$ km in real life. (지도 축척이 바로 비례식 개념이에요! 지도에서 거리를 측정해 실제 거리를 구할 수 있어요.)',
};

export default dayContent;
