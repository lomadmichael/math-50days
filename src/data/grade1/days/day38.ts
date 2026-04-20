import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 38,
  part: 7,
  title: '다면체(Polyhedron)의 종류',
  subtitle: '각기둥(Prism), 각뿔(Pyramid), 정다면체(Regular Polyhedron)까지! 입체도형의 세계로 들어가 보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d38-c1',
      title: '다면체(Polyhedron)란?',
      content: '**다면체(Polyhedron)**는 다각형인 면(Face)으로만 둘러싸인 입체도형입니다.\n\n• **각기둥(Prism)**: 두 밑면(Base)이 서로 평행하고 합동인 다각형, 옆면(Lateral Face)은 직사각형\n  - 삼각기둥, 사각기둥, 오각기둥, ...\n  - $n$각기둥: 꼭짓점(Vertex) $2n$개, 모서리(Edge) $3n$개, 면(Face) $(n+2)$개\n• **각뿔(Pyramid)**: 밑면(Base)이 다각형이고, 옆면(Lateral Face)이 삼각형으로 한 꼭짓점에서 만남\n  - 삼각뿔, 사각뿔, 오각뿔, ...\n  - $n$각뿔: 꼭짓점(Vertex) $(n+1)$개, 모서리(Edge) $2n$개, 면(Face) $(n+1)$개',
      type: 'definition',
    },
    {
      id: 'g1d38-c2',
      title: '정다면체(Regular Polyhedron)와 오일러 공식',
      content: '**정다면체(Regular Polyhedron / Platonic Solid)**: 각 면이 모두 합동인 정다각형이고, 각 꼭짓점(Vertex)에 모이는 면(Face)의 수가 같은 다면체\n\n정다면체는 **5가지**뿐:\n| 이름 | 면의 모양 | 면 | 꼭짓점 | 모서리 |\n|---|---|---|---|---|\n| 정사면체(Tetrahedron) | 정삼각형 | 4 | 4 | 6 |\n| 정육면체(Cube) | 정사각형 | 6 | 8 | 12 |\n| 정팔면체(Octahedron) | 정삼각형 | 8 | 6 | 12 |\n| 정십이면체(Dodecahedron) | 정오각형 | 12 | 20 | 30 |\n| 정이십면체(Icosahedron) | 정삼각형 | 20 | 12 | 30 |\n\n**오일러 공식**: $V - E + F = 2$ (꼭짓점(Vertex) - 모서리(Edge) + 면(Face) = 2)',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d38-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '오각기둥의 꼭짓점, 모서리, 면의 수를 순서대로 나열한 것은?',
      options: ['10, 15, 7', '10, 15, 5', '5, 10, 7', '10, 20, 7'],
      answer: '10, 15, 7',
      explanation: '$n$각기둥에서 $n = 5$일 때:\n\n• 꼭짓점: $2n = 2 \\times 5 = 10$개\n• 모서리: $3n = 3 \\times 5 = 15$개\n• 면: $n + 2 = 5 + 2 = 7$개',
    },
    {
      id: 'g1d38-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '정다면체는 모두 몇 가지인가?',
      answer: '5',
      explanation: '정다면체는 정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체의 **5가지**뿐입니다.',
    },
    {
      id: 'g1d38-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '어떤 다면체의 꼭짓점이 6개, 면이 8개일 때, 모서리의 수는?',
      options: ['10', '12', '14', '16'],
      answer: '12',
      explanation: '오일러 공식 $V - E + F = 2$에서:\n\n$6 - E + 8 = 2$\n$14 - E = 2$\n$E = 12$\n\n따라서 모서리는 **12개**입니다.',
    },
    {
      id: 'g1d38-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 정다면체가 아닌 것은?',
      options: ['정사면체', '정육면체', '정십면체', '정이십면체'],
      answer: '정십면체',
      explanation: '정다면체는 정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체의 5가지뿐입니다.\n\n**정십면체**는 존재하지 않으므로 정다면체가 아닙니다.',
    },
    {
      id: 'g1d38-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '육각뿔의 꼭짓점의 수와 모서리의 수의 합을 구하시오.',
      answer: '19',
      explanation: '$n$각뿔에서 $n = 6$일 때:\n\n• 꼭짓점: $n + 1 = 6 + 1 = 7$개\n• 모서리: $2n = 2 \\times 6 = 12$개\n\n$7 + 12 = 19$',
    },
  ],
  realLifeExample: '다면체(Polyhedron)는 건축과 디자인에서 많이 활용됩니다. 축구공은 정오각형 12개와 정육각형 20개로 이루어진 깎은 정이십면체(Icosahedron)이고, 주사위는 정육면체(Cube)입니다!',
};

export default dayContent;
