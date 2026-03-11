import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 30,
  part: 5,
  title: '삼각형의 작도',
  subtitle: '컴퍼스와 자만으로 삼각형을 그릴 수 있을까? 작도의 원리를 배워보자!',
  lectures: [],
  concepts: [
    {
      id: 'g1d30-c1',
      title: '작도의 기본',
      content: '**작도**: 눈금 없는 자와 컴퍼스만을 사용하여 도형을 그리는 것\n• **자**: 두 점을 잇는 직선(선분)을 긋는 데 사용\n• **컴퍼스**: 원(호)을 그리거나 길이를 옮기는 데 사용\n\n기본 작도:\n• 주어진 선분의 길이 옮기기\n• 주어진 각의 크기 옮기기\n• 선분의 수직이등분선 작도\n• 각의 이등분선 작도',
      type: 'definition',
    },
    {
      id: 'g1d30-c2',
      title: '삼각형의 작도 조건',
      content: '삼각형을 하나로 결정하려면 다음 중 하나를 알아야 합니다:\n• **SSS** (세 변): 세 변의 길이가 주어질 때\n• **SAS** (두 변과 끼인각): 두 변의 길이와 그 사이의 각\n• **ASA** (한 변과 양 끝각): 한 변의 길이와 양 끝 두 각\n\n⚠️ 삼각형이 만들어지지 않는 경우:\n세 변의 길이 $a, b, c$에서 가장 긴 변이 나머지 두 변의 합보다 크거나 같으면 삼각형 불가!',
      type: 'formula',
    },
    {
      id: 'g1d30-c3',
      title: '삼각형의 결정 조건 (세 변의 관계)',
      content: '삼각형의 세 변 $a, b, c$에 대해:\n• $a + b > c$\n• $b + c > a$\n• $c + a > b$\n\n**가장 긴 변 < 나머지 두 변의 합**이면 삼각형이 만들어집니다!\n\n예) 3, 4, 8 → $3 + 4 = 7 < 8$ → 삼각형 불가 ✗\n예) 3, 4, 5 → $3 + 4 = 7 > 5$ → 삼각형 가능 ✓',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'g1d30-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '다음 중 세 변의 길이로 삼각형을 만들 수 있는 것은?',
      options: ['2, 3, 6', '1, 2, 3', '3, 4, 5', '1, 1, 3'],
      answer: '3, 4, 5',
      explanation: '가장 긴 변 < 나머지 두 변의 합이어야 합니다.\n• 2, 3, 6 → $2 + 3 = 5 < 6$ ✗\n• 1, 2, 3 → $1 + 2 = 3 = 3$ (같으면 불가) ✗\n• 3, 4, 5 → $3 + 4 = 7 > 5$ ✓\n• 1, 1, 3 → $1 + 1 = 2 < 3$ ✗',
    },
    {
      id: 'g1d30-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: '삼각형의 작도에서 사용하는 도구로 옳은 것은?',
      options: [
        '눈금 있는 자와 각도기',
        '눈금 없는 자와 컴퍼스',
        '각도기와 컴퍼스',
        '눈금 있는 자와 컴퍼스',
      ],
      answer: '눈금 없는 자와 컴퍼스',
      explanation: '**작도**는 눈금 없는 자(직선을 긋기 위한)와 **컴퍼스**(원을 그리고 길이를 옮기기 위한)만 사용합니다.\n\n각도기나 눈금이 있는 자는 작도 도구가 아닙니다.',
    },
    {
      id: 'g1d30-p3',
      type: 'short-answer',
      difficulty: 'applied',
      question: '세 변의 길이가 $a$, $5$, $8$인 삼각형을 만들 수 있을 때, 자연수 $a$의 개수를 구하시오.',
      answer: '9',
      explanation: '삼각형 성립 조건: 가장 긴 변 < 나머지 두 변의 합\n\n$|5 - 8| < a < 5 + 8$\n$3 < a < 13$\n\n자연수 $a$: 4, 5, 6, 7, 8, 9, 10, 11, 12\n\n따라서 **9개**',
    },
    {
      id: 'g1d30-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: '다음 중 삼각형이 하나로 결정되지 않는 조건은?',
      options: [
        '세 변의 길이가 주어질 때 (SSS)',
        '두 변과 그 끼인각이 주어질 때 (SAS)',
        '세 각의 크기가 주어질 때 (AAA)',
        '한 변과 양 끝 각이 주어질 때 (ASA)',
      ],
      answer: '세 각의 크기가 주어질 때 (AAA)',
      explanation: '**AAA** (세 각)는 삼각형의 **모양**은 결정하지만 **크기**는 결정하지 못합니다.\n\n같은 세 각을 가진 삼각형은 크기가 다른 것이 무한히 많습니다. (닮은 삼각형)\n\nSSS, SAS, ASA는 삼각형을 하나로 결정합니다.',
    },
    {
      id: 'g1d30-p5',
      type: 'short-answer',
      difficulty: 'challenge',
      question: '둘레의 길이가 $20$인 삼각형에서 가장 긴 변의 길이가 될 수 있는 자연수의 최댓값을 구하시오.',
      answer: '9',
      explanation: '세 변의 길이를 $a, b, c$라 하면 ($a$가 가장 긴 변):\n$a + b + c = 20$이고, $a < b + c$\n\n$b + c = 20 - a$이므로:\n$a < 20 - a$\n$2a < 20$\n$a < 10$\n\n자연수 중 최댓값: $a = 9$\n\n검산: $a = 9$이면 $b + c = 11$이고, $9 < 11$ ✓',
    },
  ],
  realLifeExample: '고대 그리스인들은 컴퍼스와 자만으로 정삼각형, 정오각형 등을 작도했습니다. 현대에도 건축 설계, 기계 부품 제작, 로고 디자인 등에서 정확한 삼각형 작도의 원리가 활용됩니다!',
};

export default dayContent;
