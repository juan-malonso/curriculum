import { Color, ColorDark, Element } from '@/utils/Color';
import React from 'react';

const BulletItem = ({
  children,
  last,
  index,
  borderColor,
}: {
  children: React.ReactNode;
  last: number;
  index: number;
  borderColor: string;
}) => {
  const LineStyle = `absolute left-[5px] w-px border ${borderColor}`;
  const BulletStyle = `absolute w-3 h-3 z-10 rounded-full border-2 ${borderColor} ${
    ColorDark[Color.THEME][Element.BACKGROUND]
  }`;

  switch (index) {
    case last:
      return (
        <div className="relative flex items-start w-full">
          <div className={`left-0 top-1 ${BulletStyle}`} />
          <div className={`${LineStyle} ${index === 0 ? 'hidden' : 'h-3'}`} />
          <div className="ml-5 w-full">{children}</div>
        </div>
      );
    case 0:
      return (
        <div className="relative flex items-start w-full">
          <div className={`left-0 top-1 ${BulletStyle}`} />
          <div className={`${LineStyle} top-3 h-full`} />
          <div className="ml-5 pb-8 w-full">{children}</div>
        </div>
      );
    default:
      return (
        <div className="relative flex items-start w-full">
          <div className={`left-0 top-1 ${BulletStyle}`} />
          <div className={`${LineStyle} h-full`} />
          <div className="ml-5 pb-8 w-full">{children}</div>
        </div>
      );
  }
};

export const BulletList = ({
  children,
  className,
  color = Color.DEFAULT,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  color?: Color;
}) => {
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={`flex flex-col ${className}`}>
      {items.map((child, index) => (
        <BulletItem
          key={index}
          index={index}
          last={items.length - 1}
          borderColor={ColorDark[color][Element.BORDER]}
        >
          {child}
        </BulletItem>
      ))}
    </div>
  );
};
