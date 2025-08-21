import React from 'react';

import { getColor, Color, Element } from '@/utils';

const BulletClass = `absolute w-2 h-2 z-10 rounded-full border-2 left-0.5 top-2.5 bg-transparent`;

const ItemClass = 'relative flex items-start w-full';

const Item = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: Color;
}) => {
  const bdColor = getColor(color, Element.BORDER);

  const itemBulletClass = `${BulletClass} ${bdColor}`;

  return (
    <div className={ItemClass}>
      <div className={itemBulletClass} />
      <div className="ml-5 w-full">{children}</div>
    </div>
  );
};

export const List = ({
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
      {items.map((child, idx) => (
        <Item key={idx} color={color}>
          {child}
        </Item>
      ))}
    </div>
  );
};
