import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 17,
  part: 3,
  title: 'Percents — Increase & Decrease',
  subtitle: 'Calculate percent increase (증가율) and percent decrease (감소율) for markups, discounts, and taxes.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Percent Increase and Decrease',
      description: 'Watch this lesson to learn how to calculate markups, discounts, taxes, and percent change.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d17-c1',
      title: 'Percent Increase (증가율)',
      content: '**Percent increase** (증가율) tells you how much something went up relative to the original.\n\n$$\\text{Percent Increase} = \\frac{\\text{Amount of Increase}}{\\text{Original Value}} \\times 100\\%$$\n\nExample: Price went from $\\$50$ to $\\$65$.\n- Amount of increase $= 65 - 50 = 15$\n- Percent increase $= \\frac{15}{50} \\times 100\\% = 30\\%$',
      type: 'formula',
    },
    {
      id: 'bcg8-d17-c2',
      title: 'Percent Decrease (감소율)',
      content: '**Percent decrease** (감소율) tells you how much something went down relative to the original.\n\n$$\\text{Percent Decrease} = \\frac{\\text{Amount of Decrease}}{\\text{Original Value}} \\times 100\\%$$\n\nExample: Price dropped from $\\$80$ to $\\$60$.\n- Amount of decrease $= 80 - 60 = 20$\n- Percent decrease $= \\frac{20}{80} \\times 100\\% = 25\\%$',
      type: 'formula',
    },
    {
      id: 'bcg8-d17-c3',
      title: 'Finding the New Price (새 가격 구하기)',
      content: '**After a percent increase:**\n$$\\text{New Value} = \\text{Original} \\times (1 + r)$$\nwhere $r$ is the rate as a decimal.\n\nExample: $200$ increased by $15\\%$:\n$$200 \\times 1.15 = 230$$\n\n**After a percent decrease:**\n$$\\text{New Value} = \\text{Original} \\times (1 - r)$$\n\nExample: $200$ decreased by $15\\%$:\n$$200 \\times 0.85 = 170$$',
      type: 'example',
    },
    {
      id: 'bcg8-d17-c4',
      title: 'Real World: Tax, Discount, Markup',
      content: '**Tax (세금):** An increase added to a price.\n- HST in BC = $12\\%$, so multiply by $1.12$\n\n**Discount (할인):** A decrease subtracted from a price.\n- $20\\%$ off → multiply by $0.80$\n\n**Markup (마진):** A store increases the wholesale price.\n- If wholesale is $\\$40$ and markup is $50\\%$:\n- Retail price $= 40 \\times 1.50 = \\$60$\n\n**Tip:** Tax applied after discount!',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d17-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A store buys a shirt for $\\$25$ and sells it for $\\$35$. What is the percent markup?',
      options: ['10%', '28.6%', '40%', '71.4%'],
      answer: '40%',
      explanation: 'Amount of increase $= 35 - 25 = 10$\n\nPercent increase $= \\frac{10}{25} \\times 100\\% = 40\\%$',
    },
    {
      id: 'bcg8-d17-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'A phone originally costs $\\$800$. After a $15\\%$ discount, what is the sale price?',
      answer: '$680',
      explanation: 'New price $= 800 \\times (1 - 0.15) = 800 \\times 0.85 = \\$680$',
    },
    {
      id: 'bcg8-d17-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'The population of a town increased from 4,000 to 5,000. What is the percent increase?',
      options: ['10%', '20%', '25%', '80%'],
      answer: '25%',
      explanation: 'Increase $= 5000 - 4000 = 1000$\n\nPercent increase $= \\frac{1000}{4000} \\times 100\\% = 25\\%$',
    },
    {
      id: 'bcg8-d17-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'A pair of shoes costs $\\$90$ before tax. BC\'s PST is $7\\%$ and GST is $5\\%$ (total $12\\%$ tax). What is the total price including tax?',
      answer: '$100.80',
      explanation: 'Total price $= 90 \\times (1 + 0.12) = 90 \\times 1.12 = \\$100.80$',
    },
    {
      id: 'bcg8-d17-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'A jacket is marked down $30\\%$ from $\\$120$. Then a $12\\%$ tax is added to the sale price. What is the final price?',
      options: ['$88.80', '$94.08', '$100.80', '$134.40'],
      answer: '$94.08',
      explanation: 'Step 1 — Sale price: $120 \\times 0.70 = \\$84$\n\nStep 2 — Add tax: $84 \\times 1.12 = \\$94.08$',
    },
    {
      id: 'bcg8-d17-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'After a $20\\%$ increase, a price is now $\\$180$. What was the original price?',
      answer: '$150',
      explanation: '$\\text{New} = \\text{Original} \\times 1.20$\n$180 = \\text{Original} \\times 1.20$\n$\\text{Original} = \\frac{180}{1.20} = \\$150$',
    },
  ],
  realLifeExample: 'On Black Friday, a $\\$200$ laptop is $25\\%$ off: sale price $= 200 \\times 0.75 = \\$150$. Then $12\\%$ tax: $150 \\times 1.12 = \\$168$. (블랙 프라이데이에 할인 후 세금을 더하는 계산이 바로 증감률 개념이에요!)',
};

export default dayContent;
