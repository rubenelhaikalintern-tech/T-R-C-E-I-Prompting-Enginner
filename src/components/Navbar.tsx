import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (sectionId: string) => void;
  onOpenCheatSheet: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  onOpenCheatSheet,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('beranda');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-extrabold text-sm shadow-xs shrink-0">
            TR
          </span>
          <span className="truncate">T R C E I  Prompt Studio by Ruben Elhaikal</span>
        </a>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onNavigate('panduan-trcei')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
              activeTab === 'panduan-trcei' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Prinsip T-R-C-E-I
          </button>
          <button
            onClick={() => onNavigate('pustaka-prompt')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
              activeTab === 'pustaka-prompt' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Pustaka Prompt Foto
          </button>
          <button
            onClick={() => onNavigate('builder-interaktif')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
              activeTab === 'builder-interaktif' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Builder Interaktif
          </button>
          <button
            onClick={() => onNavigate('uji-prompt')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
              activeTab === 'uji-prompt' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Uji Prompt (Grader)
          </button>
          <button
            onClick={() => onNavigate('glosarium')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-slate-900 ${
              activeTab === 'glosarium' ? 'text-slate-900 font-semibold' : ''
            }`}
          >
            Glosarium
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCheatSheet}
            aria-label="Buka Lembar Contek T-R-C-E-I"
            className="px-3 sm:px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Lembar Contek T-R-C-E-I</span>
            <span className="sm:hidden">Contek T-R-C-E-I</span>
          </button>
        </div>
      </div>
    </header>
  );
};
