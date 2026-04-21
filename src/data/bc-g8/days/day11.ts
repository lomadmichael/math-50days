import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 11,
  part: 2,
  title: 'Volume of Rectangular Prisms',
  subtitle: 'Learn how to find the volume (부피) of boxes and rectangular containers using V = l × w × h.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Volume of Rectangular Prisms',
      description: 'Watch this lesson to learn how to calculate the volume of rectangular prisms step by step.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d11-c1',
      title: 'What is Volume? (부피란?)',
      content: 'Volume (부피) is the amount of 3D space an object takes up.\n\nWe measure volume in **cubic units** (세제곱 단위):\n- cubic centimetres: $\\text{cm}^3$\n- cubic metres: $\\text{m}^3$\n\nThink of volume as "how many small cubes fit inside the shape."',
      type: 'definition',
    },
    {
      id: 'bcg8-d11-c2',
      title: 'Formula for Rectangular Prisms (직육면체 공식)',
      content: 'A **rectangular prism** (직육면체) has 3 dimensions:\n- $l$ = length (길이)\n- $w$ = width (너비)\n- $h$ = height (높이)\n\n$$V = l \\times w \\times h$$\n\nExample: A box that is 5 cm long, 3 cm wide, and 4 cm tall:\n$$V = 5 \\times 3 \\times 4 = 60 \\text{ cm}^3$$',
      type: 'formula',
    },
    {
      id: 'bcg8-d11-c3',
      title: 'Volume = Base Area × Height',
      content: 'Another way to think about the formula:\n\n$$V = \\text{Base Area} \\times h$$\n\nThe base area (밑넓이) of a rectangular prism is a rectangle:\n$$\\text{Base Area} = l \\times w$$\n\nSo: $V = (l \\times w) \\times h$\n\nThis thinking helps you with other prisms later!',
      type: 'tip',
    },
    {
      id: 'bcg8-d11-c4',
      title: 'Watch Out: Units! (단위 주의)',
      content: 'Always include units in your answer.\n\n- If lengths are in **cm**, volume is in **cm³**\n- If lengths are in **m**, volume is in **m³**\n\nCommon mistake: writing "60" instead of "$60 \\text{ cm}^3$" — always label your units!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg8-d11-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A rectangular prism has length 6 cm, width 4 cm, and height 3 cm. What is its volume?',
      options: ['13 cm³', '36 cm³', '72 cm³', '48 cm³'],
      answer: '72 cm³',
      explanation: '$V = l \\times w \\times h = 6 \\times 4 \\times 3 = 72 \\text{ cm}^3$',
    },
    {
      id: 'bcg8-d11-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Find the volume of a cube (정육면체) with side length 5 cm.',
      answer: '125 cm³',
      explanation: 'A cube has equal length, width, and height.\n$V = 5 \\times 5 \\times 5 = 125 \\text{ cm}^3$',
    },
    {
      id: 'bcg8-d11-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which formula gives the volume of a rectangular prism?',
      options: ['V = l + w + h', 'V = 2(lw + lh + wh)', 'V = l × w × h', 'V = l × w'],
      answer: 'V = l × w × h',
      explanation: '$V = l \\times w \\times h$ gives the volume. The formula $2(lw + lh + wh)$ gives surface area (겉넓이), and $l \\times w$ gives just the base area (밑넓이).',
    },
    {
      id: 'bcg8-d11-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A fish tank (어항) is 60 cm long, 30 cm wide, and 40 cm tall. How many cubic centimetres of water does it hold when full?',
      answer: '72000 cm³',
      explanation: '$V = 60 \\times 30 \\times 40 = 72{,}000 \\text{ cm}^3$\n\nThe tank holds 72,000 cm³ of water.',
    },
    {
      id: 'bcg8-d11-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A rectangular box has a base area of 24 cm² and a height of 5 cm. What is its volume?',
      options: ['29 cm³', '48 cm³', '120 cm³', '240 cm³'],
      answer: '120 cm³',
      explanation: '$V = \\text{Base Area} \\times h = 24 \\times 5 = 120 \\text{ cm}^3$',
    },
    {
      id: 'bcg8-d11-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'A rectangular prism has volume 360 cm³. Its length is 10 cm and width is 6 cm. Find the height.',
      answer: '6 cm',
      explanation: '$V = l \\times w \\times h$\n$360 = 10 \\times 6 \\times h$\n$360 = 60h$\n$h = 360 \\div 60 = 6 \\text{ cm}$',
    },
  ],
  realLifeExample: 'When you buy a moving box, the label says "50 cm × 40 cm × 30 cm." That means the volume is $50 \\times 40 \\times 30 = 60{,}000 \\text{ cm}^3$. (이삿짐 박스를 살 때 표시된 세 숫자를 곱하면 물건이 얼마나 들어가는지 알 수 있어요!)',
};

export default dayContent;
