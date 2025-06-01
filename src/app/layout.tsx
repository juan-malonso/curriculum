import './globals.css';
import { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { Color, ColorDark, ColorLight, Element } from '@/utils/Color';

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = `transition-colors duration-300 ${
    ColorDark[Color.THEME][Element.BACKGROUND]
  } ${ColorLight[Color.THEME][Element.TEXT]}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-mono min-h-screenz-0 ${theme}`}>
        <Header className={theme} />
        <div className="w-full max-w-3xl mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
