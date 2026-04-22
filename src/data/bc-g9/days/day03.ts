import { DayContent } from '@/lib/types';

const dayContent: DayContent = {
  dayNumber: 3,
  part: 1,
  title: 'Power of a Power / Power of a Product',
  subtitle: 'Raise a power to another power, and distribute exponents over products.',
  lectures: [],
  concepts: [
    {
      id: 'bcg9-d3-c1',
      title: 'Power of a Power Rule',
      content:
        'When a **power is raised to another power** (거듭제곱의 거듭제곱), **multiply** the exponents.\n\n$$(a^m)^n = a^{m \\times n}$$\n\n**Why it works:**\n$$(2^3)^4 = 2^3 \\times 2^3 \\times 2^3 \\times 2^3 = 2^{3+3+3+3} = 2^{12}$$\n\nAdding $3$ four times is the same as $3 \\times 4 = 12$.\n\n**Examples:**\n- $(x^4)^5 = x^{4 \\times 5} = x^{20}$\n- $(3^2)^3 = 3^{2 \\times 3} = 3^6 = 729$\n- $((−2)^3)^2 = (-2)^{3 \\times 2} = (-2)^6 = 64$',
      type: 'formula',
    },
    {
      id: 'bcg9-d3-c2',
      title: 'Power of a Product Rule',
      content:
        'When a **product is raised to a power** (곱의 거듭제곱), distribute the exponent to **each factor**.\n\n$$(ab)^n = a^n \\times b^n$$\n\n**Why it works:**\n$$(2 \\times 3)^3 = 6^3 = 216$$\n$$2^3 \\times 3^3 = 8 \\times 27 = 216 \\checkmark$$\n\n**Examples:**\n- $(2x)^4 = 2^4 \\times x^4 = 16x^4$\n- $(3ab)^2 = 3^2 \\times a^2 \\times b^2 = 9a^2b^2$\n- $(-5m)^3 = (-5)^3 \\times m^3 = -125m^3$',
      type: 'formula',
    },
    {
      id: 'bcg9-d3-c3',
      title: 'Power of a Quotient Rule',
      content:
        'Similarly, when a **fraction is raised to a power** (분수의 거듭제곱), distribute the exponent to the **numerator and denominator**.\n\n$$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n} \\quad (b \\neq 0)$$\n\n**Examples:**\n- $\\left(\\frac{x}{2}\\right)^3 = \\frac{x^3}{2^3} = \\frac{x^3}{8}$\n- $\\left(\\frac{3a}{4b}\\right)^2 = \\frac{(3a)^2}{(4b)^2} = \\frac{9a^2}{16b^2}$',
      type: 'formula',
    },
    {
      id: 'bcg9-d3-c4',
      title: 'Combining All Three Rules',
      content:
        'Many problems combine the product, quotient, and power-of-a-power rules.\n\n**Example:** Simplify $(2x^3)^4$\n$$\\underbrace{(2x^3)^4}_{\\text{power of product}} = 2^4 \\times (x^3)^4 = 16 \\times x^{3 \\times 4} = 16x^{12}$$\n\n**Example:** Simplify $\\left(\\dfrac{a^2}{b^3}\\right)^5$\n$$\\left(\\frac{a^2}{b^3}\\right)^5 = \\frac{(a^2)^5}{(b^3)^5} = \\frac{a^{10}}{b^{15}}$$\n\n**Strategy:** Work from the outside in — apply the outermost exponent first.',
      type: 'example',
    },
  ],
  problems: [
    {
      id: 'bcg9-d3-p1',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Simplify: $(x^5)^3$',
      answer: '$x^{15}$',
      explanation:
        '$(x^5)^3 = x^{5 \\times 3} = x^{15}$\n\nPower of a power rule: multiply the exponents.',
      relatedConcept: 'bcg9-d3-c1',
    },
    {
      id: 'bcg9-d3-p2',
      type: 'short-answer',
      difficulty: 'basic',
      question: 'Expand: $(3y)^4$',
      answer: '$81y^4$',
      explanation:
        '$(3y)^4 = 3^4 \\times y^4 = 81 \\times y^4 = 81y^4$\n\nPower of a product rule: distribute the exponent to each factor.',
      relatedConcept: 'bcg9-d3-c2',
    },
    {
      id: 'bcg9-d3-p3',
      type: 'multiple-choice',
      difficulty: 'basic',
      question: 'Which expression equals $(2^3)^5$?',
      options: ['$2^8$', '$2^{15}$', '$8^5$', '$2^2$'],
      answer: '$2^{15}$',
      explanation:
        '$(2^3)^5 = 2^{3 \\times 5} = 2^{15}$\n\nNote: $8^5$ is also equal to $2^{15}$ since $8 = 2^3$, but $2^{15}$ is the simplified form with base 2.',
      relatedConcept: 'bcg9-d3-c1',
    },
    {
      id: 'bcg9-d3-p4',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Simplify: $(4a^2b^3)^2$',
      answer: '$16a^4b^6$',
      explanation:
        '$(4a^2b^3)^2 = 4^2 \\times (a^2)^2 \\times (b^3)^2$\n$= 16 \\times a^{2 \\times 2} \\times b^{3 \\times 2}$\n$= 16a^4b^6$',
      relatedConcept: 'bcg9-d3-c4',
    },
    {
      id: 'bcg9-d3-p5',
      type: 'short-answer',
      difficulty: 'applied',
      question: 'Simplify: $\\left(\\dfrac{2x^3}{y^2}\\right)^4$',
      answer: '$\\dfrac{16x^{12}}{y^8}$',
      explanation:
        '$$\\left(\\frac{2x^3}{y^2}\\right)^4 = \\frac{(2x^3)^4}{(y^2)^4} = \\frac{2^4 \\times (x^3)^4}{y^{2 \\times 4}} = \\frac{16x^{12}}{y^8}$$',
      relatedConcept: 'bcg9-d3-c3',
    },
    {
      id: 'bcg9-d3-p6',
      type: 'multiple-choice',
      difficulty: 'challenge',
      question: 'Simplify: $\\dfrac{(3x^2)^3 \\times x^4}{(3x)^2}$',
      options: ['$3x^8$', '$9x^8$', '$3x^{10}$', '$27x^8$'],
      answer: '$3x^8$',
      explanation:
        'Numerator: $(3x^2)^3 \\times x^4 = 27x^6 \\times x^4 = 27x^{10}$\n\nDenominator: $(3x)^2 = 9x^2$\n\n$$\\frac{27x^{10}}{9x^2} = \\frac{27}{9} \\times x^{10-2} = 3x^8$$',
      relatedConcept: 'bcg9-d3-c4',
    },
  ],
  realLifeExample:
    'When calculating the volume of a cube with side length $2x^2$ cm, you compute $(2x^2)^3 = 8x^6$ cm³. The power-of-a-product rule is essential for geometry formulas with algebraic expressions. 대수식으로 나타낸 도형의 넓이·부피 계산에 이 법칙이 자주 쓰여요.',
};

export default dayContent;
