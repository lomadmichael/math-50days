import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 12,
  part: 2,
  title: 'Decimals Operations',
  subtitle: 'Adding, subtracting, multiplying, and dividing decimal numbers (소수 사칙연산)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d12-c1',
      title: 'Adding and Subtracting Decimals',
      content: 'The key rule: **line up the decimal points!**\n\nWhen decimal points are aligned, the place values line up correctly and you can add/subtract just like whole numbers.\n\n**Example:** $3.47 + 12.6 + 0.085$\n\n$$\\begin{array}{r}\n3.470 \\\\\n12.600 \\\\\n+ \\quad 0.085 \\\\ \\hline\n16.155\n\\end{array}$$\n\n**팁:** Add zeros to make all numbers have the same number of decimal places — this avoids mistakes.\n\n**Example:** $5.3 - 1.847$\n$$\\begin{array}{r}\n5.300 \\\\\n- \\quad 1.847 \\\\ \\hline\n3.453\n\\end{array}$$',
      type: 'formula',
    },
    {
      id: 'bcg67-d12-c2',
      title: 'Multiplying Decimals',
      content: 'To multiply decimals:\n1. **Ignore the decimal points** and multiply as whole numbers\n2. **Count the total decimal places** in both factors\n3. **Place the decimal point** in the answer (counting from the right)\n\n**Example:** $2.4 \\times 1.3$\n\n**Step 1:** $24 \\times 13 = 312$\n\n**Step 2:** Count decimal places: $2.4$ has **1**, $1.3$ has **1** → total **2** places\n\n**Step 3:** $312$ → move decimal 2 places left → $3.12$\n\n$$2.4 \\times 1.3 = 3.12$$\n\n**Check using estimation:** $2.4 \\approx 2$ and $1.3 \\approx 1$, so answer should be around $2$ → $3.12$ ✓',
      type: 'formula',
    },
    {
      id: 'bcg67-d12-c3',
      title: 'Dividing Decimals',
      content: 'To divide decimals:\n\n**Case 1 — Dividing by a whole number:** Just divide normally and bring the decimal point straight up.\n$$6.48 \\div 3 = 2.16$$\n\n**Case 2 — Dividing by a decimal:** Multiply both numbers by a power of 10 to make the divisor a whole number.\n$$\\frac{4.5}{0.15} = \\frac{4.5 \\times 100}{0.15 \\times 100} = \\frac{450}{15} = 30$$\n\n**Why it works:** Multiplying both by the same number is like multiplying the fraction by 1 — the value doesn\'t change.\n\n**팁:** Move the decimal point in the **divisor** all the way right, then move it the **same number of places** in the dividend.',
      type: 'example',
    },
    {
      id: 'bcg67-d12-c4',
      title: 'Estimating with Decimals',
      content: 'Always **estimate** before calculating to check your answer makes sense!\n\n**Round to the nearest whole number** or to 1 decimal place.\n\n**Examples:**\n- $7.83 + 4.15$: estimate $8 + 4 = 12$ → actual $11.98$ ✓ (close!)\n- $9.6 \\times 3.2$: estimate $10 \\times 3 = 30$ → actual $30.72$ ✓\n- $8.4 \\div 0.3$: estimate $8 \\div 0.3 = 80 \\div 3 \\approx 27$ → actual $28$ ✓\n\n**Common decimal mistakes:**\n- $2.4 \\times 1.3 = 31.2$ ← **wrong** (forgot to place decimal)\n- $3.5 + 1.2 = 4.17$ ← **wrong** (aligned wrong place values)',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg67-d12-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $14.73 + 8.6 + 0.045$',
      answer: '23.375',
      explanation: 'Line up decimal points (add zeros):\n$$\\begin{array}{r}\n14.730 \\\\\n8.600 \\\\\n+ \\quad 0.045 \\\\ \\hline\n23.375\n\\end{array}$$\n\n**Answer: 23.375**',
      relatedConcept: 'bcg67-d12-c1',
    },
    {
      id: 'bcg67-d12-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $5.2 \\times 3.4$',
      options: ['1.768', '17.68', '176.8', '1.7680'],
      answer: '17.68',
      explanation: 'Step 1 — multiply whole numbers: $52 \\times 34 = 1{,}768$\n\nStep 2 — count decimal places: $5.2$ has 1, $3.4$ has 1 → total 2\n\nStep 3 — place decimal: $1768$ → $17.68$\n\n**Check:** $5 \\times 3 = 15$, so answer should be close to 15 → $17.68$ ✓',
      relatedConcept: 'bcg67-d12-c2',
    },
    {
      id: 'bcg67-d12-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $18.9 \\div 0.27$',
      answer: '70',
      explanation: 'Multiply both by 100 to remove the decimal from the divisor:\n$$\\frac{18.9}{0.27} = \\frac{18.9 \\times 100}{0.27 \\times 100} = \\frac{1890}{27} = 70$$\n\n**Check:** $70 \\times 0.27 = 18.9$ ✓',
      relatedConcept: 'bcg67-d12-c3',
    },
    {
      id: 'bcg67-d12-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Apples cost $\\$2.45$ each. How much do 6 apples cost?',
      options: ['$\\$12.70$', '$\\$14.70$', '$\\$14.07$', '$\\$13.45$'],
      answer: '$\\$14.70$',
      explanation: '$$2.45 \\times 6$$\n\nStep 1: $245 \\times 6 = 1{,}470$\nStep 2: $2.45$ has 2 decimal places → $14.70$\n\n6 apples cost **\\$14.70**.\n\n**Check:** $\\$2 \\times 6 = \\$12$, and a bit more for the $0.45$, so around $\\$14-15$ ✓',
      relatedConcept: 'bcg67-d12-c2',
    },
    {
      id: 'bcg67-d12-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A car travels 312.6 km on 45.0 L of gas. How many km per litre does it travel? Round to 1 decimal place.',
      answer: '6.9 km/L',
      explanation: '$$312.6 \\div 45.0 = 3126 \\div 450 \\approx 6.946...$$\n\nRounded to 1 decimal place: **6.9 km/L**\n\n**Check:** $6.9 \\times 45 = 310.5 \\approx 312.6$ ✓ (close enough with rounding)',
      relatedConcept: 'bcg67-d12-c3',
    },
    {
      id: 'bcg67-d12-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Estimate, then calculate: $8.76 \\times 0.34$. Which answer is reasonable?',
      options: ['29.784', '2.9784', '0.29784', '297.84'],
      answer: '2.9784',
      explanation: '**Estimate first:** $9 \\times 0.3 = 2.7$, so answer should be around 3.\n\n**Calculate:**\nStep 1: $876 \\times 34 = 29{,}784$\nStep 2: $8.76$ has 2 decimal places, $0.34$ has 2 → total 4 decimal places\nStep 3: $29784$ → move decimal 4 places left → $2.9784$\n\n**Matches estimate of ~3 ✓ Answer: 2.9784**',
      relatedConcept: 'bcg67-d12-c4',
    },
  ],
  realLifeExample:
    'At a grocery store, you buy items costing $3.49, $7.25, and $1.80. You pay with a $20 bill. Change = $20 - ($3.49 + $7.25 + $1.80) = $20 - $12.54 = $7.46. Decimal operations keep your money straight! 장보기와 거스름돈 계산에 소수가 항상 등장해요.',
};

export default dayContent;
