import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 17,
  part: 3,
  title: 'Linear Inequalities — Introduction',
  subtitle: 'Understand inequality symbols, read inequality statements, and graph solutions on a number line.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d17-c1',
      title: 'Inequality Symbols',
      content:
        'An **inequality** (부등식) compares two values using one of four symbols:\n\n| Symbol | Meaning | 한국어 | Open/Closed |\n|---|---|---|---|\n| $<$ | less than | 보다 작다 | open circle |\n| $>$ | greater than | 보다 크다 | open circle |\n| $\\leq$ | less than or equal to | 이하 | closed circle |\n| $\\geq$ | greater than or equal to | 이상 | closed circle |\n\n**Examples:**\n- $x > 3$ means $x$ can be $4, 5, 6, \\ldots$ (and decimals like $3.1$, $3.5$, etc.)\n- $x \\leq -2$ means $x$ can be $-2, -3, -4, \\ldots$ (including $-2$ itself)\n\n**Open circle** (열린 원): the endpoint is **not** included.\n**Closed circle** (닫힌 원): the endpoint **is** included.',
      type: 'definition',
    },
    {
      id: 'bcg9-d17-c2',
      title: 'Graphing Inequalities on a Number Line',
      content:
        'To graph an inequality on a **number line** (수직선):\n\n1. **Mark** the boundary value with an open or closed circle.\n2. **Shade** (draw an arrow) in the direction of the solutions.\n - $<$ or $\\leq$: shade to the **left**\n - $>$ or $\\geq$: shade to the **right**\n\n**Example:** Graph $x < 2$\n- Open circle at $2$ (2 is not included)\n- Arrow pointing left\n\n**Example:** Graph $x \\geq -1$\n- Closed circle at $-1$ ($-1$ is included)\n- Arrow pointing right\n\n**Example:** Graph $-3 < x \\leq 4$ (a **compound inequality** 복합부등식)\n- Open circle at $-3$, closed circle at $4$\n- Shade between $-3$ and $4$',
      type: 'formula',
    },
    {
      id: 'bcg9-d17-c3',
      title: 'Writing Inequalities from Context',
      content:
        'Many real-world constraints are **inequalities**, not equations.\n\n**Key phrases:**\n| Phrase | Symbol |\n|---|---|\n| "at least", "minimum", "no less than" | $\\geq$ |\n| "at most", "maximum", "no more than" | $\\leq$ |\n| "more than", "exceeds" | $>$ |\n| "fewer than", "less than" | $<$ |\n\n**Example:** You must be at least 16 years old to drive.\n$\\text{age} \\geq 16$\n\n**Example:** The box can hold at most 30 kg.\n$\\text{mass} \\leq 30$\n\n**Example:** The temperature dropped below freezing.\n$T < 0$ °C',
      type: 'example',
    },
    {
      id: 'bcg9-d17-c4',
      title: 'Checking Solutions to Inequalities',
      content:
        'To **check** whether a value is a solution, substitute and verify the inequality is true.\n\n**Example:** Is $x = 5$ a solution to $3x - 4 > 10$?\n$$3(5) - 4 = 11 > 10 \\checkmark \\quad \\text{YES}$$\n\n**Example:** Is $x = -2$ a solution to $x^2 \\leq 3$?\n$$(-2)^2 = 4 \\leq 3? \\quad \\text{NO — } 4 > 3 \\text{, so NOT a solution.}$$\n\nUnlike equations (usually one solution), inequalities have **infinitely many solutions** — an entire interval on the number line.',
      type: 'tip',
    },
  ],
  problems: [
    {
      id: 'bcg9-d17-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which symbol makes the statement "$5 __ 8$" true?',
      options: ['$>$', '$\\geq$', '$<$', '$=$'],
      answer: '$<$',
      explanation:
        '$5 < 8$ — five is less than eight.\n\n$5 \\leq 8$ is also technically true (5 is less than or equal to 8), but the simplest and most specific answer is $<$.',
      relatedConcept: 'bcg9-d17-c1',
    },
    {
      id: 'bcg9-d17-p2',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'The solution $x \\geq 3$ is graphed on a number line. Which description is correct?',
      options: [
        'Open circle at 3, arrow pointing left',
        'Closed circle at 3, arrow pointing right',
        'Open circle at 3, arrow pointing right',
        'Closed circle at 3, arrow pointing left',
      ],
      answer: 'Closed circle at 3, arrow pointing right',
      explanation:
        '$x \\geq 3$ means $x$ is greater than or equal to 3:\n- $\\geq$ includes the boundary → **closed** circle\n- Values greater than 3 are to the right → arrow pointing **right**',
      relatedConcept: 'bcg9-d17-c2',
    },
    {
      id: 'bcg9-d17-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question:
        'Write an inequality for: "A student needs more than 75 marks to pass."',
      answer: '$m > 75$',
      explanation:
        '"More than 75" uses the $>$ symbol (strict, does not include 75).\n$m > 75$, where $m$ = the student\'s marks.\n\nIf the condition were "at least 75", we would write $m \\geq 75$.',
      relatedConcept: 'bcg9-d17-c3',
    },
    {
      id: 'bcg9-d17-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'Which value is a solution to $2x + 1 \\geq 9$?',
      options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 5$'],
      answer: '$x = 4$',
      explanation:
        'Solve: $2x \\geq 8$, so $x \\geq 4$.\n\nCheck each option:\n- $x=2$: $2(2)+1=5$, $5 \\geq 9$? NO\n- $x=3$: $7 \\geq 9$? NO\n- $x=4$: $9 \\geq 9$? YES ✓\n- $x=5$ also works, but $x=4$ is the boundary.',
      relatedConcept: 'bcg9-d17-c4',
    },
    {
      id: 'bcg9-d17-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question:
        'A sign says: "Maximum load: 500 kg." Write an inequality for the total load $L$. Then state whether $L = 500$ is permitted.',
      answer: '$L \\leq 500$; $L = 500$ is permitted.',
      explanation:
        '"Maximum" means "at most", so the symbol is $\\leq$.\n$L \\leq 500$\n\n$L = 500$ satisfies $500 \\leq 500$ ✓ — yes, exactly 500 kg is permitted (closed circle).',
      relatedConcept: 'bcg9-d17-c3',
    },
    {
      id: 'bcg9-d17-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question:
        'The compound inequality $-2 \\leq x < 5$ is graphed on a number line. Which description is correct?',
      options: [
        'Open circles at both $-2$ and $5$, shaded between',
        'Closed circles at both $-2$ and $5$, shaded between',
        'Closed circle at $-2$, open circle at $5$, shaded between',
        'Open circle at $-2$, closed circle at $5$, shaded between',
      ],
      answer: 'Closed circle at $-2$, open circle at $5$, shaded between',
      explanation:
        '$-2 \\leq x$ → $x$ can equal $-2$ → **closed** circle at $-2$\n$x < 5$ → $x$ cannot equal $5$ → **open** circle at $5$\nSolution is the interval between them, shaded.',
      relatedConcept: 'bcg9-d17-c2',
    },
  ],
  realLifeExample:
    'Speed limits are inequalities: you must drive at $v \\leq 100$ km/h on the highway. Temperature for safe food storage: $T \\leq 4$ °C (refrigerator) or $T \\leq -18$ °C (freezer). Inequalities appear everywhere safety and regulations are involved. 교통 법규, 식품 안전, 나이 제한 등 생활 속 모든 제한 조건이 부등식으로 표현돼요.',
};

export default dayContent;
