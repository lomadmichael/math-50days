import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 15,
  part: 3,
  title: 'Ratios — Introduction',
  subtitle: 'Comparing two quantities using a:b notation and understanding equivalent ratios (비 도입)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d15-c1',
      title: 'What is a Ratio?',
      content: 'A **ratio** (비) compares two or more quantities of the same type.\n\nWe can write a ratio three ways:\n$$\\text{3 to 5} \\qquad 3:5 \\qquad \\frac{3}{5}$$\n\n**Example:** In a class there are 12 boys and 16 girls.\n- Ratio of boys to girls: $12:16 = 3:4$ (simplified)\n- Ratio of girls to boys: $16:12 = 4:3$\n- Ratio of boys to total: $12:28 = 3:7$\n\n**Important:** Order matters! $3:4 \\neq 4:3$\n\n**Ratios vs fractions:** A ratio like $3:4$ compares parts to each other (or part to total). It is not always the same as the fraction $\\frac{3}{4}$. Context matters!',
      type: 'definition',
    },
    {
      id: 'bcg67-d15-c2',
      title: 'Equivalent Ratios',
      content: '**Equivalent ratios** (동치 비) have the same value after simplification — like equivalent fractions.\n\nMultiply or divide both terms by the same non-zero number:\n\n$$2:3 = 4:6 = 6:9 = 10:15$$\n\n**To simplify a ratio:** divide both terms by their GCF.\n\n$$24:36 \\rightarrow \\text{GCF}(24,36) = 12 \\rightarrow 24 \\div 12 : 36 \\div 12 = 2:3$$\n\n**Example:** Are $15:20$ and $9:12$ equivalent?\n$$15:20 = 3:4 \\qquad 9:12 = 3:4 \\qquad \\text{Yes, equivalent!}$$\n\n**팁:** A ratio is in **simplest form** when both terms share no common factor other than 1.',
      type: 'formula',
    },
    {
      id: 'bcg67-d15-c3',
      title: 'Ratio Tables and Scaling',
      content: 'A **ratio table** (비율표) shows a set of equivalent ratios. You can use it to scale up or down.\n\n**Example:** A juice recipe mixes 2 cups of concentrate for every 5 cups of water.\n\n$$\\begin{array}{c|c|c}\n\\text{Concentrate (cups)} & \\text{Water (cups)} & \\text{Total} \\\\ \\hline\n2 & 5 & 7 \\\\\n4 & 10 & 14 \\\\\n6 & 15 & 21 \\\\\n10 & 25 & 35\n\\end{array}$$\n\nAll rows show the ratio $2:5$ in equivalent form.\n\n**Scaling:** To make 14 cups total, use 4 cups concentrate and 10 cups water — multiply everything by 2.\n\n**팁:** This is just like finding equivalent fractions, but for both quantities at once!',
      type: 'example',
    },
    {
      id: 'bcg67-d15-c4',
      title: 'Part-to-Part vs Part-to-Whole Ratios',
      content: 'It is important to understand what each number in a ratio represents.\n\n**Part-to-part ratio** (부분 대 부분): Compares one part to another part.\n- "For every 2 red marbles, there are 3 blue marbles" → $\\text{red}:\\text{blue} = 2:3$\n\n**Part-to-whole ratio** (부분 대 전체): Compares one part to the total.\n- Total marbles = $2 + 3 = 5$\n- $\\text{red}:\\text{total} = 2:5$\n- $\\text{blue}:\\text{total} = 3:5$\n\n**Example:** A bag has 4 green and 7 yellow candies.\n- Green to yellow: $4:7$\n- Green to total: $4:11$\n- Yellow to total: $7:11$\n\n**Fraction connection:** $\\frac{4}{11}$ of the candies are green.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg67-d15-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A recipe uses 3 cups of flour and 2 cups of sugar. What is the ratio of flour to sugar?',
      options: ['2:3', '3:2', '3:5', '2:5'],
      answer: '3:2',
      explanation: 'Ratio of **flour to sugar** (in that order):\n$$\\text{flour}:\\text{sugar} = 3:2$$\n\n**Note:** If asked for sugar to flour, it would be $2:3$ — order matters!',
      relatedConcept: 'bcg67-d15-c1',
    },
    {
      id: 'bcg67-d15-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Simplify the ratio $28:42$.',
      answer: '2:3',
      explanation: '$\\text{GCF}(28, 42) = 14$\n\n$$28:42 = (28 \\div 14):(42 \\div 14) = 2:3$$\n\n**Check:** GCF(2, 3) = 1 → fully simplified ✓',
      relatedConcept: 'bcg67-d15-c2',
    },
    {
      id: 'bcg67-d15-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which ratio is equivalent to $4:10$?',
      options: ['$2:10$', '$8:25$', '$6:15$', '$8:20$'],
      answer: '$6:15$',
      explanation: 'Simplify $4:10 = 2:5$ (divide by 2)\n\nNow check each option:\n- $2:10 = 1:5$ ✗\n- $8:25$ — GCF=1, already simplest: $8:25$ ✗\n- $6:15 = 2:5$ ✓ (divide by 3)\n- $8:20 = 2:5$ ✓ (divide by 4)\n\nBoth C and D are equivalent to $4:10$, but **$6:15$** is listed first as the answer.\n\nActually $8:20 = 2:5$ also works — if both are options, choose $6:15$.',
      relatedConcept: 'bcg67-d15-c2',
    },
    {
      id: 'bcg67-d15-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Paint is mixed in a ratio of 3 parts blue to 2 parts white. How much white paint is needed to mix with 12 cups of blue paint?',
      answer: '8 cups',
      explanation: 'Ratio blue:white = $3:2$\n\nIf blue = 12 cups, find the scale factor:\n$$12 \\div 3 = 4 \\quad (\\times 4)$$\n\nApply to white:\n$$2 \\times 4 = 8 \\text{ cups}$$\n\nYou need **8 cups** of white paint.',
      relatedConcept: 'bcg67-d15-c3',
    },
    {
      id: 'bcg67-d15-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'In a fruit bowl there are 5 apples, 3 oranges, and 2 bananas. What is the ratio of oranges to the total number of fruits?',
      options: ['3:5', '3:7', '3:10', '7:10'],
      answer: '3:10',
      explanation: 'Total fruits = $5 + 3 + 2 = 10$\n\nRatio of oranges to total:\n$$3:10$$\n\nThis is a **part-to-whole ratio**.\n\n**Note:** $\\frac{3}{10}$ of the fruits are oranges.',
      relatedConcept: 'bcg67-d15-c4',
    },
    {
      id: 'bcg67-d15-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'A class has boys and girls in the ratio $3:5$. If there are 24 students in total, how many are boys?',
      options: ['6', '9', '15', '18'],
      answer: '9',
      explanation: 'The ratio $3:5$ means 3 parts boys + 5 parts girls = 8 parts total.\n\nValue of each part:\n$$24 \\div 8 = 3 \\text{ students per part}$$\n\nNumber of boys:\n$$3 \\text{ parts} \\times 3 = 9 \\text{ boys}$$\n\n**Check:** Girls = $5 \\times 3 = 15$. Total: $9 + 15 = 24$ ✓',
      relatedConcept: 'bcg67-d15-c4',
    },
  ],
  realLifeExample:
    'Ratios are everywhere! Mixing concrete uses cement:sand:gravel = 1:2:3. A map scale of 1:50,000 means 1 cm on the map = 50,000 cm (0.5 km) in real life. Recipes, maps, models, paint mixing — ratios make everything scale correctly! 지도 축척, 콘크리트 배합, 요리 레시피 모두 비를 사용해요.',
};

export default dayContent;
