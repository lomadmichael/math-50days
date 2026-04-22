import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 8,
  part: 2,
  title: 'Classifying Polynomials',
  subtitle: 'Name polynomials by number of terms and by degree.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d8-c1',
      title: 'Classifying by Number of Terms',
      content:
        'Polynomials are named by how many **terms** they have:\n\n| Name | Terms | 한국어 | Example |\n|---|---|---|---|\n| **Monomial** | 1 | 단항식 | $5x^3$ |\n| **Binomial** | 2 | 이항식 | $3x - 7$ |\n| **Trinomial** | 3 | 삼항식 | $x^2 - 4x + 4$ |\n| **Polynomial** | 4+ | 다항식 | $x^3 + 2x^2 - x + 5$ |\n\n**Note:** "Polynomial" technically includes all of these, but in practice it often refers to expressions with 4 or more terms.\n\n**How to count terms:** terms are separated by $+$ or $-$ signs. Remember that the sign **belongs to the term** to its right.',
      type: 'definition',
    },
    {
      id: 'bcg9-d8-c2',
      title: 'Degree of a Term and a Polynomial',
      content:
        'The **degree of a term** (항의 차수) is the sum of the exponents of all variables in that term.\n\n| Term | Degree | Why? |\n|---|---|---|\n| $x^4$ | 4 | exponent is 4 |\n| $3x^2y$ | 3 | $2 + 1 = 3$ |\n| $-7$ | 0 | constant, no variable |\n| $5x$ | 1 | exponent is 1 |\n\nThe **degree of a polynomial** (다항식의 차수) is the **highest degree** among all its terms.\n\n**Example:** In $4x^3 - 2x^2 + 7x - 1$\n- Degrees of terms: 3, 2, 1, 0\n- Degree of polynomial: **3** (highest)',
      type: 'definition',
    },
    {
      id: 'bcg9-d8-c3',
      title: 'Standard Form of a Polynomial',
      content:
        'A polynomial is in **standard form** (내림차순 정렬) when its terms are arranged from **highest to lowest degree**.\n\n**Not standard:** $5 + 3x - x^2$\n**Standard:** $-x^2 + 3x + 5$\n\n**Not standard:** $7x + 2x^3 - x^2$\n**Standard:** $2x^3 - x^2 + 7x$\n\nThe **leading term** (최고차항) is the term with the highest degree, and its coefficient is the **leading coefficient** (최고차항의 계수).\n\nIn $-x^2 + 3x + 5$: leading term $= -x^2$, leading coefficient $= -1$.',
      type: 'formula',
    },
    {
      id: 'bcg9-d8-c4',
      title: 'Naming Polynomials — Putting It Together',
      content:
        'You can fully describe a polynomial by giving **both** its name by terms and its degree.\n\n**Examples:**\n- $4x^2 - 9$: **binomial** of degree **2** (이차 이항식)\n- $3x^3 - x^2 + 2x - 7$: **polynomial** of degree **3** (삼차 다항식)\n- $-5y$: **monomial** of degree **1** (일차 단항식)\n- $x^2 + 2xy + y^2$: **trinomial** of degree **2** (이차 삼항식)\n\n**Special names for degree:**\n- Degree 1 → **linear** (일차)\n- Degree 2 → **quadratic** (이차)\n- Degree 3 → **cubic** (삼차)',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d8-p1',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'What is $7x^4 - 3x$ classified as?',
      options: ['Monomial', 'Binomial', 'Trinomial', 'Constant'],
      answer: 'Binomial',
      explanation:
        '$7x^4 - 3x$ has two terms: $7x^4$ and $-3x$.\nTwo terms → binomial (이항식).',
      relatedConcept: 'bcg9-d8-c1',
    },
    {
      id: 'bcg9-d8-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'What is the degree of the polynomial $5x^3 - 2x^4 + x - 8$?',
      answer: '$4$',
      explanation:
        'Find the degree of each term:\n- $5x^3$: degree 3\n- $-2x^4$: degree 4\n- $x$: degree 1\n- $-8$: degree 0\n\nThe highest degree is **4**.',
      relatedConcept: 'bcg9-d8-c2',
    },
    {
      id: 'bcg9-d8-p3',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Write $3x - 7 + 2x^3 - x^2$ in standard form.',
      answer: '$2x^3 - x^2 + 3x - 7$',
      explanation:
        'Arrange terms from highest to lowest degree:\n- Degree 3: $2x^3$\n- Degree 2: $-x^2$\n- Degree 1: $3x$\n- Degree 0: $-7$\n\nStandard form: $2x^3 - x^2 + 3x - 7$',
      relatedConcept: 'bcg9-d8-c3',
    },
    {
      id: 'bcg9-d8-p4',
      type: 'multiple-choice',
      difficulty: 'applied',
      question: 'What is the degree of the term $-3x^2y^3z$?',
      options: ['$2$', '$3$', '$5$', '$6$'],
      answer: '$6$',
      explanation:
        'Add all exponents: $2 + 3 + 1 = 6$\n(Note: $z = z^1$, so its exponent is 1)\n\nDegree of term $-3x^2y^3z$ is $\\mathbf{6}$.',
      relatedConcept: 'bcg9-d8-c2',
    },
    {
      id: 'bcg9-d8-p5',
      type: 'multiple-choice',
      difficulty: 'applied',
      question:
        'A trinomial has degree 2. Which of the following could it be?',
      options: [
        '$x^3 + x^2 - 1$',
        '$x^2 + 3x - 4$',
        '$x^4 - x^2 + x$',
        '$x^2 + 1$',
      ],
      answer: '$x^2 + 3x - 4$',
      explanation:
        '$x^2 + 3x - 4$ has 3 terms (trinomial) and its highest degree is 2 (quadratic). ✓\n\n- $x^3 + x^2 - 1$: trinomial, but degree 3\n- $x^4 - x^2 + x$: trinomial, but degree 4\n- $x^2 + 1$: binomial (only 2 terms)',
      relatedConcept: 'bcg9-d8-c4',
    },
    {
      id: 'bcg9-d8-p6',
      type: 'short-answer',
      difficulty: 'challenge',
      question:
        'Write a trinomial in standard form with degree 3, leading coefficient $-2$, and a constant term of $5$.',
      answer:
        'Many valid answers, e.g., $-2x^3 + x + 5$ or $-2x^3 + 4x^2 + 5$',
      explanation:
        'Requirements:\n- 3 terms (trinomial)\n- Highest degree is 3 (leading term: $-2x^3$)\n- Last term (constant): $5$\n- One more term between degree 1 and 2\n\nExample: $-2x^3 + x + 5$ ✓\n\nLeading coefficient $= -2$, degree $= 3$, three terms, constant $= 5$.',
      relatedConcept: 'bcg9-d8-c4',
    },
  ],
  realLifeExample:
    'Roller coaster designers use polynomial equations to model the shape of the track. A cubic polynomial (degree 3) can create S-curves, while a quadratic (degree 2) creates a parabolic hill. Knowing the degree tells you the shape! 롤러코스터 설계사들은 다항식의 차수를 이용해 트랙의 형태를 결정해요.',
};

export default dayContent;
