'use client';

import { useEffect, useState } from 'react';

import { Theme } from '@/utils/Color';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    document.documentElement.classList.remove(Theme.LIGHT, Theme.DARK);
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
      className=" px-3 py-1rounded"
    >
      {theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT} theme
    </button>
  );
}
