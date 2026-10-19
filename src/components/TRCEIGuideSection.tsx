import React, { useState } from 'react';
import { TRCEI_PILLARS } from '../data/trceiPillars';
import type { TRCEIKey } from '../types/prompt';
import { CheckCircle2, XCircle, Copy, Check, Lightbulb, HelpCircle, ArrowRight } from 'lucide-react';

interface TRCEIGuideSectionProps {
  onUseInBuilder: (pillar: TRCEIKey, phrase: string) => void;
}

export const TRCEIGuideSection: React.FC<TRCEIGuideSectionProps> = ({ onUseInBuilder }) => {
  const [selectedKey, setSelectedKey] = useState<TRCEIKey>('T');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activePillar = TRCEI_PILLARS.find(p => p.key === selectedKey) || TRCEI_PILLARS[0];

  const handleCopyTrigger = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getPillarAccentColor = (key: TRCEIKey) => {
    switch (key) {
      case 'T': return 'text-blue-600 border-blue-600 bg-blue-50';
      case 'R': return 'text-indigo-600 border-indigo-600 bg-indigo-50';
      case 'C': return 'text-purple-600 border-purple-600 bg-purple-50';
      case 'E': return 'text-teal-600 border-teal-600 bg-teal-50';
      case 'I': return 'text-emerald-600 border-emerald-600 bg-emerald-50';
    }
  };

  return (
    <section id="panduan-trcei" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Metodologi Rekayasa Prompt</span>
            <span aria-hidden="true">·</span>
            <span>Standar Komersial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Membedah 5 Pilar Formula T-R-C-E-I
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            AI generatif (LLM, Midjourney, Photoshop Generative Fill, Adobe Firefly) tidak memiliki indra perasa desain manusia. Tanpa struktur terdefinisi, AI akan menghasilkan visual biasa yang tidak sesuai dengan identitas brand. Formula <strong className="text-slate-800">T-R-C-E-I</strong> adalah jembatan presisi antara visi kreatif Anda dan algoritma AI.
          </p>
        </div>

        {/* 5-Pillar Interactive Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 p-1.5 bg-slate-200/80 rounded-xl mb-8">
          {TRCEI_PILLARS.map((pillar) => {
            const isActive = pillar.key === selectedKey;
            return (
              <button
                key={pillar.key}
                onClick={() => setSelectedKey(pillar.key)}
                className={`py-3 px-3 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                      isActive ? 'bg-slate-900 text-white' : 'bg-slate-300 text-slate-700'
                    }`}
                  >
                    {pillar.letter}
                  </span>
                  <span className="font-bold text-sm tracking-tight">{pillar.name}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 truncate">
                  {pillar.indonesianName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Detailed Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
          {/* Top Banner of Selected Pillar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-black text-slate-900">
                  Pilar {activePillar.letter}: {activePillar.name}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  ({activePillar.indonesianName})
                </span>
              </div>
              <p className="text-sm font-medium text-slate-700">
                {activePillar.tagline}
              </p>
            </div>
            <div className="text-xs text-slate-500 sm:text-right">
              <span>Fokus Utama: </span>
              <strong className="text-slate-900">{activePillar.indonesianName}</strong>
            </div>
          </div>

          {/* Grid Layout: Explanation & Design Application */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
            {/* Left: What is it & Why it matters */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Definisi & Esensi</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activePillar.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-500" />
                  <span>Mengapa Krusial Bagi AI?</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activePillar.whyItMatters}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                  Aplikasi di Desain Grafis & Marcomm
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activePillar.graphicDesignApplication}
                </p>
              </div>
            </div>

            {/* Right: Trigger Phrases you can copy */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Frasa Pemicu (Trigger Keywords) Siap Salin
                </h3>
                <span className="text-xs text-slate-500">Klik untuk salin</span>
              </div>
              <div className="space-y-2">
                {activePillar.triggerPhrases.map((phrase, idx) => {
                  const isCopied = copiedIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="group p-3 rounded-lg border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 transition-all flex items-start justify-between gap-3 text-xs"
                    >
                      <p className="text-slate-700 font-medium leading-relaxed select-all">
                        "{phrase}"
                      </p>
                      <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                        <button
                          onClick={() => handleCopyTrigger(phrase, idx)}
                          title="Salin frasa ini"
                          className="p-1 rounded text-slate-400 hover:text-slate-800 transition-colors"
                        >
                          {isCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => onUseInBuilder(activePillar.key, phrase)}
                          title="Gunakan di Builder"
                          className="px-2 py-0.5 text-[10px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                        >
                          Pakai
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Comparison Box: Prompt Lemah vs Prompt TRCEI Masterclass */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
              Studi Komparasi Nyata: Efek Pilar {activePillar.name}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Bad Example */}
              <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wide mb-2">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Prompt Lemah (Tanpa {activePillar.name} yang Jelas)</span>
                </div>
                <blockquote className="text-xs text-rose-950 font-medium italic mb-2">
                  "{activePillar.badExample}"
                </blockquote>
                <p className="text-[11px] text-rose-700 leading-normal">
                  Hasil AI: Gambar generik, pencahayaan datar, proporsi tidak sesuai standar periklanan, dan sering kali menghasilkan artefak acak.
                </p>
              </div>

              {/* Good Example */}
              <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Prompt TRCEI Masterclass</span>
                </div>
                <blockquote className="text-xs text-emerald-950 font-medium mb-2 leading-relaxed">
                  "{activePillar.goodExample}"
                </blockquote>
                <p className="text-[11px] text-emerald-700 leading-normal">
                  Hasil AI: Komposisi komersial tajam, pencahayaan studio terarah, ruang negatif siap untuk tipografi desainer, dan zero visual clutter.
                </p>
              </div>
            </div>

            {/* Checklist Tip */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
              <span>
                <strong>Checklist Mandiri: </strong>
                {activePillar.checklistPrompt}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
