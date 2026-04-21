import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 12,
  part: 2,
  title: 'Volume of Triangular Prisms',
  subtitle: 'Find the volume (부피) of triangular prisms using V = base area × height.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Volume of Triangular Prisms',
      description: 'Watch this lesson to learn how to find the volume of triangular prisms.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d12-c1',
      title: 'What is a Triangular Prism? (삼각기둥)',
      content: 'A **triangular prism** (삼각기둥) is a 3D shape with:\n- Two **triangular bases** (삼각형 밑면) that are identical and parallel\n- Three **rectangular faces** (직사각형 옆면) connecting the triangles\n\nThink of a Toblerone chocolate bar — that is a triangular prism!',
      type: 'definition',
    },
    {
      id: 'bcg8-d12-c2',
      title: 'Volume Formula (부피 공식)',
      content: 'The volume of any prism (기둥) is:\n$$V = \\text{Base Area} \\times \\text{Length}$$\n\nFor a triangular prism, the base is a triangle:\n$$\\text{Triangle Area} = \\frac{1}{2} \\times b \\times h_{\\triangle}$$\n\nSo the full formula is:\n$$V = \\frac{1}{2} \\times b \\times h_{\\triangle} \\times l$$\n\nWhere:\n- $b$ = base of the triangle\n- $h_{\\triangle}$ = height of the triangle\n- $l$ = length (depth) of the prism',
      type: 'formula',
    },
    {
      id: 'bcg8-d12-c3',
      title: 'Step-by-Step Example',
      content: 'A triangular prism has:\n- Triangle base $b = 6$ cm, triangle height $h_{\\triangle} = 4$ cm\n- Prism length $l = 10$ cm\n\n**Step 1:** Find the triangle area:\n$$A = \\frac{1}{2} \\times 6 \\times 4 = 12 \\text{ cm}^2$$\n\n**Step 2:** Multiply by the prism length:\n$$V = 12 \\times 10 = 120 \\text{ cm}^3$$',
      type: 'example',
    },
    {
      id: 'bcg8-d12-c4',
      title: 'Tip: Identify the Two Heights (두 가지 높이 구분)',
      content: 'A triangular prism has **two different "heights"** — be careful!\n\n1. **Triangle height** ($h_{\\triangle}$): the height inside the triangular base (perpendicular to the triangle\'s base)\n2. **Prism length** ($l$): how long the prism extends (also called the depth or length)\n\nAlways find the triangle area first, then multiply by the prism length.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d12-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A triangular prism has a triangular base with base 8 cm and height 3 cm. The prism is 10 cm long. What is the volume?',
      options: ['120 cm³', '240 cm³', '80 cm³', '60 cm³'],
      answer: '120 cm³',
      explanation: 'Triangle area $= \\frac{1}{2} \\times 8 \\times 3 = 12 \\text{ cm}^2$\n\n$V = 12 \\times 10 = 120 \\text{ cm}^3$',
    },
    {
      id: 'bcg8-d12-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Find the volume of a triangular prism where the triangular base has base = 5 cm, height = 4 cm, and the prism length = 7 cm.',
      answer: '70 cm³',
      explanation: 'Triangle area $= \\frac{1}{2} \\times 5 \\times 4 = 10 \\text{ cm}^2$\n\n$V = 10 \\times 7 = 70 \\text{ cm}^3$',
    },
    {
      id: 'bcg8-d12-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the area of a triangle with base 12 cm and height 5 cm?',
      options: ['17 cm²', '30 cm²', '60 cm²', '120 cm²'],
      answer: '30 cm²',
      explanation: '$A = \\frac{1}{2} \\times 12 \\times 5 = \\frac{60}{2} = 30 \\text{ cm}^2$',
    },
    {
      id: 'bcg8-d12-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A tent (텐트) has a triangular cross-section with base 3 m and height 2 m. The tent is 4 m long. What is the volume of air inside the tent?',
      answer: '12 m³',
      explanation: 'Triangle area $= \\frac{1}{2} \\times 3 \\times 2 = 3 \\text{ m}^2$\n\n$V = 3 \\times 4 = 12 \\text{ m}^3$\n\nThe tent holds 12 m³ of air.',
    },
    {
      id: 'bcg8-d12-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A triangular prism has volume 90 cm³. Its triangular base has area 15 cm². What is the length of the prism?',
      options: ['3 cm', '6 cm', '9 cm', '75 cm'],
      answer: '6 cm',
      explanation: '$V = \\text{Base Area} \\times l$\n$90 = 15 \\times l$\n$l = 90 \\div 15 = 6 \\text{ cm}$',
    },
  ],
  realLifeExample: 'The roof of a house is often shaped like a triangular prism. Architects use V = base area × length to figure out how much attic space is inside. (집 지붕은 삼각기둥 모양이에요. 건축가들은 이 공식으로 다락방 공간을 계산합니다!)',
};

export default dayContent;
