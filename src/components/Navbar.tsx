import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { HardDrive, Menu, X, ArrowUpRight, LogOut, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  user: User | null;
  onOpenDriveModal: () => void;
  onLogout: () => void;
  attachedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenDriveModal,
  onLogout,
  attachedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A0B0D]/85 backdrop-blur-md border-b border-white/[0.07] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tighter text-[#ECEAE5] font-['Syne'] whitespace-nowrap shrink-0 hover:text-white transition-colors"
        >
          VEKTOR<span className="text-[#E26D35]">.</span>LABS
        </a>

        {/* Zone 2: Clean single-line text nav links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium text-[#9E9C96]">
          <a
            href="#portfolio"
            className="hover:text-[#ECEAE5] transition-colors whitespace-nowrap shrink-0"
          >
            Selected Work
          </a>
          <a
            href="#process"
            className="hover:text-[#ECEAE5] transition-colors whitespace-nowrap shrink-0"
          >
            How We Deliver
          </a>
          <a
            href="#services"
            className="hover:text-[#ECEAE5] transition-colors whitespace-nowrap shrink-0"
          >
            Capabilities
          </a>
          <a
            href="#testimonials"
            className="hover:text-[#ECEAE5] transition-colors whitespace-nowrap shrink-0"
          >
            Client Reviews
          </a>
          <a
            href="#blog"
            className="hover:text-[#ECEAE5] transition-colors whitespace-nowrap shrink-0"
          >
            Insights
          </a>
        </nav>

        {/* Zone 3: Actions & Quick Sync */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-white/10 hover:border-white/25 text-[#9E9C96] hover:text-[#ECEAE5] transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-[#E26D35]" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-[#E26D35]" />
            )}
          </button>

          <button
            onClick={onOpenDriveModal}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
              user
                ? 'bg-white/[0.04] border-white/20 text-[#ECEAE5] hover:bg-white/[0.08]'
                : 'bg-transparent border-white/10 text-[#9E9C96] hover:text-[#ECEAE5] hover:border-white/25'
            }`}
            title={user ? `Connected as ${user.email}` : 'Attach specs from Google Drive'}
          >
            <HardDrive className="w-3.5 h-3.5 text-[#E26D35]" />
            <span>{user ? (user.displayName?.split(' ')[0] || 'Drive Sync') : 'Google Drive'}</span>
            {attachedCount > 0 && (
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#E26D35] text-white font-bold">
                {attachedCount}
              </span>
            )}
          </button>

          {user && (
            <button
              onClick={onLogout}
              className="p-1.5 text-[#73716B] hover:text-rose-400 rounded-lg hover:bg-white/[0.04] transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
              title="Sign out of Google"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          )}

          <a
            href="#contact"
            className="flex items-center gap-1.5 bg-[#ECEAE5] text-[#0A0B0D] hover:bg-white text-xs font-bold px-4 py-2 rounded-lg transition-all duration-200 shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg border border-white/10 text-[#9E9C96] hover:text-white min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#E26D35]" />
            ) : (
              <Moon className="w-4 h-4 text-[#E26D35]" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg border border-white/10 text-[#9E9C96] hover:text-white min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Max Height & Scrollable for all phone heights) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1013] border-b border-white/[0.08] px-4 sm:px-6 py-5 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#ECEAE5]">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-2 rounded-lg hover:bg-white/[0.04] hover:text-[#E26D35] transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-2 rounded-lg hover:bg-white/[0.04] hover:text-[#E26D35] transition-colors"
            >
              How We Deliver
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-2 rounded-lg hover:bg-white/[0.04] hover:text-[#E26D35] transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-2 rounded-lg hover:bg-white/[0.04] hover:text-[#E26D35] transition-colors"
            >
              Client Reviews
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-2 rounded-lg hover:bg-white/[0.04] hover:text-[#E26D35] transition-colors"
            >
              Insights
            </a>
          </nav>

          <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
            {/* Mobile Theme Switcher row */}
            <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-[#ECEAE5]">
              <span className="flex items-center gap-2">
                {theme === 'dark' ? <Sun className="w-4 h-4 text-[#E26D35]" /> : <Moon className="w-4 h-4 text-[#E26D35]" />}
                <span>Theme: {theme === 'dark' ? 'Obsidian' : 'Light'}</span>
              </span>
              <button
                onClick={toggleTheme}
                className="px-3 py-1 rounded bg-white/[0.08] hover:bg-white/15 text-[11px] font-mono font-bold"
              >
                Toggle
              </button>
            </div>

            <button
              onClick={() => {
                onOpenDriveModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-[#ECEAE5]"
            >
              <span className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#E26D35]" />
                Google Drive Specs
              </span>
              <span className="text-[11px] text-[#9E9C96]">
                {attachedCount > 0 ? `${attachedCount} attached` : user ? 'Connected' : 'Connect'}
              </span>
            </button>

            {user && (
              <button
                onClick={() => {
                  onLogout();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs text-rose-400 border border-rose-500/20 hover:bg-rose-500/10"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Disconnect Google Account</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#ECEAE5] text-[#0A0B0D] font-bold text-xs py-3 rounded-lg shadow-sm"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
