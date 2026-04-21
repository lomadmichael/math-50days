import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 13,
  part: 2,
  title: 'Volume of Cylinders',
  subtitle: 'Calculate the volume (부피) of cylinders using V = πr²h.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Volume of Cylinders',
      description: 'Watch this lesson to learn how to calculate the volume of cylinders using pi.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d13-c1',
      title: 'What is a Cylinder? (원기둥)',
      content: 'A **cylinder** (원기둥) is a 3D shape with:\n- Two **circular bases** (원형 밑면) that are identical and parallel\n- A curved **lateral surface** (옆면) connecting the circles\n\nExamples: cans of soda, a roll of paper towels, a water pipe.',
      type: 'definition',
    },
    {
      id: 'bcg8-d13-c2',
      title: 'Volume Formula (부피 공식)',
      content: 'Like all prisms, volume = base area × height.\n\nThe base of a cylinder is a **circle** (원):\n$$\\text{Circle Area} = \\pi r^2$$\n\nSo the cylinder volume formula is:\n$$V = \\pi r^2 h$$\n\nWhere:\n- $r$ = radius (반지름) of the circular base\n- $h$ = height (높이) of the cylinder\n- $\\pi \\approx 3.14$',
      type: 'formula',
    },
    {
      id: 'bcg8-d13-c3',
      title: 'Step-by-Step Example',
      content: 'Find the volume of a cylinder with radius 4 cm and height 10 cm.\n\n**Step 1:** Find the circle area:\n$$A = \\pi r^2 = \\pi \\times 4^2 = 16\\pi \\approx 50.27 \\text{ cm}^2$$\n\n**Step 2:** Multiply by height:\n$$V = 16\\pi \\times 10 = 160\\pi \\approx 502.7 \\text{ cm}^3$$\n\nLeave answers in terms of $\\pi$ unless the question asks to calculate.',
      type: 'example',
    },
    {
      id: 'bcg8-d13-c4',
      title: 'Radius vs Diameter (반지름 vs 지름)',
      content: 'Watch out! Problems often give you the **diameter** (지름), not the radius (반지름).\n\n$$\\text{radius} = \\frac{\\text{diameter}}{2}$$\n\nExample: If diameter = 10 cm, then $r = 5$ cm.\n\nAlways use the **radius** in the formula $V = \\pi r^2 h$!',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg8-d13-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A cylinder has radius 3 cm and height 7 cm. What is its volume? (Leave answer in terms of π)',
      options: ['21π cm³', '42π cm³', '63π cm³', '126π cm³'],
      answer: '63π cm³',
      explanation: '$V = \\pi r^2 h = \\pi \\times 3^2 \\times 7 = \\pi \\times 9 \\times 7 = 63\\pi \\text{ cm}^3$',
    },
    {
      id: 'bcg8-d13-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'A cylinder has diameter 10 cm and height 6 cm. Find its volume in terms of π.',
      answer: '150π cm³',
      explanation: 'Diameter = 10 cm, so radius $r = 5$ cm.\n$V = \\pi \\times 5^2 \\times 6 = \\pi \\times 25 \\times 6 = 150\\pi \\text{ cm}^3$',
    },
    {
      id: 'bcg8-d13-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which measurement do you use in the formula V = πr²h?',
      options: ['diameter', 'radius', 'circumference', 'perimeter'],
      answer: 'radius',
      explanation: 'The formula uses $r$ = **radius** (반지름). If you are given the diameter, divide by 2 first to get the radius.',
    },
    {
      id: 'bcg8-d13-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A cylindrical water tank has a diameter of 6 m and a height of 10 m. Approximately how many cubic metres of water can it hold? Use π ≈ 3.14.',
      answer: '282.6 m³',
      explanation: 'Radius $r = 6 \\div 2 = 3$ m.\n$V = \\pi r^2 h = 3.14 \\times 3^2 \\times 10 = 3.14 \\times 9 \\times 10 = 3.14 \\times 90 = 282.6 \\text{ m}^3$',
    },
    {
      id: 'bcg8-d13-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Two cylinders have the same height of 5 cm. Cylinder A has radius 2 cm and Cylinder B has radius 4 cm. How many times greater is the volume of Cylinder B than Cylinder A?',
      options: ['2 times', '4 times', '8 times', '16 times'],
      answer: '4 times',
      explanation: '$V_A = \\pi \\times 2^2 \\times 5 = 20\\pi$\n$V_B = \\pi \\times 4^2 \\times 5 = 80\\pi$\n$V_B \\div V_A = 80\\pi \\div 20\\pi = 4$\n\nDoubling the radius makes the volume **4 times** larger (because radius is squared).',
    },
    {
      id: 'bcg8-d13-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'A cylinder has volume 200π cm³ and radius 5 cm. Find the height of the cylinder.',
      answer: '8 cm',
      explanation: '$V = \\pi r^2 h$\n$200\\pi = \\pi \\times 5^2 \\times h$\n$200\\pi = 25\\pi h$\n$h = \\frac{200\\pi}{25\\pi} = 8 \\text{ cm}$',
    },
  ],
  realLifeExample: 'A can of soup is a cylinder. If the can has radius 4 cm and height 11 cm, it holds $V = \\pi \\times 4^2 \\times 11 \\approx 553 \\text{ cm}^3$ of soup. (수프 캔은 원기둥이에요. 이 공식으로 캔 안에 수프가 얼마나 들어있는지 계산할 수 있어요!)',
};

export default dayContent;
