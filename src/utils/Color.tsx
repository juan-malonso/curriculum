export enum Color {
  THEME = 'theme',

  DEFAULT = 'default',

  BLUE = 'sky',
  DARK = 'dark',
  GRAY = 'gray',
  GREEN = 'emerald',
  INDIGO = 'blue',
  PINK = 'pink',
  PURPLE = 'violet',
  RED = 'rose',
  TEAL = 'teal',
  YELLOW = 'yellow',
}

export enum Element {
  BACKGROUND = 'bg',
  TEXT = 'text',
  BORDER = 'border',
}

const ColorLight: Record<Color, Record<Element, string>> = {
  [Color.THEME]: {
    [Element.BACKGROUND]: 'bg-gray-900 dark:bg-gray-100',
    [Element.TEXT]: 'text-gray-900 dark:text-gray-100',
    [Element.BORDER]: 'border-gray-900 dark:border-gray-100',
  },

  [Color.DEFAULT]: {
    [Element.BACKGROUND]: '',
    [Element.TEXT]: '',
    [Element.BORDER]: '',
  },

  [Color.BLUE]: {
    [Element.BACKGROUND]: 'bg-sky-100',
    [Element.TEXT]: 'text-sky-100',
    [Element.BORDER]: 'border-sky-100',
  },
  [Color.DARK]: {
    [Element.BACKGROUND]: 'bg-gray-100',
    [Element.TEXT]: 'text-gray-100',
    [Element.BORDER]: 'border-gray-100',
  },
  [Color.GRAY]: {
    [Element.BACKGROUND]: 'bg-gray-600',
    [Element.TEXT]: 'text-gray-600',
    [Element.BORDER]: 'border-gray-600',
  },
  [Color.GREEN]: {
    [Element.BACKGROUND]: 'bg-emerald-100',
    [Element.TEXT]: 'text-emerald-100',
    [Element.BORDER]: 'border-emerald-100',
  },
  [Color.INDIGO]: {
    [Element.BACKGROUND]: 'bg-blue-100',
    [Element.TEXT]: 'text-blue-100',
    [Element.BORDER]: 'border-blue-100',
  },
  [Color.PINK]: {
    [Element.BACKGROUND]: 'bg-pink-100',
    [Element.TEXT]: 'text-pink-100',
    [Element.BORDER]: 'border-pink-100',
  },
  [Color.PURPLE]: {
    [Element.BACKGROUND]: 'bg-violet-100',
    [Element.TEXT]: 'text-violet-100',
    [Element.BORDER]: 'border-violet-100',
  },
  [Color.RED]: {
    [Element.BACKGROUND]: 'bg-rose-100',
    [Element.TEXT]: 'text-rose-100',
    [Element.BORDER]: 'border-rose-100',
  },
  [Color.TEAL]: {
    [Element.BACKGROUND]: 'bg-teal-100',
    [Element.TEXT]: 'text-teal-100',
    [Element.BORDER]: 'border-teal-100',
  },
  [Color.YELLOW]: {
    [Element.BACKGROUND]: 'bg-amber-900',
    [Element.TEXT]: 'text-amber-900',
    [Element.BORDER]: 'border-amber-900',
  },
};

const ColorDark: Record<Color, Record<Element, string>> = {
  [Color.THEME]: {
    [Element.BACKGROUND]: 'bg-gray-100 dark:bg-gray-900',
    [Element.TEXT]: 'text-gray-100 dark:text-gray-900',
    [Element.BORDER]: 'border-gray-100 dark:border-gray-900',
  },

  [Color.DEFAULT]: {
    [Element.BACKGROUND]: '',
    [Element.TEXT]: '',
    [Element.BORDER]: '',
  },

  [Color.BLUE]: {
    [Element.BACKGROUND]: 'bg-sky-800',
    [Element.TEXT]: 'text-sky-800',
    [Element.BORDER]: 'border-sky-800',
  },
  [Color.DARK]: {
    [Element.BACKGROUND]: 'bg-gray-800',
    [Element.TEXT]: 'text-gray-800',
    [Element.BORDER]: 'border-gray-800',
  },
  [Color.GRAY]: {
    [Element.BACKGROUND]: 'bg-gray-400',
    [Element.TEXT]: 'text-gray-400',
    [Element.BORDER]: 'border-gray-400',
  },
  [Color.GREEN]: {
    [Element.BACKGROUND]: 'bg-emerald-800',
    [Element.TEXT]: 'text-emerald-800',
    [Element.BORDER]: 'border-emerald-800',
  },
  [Color.INDIGO]: {
    [Element.BACKGROUND]: 'bg-sky-800',
    [Element.TEXT]: 'text-sky-800',
    [Element.BORDER]: 'border-sky-800',
  },
  [Color.PINK]: {
    [Element.BACKGROUND]: 'bg-pink-800',
    [Element.TEXT]: 'text-pink-800',
    [Element.BORDER]: 'border-pink-800',
  },
  [Color.PURPLE]: {
    [Element.BACKGROUND]: 'bg-violet-800',
    [Element.TEXT]: 'text-violet-800',
    [Element.BORDER]: 'border-violet-800',
  },
  [Color.RED]: {
    [Element.BACKGROUND]: 'bg-rose-800',
    [Element.TEXT]: 'text-rose-800',
    [Element.BORDER]: 'border-rose-800',
  },
  [Color.TEAL]: {
    [Element.BACKGROUND]: 'bg-teal-800',
    [Element.TEXT]: 'text-teal-800',
    [Element.BORDER]: 'border-teal-800',
  },
  [Color.YELLOW]: {
    [Element.BACKGROUND]: 'bg-yellow-400',
    [Element.TEXT]: 'text-yellow-400',
    [Element.BORDER]: 'border-yellow-400',
  },
};

ColorDark[Color.DEFAULT] = ColorDark[Color.BLUE];
ColorLight[Color.DEFAULT] = ColorLight[Color.BLUE];

export { ColorLight, ColorDark };
