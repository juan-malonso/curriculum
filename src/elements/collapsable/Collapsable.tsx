'use client';

import { useState } from 'react';

import { Title, TitleType } from '../title/Title';

const CollapsableHeaderClass =
  'cursor-pointer flex w-full items-center justify-between gap-2 border-b border-das border-gray-400';

const CollapsableBodyClass = 'overflow-hidden p-5 flex flex-col gap-4';

const HiddenIcon = '+';
const OpenIcon = '-';

export const CollapsibleItem = ({
  title,
  children,
  collapsed = true,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  collapsed?: boolean;
}) => {
  const [open, setOpen] = useState(!collapsed);

  const [openClass, openIcon] = open
    ? ['h-full opacity-100', OpenIcon]
    : ['h-0 opacity-0', HiddenIcon];

  return (
    <div>
      <div className={CollapsableHeaderClass} onClick={() => setOpen(!open)}>
        <Title type={TitleType.H3} className="pb-0">
          {title}
        </Title>
        <Title type={TitleType.H3} className="pb-0">
          {openIcon}
        </Title>
      </div>
      <div className={`${CollapsableBodyClass} ${openClass}`}>{children}</div>
    </div>
  );
};
