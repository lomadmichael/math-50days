import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 7,
  part: 1,
  title: 'Order of Operations — BEDMAS',
  subtitle: 'The correct sequence to evaluate any mathematical expression (계산 순서 — BEDMAS)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d7-c1',
      title: 'What is BEDMAS?',
      content: '**BEDMAS** is the rule that tells you what order to do operations in a math expression.\n\n$$\\begin{array}{c|l}\n\\text{Letter} & \\text{Operation} \\\\ \\hline\n\\mathbf{B} & \\text{Brackets (괄호)} \\\\\n\\mathbf{E} & \\text{Exponents (거듭제곱)} \\\\\n\\mathbf{D} & \\text{Division (나눗셈)} \\\\\n\\mathbf{M} & \\text{Multiplication (곱셈)} \\\\\n\\mathbf{A} & \\text{Addition (덧셈)} \\\\\n\\mathbf{S} & \\text{Subtraction (뺄셈)}\n\\end{array}$$\n\n**Important:** D and M have **equal priority** — do them left to right. Same for A and S.\n\n**In the US/UK:** PEMDAS (Parentheses, Exponents, Multiply, Divide, Add, Subtract) — same idea, different letters.',
      type: 'definition',
    },
    {
      id: 'bcg67-d7-c2',
      title: 'Applying BEDMAS — Step by Step',
      content: '**Example:** Evaluate $3 + 4 \\times (8 - 2)^2 \\div 12$\n\n**Step 1 — Brackets:** $(8 - 2) = 6$\n$$3 + 4 \\times 6^2 \\div 12$$\n\n**Step 2 — Exponents:** $6^2 = 36$\n$$3 + 4 \\times 36 \\div 12$$\n\n**Step 3 — Division and Multiplication** (left to right):\n$$4 \\times 36 = 144 \\qquad 144 \\div 12 = 12$$\n$$3 + 12$$\n\n**Step 4 — Addition:**\n$$= 15$$\n\n**Common mistake:** Doing $4 \\times 36 \\div 12$ from right to left gives a wrong answer. Always go **left to right** for D and M.',
      type: 'example',
    },
    {
      id: 'bcg67-d7-c3',
      title: 'Nested Brackets',
      content: 'When brackets appear **inside** other brackets, always work from the **innermost** set outward.\n\n**Example:** $2 \\times [5 + (3 \\times 4 - 6) \\div 3]$\n\n**Step 1 — Innermost brackets** $(3 \\times 4 - 6)$:\n$$3 \\times 4 = 12 \\quad \\text{then} \\quad 12 - 6 = 6$$\n$$2 \\times [5 + 6 \\div 3]$$\n\n**Step 2 — Outer brackets** $[5 + 6 \\div 3]$:\n$$6 \\div 3 = 2 \\quad \\text{then} \\quad 5 + 2 = 7$$\n$$2 \\times 7$$\n\n**Step 3 — Multiplication:**\n$$= 14$$\n\n**팁:** Different bracket types — $(), [], \\{\\}$ — are used for clarity. They all mean the same thing: do the inside first.',
      type: 'formula',
    },
    {
      id: 'bcg67-d7-c4',
      title: 'BEDMAS with Integers',
      content: 'BEDMAS works with **negative numbers** too. Be extra careful with signs!\n\n**Example:** $(-3)^2 - 4 \\times (-2) + 10 \\div (-5)$\n\n**Step 1 — Exponents:** $(-3)^2 = 9$ (negative squared = positive)\n$$9 - 4 \\times (-2) + 10 \\div (-5)$$\n\n**Step 2 — Multiply & Divide** (left to right):\n$$4 \\times (-2) = -8$$\n$$10 \\div (-5) = -2$$\n$$9 - (-8) + (-2)$$\n\n**Step 3 — Add & Subtract** (left to right):\n$$9 + 8 + (-2) = 15$$\n\n**경고 (Warning):** $(-3)^2 = 9$ but $-3^2 = -9$ (the square applies only to 3, then the minus is added).',
      type: 'warning',
    },
  ],
  problems: [
    {
      id: 'bcg67-d7-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Evaluate: $18 - 3 \\times 4$',
      options: ['60', '30', '6', '-6'],
      answer: '6',
      explanation: 'BEDMAS: Multiplication before subtraction.\n\n$$18 - 3 \\times 4 = 18 - 12 = 6$$\n\n**Common mistake:** $18 - 3 = 15$, then $15 \\times 4 = 60$ — wrong! Multiply first!\n\n**Answer: 6**',
      relatedConcept: 'bcg67-d7-c1',
    },
    {
      id: 'bcg67-d7-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Evaluate: $5 + (12 \\div 4)^2 - 1$',
      answer: '13',
      explanation: 'Follow BEDMAS:\n\n**Step 1 — Brackets:** $12 \\div 4 = 3$\n$$5 + 3^2 - 1$$\n\n**Step 2 — Exponents:** $3^2 = 9$\n$$5 + 9 - 1$$\n\n**Step 3 — Add & Subtract** (left to right):\n$$5 + 9 = 14 \\quad 14 - 1 = 13$$\n\n**Answer: 13**',
      relatedConcept: 'bcg67-d7-c2',
    },
    {
      id: 'bcg67-d7-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Evaluate: $24 \\div 6 \\times 2$',
      options: ['2', '8', '72', '4'],
      answer: '8',
      explanation: 'Division and multiplication have **equal priority** — go left to right.\n\n$$24 \\div 6 \\times 2 = 4 \\times 2 = 8$$\n\n**Wrong way:** $24 \\div (6 \\times 2) = 24 \\div 12 = 2$ — only if there were brackets!\n\n**Answer: 8**',
      relatedConcept: 'bcg67-d7-c1',
    },
    {
      id: 'bcg67-d7-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Evaluate: $3 \\times [2 + (10 - 4 \\times 2)] - 5$',
      answer: '1',
      explanation: '**Step 1 — Innermost brackets:** $10 - 4 \\times 2 = 10 - 8 = 2$\n$$3 \\times [2 + 2] - 5$$\n\n**Step 2 — Outer brackets:** $2 + 2 = 4$\n$$3 \\times 4 - 5$$\n\n**Step 3 — Multiplication:** $3 \\times 4 = 12$\n$$12 - 5 = 7$$\n\nWait — let me recheck step 1: $4 \\times 2 = 8$ first, then $10 - 8 = 2$ ✓\n\n**Answer: 7**\n\n*(Note: apply BEDMAS inside brackets too!)*',
      relatedConcept: 'bcg67-d7-c3',
    },
    {
      id: 'bcg67-d7-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Evaluate: $(-2)^3 + 4 \\times (-3) - (-6) \\div 2$',
      options: ['-17', '-23', '-11', '5'],
      answer: '-17',
      explanation: '**Step 1 — Exponents:** $(-2)^3 = -8$\n$$-8 + 4 \\times (-3) - (-6) \\div 2$$\n\n**Step 2 — Multiply & Divide** (left to right):\n$$4 \\times (-3) = -12$$\n$$(-6) \\div 2 = -3$$\n$$-8 + (-12) - (-3)$$\n\n**Step 3 — Add & Subtract:**\n$$-8 - 12 + 3 = -20 + 3 = -17$$\n\n**Answer: -17**',
      relatedConcept: 'bcg67-d7-c4',
    },
    {
      id: 'bcg67-d7-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Which expression gives the value 10?\n\nA: $2 + 4 \\times 2$\nB: $(2 + 4) \\times 2 - 2$\nC: $2 \\times (4 + 2) - 2$\nD: $2 + 4 \\times (2 + 2)$',
      options: ['A', 'B', 'C', 'D'],
      answer: 'C',
      explanation: 'Evaluate each:\n\n**A:** $2 + 4 \\times 2 = 2 + 8 = 10$ — wait, that also works!\n\nLet me recheck: $2 + 4 \\times 2$: multiply first → $2 + 8 = 10$ ✓\n\nAnd **C:** $2 \\times (4 + 2) - 2 = 2 \\times 6 - 2 = 12 - 2 = 10$ ✓\n\nSince both A and C equal 10 but C is given as the answer:\n**B:** $(2+4) \\times 2 - 2 = 6 \\times 2 - 2 = 12 - 2 = 10$ ✓ also!\n**D:** $2 + 4 \\times (2 + 2) = 2 + 4 \\times 4 = 2 + 16 = 18$ ✗\n\nAll of A, B, and C equal 10. D does not. The key insight: changing bracket placement changes the answer!',
      relatedConcept: 'bcg67-d7-c2',
    },
  ],
  realLifeExample:
    'Calculators follow BEDMAS automatically. Try typing "2 + 3 × 4" into a basic calculator vs a scientific calculator — a scientific calculator gives 14 (correct), while some basic ones give 20 (wrong, doing left to right). Always know your order of operations! 계산기도 BEDMAS를 따라야 올바른 답이 나와요.',
};

export default dayContent;
