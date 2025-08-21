import './globals.css';
import { ReactNode } from 'react';

import { Header } from '@/components';
import { Color, getColor, Element } from '@/utils';

export default function RootLayout({ children }: { children: ReactNode }) {
  const bgColor = getColor(Color.THEME, Element.BACKGROUND);
  const txColor = getColor(Color.THEME, Element.TEXT);

  const theme = `${bgColor} ${txColor}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-mono min-h-screenz-0 ${theme}`}>
        <Header className={theme} />
        <div className="max-w-4xl mx-auto px-20 py-64">{children}</div>
      </body>
    </html>
  );
}
