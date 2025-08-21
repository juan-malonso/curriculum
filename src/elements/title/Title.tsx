export enum TitleType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
}

const TitleClass = 'pb-2 font-bold ';
const TypeClass: Record<TitleType, string> = {
  [TitleType.H1]: 'text-3xl',
  [TitleType.H2]: 'text-2xl',
  [TitleType.H3]: 'text-xl',
  [TitleType.H4]: 'text-lg',
};

export function Title({
  type = TitleType.H1,
  children,
  className,
  ...attr
}: { type?: TitleType } & JSX.IntrinsicElements['h1']) {
  return (
    <div className={`${TitleClass} ${TypeClass[type]} ${className}`} {...attr}>
      {children}
    </div>
  );
}
