import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 15,
  part: 3,
  title: 'Equations with Variables on Both Sides',
  subtitle: 'Collect all variable terms on one side and all constants on the other, then solve.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d15-c1',
      title: 'Variables on Both Sides',
      content:
        'When a variable appears on **both sides** of an equation (양변에 미지수), the goal is to get all variable terms on **one side** and all constant terms on the **other side**.\n\n**Example:** Solve $5x + 3 = 2x + 12$\n\nStep 1 — Subtract $2x$ from both sides:\n$$5x - 2x + 3 = 12$$\n$$3x + 3 = 12$$\n\nStep 2 — Subtract 3 from both sides:\n$$3x = 9$$\n\nStep 3 — Divide by 3:\n$$x = 3$$\n\n**Check:** $5(3) + 3 = 18$ and $2(3) + 12 = 18$ ✓',
      type: 'formula',
    },
    {
      id: 'bcg9-d15-c2',
      title: 'Choosing Which Side to Move Variables To',
      content:
        'You can move variable terms to **either** side — choose the side that keeps the coefficient **positive** to avoid sign errors.\n\n**Example:** Solve $4 - 3x = 10 - 7x$\n\n**Option A** — Move to the right (coefficient becomes negative, avoid this):\n$4 = 10 - 4x \\rightarrow -6 = -4x \\rightarrow x = 1.5$\n\n**Option B** — Move to the left (coefficient stays positive):\n$-3x + 7x = 10 - 4$\n$4x = 6$\n$x = 1.5$\n\nBoth work, but Option B is less prone to sign errors.',
      type: 'tip',
    },
    {
      id: 'bcg9-d15-c3',
      title: 'With Brackets on Both Sides',
      content:
        'When both sides have brackets, expand first, then move terms.\n\n**Example:** Solve $3(x + 4) = 2(x + 7) + 1$\n\nStep 1 — Expand:\n$$3x + 12 = 2x + 14 + 1$$\n$$3x + 12 = 2x + 15$$\n\nStep 2 — Subtract $2x$:\n$$x + 12 = 15$$\n\nStep 3 — Subtract 12:\n$$x = 3$$\n\n**Check:** $3(3+4) = 3(7) = 21$; $2(3+7)+1 = 20+1 = 21$ ✓',
      type: 'example',
    },
    {
      id: 'bcg9-d15-c4',
      title: 'Word Problems with Variables on Both Sides',
      content:
        'Some word problems naturally lead to equations with variables on both sides.\n\n**Example:** Two friends are saving money. Alex has $50 and saves $15/week. Sam has $20 and saves $25/week. After how many weeks will they have the same amount?\n\nLet $w$ = number of weeks.\n$$50 + 15w = 20 + 25w$$\n$$50 - 20 = 25w - 15w$$\n$$30 = 10w$$\n$$w = 3$$\n\nAfter **3 weeks**, both have $50 + 45 = \\$95$.\n\n**Tip:** Always define the variable with a sentence like "Let $w$ = ..."',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d15-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $7x - 4 = 3x + 12$',
      answer: '$x = 4$',
      explanation:
        '$7x - 3x = 12 + 4$\n$4x = 16$\n$x = 4$\n\nCheck: $7(4)-4 = 24$; $3(4)+12 = 24$ ✓',
      relatedConcept: 'bcg9-d15-c1',
    },
    {
      id: 'bcg9-d15-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Solve: $9 - 2x = 3x - 6$',
      answer: '$x = 3$',
      explanation:
        '$9 + 6 = 3x + 2x$\n$15 = 5x$\n$x = 3$\n\nCheck: $9-6 = 3$; $9-9 = 3-6$... Let\'s verify: $9-2(3) = 3$; $3(3)-6 = 3$ ✓',
      relatedConcept: 'bcg9-d15-c1',
    },
    {
      id: 'bcg9-d15-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Solve: $6x + 1 = 4x + 11$',
      options: ['$x = 3$', '$x = 4$', '$x = 5$', '$x = 6$'],
      answer: '$x = 5$',
      explanation:
        '$6x - 4x = 11 - 1$\n$2x = 10$\n$x = 5$\n\nCheck: $6(5)+1 = 31$; $4(5)+11 = 31$ ✓',
      relatedConcept: 'bcg9-d15-c1',
    },
    {
      id: 'bcg9-d15-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Solve: $4(x - 2) = 2(x + 5)$',
      answer: '$x = 9$',
      explanation:
        'Expand: $4x - 8 = 2x + 10$\n$4x - 2x = 10 + 8$\n$2x = 18$\n$x = 9$\n\nCheck: $4(7) = 28$; $2(14) = 28$ ✓',
      relatedConcept: 'bcg9-d15-c3',
    },
    {
      id: 'bcg9-d15-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'Two car rental companies charge differently. Company A: $20/day plus $0.10 per km. Company B: $10/day plus $0.15 per km. For how many kilometres does Company A become the better deal?',
      options: ['100 km', '$150$ km', '$200$ km', '$250$ km'],
      answer: '$200$ km',
      explanation:
        'Let $k$ = kilometres driven.\nCompany A total: $20 + 0.10k$\nCompany B total: $10 + 0.15k$\n\nThey are equal when:\n$20 + 0.10k = 10 + 0.15k$\n$10 = 0.05k$\n$k = 200$\n\nFor more than 200 km, Company A is cheaper.',
      relatedConcept: 'bcg9-d15-c4',
    },
    {
      id: 'bcg9-d15-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'Solve: $3(2x - 5) - (x + 4) = 2(x + 3) - 7$',
      answer: '$x = 12$',
      explanation:
        'Expand left: $6x - 15 - x - 4 = 5x - 19$\nExpand right: $2x + 6 - 7 = 2x - 1$\n\n$5x - 19 = 2x - 1$\n$3x = 18$\n$x = 6$\n\nVerify: Left $= 5(6)-19 = 11$; Right $= 2(6)-1 = 11$ ✓ So $x = 6$.',
      relatedConcept: 'bcg9-d15-c3',
    },
  ],
  realLifeExample:
    'A plumber charges $50 for a call-out plus $40 per hour. An electrician charges $30 for a call-out plus $50 per hour. Set up the equation $50 + 40h = 30 + 50h$ to find that after 2 hours the costs are equal. This is the break-even point. 손익분기점 계산에 양변에 변수가 있는 방정식이 사용돼요.',
};

export default dayContent;
