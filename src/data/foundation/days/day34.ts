import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 34,
  part: 7,
  title: '여러 입체도형 관찰',
  subtitle: '다면체/회전체 — 입체의 세계',
  lectures: [],
  concepts: [
    {
      id: 'f7d34-c1',
      title: '다면체',
      content:
        '다면체: 평평한 면(다각형)으로만 둘러싸인 입체도형\\n• 각기둥: 위아래 밑면이 합동인 다각형, 옆면은 직사각형\\n• 각뿔: 밑면이 다각형, 옆면이 삼각형, 꼭짓점이 하나\\n\\n오일러 공식: 꼭짓점 수 $-$ 모서리 수 $+$ 면 수 $= 2$',
      type: 'definition',
    },
    {
      id: 'f7d34-c2',
      title: '회전체',
      content:
        '평면도형을 한 직선(축)을 중심으로 회전시켜 만든 입체\\n• 원기둥: 직사각형을 한 변 기준으로 회전\\n• 원뿔: 직각삼각형을 한 직각변 기준으로 회전\\n• 구: 반원을 지름 기준으로 회전',
      type: 'definition',
    },
    {
      id: 'f7d34-c3',
      title: '입체도형의 전개도',
      content:
        '전개도: 입체를 펼쳐서 평면에 나타낸 그림\\n• 정육면체 전개도: 11가지\\n• 전개도를 접었을 때 마주보는 면이 어디인지 파악하는 것이 중요!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd34-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '삼각기둥의 면은 몇 개인가요?',
      options: ['3개', '4개', '5개', '6개'],
      answer: '5개',
      explanation:
        '삼각기둥은 삼각형 밑면 2개 + 직사각형 옆면 3개 = 총 5개의 면을 가집니다.',
    },
    {
      id: 'fd34-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '직사각형을 한 변을 축으로 회전시키면 어떤 입체가 되나요?',
      options: ['구', '원뿔', '원기둥', '각뿔'],
      answer: '원기둥',
      explanation:
        '직사각형을 한 변을 축으로 회전하면 원기둥이 만들어집니다.',
    },
    {
      id: 'fd34-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        '사각기둥의 꼭짓점 수는 몇 개인가요?',
      answer: '8',
      explanation:
        '사각기둥은 위아래 사각형(꼭짓점 4개씩)이므로 총 8개입니다.',
    },
    {
      id: 'fd34-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        '오각뿔의 모서리 수는 몇 개인가요?',
      options: ['5개', '8개', '10개', '15개'],
      answer: '10개',
      explanation:
        '오각뿔: 밑면 모서리 5개 + 옆면 모서리 5개 = 총 10개',
    },
    {
      id: 'fd34-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        '정육면체의 꼭짓점, 모서리, 면의 수를 오일러 공식으로 확인하세요. 꼭짓점 - 모서리 + 면 = ?',
      answer: '2',
      explanation:
        '정육면체: 꼭짓점 8, 모서리 12, 면 6 → $8 - 12 + 6 = 2$ (오일러 공식 성립)',
    },
  ],
  realLifeExample:
    '음료수 캔은 원기둥, 아이스크림 콘은 원뿔, 축구공은 구에 가까운 모양이에요. 주변에서 다양한 입체도형을 찾아보세요!',
};

export default dayContent;
