export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Color {
  THEME = 'theme',

  DEFAULT = 'default',

  BLUE = 'sky',
  DARK = 'dark',
  GRAY = 'gray',
  GREEN = 'emerald',
  INDIGO = 'blue',
  LIGHT = 'light',
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

const Colors: { [c in Color]: { [e in Element]: string } } = {
  [Color.THEME]: {
    [Element.BACKGROUND]: 'bg-stone-100 dark:bg-stone-900',
    [Element.TEXT]: 'text-stone-900 dark:text-stone-100',
    [Element.BORDER]: 'border-stone-900 dark:border-stone-100',
  },

  [Color.DEFAULT]: {
    [Element.BACKGROUND]: '',
    [Element.TEXT]: '',
    [Element.BORDER]: '',
  },

  [Color.BLUE]: {
    [Element.BACKGROUND]: 'bg-sky-200',
    [Element.TEXT]: 'text-sky-600',
    [Element.BORDER]: 'border-sky-400',
  },
  [Color.DARK]: {
    [Element.BACKGROUND]: 'bg-gray-600',
    [Element.TEXT]: 'text-gray-200',
    [Element.BORDER]: 'border-gray-700',
  },
  [Color.GRAY]: {
    [Element.BACKGROUND]: 'bg-gray-200',
    [Element.TEXT]: 'text-gray-600',
    [Element.BORDER]: 'border-gray-400',
  },
  [Color.GREEN]: {
    [Element.BACKGROUND]: 'bg-emerald-200',
    [Element.TEXT]: 'text-emerald-600',
    [Element.BORDER]: 'border-emerald-400',
  },
  [Color.INDIGO]: {
    [Element.BACKGROUND]: 'bg-blue-200',
    [Element.TEXT]: 'text-blue-600',
    [Element.BORDER]: 'border-blue-400',
  },
  [Color.LIGHT]: {
    [Element.BACKGROUND]: 'bg-stone-200 dark:bg-stone-950',
    [Element.TEXT]: 'text-stone-900 dark:text-stone-200',
    [Element.BORDER]: 'border-stone-200 dark:border-stone-900',
  },
  [Color.PINK]: {
    [Element.BACKGROUND]: 'bg-pink-200',
    [Element.TEXT]: 'text-pink-600',
    [Element.BORDER]: 'border-sky-400',
  },
  [Color.PURPLE]: {
    [Element.BACKGROUND]: 'bg-violet-200',
    [Element.TEXT]: 'text-violet-600',
    [Element.BORDER]: 'border-violet-400',
  },
  [Color.RED]: {
    [Element.BACKGROUND]: 'bg-rose-200',
    [Element.TEXT]: 'text-rose-600',
    [Element.BORDER]: 'border-rose-400',
  },
  [Color.TEAL]: {
    [Element.BACKGROUND]: 'bg-teal-200',
    [Element.TEXT]: 'text-teal-600',
    [Element.BORDER]: 'border-teal-400',
  },
  [Color.YELLOW]: {
    [Element.BACKGROUND]: 'bg-yellow-200',
    [Element.TEXT]: 'text-yellow-600',
    [Element.BORDER]: 'border-yellow-400 ',
  },
};

Colors[Color.DEFAULT] = Colors[Color.BLUE];

export { Colors };
