import { ReactNode } from 'react';

enum HxClass {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
}

const commonClass = 'pb-2 font-bold ';
const hxClass: Record<HxClass, string> = {
  [HxClass.H1]: commonClass + 'text-3xl',
  [HxClass.H2]: commonClass + 'text-2xl',
  [HxClass.H3]: commonClass + 'text-xl',
};

export function Title({ children, ...attr }: JSX.IntrinsicElements['h1']) {
  return (
    <div {...attr} className={attr.className ?? hxClass[HxClass.H1]}>
      {children}
    </div>
  );
}

export function TitleH1({ children, ...attr }: JSX.IntrinsicElements['h1']) {
  return Title({
    ...attr,
    children,
    className:
      (attr.className ? attr.className + ' ' : '') + hxClass[HxClass.H1],
  });
}

export function TitleH2({ children, ...attr }: JSX.IntrinsicElements['h1']) {
  return Title({
    ...attr,
    children,
    className:
      (attr.className ? attr.className + ' ' : '') + hxClass[HxClass.H2],
  });
}

export function TitleH3({ children, ...attr }: JSX.IntrinsicElements['h1']) {
  return Title({
    children,
    className:
      (attr.className ? attr.className + ' ' : '') + hxClass[HxClass.H3],
  });
}
