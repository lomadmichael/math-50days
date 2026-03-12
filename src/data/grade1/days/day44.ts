import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 44,
  part: 8,
  title: '줄기와 잎 그림',
  subtitle: '데이터를 한눈에! 줄기와 잎 그림으로 자료를 정리해 보자.',
  lectures: [],
  concepts: [
    {
      id: 'g1d44-c1',
      title: '줄기와 잎 그림이란?',
      content: '**줄기와 잎 그림**은 자료를 줄기(십의 자리)와 잎(일의 자리)으로 나누어 정리하는 방법입니다.\n\n예: 자료 23, 25, 31, 34, 37\n\n| 줄기 | 잎 |\n|------|------|\n| 2 | 3 5 |\n| 3 | 1 4 7 |\n\n• **줄기**: 보통 십의 자리 숫자\n• **잎**: 일의 자리 숫자 (작은 수부터 순서대로 나열)\n• 잎의 개수 = 자료의 개수',
      type: 'definition',
    },
    {
      id: 'g1d44-c2',
      title: '줄기와 잎 그림 읽기와 비교',
      content: '줄기와 잎 그림에서 알 수 있는 것:\n• **자료의 개수**: 잎의 총 개수\n• **최솟값·최댓값**: 가장 작은/큰 잎\n• **분포 모양**: 자료가 어디에 집중되어 있는지\n\n**두 집단 비교** (양쪽 줄기와 잎 그림):\n줄기를 가운데 두고 양쪽에 잎을 나열하면 두 집단의 분포를 한눈에 비교할 수 있습니다.',
      type: 'definition',
    },
  ],
  problems: [
    {
      id: 'g1d44-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 줄기와 잎 그림에서 자료의 개수는?\n\n| 줄기 | 잎 |\n|------|------|\n| 1 | 2 5 8 |\n| 2 | 0 3 7 7 |\n| 3 | 1 4 |',
      options: ['7개', '8개', '9개', '10개'],
      answer: '9개',
      explanation: '잎의 개수를 세면:\n줄기 1: 3개 (2, 5, 8)\n줄기 2: 4개 (0, 3, 7, 7)\n줄기 3: 2개 (1, 4)\n\n총 $3 + 4 + 2 = 9$개',
    },
    {
      id: 'g1d44-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '다음 줄기와 잎 그림에서 최댓값은?\n\n| 줄기 | 잎 |\n|------|------|\n| 4 | 1 6 |\n| 5 | 0 3 5 8 |\n| 6 | 2 7 |',
      answer: '67',
      explanation: '줄기의 최댓값은 6이고, 줄기 6에서 가장 큰 잎은 7입니다.\n따라서 최댓값은 $67$입니다.',
    },
    {
      id: 'g1d44-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '8명의 수학 점수가 다음과 같다. 줄기와 잎 그림에서 줄기 7에 해당하는 잎은?\n\n65, 72, 78, 80, 73, 85, 71, 90',
      options: ['1 2 3 8', '2 3 8', '1 2 3', '1 3 8'],
      answer: '1 2 3 8',
      explanation: '70대 점수: 72, 78, 73, 71\n잎을 작은 순서대로 나열하면: 1, 2, 3, 8\n\n따라서 줄기 7의 잎은 **1 2 3 8**',
    },
    {
      id: 'g1d44-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '다음 줄기와 잎 그림에서 20 이상 30 미만인 자료의 개수는?\n\n| 줄기 | 잎 |\n|------|------|\n| 1 | 3 7 9 |\n| 2 | 1 4 4 6 8 |\n| 3 | 0 2 5 |',
      answer: '5',
      explanation: '20 이상 30 미만인 자료는 줄기가 2인 자료입니다.\n잎: 1, 4, 4, 6, 8 → **5개**',
    },
    {
      id: 'g1d44-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '두 반의 줄기와 잎 그림이 아래와 같을 때, 두 반을 합쳐 60점 이상인 학생 수는?\n\nA반 잎 | 줄기 | B반 잎\n8 5 2 | 5 | 1 4 7\n9 3 1 | 6 | 0 2 5 8\n4 0 | 7 | 3 6',
      options: ['9명', '10명', '11명', '12명'],
      answer: '11명',
      explanation: 'A반 60점 이상: 61, 63, 69, 70, 74 → 5명\nB반 60점 이상: 60, 62, 65, 68, 73, 76 → 6명\n\n합계: $5 + 6 = 11$명',
    },
  ],
  realLifeExample: '줄기와 잎 그림은 시험 점수 분석, 키/몸무게 분포 파악 등에 활용됩니다. 원래 데이터 값을 모두 보존하면서도 분포를 한눈에 볼 수 있어 통계 분석의 첫 단계로 자주 사용돼요!',
};

export default dayContent;
