import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 13,
  part: 2,
  title: '일차부등식 활용 (1)',
  subtitle: '일차부등식을 세워서 실생활 문제를 해결하자!',
  lectures: [],
  concepts: [
    {
      id: 'g2d13-c1',
      title: '부등식 활용 문제 풀이 순서',
      content: '**① 미지수 정하기**: 구하려는 것을 $x$로 놓기\n**② 부등식 세우기**: 조건을 부등식으로 표현\n**③ 부등식 풀기**: 일차부등식 풀이\n**④ 답 확인하기**: 문제 조건에 맞는지 확인 (자연수, 정수 등)',
      type: 'tip',
    },
    {
      id: 'g2d13-c2',
      title: '수에 관한 문제',
      content: '연속하는 세 정수의 합이 30 이상일 때, 가장 작은 정수의 최솟값을 구하시오.\n\n풀이: 가장 작은 정수를 $x$로 놓으면\n$x + (x+1) + (x+2) \\geq 30$\n$3x + 3 \\geq 30$\n$3x \\geq 27$\n$x \\geq 9$\n\n가장 작은 정수의 최솟값은 **9**',
      type: 'example',
    },
    {
      id: 'g2d13-c3',
      title: '거리/속력/시간 문제',
      content: '**거리 = 속력 $\\times$ 시간** 공식을 활용합니다.\n\n집에서 학교까지 거리가 3 km입니다. 분속 80 m로 걸으면 30분 안에 도착할 수 있을까?\n\n$80 \\times 30 = 2400$ m $= 2.4$ km $< 3$ km\n→ 30분 안에 도착할 수 없습니다.\n\n분속 $v$ m로 걸어서 30분 이내에 도착하려면:\n$30v \\geq 3000$ → $v \\geq 100$\n분속 100 m 이상이어야 합니다.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'g2d13-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '어떤 수의 3배에서 5를 뺀 것이 16보다 크다. 이 수의 범위는?',
      options: ['$x > 7$', '$x > 3$', '$x \\geq 7$', '$x < 7$'],
      answer: '$x > 7$',
      explanation: '$3x - 5 > 16$\n$3x > 21$\n$x > 7$',
    },
    {
      id: 'g2d13-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: '사탕 한 개에 200원입니다. 5,000원으로 사탕을 최대 몇 개까지 살 수 있습니까?',
      answer: '25',
      explanation: '$200x \\leq 5000$\n$x \\leq 25$\n\n최대 25개까지 살 수 있습니다.',
    },
    {
      id: 'g2d13-p3',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '연속하는 두 짝수의 합이 50보다 작을 때, 두 짝수 중 큰 수의 최댓값은?',
      options: ['$24$', '$25$', '$26$', '$28$'],
      answer: '$24$',
      explanation: '큰 짝수를 $x$라 하면 작은 짝수는 $x - 2$\n$(x - 2) + x < 50$\n$2x - 2 < 50$\n$2x < 52$\n$x < 26$\n\n$x$는 짝수이고 $x < 26$이므로 최댓값은 $24$\n\n다른 풀이: 연속 짝수 $2n$, $2n+2$에서 $4n + 2 < 50$, $n < 12$이므로 $n = 11$, 큰 수 = $24$\n\n아, 그런데 보기에서 26은 $x < 26$의 경계값이므로 미포함. 최댓값은 24입니다.',
    },
    {
      id: 'g2d13-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: '어떤 시험에서 80점 이상이면 합격입니다. 첫 네 과목의 점수가 75, 82, 90, 68일 때, 다섯 번째 과목에서 최소 몇 점을 받아야 평균 80점 이상이 됩니까?',
      answer: '85',
      explanation: '$\\frac{75 + 82 + 90 + 68 + x}{5} \\geq 80$\n$315 + x \\geq 400$\n$x \\geq 85$\n\n다섯 번째 과목에서 최소 85점을 받아야 합니다.',
    },
    {
      id: 'g2d13-p5',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: '집에서 도서관까지 2.4 km입니다. 처음 0.6 km는 분속 60 m로 걸었다면, 나머지 거리를 분속 몇 m 이상으로 걸어야 출발 후 30분 이내에 도착합니까?',
      options: ['분속 80 m', '분속 90 m', '분속 100 m', '분속 120 m'],
      answer: '분속 90 m',
      explanation: '0.6 km = 600 m를 분속 60 m로 걸으면 $\\frac{600}{60} = 10$분 소요\n\n나머지 1.8 km = 1800 m를 $(30 - 10) = 20$분 이내에 걸어야 하므로:\n$\\frac{1800}{v} \\leq 20$\n$v \\geq 90$\n\n분속 90 m 이상으로 걸어야 합니다.',
    },
  ],
  realLifeExample: '휴대폰 요금제 A는 기본료 20,000원에 통화 1분당 50원, 요금제 B는 기본료 30,000원에 통화 무제한입니다. B가 유리한 경우는 $20000 + 50x > 30000$, 즉 $x > 200$으로 월 통화 200분 초과일 때입니다.',
};

export default dayContent;
