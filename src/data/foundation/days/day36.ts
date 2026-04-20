import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 36,
  part: 8,
  title: '규칙 찾기, □ 구하기',
  subtitle: '문자와 식 — 규칙을 수식으로',
  lectures: [],
  concepts: [
    {
      id: 'f8d36-c1',
      title: '규칙 찾기',
      content:
        '수의 나열에서 규칙을 찾아보세요.\\n• 등차: 일정한 수를 더함 (2, 5, 8, 11, … → +3)\\n• 등비: 일정한 수를 곱함 (3, 6, 12, 24, … → $\\times 2$)\\n• 계차: 차이가 규칙적으로 변함 (1, 2, 4, 7, 11, … → 차이 +1, +2, +3, +4)',
      type: 'definition',
    },
    {
      id: 'f8d36-c2',
      title: '□ 구하기 (역연산)',
      content:
        '□를 구하려면 역연산을 이용합니다.\\n• $\\square + 5 = 12$ → $\\square = 12 - 5 = 7$\\n• $\\square \\times 3 = 18$ → $\\square = 18 \\div 3 = 6$\\n• $\\square - 7 = 4$ → $\\square = 4 + 7 = 11$\\n• $\\square \\div 4 = 5$ → $\\square = 5 \\times 4 = 20$',
      type: 'formula',
    },
    {
      id: 'f8d36-c3',
      title: '문자 사용의 시작',
      content:
        '□ 대신 문자(보통 $x$)를 쓰면 "방정식"이 됩니다.\\n$\\square + 5 = 12$  →  $x + 5 = 12$\\n중학교에서는 문자를 본격적으로 사용합니다!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'fd36-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '3, 7, 11, 15, □ — □에 들어갈 수는?',
      options: ['17', '18', '19', '20'],
      answer: '19',
      explanation: '4씩 증가하는 규칙이므로 $15 + 4 = 19$',
    },
    {
      id: 'fd36-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '$\\square \\times 6 = 42$일 때, □의 값은?',
      answer: '7',
      explanation: '$\\square = 42 \\div 6 = 7$',
    },
    {
      id: 'fd36-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '2, 6, 18, 54, □ — □에 들어갈 수는?',
      options: ['72', '108', '162', '216'],
      answer: '162',
      explanation: '$\\times 3$씩 곱하는 규칙이므로 $54 \\times 3 = 162$',
    },
    {
      id: 'fd36-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '$\\square \\div 8 + 3 = 7$일 때, □의 값은?',
      answer: '32',
      explanation:
        '$\\square \\div 8 = 7 - 3 = 4$, $\\square = 4 \\times 8 = 32$',
    },
    {
      id: 'fd36-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '1, 1, 2, 3, 5, 8, 13, □ — □에 들어갈 수는?',
      options: ['15', '18', '20', '21'],
      answer: '21',
      explanation:
        '피보나치 수열입니다. 앞의 두 수를 더하면 다음 수가 됩니다. $8 + 13 = 21$',
    },
  ],
  realLifeExample:
    '엘리베이터 층수, 달력의 날짜, 시계의 숫자 등 일상에서 규칙적인 수의 나열을 많이 볼 수 있어요. 규칙을 찾으면 다음에 올 것을 예측할 수 있습니다!',
};

export default dayContent;
