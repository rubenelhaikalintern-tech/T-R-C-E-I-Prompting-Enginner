import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCheatSheet: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCheatSheet }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                TR
              </span>
              <span className="font-bold text-sm text-slate-900">
                T R C E I  Prompt Studio by Ruben Elhaikal
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-md">
              Panduan terstruktur prinsip T-R-C-E-I dan kumpulan prompt photo-editing komersial untuk praktisi desain grafis, periklanan, dan komunikasi pemasaran (Marcomm).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('panduan-trcei')}
                  className="hover:text-slate-900 transition-colors"
                >
                  5 Pilar T-R-C-E-I
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pustaka-prompt')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Pustaka Prompt Foto
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('builder-interaktif')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Generator Prompt
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('uji-prompt')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Uji Prompt (Grader)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3">
              Aset & Referensi
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenCheatSheet}
                  className="hover:text-slate-900 transition-colors font-medium text-slate-800"
                >
                  Lembar Contek T-R-C-E-I
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('glosarium')}
                  className="hover:text-slate-900 transition-colors"
                >
                  Glosarium Desain Grafis
                </button>
              </li>
              <li>
                <span className="text-slate-400">
                  Kompatibel: PS AI, Midjourney, Firefly
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} T R C E I  Prompt Studio by Ruben Elhaikal. Dibuat untuk komunitas kreatif & komunikasi pemasaran Indonesia.</p>
          <div className="flex items-center gap-4">
            <span>Standar Desain Komersial</span>
            <span aria-hidden="true">&middot;</span>
            <span>WCAG AA Legibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
