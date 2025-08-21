import { Color } from './Color';

export enum Terms {
  UAM = 'uam',

  NOVATECH_SOLUTIONS = 'novatech-solutions',

  REACT = 'react',
  EXPRESS = 'express',
  JAVASCRIPT = 'javascript',
  MONGO_DB = 'mongodb',
  NEST_JS = 'nestjs',
  NEXT_JS = 'nextjs',
  NODE_JS = 'nodejs',
  POSTGRESQL = 'postgresql',
  PYTHON = 'python',
  SQL = 'sql',
  TYPESCRIPT = 'typescript',
}

export type Term = {
  link: string;
  color: Color;
  tooltip: string;
  label: string;
};

export const Glossary: Record<Terms, Term> = {
  [Terms.UAM]: {
    link: '/terms/uam',
    color: Color.PURPLE,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Universidad Autónoma de Madrid',
  },

  [Terms.NOVATECH_SOLUTIONS]: {
    link: '/company/Novatech',
    color: Color.LIGHT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Novatech Solutions',
  },

  [Terms.EXPRESS]: {
    link: '/terms/express',
    color: Color.TEAL,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Express',
  },
  [Terms.JAVASCRIPT]: {
    link: '/terms/javascript',
    color: Color.DARK,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'JavaScript',
  },
  [Terms.MONGO_DB]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.YELLOW,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'MongoDB',
  },
  [Terms.NEST_JS]: {
    link: '/terms/nestjs',
    color: Color.RED,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'NestJS',
  },
  [Terms.NEXT_JS]: {
    link: '/terms/nextjs',
    color: Color.PINK,
    tooltip: 'A React framework for building server-rendered pages',
    label: 'NextJS',
  },
  [Terms.NODE_JS]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.PURPLE,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'NodeJS',
  },
  [Terms.REACT]: {
    link: 'https://react.dev/',
    color: Color.INDIGO,
    tooltip: 'A JavaScript library for building user interfaces',
    label: 'React',
  },
  [Terms.POSTGRESQL]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.GREEN,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'PostgreSQL',
  },
  [Terms.PYTHON]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.GRAY,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Python',
  },
  [Terms.SQL]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.GREEN,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'SQL',
  },
  [Terms.TYPESCRIPT]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.BLUE,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'TypeScript',
  },
};
