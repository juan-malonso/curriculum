import { Badge } from '@/elements';

import { Glossary, Terms } from './Glossary';
import { Color, Colors, Element, Theme } from './Color';
import { get } from 'http';

// ============================================================== KEYS =

export function getKey(id: string): string {
  return `${id}-${Math.random().toString(36).slice(6)}`;
}

// ============================================================ COLORS =

export { Color, Element, Theme };

export function getColor(color: Color, element: Element): string {
  return Colors[color][element];
}

// ============================================================= TERMS =

function splitText(text: string, spacer: string): string[] {
  const splited = text
    .split(spacer)
    .map((string) => [string, spacer])
    .flat();

  return splited.slice(0, splited.length - 1);
}

export function findTerms(text: string) {
  let splited = splitText(text, ' ')
    .map((string) => splitText(string, ','))
    .flat();

  return splited.map((word) => {
    const term = Glossary[word.toLowerCase() as Terms];

    return term ? (
      <Badge key={getKey(findTerms.name)} {...term} />
    ) : (
      <>{word}</>
    );
  });
}
