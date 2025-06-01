'use client';

import { useState } from 'react';
import { TitleH3 } from '../title/Title';

export const CollapsibleItem = ({
  title,
  children,
  collapsed = false,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  collapsed?: boolean;
}) => {
  const [open, setOpen] = useState(!collapsed);

  return (
    <div>
      <div
        className="cursor-pointer flex w-full items-center justify-between gap-2 border-b border-das border-gray-400"
        onClick={() => setOpen(!open)}
      >
        <TitleH3 className="pb-0">{title}</TitleH3>

        <TitleH3 className="pb-0">{open ? '-' : '+'}</TitleH3>
      </div>
      <div
        className={`mt-1 transition-all duration-300 overflow-hidden ${
          open ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
