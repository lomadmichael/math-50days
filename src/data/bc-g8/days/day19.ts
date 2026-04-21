import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 19,
  part: 3,
  title: 'Unit Rates',
  subtitle: 'Find unit rates (단위율) — how much per one unit — and use them to compare deals.',
  lectures: [
    {
      lectureNumber: 1,
      youtubeVideoId: '',
      title: 'Unit Rates',
      description: 'Watch this lesson to learn how to calculate and compare unit rates.',
    },
  ],
  concepts: [
    {
      id: 'bcg8-d19-c1',
      title: 'What is a Unit Rate? (단위율)',
      content: 'A **unit rate** (단위율) is a rate where the second quantity is **1 unit**.\n\nExamples:\n- $\\$2.50$ per litre (per = for 1)\n- 90 km **per** hour (for 1 hour)\n- 15 words **per** minute (for 1 minute)\n\nUnit rates make it easy to **compare** different deals!',
      type: 'definition',
    },
    {
      id: 'bcg8-d19-c2',
      title: 'How to Find a Unit Rate',
      content: 'To find the unit rate, **divide** the first quantity by the second quantity.\n\n$$\\text{Unit Rate} = \\frac{\\text{Total amount}}{\\text{Number of units}}$$\n\nExample: A car travels 240 km in 3 hours. What is the speed in km/h?\n\n$$\\text{Speed} = \\frac{240 \\text{ km}}{3 \\text{ h}} = 80 \\text{ km/h}$$\n\nThis means the car travels 80 km per 1 hour.',
      type: 'formula',
    },
    {
      id: 'bcg8-d19-c3',
      title: 'Using Unit Rates to Compare (비교하기)',
      content: 'Unit rates are great for finding the **best deal**!\n\nExample: Which is cheaper?\n- Store A: 5 notebooks for $\\$7.50$\n- Store B: 8 notebooks for $\\$11.20$\n\nStore A: $\\frac{7.50}{5} = \\$1.50$ per notebook\n\nStore B: $\\frac{11.20}{8} = \\$1.40$ per notebook\n\n**Store B is cheaper** — $\\$0.10$ less per notebook.',
      type: 'example',
    },
    {
      id: 'bcg8-d19-c4',
      title: 'Common Unit Rate Formats',
      content: 'Unit rates are written with "per" or a slash:\n- km/h or km per hour (속도)\n- \\$/kg or dollars per kilogram (가격)\n- words/min or words per minute (타자 속도)\n- beats/min or BPM (심박수)\n\nThe **denominator is always 1** (even if not written):\n$$80 \\text{ km/h means } \\frac{80 \\text{ km}}{1 \\text{ h}}$$',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg8-d19-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A runner completes 15 km in 3 hours. What is the unit rate in km/h?',
      options: ['3 km/h', '5 km/h', '12 km/h', '45 km/h'],
      answer: '5 km/h',
      explanation: '$\\text{Unit rate} = \\frac{15 \\text{ km}}{3 \\text{ h}} = 5 \\text{ km/h}$',
    },
    {
      id: 'bcg8-d19-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Oranges cost $\\$4.80$ for 6 oranges. What is the price per orange?',
      answer: '$0.80 per orange',
      explanation: '$\\text{Price per orange} = \\frac{\\$4.80}{6} = \\$0.80 \\text{ per orange}$',
    },
    {
      id: 'bcg8-d19-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'A printer prints 90 pages in 6 minutes. What is the unit rate?',
      options: ['15 pages/min', '84 pages/min', '540 pages/min', '6 pages/min'],
      answer: '15 pages/min',
      explanation: '$\\text{Unit rate} = \\frac{90 \\text{ pages}}{6 \\text{ min}} = 15 \\text{ pages/min}$',
    },
    {
      id: 'bcg8-d19-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Store A sells 3 kg of rice for $\\$6.90$. Store B sells 5 kg of rice for $\\$10.50$. Which store has the lower price per kilogram?',
      answer: 'Store B ($2.10/kg)',
      explanation: 'Store A: $\\frac{\\$6.90}{3 \\text{ kg}} = \\$2.30/\\text{kg}$\n\nStore B: $\\frac{\\$10.50}{5 \\text{ kg}} = \\$2.10/\\text{kg}$\n\nStore B is cheaper at $2.10/kg.',
    },
    {
      id: 'bcg8-d19-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Mina types 320 words in 8 minutes. At this rate, how many words can she type in 15 minutes?',
      options: ['40 words', '400 words', '480 words', '600 words'],
      answer: '600 words',
      explanation: 'Unit rate $= \\frac{320}{8} = 40$ words/min\n\nIn 15 minutes: $40 \\times 15 = 600$ words',
    },
    {
      id: 'bcg8-d19-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question: 'A car travels at 90 km/h. How long will it take to travel 225 km? Give your answer in hours.',
      answer: '2.5 hours',
      explanation: '$\\text{Time} = \\frac{\\text{Distance}}{\\text{Speed}} = \\frac{225 \\text{ km}}{90 \\text{ km/h}} = 2.5 \\text{ hours}$',
    },
  ],
  realLifeExample: 'When buying gas, you compare $/L prices. If Gas Station A charges $\\$1.65/L$ and Gas Station B charges $\\$1.58/L$, Station B saves you money! On a 40 L fill-up, that\'s $(1.65 - 1.58) \\times 40 = \\$2.80$ saved. (주유소를 선택할 때 단위율 비교가 아주 중요해요!)',
};

export default dayContent;
