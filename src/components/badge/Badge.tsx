import { Color, ColorDark, ColorLight, Element } from '@/utils/Color';
import React from 'react';

export const Badge = ({
  color = Color.DEFAULT,
  label,
  link,
}: {
  color: Color;
  label: string;
  link?: string;
}) => {
  return (
    <span
      className={`text-sm font-medium px-1.5 rounded-md ${
        ColorDark[color][Element.BACKGROUND]
      } ${ColorLight[color][Element.TEXT]}`}
    >
      {link ? (
        <a href={link} className="underline">
          {label}
          {link.includes('https://') && ' ➚'}
        </a>
      ) : (
        label
      )}
    </span>
  );
};
