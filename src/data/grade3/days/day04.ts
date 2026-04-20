import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 4,
  part: 1,
  title: '실수의 대소 관계와 수직선',
  subtitle: '수직선 위에서 실수 비교하기',
  lectures: [],
  concepts: [
    {
      id: 'g3d4-c1',
      title: '실수와 수직선의 관계',
      content: '모든 실수는 수직선 위의 한 점에 대응하고, 수직선 위의 모든 점은 하나의 실수에 대응합니다.\\n\\n유리수만으로는 수직선을 빈틈없이 채울 수 없지만, 실수(유리수 + 무리수)를 포함하면 수직선 위의 모든 점을 빈틈없이 채울 수 있습니다.',
      type: 'definition',
    },
    {
      id: 'g3d4-c2',
      title: '제곱근의 대소 비교',
      content: '$a > 0$, $b > 0$일 때:\\n$a > b \\Leftrightarrow \\sqrt{a} > \\sqrt{b}$\\n\\n정수와 제곱근 비교: 정수를 제곱근 형태로 바꿔 비교\\n예: $3$과 $\\sqrt{10}$ → $3 = \\sqrt{9}$이므로 $\\sqrt{9} < \\sqrt{10}$, 즉 $3 < \\sqrt{10}$',
      type: 'formula',
    },
    {
      id: 'g3d4-c3',
      title: '수직선에서 무리수 나타내기',
      content: '$\\sqrt{2}$를 수직선에 나타내기:\\n한 변의 길이가 1인 정사각형의 대각선 길이 = $\\sqrt{1^2 + 1^2} = \\sqrt{2}$\\n이 대각선을 컴퍼스로 수직선 위에 옮기면 $\\sqrt{2}$의 위치를 나타낼 수 있습니다.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g3d4-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$2$와 $\\sqrt{5}$ 중 더 큰 수는?',
      options: ['$2$', '$\\sqrt{5}$', '같다', '비교할 수 없다'],
      answer: '$\\sqrt{5}$',
      explanation: '$2 = \\sqrt{4}$이고 $\\sqrt{4} < \\sqrt{5}$이므로 $2 < \\sqrt{5}$입니다.',
    },
    {
      id: 'g3d4-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '$\\sqrt{15}$는 어떤 두 연속 자연수 사이에 있는가?',
      options: ['$2$와 $3$', '$3$과 $4$', '$4$와 $5$', '$5$와 $6$'],
      answer: '$3$과 $4$',
      explanation: '$3^2 = 9$, $4^2 = 16$이고 $9 < 15 < 16$이므로 $\\sqrt{9} < \\sqrt{15} < \\sqrt{16}$, 즉 $3 < \\sqrt{15} < 4$입니다.',
    },
    {
      id: 'g3d4-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '$3\\sqrt{2}$와 $2\\sqrt{5}$ 중 더 큰 수는?',
      options: ['$3\\sqrt{2}$', '$2\\sqrt{5}$', '같다', '비교할 수 없다'],
      answer: '$2\\sqrt{5}$',
      explanation: '$(3\\sqrt{2})^2 = 9 \\times 2 = 18$, $(2\\sqrt{5})^2 = 4 \\times 5 = 20$이고 $18 < 20$이므로 $3\\sqrt{2} < 2\\sqrt{5}$입니다.',
    },
    {
      id: 'g3d4-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 수를 작은 것부터 나열할 때 세 번째 수는? $\\sqrt{3}$, $2$, $\\sqrt{6}$, $1$',
      options: ['$\\sqrt{3}$', '$2$', '$\\sqrt{6}$', '$1$'],
      answer: '$2$',
      explanation: '$1 < \\sqrt{3}(\\approx 1.73) < 2(= \\sqrt{4}) < \\sqrt{6}(\\approx 2.45)$이므로 세 번째는 $2$입니다.',
    },
    {
      id: 'g3d4-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '$\\sqrt{n}$이 $4$와 $5$ 사이에 있는 자연수 $n$의 개수는?',
      options: ['$7$개', '$8$개', '$9$개', '$10$개'],
      answer: '$8$개',
      explanation: '$4 < \\sqrt{n} < 5$에서 $16 < n < 25$이므로 $n = 17, 18, 19, 20, 21, 22, 23, 24$로 8개입니다.',
    },
  ],
  realLifeExample: '대각선을 이용해 직사각형 TV의 크기를 나타낼 때, 가로 40인치, 세로 30인치이면 대각선은 $\\sqrt{40^2 + 30^2} = \\sqrt{2500} = 50$인치입니다. 이것이 50인치 TV의 의미이며, 실수의 대소 비교로 어떤 TV가 더 큰지 알 수 있습니다.',
};

export default dayContent;
