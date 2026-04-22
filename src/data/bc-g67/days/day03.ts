import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 3,
  part: 1,
  title: 'Adding and Subtracting Integers',
  subtitle: 'Using number lines and rules to add and subtract positive and negative numbers (정수 덧셈·뺄셈)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d3-c1',
      title: 'Adding Integers with the Number Line',
      content: 'Adding integers on a number line:\n- Adding a **positive** number → move **right**\n- Adding a **negative** number → move **left**\n\n**Example 1:** $5 + 3 = 8$\n$$\\text{Start at } 5 \\xrightarrow{+3} 8$$\n\n**Example 2:** $5 + (-3) = 2$\n$$\\text{Start at } 5 \\xrightarrow{-3} 2$$\n\n**Example 3:** $-4 + (-2) = -6$\n$$\\text{Start at } -4 \\xrightarrow{-2} -6$$\n\n**Example 4:** $-4 + 7 = 3$\n$$\\text{Start at } -4 \\xrightarrow{+7} 3$$',
      type: 'definition',
    },
    {
      id: 'bcg67-d3-c2',
      title: 'Rules for Adding Integers',
      content: 'You can use these rules instead of drawing number lines every time:\n\n**Same signs — add and keep the sign:**\n$$+4 + (+3) = +7 \\qquad \\text{(both positive → positive)}$$\n$$-4 + (-3) = -7 \\qquad \\text{(both negative → negative)}$$\n\n**Different signs — subtract and keep the sign of the larger absolute value:**\n$$+8 + (-3) = +5 \\qquad (|8| > |-3|, \\text{ keep positive})$$\n$$-8 + 3 = -5 \\qquad (|-8| > |3|, \\text{ keep negative})$$\n\n**팁:** Think of it like a tug-of-war. The bigger team wins (keeps its sign), and the score is the difference.',
      type: 'formula',
    },
    {
      id: 'bcg67-d3-c3',
      title: 'Subtracting Integers — Add the Opposite',
      content: '**Key rule:** Subtracting an integer is the same as adding its **opposite** (반대수).\n\n$$a - b = a + (-b)$$\n\n**Examples:**\n$$6 - 10 = 6 + (-10) = -4$$\n$$-3 - 5 = -3 + (-5) = -8$$\n$$-7 - (-2) = -7 + 2 = -5$$\n$$4 - (-6) = 4 + 6 = 10$$\n\n**Trick:** When you see two signs next to each other:\n- Same signs $(+ +$ or $- -)$ → becomes $+$\n- Different signs $(+ -$ or $- +)$ → becomes $-$',
      type: 'formula',
    },
    {
      id: 'bcg67-d3-c4',
      title: 'Real-Life Integer Problems',
      content: 'Integers show up in everyday situations. Look for keywords:\n\n| Situation | Keyword | Integer operation |\n|---|---|---|\n| Temperature rises | "warms up", "increases by" | Add positive |\n| Temperature drops | "cools down", "decreases by" | Add negative / Subtract |\n| Gaining money | "earns", "receives" | Add positive |\n| Spending money | "spends", "loses" | Subtract positive |\n| Below sea level | "below zero" | Negative starting point |\n\n**Example:** The temperature was $-8°C$ and dropped by $5°C$ more. New temperature:\n$$-8 + (-5) = -13°C$$',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg67-d3-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Calculate: $-6 + (-4)$',
      options: ['-10', '-2', '2', '10'],
      answer: '-10',
      explanation: 'Both numbers are **negative** → add the absolute values and keep the negative sign.\n\n$$|-6| + |-4| = 6 + 4 = 10$$\n\n$$-6 + (-4) = -10$$\n\n**힌트:** 같은 부호 → 절댓값을 더하고 부호 유지!',
      relatedConcept: 'bcg67-d3-c2',
    },
    {
      id: 'bcg67-d3-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Calculate: $-3 - (-9)$',
      answer: '6',
      explanation: 'Subtracting a negative → add the opposite:\n$$-3 - (-9) = -3 + 9$$\n\nDifferent signs: $|9| > |-3|$, so keep positive.\n$$9 - 3 = 6$$\n\n$$\\mathbf{-3 - (-9) = 6}$$',
      relatedConcept: 'bcg67-d3-c3',
    },
    {
      id: 'bcg67-d3-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which expression equals $-2 + 8$?',
      options: ['-10', '-6', '6', '10'],
      answer: '6',
      explanation: 'Different signs: subtract the smaller from the larger absolute value, keep the sign of the larger.\n\n$|8| = 8 > |-2| = 2$, so the answer is **positive**.\n$$8 - 2 = 6$$\n\n$$-2 + 8 = +6$$',
      relatedConcept: 'bcg67-d3-c2',
    },
    {
      id: 'bcg67-d3-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'The temperature at noon was 4°C. By midnight, it dropped 11°C. What was the temperature at midnight?',
      options: ['15°C', '7°C', '-7°C', '-15°C'],
      answer: '-7°C',
      explanation: 'Starting temperature: $+4°C$\nDropped by: $11°C$\n\n$$4 - 11 = 4 + (-11) = -7$$\n\nThe midnight temperature was $\\mathbf{-7°C}$.\n\n**힌트:** "Dropped by 11" means subtract 11.',
      relatedConcept: 'bcg67-d3-c4',
    },
    {
      id: 'bcg67-d3-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Evaluate: $-15 + 8 - (-3) + (-6)$',
      answer: '-10',
      explanation: 'Work left to right, converting subtraction to addition:\n$$-15 + 8 - (-3) + (-6)$$\n$$= -15 + 8 + 3 + (-6)$$\n\nStep by step:\n$$-15 + 8 = -7$$\n$$-7 + 3 = -4$$\n$$-4 + (-6) = -10$$\n\n$$\\mathbf{-10}$$',
      relatedConcept: 'bcg67-d3-c3',
    },
    {
      id: 'bcg67-d3-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'A diver is at -30 m below sea level. She swims up 12 m, then down 5 m. What is her final depth?',
      options: ['-47 m', '-23 m', '-13 m', '-37 m'],
      answer: '-23 m',
      explanation: 'Start: $-30$ m\nSwims up $12$ m: $-30 + 12 = -18$ m\nSwims down $5$ m: $-18 - 5 = -18 + (-5) = -23$ m\n\nFinal depth: $\\mathbf{-23}$ **m** (23 metres below sea level)\n\n**힌트:** "Up" means adding positive, "down" means adding negative.',
      relatedConcept: 'bcg67-d3-c4',
    },
  ],
  realLifeExample:
    'Hockey teams track +/- ratings. A player with +3 was on the ice for 3 more goals scored than goals allowed. If they gain +2 this game, their new rating is +5. If they lose -5, it becomes -2. Integer arithmetic is used in every sports stat! 스포츠 통계에도 정수 계산이 사용돼요.',
};

export default dayContent;
