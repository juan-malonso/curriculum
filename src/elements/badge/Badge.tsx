import React from 'react';

import { Link } from '../link/Link';

import { Color, Element, Theme, getColor } from '@/utils';

const BadgeClass = 'font-bold px-1.5 rounded-md';

export const Badge = ({
  color = Color.DEFAULT,
  label,
  link,
}: {
  color: Color;
  label: string;
  link?: string;
}) => {
  const bgColor = getColor(color, Element.BACKGROUND);
  const txColor = getColor(color, Element.TEXT);

  return (
    <span className={`${BadgeClass} ${txColor} ${bgColor}`}>
      <Link label={label} link={link} />
    </span>
  );
};
