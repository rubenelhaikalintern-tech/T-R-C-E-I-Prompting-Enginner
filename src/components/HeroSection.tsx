import React from 'react';
import { ArrowRight, Sparkles, Sliders, BookOpen, Layers } from 'lucide-react';

interface HeroSectionProps {
  onExploreGuide: () => void;
  onExplorePrompts: () => void;
  onOpenBuilder: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreGuide,
  onExplorePrompts,
  onOpenBuilder,
}) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed editorial category metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
              <span>Framework Rekayasa Prompt</span>
              <span aria-hidden="true">·</span>
              <span>Desain Grafis & Marcomm</span>
              <span aria-hidden="true">·</span>
              <span>Bahasa Indonesia</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance mb-5">
              Kuasai Seni Prompting AI dengan Formula{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-600">
                T-R-C-E-I
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Panduan terstruktur dan pustaka prompt foto editing komprehensif bagi{' '}
              <strong className="text-slate-800 font-semibold">Desainer Grafis</strong> dan{' '}
              <strong className="text-slate-800 font-semibold">Praktisi Komunikasi Pemasaran (Marcomm)</strong>. Ubah deskripsi abstrak menjadi visual komersial presisi tinggi tanpa trial-and-error yang melelahkan.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={onOpenBuilder}
                className="px-5 py-3 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Buka Prompt Builder</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExplorePrompts}
                className="px-5 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-2 border border-slate-200"
              >
                <Layers className="w-4 h-4 text-slate-600" />
                <span>Lihat Katalog Prompt Foto</span>
              </button>
              <button
                onClick={onExploreGuide}
                className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Pelajari 5 Prinsip</span>
              </button>
            </div>

            {/* 5 Pillar Quick Summary Strip */}
            <div className="grid grid-cols-5 gap-2 pt-6 border-t border-slate-100">
              <div className="text-left">
                <div className="text-lg font-extrabold text-blue-700">T</div>
                <div className="text-xs font-semibold text-slate-800">Task</div>
                <div className="text-[11px] text-slate-500 hidden sm:block">Tugas Pokok</div>
              </div>
              <div className="text-left">
                <div className="text-lg font-extrabold text-indigo-700">R</div>
                <div className="text-xs font-semibold text-slate-800">Role</div>
                <div className="text-[11px] text-slate-500 hidden sm:block">Peran Persona</div>
              </div>
              <div className="text-left">
                <div className="text-lg font-extrabold text-purple-700">C</div>
                <div className="text-xs font-semibold text-slate-800">Context</div>
                <div className="text-[11px] text-slate-500 hidden sm:block">Konteks Brand</div>
              </div>
              <div className="text-left">
                <div className="text-lg font-extrabold text-teal-700">E</div>
                <div className="text-xs font-semibold text-slate-800">Example</div>
                <div className="text-[11px] text-slate-500 hidden sm:block">Acuan Gaya</div>
              </div>
              <div className="text-left">
                <div className="text-lg font-extrabold text-emerald-700">I</div>
                <div className="text-xs font-semibold text-slate-800">Instruction</div>
                <div className="text-[11px] text-slate-500 hidden sm:block">Batasan Teknis</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-900">
              <img
                src="/src/assets/images/hero_prompt_studio_1792408605204.jpg"
                alt="Studio kerja desainer grafis profesional sedang memadukan prompting AI dan foto editing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Subtle contrast scrim at the bottom for caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5">
                <span className="text-xs font-medium text-amber-300 uppercase tracking-wide">
                  Alur Kerja Desainer Modern
                </span>
                <p className="text-sm font-semibold text-white leading-snug mt-1">
                  Integrasi Photoshop Generative Fill, Midjourney v6, & Prinsip T-R-C-E-I untuk Efisiensi Agensi
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-300 mt-2">
                  <span>Presisi Layer</span>
                  <span aria-hidden="true">·</span>
                  <span>Kontrol Pencahayaan</span>
                  <span aria-hidden="true">·</span>
                  <span>Ready Komersial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
