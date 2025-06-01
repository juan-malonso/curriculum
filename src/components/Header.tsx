import { ThemeSwitcher } from './switch/ThemeSwitcher';
import { TitleH1 } from './title/Title';

export function Header({ className }: { className?: string }) {
  return (
    <header
      className={`fixed z-50 w-full flex items-center justify-between px-6 ${className}`}
    >
      <div className="flex items-center gap-4">
        <TitleH1 className="p-4">My Site</TitleH1>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
