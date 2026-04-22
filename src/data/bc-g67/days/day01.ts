import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 1,
  part: 1,
  title: 'Place Value and Large Numbers',
  subtitle: 'Understanding digits up to billions and writing numbers in expanded form (자릿값과 큰 수)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d1-c1',
      title: 'Place Value Chart — Up to Billions',
      content: 'Every digit in a number has a **place value** (자릿값) — its position tells you how much it is worth.\n\nHere is the chart from right to left:\n\n$$\\begin{array}{c|c|c|c|c|c|c|c|c|c}\n\\text{Billions} & \\text{Hundred} & \\text{Ten} & \\text{Millions} & \\text{Hundred} & \\text{Ten} & \\text{Thousands} & \\text{Hundreds} & \\text{Tens} & \\text{Ones} \\\\\n & \\text{Millions} & \\text{Millions} & & \\text{Thousands} & \\text{Thousands} & & & & \\\\\n10^9 & 10^8 & 10^7 & 10^6 & 10^5 & 10^4 & 10^3 & 10^2 & 10^1 & 10^0\n\\end{array}$$\n\n**Example:** In the number $3{,}472{,}856{,}091$:\n- The digit **3** is in the **billions** place → it means $3{,}000{,}000{,}000$\n- The digit **4** is in the **hundred millions** place → it means $400{,}000{,}000$\n- The digit **9** is in the **tens** place → it means $90$',
      type: 'definition',
    },
    {
      id: 'bcg67-d1-c2',
      title: 'Reading and Writing Large Numbers',
      content: 'Large numbers are grouped into sets of **three digits** (thousands, millions, billions) separated by **commas**.\n\n**How to read** $5{,}307{,}042{,}800$:\n1. Split: $5$ | $307$ | $042$ | $800$\n2. Read: "Five **billion**, three hundred seven **million**, forty-two **thousand**, eight hundred"\n\n**How to write** "Twenty-three billion, six hundred million, four thousand, twelve":\n$$23{,}600{,}004{,}012$$\n\n**팁 (Tip):** In Canada, a **comma** separates groups of three digits. A **period** is the decimal point.',
      type: 'formula',
    },
    {
      id: 'bcg67-d1-c3',
      title: 'Expanded Form',
      content: '**Expanded form** (전개형) breaks a number apart to show the value of each digit.\n\n**Example:** Write $4{,}053{,}207$ in expanded form.\n\n$$4{,}053{,}207 = 4{,}000{,}000 + 50{,}000 + 3{,}000 + 200 + 7$$\n\nOr using multiplication:\n$$= (4 \\times 1{,}000{,}000) + (5 \\times 10{,}000) + (3 \\times 1{,}000) + (2 \\times 100) + (7 \\times 1)$$\n\n**Notice:** Digits that are 0 are **not** included in expanded form.',
      type: 'example',
    },
    {
      id: 'bcg67-d1-c4',
      title: 'Comparing and Ordering Large Numbers',
      content: 'To **compare** large numbers:\n1. Count the digits — more digits means a bigger number.\n2. If digit count is equal, compare from **left to right** one place at a time.\n\n**Example:** Compare $7{,}350{,}000$ and $7{,}305{,}000$.\n- Both have 7 digits and start with 7.\n- Next digit: both have 3.\n- Next: $7{,}\\mathbf{5}50{,}000$ vs $7{,}\\mathbf{3}05{,}000$ → $5 > 0$\n\n$$7{,}350{,}000 > 7{,}305{,}000$$\n\n**팁:** Line up numbers by their ones place before comparing.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg67-d1-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is the value of the digit 6 in the number 6,403,821?',
      options: ['6,000', '600,000', '6,000,000', '60,000,000'],
      answer: '6,000,000',
      explanation: 'In $6{,}403{,}821$, the digit **6** is in the **millions** place.\n\n$$6 \\times 1{,}000{,}000 = 6{,}000{,}000$$\n\n**힌트:** 자릿값 표를 사용하면 각 숫자의 위치를 쉽게 찾을 수 있어요.',
      relatedConcept: 'bcg67-d1-c1',
    },
    {
      id: 'bcg67-d1-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Write the number "Two billion, forty-five million, three hundred thousand, six" in standard form.',
      answer: '2,045,300,006',
      explanation: 'Break it into groups:\n- Two billion → $2{,}000{,}000{,}000$\n- Forty-five million → $45{,}000{,}000$\n- Three hundred thousand → $300{,}000$\n- Six → $6$\n\n$$2{,}000{,}000{,}000 + 45{,}000{,}000 + 300{,}000 + 6 = 2{,}045{,}300{,}006$$\n\n**힌트:** 0이 들어가는 자리에 주의하세요!',
      relatedConcept: 'bcg67-d1-c2',
    },
    {
      id: 'bcg67-d1-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following is the expanded form of 8,020,305?',
      options: [
        '8,000,000 + 20,000 + 300 + 5',
        '8,000,000 + 2,000 + 300 + 5',
        '8,000,000 + 20,000 + 305',
        '8,000,000 + 200,000 + 3,005',
      ],
      answer: '8,000,000 + 20,000 + 300 + 5',
      explanation: 'Read each digit of $8{,}020{,}305$:\n- 8 millions → $8{,}000{,}000$\n- 0 hundred thousands → (skip)\n- 2 ten-thousands → $20{,}000$\n- 0 thousands → (skip)\n- 3 hundreds → $300$\n- 0 tens → (skip)\n- 5 ones → $5$\n\n$$8{,}020{,}305 = 8{,}000{,}000 + 20{,}000 + 300 + 5$$',
      relatedConcept: 'bcg67-d1-c3',
    },
    {
      id: 'bcg67-d1-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Which number is greatest?\n\n304,500,000    340,050,000    304,050,000    340,500,000',
      options: ['304,500,000', '340,050,000', '304,050,000', '340,500,000'],
      answer: '340,500,000',
      explanation: 'All four numbers have 9 digits. Compare from left:\n- 304,500,000 → 3 **0** 4...\n- 340,050,000 → 3 **4** 0...\n- 304,050,000 → 3 **0** 4...\n- 340,500,000 → 3 **4** 0...\n\nNumbers starting with 34 are larger than those starting with 30.\nNow compare $340{,}050{,}000$ vs $340{,}500{,}000$:\n- 340,**0**50,000 vs 340,**5**00,000 → $5 > 0$\n\nGreatest: $\\mathbf{340{,}500{,}000}$',
      relatedConcept: 'bcg67-d1-c4',
    },
    {
      id: 'bcg67-d1-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'The population of Canada is about 38,250,000. Write this number in expanded form using multiplication.',
      answer: '(3 × 10,000,000) + (8 × 1,000,000) + (2 × 100,000) + (5 × 10,000)',
      explanation: 'Read each non-zero digit:\n- 3 ten-millions → $3 \\times 10{,}000{,}000$\n- 8 millions → $8 \\times 1{,}000{,}000$\n- 2 hundred-thousands → $2 \\times 100{,}000$\n- 5 ten-thousands → $5 \\times 10{,}000$\n\n$$38{,}250{,}000 = (3 \\times 10{,}000{,}000) + (8 \\times 1{,}000{,}000) + (2 \\times 100{,}000) + (5 \\times 10{,}000)$$',
      relatedConcept: 'bcg67-d1-c3',
    },
    {
      id: 'bcg67-d1-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'A number has a 4 in the billions place, a 7 in the ten-millions place, and all other digits are 0. What is the number?',
      options: ['4,700,000,000', '4,070,000,000', '4,007,000,000', '470,000,000'],
      answer: '4,070,000,000',
      explanation: 'Place the digits in their positions:\n$$\\underbrace{4}_{\\text{billions}},\\underbrace{0}_{\\text{hun. mil.}}\\underbrace{7}_{\\text{ten mil.}}\\underbrace{0}_{\\text{millions}},\\underbrace{000}_{\\text{thousands}},\\underbrace{000}_{\\text{ones}}$$\n\n$$= 4{,}070{,}000{,}000$$\n\n**힌트:** 십억 자리(billions)와 천만 자리(ten-millions)를 헷갈리지 않게 주의해요!',
      relatedConcept: 'bcg67-d1-c1',
    },
  ],
  realLifeExample:
    'The distance from Earth to the Sun is about 149,600,000 km — that\'s one hundred forty-nine million, six hundred thousand kilometres! 지구에서 태양까지의 거리가 1억 4천 9백 60만 km예요. 큰 수를 읽을 줄 알면 천문학도 이해할 수 있어요!',
};

export default dayContent;
