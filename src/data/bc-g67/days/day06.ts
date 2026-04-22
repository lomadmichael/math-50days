import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 6,
  part: 1,
  title: 'Prime and Composite Numbers',
  subtitle: 'Identifying primes, composite numbers, and finding prime factorization (소수와 합성수)',
  lectures: [],
  concepts: [
    {
      id: 'bcg67-d6-c1',
      title: 'Prime and Composite Numbers',
      content: 'A **prime number** (소수) has exactly **two factors**: 1 and itself.\n\nA **composite number** (합성수) has **more than two factors**.\n\n**Special cases:**\n- $1$ is **neither prime nor composite** (only one factor: itself)\n- $2$ is the **only even prime number**\n\n**Primes up to 50:**\n$$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$$\n\n**Examples:**\n- $7$ → factors: $1, 7$ only → **prime**\n- $12$ → factors: $1, 2, 3, 4, 6, 12$ → **composite**\n- $1$ → only factor: $1$ → **neither**',
      type: 'definition',
    },
    {
      id: 'bcg67-d6-c2',
      title: 'Prime Factorization — Factor Trees',
      content: '**Prime factorization** (소인수분해) means writing a number as a product of prime numbers.\n\nUse a **factor tree** to find it:\n\n**Example:** Prime factorization of 60\n\n$$60 = 2 \\times 30 = 2 \\times 2 \\times 15 = 2 \\times 2 \\times 3 \\times 5$$\n\n$$60 = 2^2 \\times 3 \\times 5$$\n\n**Steps:**\n1. Divide by the smallest prime (start with 2 if even)\n2. Keep dividing each result until all factors are prime\n3. Write using exponents if a prime repeats\n\n**팁:** No matter which factors you start with, you always get the same prime factorization!',
      type: 'example',
    },
    {
      id: 'bcg67-d6-c3',
      title: 'Divisibility Rules',
      content: 'Quick checks to see if a number is divisible — no division needed!\n\n$$\\begin{array}{c|l}\n\\text{Divisible by} & \\text{Rule} \\\\ \\hline\n2 & \\text{Last digit is even (0, 2, 4, 6, 8)} \\\\\n3 & \\text{Sum of digits is divisible by 3} \\\\\n4 & \\text{Last two digits divisible by 4} \\\\\n5 & \\text{Last digit is 0 or 5} \\\\\n6 & \\text{Divisible by both 2 and 3} \\\\\n9 & \\text{Sum of digits divisible by 9} \\\\\n10 & \\text{Last digit is 0}\n\\end{array}$$\n\n**Example:** Is $4{,}326$ divisible by 3?\nSum of digits: $4 + 3 + 2 + 6 = 15$, and $15 \\div 3 = 5$ ✓ → Yes!',
      type: 'tip',
    },
    {
      id: 'bcg67-d6-c4',
      title: 'Testing if a Number is Prime',
      content: 'To check if a number $n$ is prime, you only need to test divisibility by primes **up to $\\sqrt{n}$**.\n\n**Why?** If $n$ has a factor larger than $\\sqrt{n}$, the other factor must be smaller than $\\sqrt{n}$ — so you would have already found it!\n\n**Example:** Is 97 prime?\n$\\sqrt{97} \\approx 9.8$, so test primes up to 9: $2, 3, 5, 7$\n\n- $97 \\div 2 = 48.5$ (no)\n- $97 \\div 3$: digit sum $9 + 7 = 16$ (not divisible by 3)\n- $97 \\div 5 = 19.4$ (no)\n- $97 \\div 7 = 13.86...$ (no)\n\nNone divide evenly → **97 is prime!**',
      type: 'formula',
    },
  ],
  problems: [
    {
      id: 'bcg67-d6-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which of the following numbers is prime?',
      options: ['1', '9', '17', '21'],
      answer: '17',
      explanation: '- $1$ → neither prime nor composite (only one factor)\n- $9 = 3 \\times 3$ → composite (factors: 1, 3, 9)\n- $17$ → factors: 1 and 17 only → **prime** ✓\n- $21 = 3 \\times 7$ → composite\n\n**Answer: 17**',
      relatedConcept: 'bcg67-d6-c1',
    },
    {
      id: 'bcg67-d6-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Write the prime factorization of 72 using exponents.',
      answer: '2³ × 3²',
      explanation: 'Build the factor tree:\n$$72 = 2 \\times 36 = 2 \\times 4 \\times 9 = 2 \\times 2 \\times 2 \\times 3 \\times 3$$\n\n$$72 = 2^3 \\times 3^2$$\n\n**Check:** $8 \\times 9 = 72$ ✓',
      relatedConcept: 'bcg67-d6-c2',
    },
    {
      id: 'bcg67-d6-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which number is divisible by both 3 and 5?',
      options: ['35', '45', '55', '65'],
      answer: '45',
      explanation: 'Divisible by 3: digit sum must be divisible by 3.\nDivisible by 5: must end in 0 or 5.\n\n- $35$: ends in 5 ✓ for 5; digit sum $3+5=8$ (not divisible by 3) ✗\n- $45$: ends in 5 ✓; digit sum $4+5=9$ (divisible by 3) ✓ **both!**\n- $55$: ends in 5 ✓; digit sum $5+5=10$ (not divisible by 3) ✗\n- $65$: ends in 5 ✓; digit sum $6+5=11$ (not divisible by 3) ✗\n\n**Answer: 45**',
      relatedConcept: 'bcg67-d6-c3',
    },
    {
      id: 'bcg67-d6-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'What is the prime factorization of 180?',
      options: ['2² × 3 × 5', '2² × 3² × 5', '2 × 3² × 5²', '2³ × 3 × 5'],
      answer: '2² × 3² × 5',
      explanation: 'Build the factor tree:\n$$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2 \\times 2 \\times 9 \\times 5 = 2 \\times 2 \\times 3 \\times 3 \\times 5$$\n\n$$180 = 2^2 \\times 3^2 \\times 5$$\n\n**Check:** $4 \\times 9 \\times 5 = 36 \\times 5 = 180$ ✓',
      relatedConcept: 'bcg67-d6-c2',
    },
    {
      id: 'bcg67-d6-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Is 91 prime or composite? Show your reasoning.',
      answer: 'Composite (91 = 7 × 13)',
      explanation: '$\\sqrt{91} \\approx 9.5$, so test primes $2, 3, 5, 7$.\n\n- $91 \\div 2 = 45.5$ (no)\n- Digit sum: $9 + 1 = 10$ (not divisible by 3)\n- Ends in 1, not 0 or 5 (not divisible by 5)\n- $91 \\div 7 = 13$ ✓\n\n$$91 = 7 \\times 13$$\n\n**91 is composite** (many students incorrectly think it is prime!).',
      relatedConcept: 'bcg67-d6-c4',
    },
    {
      id: 'bcg67-d6-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'How many prime numbers are between 20 and 40?',
      options: ['3', '4', '5', '6'],
      answer: '4',
      explanation: 'Check each odd number from 21 to 39:\n- $21 = 3 \\times 7$ (composite)\n- $23$: test 2, 3, then $\\sqrt{23} < 5$. Not divisible → **prime**\n- $25 = 5^2$ (composite)\n- $27 = 3^3$ (composite)\n- $29$: $\\sqrt{29} < 6$, test 2,3,5 — none divide it → **prime**\n- $31$: test up to $\\sqrt{31} \\approx 5.6$ — none divide → **prime**\n- $33 = 3 \\times 11$ (composite)\n- $35 = 5 \\times 7$ (composite)\n- $37$: test up to $\\sqrt{37} \\approx 6$ — none divide → **prime**\n- $39 = 3 \\times 13$ (composite)\n\nPrimes between 20 and 40: **23, 29, 31, 37** → **4 primes**',
      relatedConcept: 'bcg67-d6-c4',
    },
  ],
  realLifeExample:
    'Internet security uses prime numbers! When you see the padlock icon in your browser, your data is encrypted using huge prime numbers (hundreds of digits long). Multiplying two giant primes is easy, but factoring the result back is nearly impossible — that\'s what protects your passwords! 인터넷 보안의 핵심이 바로 소수예요.',
};

export default dayContent;
