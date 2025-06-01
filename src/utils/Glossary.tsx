import { Badge } from '@/components/badge/Badge';
import { Color } from './Color';

enum Terms {
  UAM = 'uam',

  NOVATECH_SOLUTIONS = 'novatech-solutions',

  REACT = 'react',
  EXPRESS = 'express',
  JAVASCRIPT = 'javascript',
  NEST_JS = 'nestjs',
  NEXT_JS = 'nextjs',
  NODE_JS = 'nodejs',
  PYTHON = 'python',
  SQL = 'sql',
  TYPESCRIPT = 'typescript',
}

type Term = {
  link: string;
  color: Color;
  tooltip: string;
  label: string;
};

const Glossary: Record<Terms, Term> = {
  [Terms.UAM]: {
    link: '/terms/uam',
    color: Color.PURPLE,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Universidad Autónoma de Madrid',
  },

  [Terms.NOVATECH_SOLUTIONS]: {
    link: '/company/Novatech',
    color: Color.GREEN,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Novatech Solutions',
  },

  [Terms.EXPRESS]: {
    link: '/terms/express',
    color: Color.DEFAULT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Express',
  },
  [Terms.JAVASCRIPT]: {
    link: '/terms/javascript',
    color: Color.DEFAULT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'JavaScript',
  },
  [Terms.NEST_JS]: {
    link: '/terms/nestjs',
    color: Color.DEFAULT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'NestJS',
  },
  [Terms.NEXT_JS]: {
    link: '/terms/nextjs',
    color: Color.DEFAULT,
    tooltip: 'A React framework for building server-rendered pages',
    label: 'Next.JS',
  },
  [Terms.NODE_JS]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.DEFAULT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Node.JS',
  },
  [Terms.REACT]: {
    link: 'https://react.dev/',
    color: Color.DEFAULT,
    tooltip: 'A JavaScript library for building user interfaces',
    label: 'React',
  },
  [Terms.PYTHON]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.DEFAULT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'Python',
  },
  [Terms.SQL]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.DEFAULT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'SQL',
  },
  [Terms.TYPESCRIPT]: {
    link: 'https://www.typescriptlang.org/',
    color: Color.DEFAULT,
    tooltip: 'A strongly typed programming language that builds on JavaScript',
    label: 'TypeScript',
  },
};

function splitText(text: string, spacer: string): string[] {
  const splited = text
    .split(spacer)
    .map((string) => [string, spacer])
    .flat();

  return splited.slice(0, splited.length - 1);
}

export default function (text: string) {
  let splited = splitText(text, ' ')
    .map((string) => splitText(string, ','))
    .flat();

  return splited.map((word, index) => {
    const term = Glossary[word.toLowerCase() as Terms];

    return term ? (
      <Badge key={index} {...term} />
    ) : (
      <span key={index}>{word}</span>
    );
  });
}
