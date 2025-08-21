import { ThemeSwitcher, Title, TitleType } from '@/elements';

const HeaderClass =
  'fixed z-50 w-full flex items-center justify-between px-6 shadow-xl';

export function Header({ className }: { className?: string }) {
  return (
    <header className={`${HeaderClass} ${className}`}>
      <div className="flex items-center gap-4">
        <Title type={TitleType.H1} className="p-4">
          <a href="/">My Site</a>
        </Title>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
