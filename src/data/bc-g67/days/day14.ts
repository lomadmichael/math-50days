import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 14,
  part: 2,
  title: 'Finding Percent of a Number',
  subtitle: 'Calculating percentages and using them to solve real-world problems (백분율 활용)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d14-c1',
      title: 'Finding a Percent of a Number',
      content: '**"Of" in math means multiply!**\n\nTo find a **percent of a number**, convert the percent to a decimal and multiply.\n\n$$\\text{Percent of a number} = \\frac{\\text{percent}}{100} \\times \\text{number}$$\n\n**Examples:**\n$$20\\% \\text{ of } 80 = 0.20 \\times 80 = 16$$\n$$35\\% \\text{ of } 200 = 0.35 \\times 200 = 70$$\n$$8\\% \\text{ of } 450 = 0.08 \\times 450 = 36$$\n\n**팁:** For easy percentages, use mental math:\n- $10\\%$ of a number → divide by 10\n- $5\\%$ → half of 10%\n- $25\\%$ → divide by 4\n- $50\\%$ → divide by 2\n- $1\\%$ → divide by 100',
      type: 'formula',
    },
    {
      id: 'bcg67-d14-c2',
      title: 'Percent Change — Increase and Decrease',
      content: '**Percent increase** (증가율): how much something grew, as a percentage.\n$$\\text{Percent Increase} = \\frac{\\text{Amount of Increase}}{\\text{Original Value}} \\times 100\\%$$\n\n**Percent decrease** (감소율): how much something shrank, as a percentage.\n$$\\text{Percent Decrease} = \\frac{\\text{Amount of Decrease}}{\\text{Original Value}} \\times 100\\%$$\n\n**Example:** A shirt costs $\\$40$. It goes on sale for $\\$30$.\n$$\\text{Decrease} = 40 - 30 = 10$$\n$$\\text{Percent Decrease} = \\frac{10}{40} \\times 100\\% = 25\\%$$\n\nThe shirt is **25% off** (or a 25% decrease in price).',
      type: 'formula',
    },
    {
      id: 'bcg67-d14-c3',
      title: 'Finding the Original Number',
      content: 'Sometimes you know the percent and the result, but need to find the original.\n\n**Method:** Set up and solve an equation.\n\n**Example:** $30\\%$ of a number is $18$. What is the number?\n\n$$30\\% \\times n = 18$$\n$$0.30 \\times n = 18$$\n$$n = 18 \\div 0.30 = 60$$\n\n**Example:** After a $20\\%$ increase, a price is $\\$60$. What was the original price?\n\nThe new price = $120\\%$ of the original.\n$$1.20 \\times n = 60$$\n$$n = 60 \\div 1.20 = 50$$\n\nOriginal price was **\\$50**.',
      type: 'example',
    },
    {
      id: 'bcg67-d14-c4',
      title: 'Tax, Tips, and Discounts',
      content: 'Percents appear everywhere in daily life:\n\n**Tax (세금):** Add a percentage to the price.\n- Item costs $\\$50$, tax = $12\\%$\n- Tax amount: $0.12 \\times 50 = \\$6$\n- Total: $\\$50 + \\$6 = \\$56$\n- Or: Total = $1.12 \\times \\$50 = \\$56$\n\n**Tip (팁):** Add a percentage of the bill.\n- Restaurant bill $\\$80$, tip $15\\%$\n- Tip: $0.15 \\times 80 = \\$12$\n- Total: $\\$80 + \\$12 = \\$92$\n\n**Discount (할인):** Subtract a percentage.\n- Item $\\$120$, discount $25\\%$\n- Discount: $0.25 \\times 120 = \\$30$\n- Sale price: $\\$120 - \\$30 = \\$90$\n- Or: Sale price = $0.75 \\times \\$120 = \\$90$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg67-d14-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is $15\\%$ of $80$?',
      options: ['8', '10', '12', '15'],
      answer: '12',
      explanation: '$$15\\% \\text{ of } 80 = 0.15 \\times 80 = 12$$\n\n**Mental math check:** $10\\%$ of $80 = 8$, and $5\\%$ of $80 = 4$\n$$10\\% + 5\\% = 15\\% \\implies 8 + 4 = 12 \\checkmark$$',
      relatedConcept: 'bcg67-d14-c1',
    },
    {
      id: 'bcg67-d14-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'A school has 600 students. $45\\%$ are in Grade 6 or 7. How many students is that?',
      answer: '270',
      explanation: '$$45\\% \\text{ of } 600 = 0.45 \\times 600 = 270$$\n\n**270 students** are in Grade 6 or 7.',
      relatedConcept: 'bcg67-d14-c1',
    },
    {
      id: 'bcg67-d14-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A jacket costs $\\$80$. It is on sale at $30\\%$ off. What is the sale price?',
      options: ['$\\$24$', '$\\$50$', '$\\$56$', '$\\$64$'],
      answer: '$\\$56$',
      explanation: '**Method 1 — Find discount first:**\nDiscount = $30\\%$ of $\\$80 = 0.30 \\times 80 = \\$24$\nSale price = $\\$80 - \\$24 = \\$56$\n\n**Method 2 — Multiply by the remaining percent:**\nSale price = $(100\\% - 30\\%) \\times \\$80 = 70\\% \\times 80 = 0.70 \\times 80 = \\$56$',
      relatedConcept: 'bcg67-d14-c4',
    },
    {
      id: 'bcg67-d14-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A bicycle costs $\\$250$. With $13\\%$ tax, what is the total price?',
      options: ['$\\$263$', '$\\$282.50$', '$\\$287.50$', '$\\$325$'],
      answer: '$\\$282.50$',
      explanation: 'Tax amount = $13\\%$ of $\\$250 = 0.13 \\times 250 = \\$32.50$\n\nTotal = $\\$250 + \\$32.50 = \\$282.50$\n\n**Or:** Total = $1.13 \\times \\$250 = \\$282.50$',
      relatedConcept: 'bcg67-d14-c4',
    },
    {
      id: 'bcg67-d14-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Last year a puppy weighed 8 kg. This year it weighs 10 kg. What is the percent increase in weight?',
      answer: '25%',
      explanation: 'Amount of increase = $10 - 8 = 2$ kg\n\n$$\\text{Percent Increase} = \\frac{2}{8} \\times 100\\% = 0.25 \\times 100\\% = 25\\%$$\n\nThe puppy\'s weight increased by **25%**.',
      relatedConcept: 'bcg67-d14-c2',
    },
    {
      id: 'bcg67-d14-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'After a $20\\%$ discount, a video game costs $\\$48$. What was the original price?',
      options: ['$\\$57.60$', '$\\$60$', '$\\$64$', '$\\$68$'],
      answer: '$\\$60$',
      explanation: 'After a $20\\%$ discount, you pay $80\\%$ of the original price.\n\n$$80\\% \\times \\text{original} = \\$48$$\n$$0.80 \\times n = 48$$\n$$n = 48 \\div 0.80 = 60$$\n\nOriginal price: **\\$60**\n\n**Check:** $20\\%$ of $\\$60 = \\$12$. Sale price: $\\$60 - \\$12 = \\$48$ ✓',
      relatedConcept: 'bcg67-d14-c3',
    },
  ],
  realLifeExample:
    'In BC, the combined sales tax (GST + PST) is 12%. If you buy a $\\$150$ snowboard, you pay $0.12 \\times 150 = \\$18$ in tax, for a total of $\\$168$. If it\'s also 15% off, you first apply the discount: $0.85 \\times \\$150 = \\$127.50$, then tax: $1.12 \\times \\$127.50 = \\$142.80$. 세일 가격에도 세금을 따로 계산해야 해요!',
};

export default dayContent;
