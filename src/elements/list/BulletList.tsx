import React from 'react';

import { getColor, Color, Element, Theme, getKey } from '@/utils';

const LineClass = `absolute left-[5px] w-px border`;
const BulletClass = `absolute w-3 h-3 z-10 rounded-full border-2 left-0 top-2 bg-transparent`;

const ItemClass = 'relative flex items-start w-full';

const BulletItem = ({
  children,
  last,
  idx,
  color,
}: {
  children: React.ReactNode;
  last: number;
  idx: number;
  color: Color;
}) => {
  const bdColor = getColor(color, Element.BORDER);

  const itemBulletClass = `${BulletClass} ${bdColor}`;
  const itemLineClass = `${LineClass} ${bdColor}`;

  const itemTopLineClass = idx === 0 ? 'hidden' : `${itemLineClass} h-2`;
  const itemBotLineClass =
    idx === last ? 'hidden' : `${itemLineClass} top-5 h-[calc(100%-1rem)] `;

  return (
    <div className={ItemClass}>
      <div className={itemTopLineClass} />
      <div className={itemBulletClass} />
      <div className={itemBotLineClass} />
      <div className="ml-5 w-full">{children}</div>
    </div>
  );
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

  const last = items.length - 1;

  return (
    <div className={`flex flex-col ${className}`}>
      {items.map((child, idx) => (
        <BulletItem key={idx} idx={idx} last={last} color={color}>
          {child}
        </BulletItem>
      ))}
    </div>
  );
};
