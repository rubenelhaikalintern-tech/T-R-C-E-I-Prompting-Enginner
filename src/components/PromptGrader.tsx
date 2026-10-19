import React, { useState } from 'react';
import { analyzePromptTRCEI } from '../lib/promptLogic';
import type { TRCEIKey } from '../types/prompt';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  AlertTriangle,
} from 'lucide-react';
import { AILaunchButtons } from './AILaunchButtons';

interface PromptGraderProps {
  initialPrompt?: string;
  onJumpToBuilder?: () => void;
}

export const PromptGrader: React.FC<PromptGraderProps> = ({
  initialPrompt,
  onJumpToBuilder,
}) => {
  const [promptText, setPromptText] = useState(
    initialPrompt ||
      `Bertindaklah sebagai Senior Commercial Retoucher dan Fashion Art Director.
Tugas: Ganti latar belakang foto botol parfum kaca ini dengan balok marmer travertine di atas air tenang berbayangan daun palem lembut.
Konteks: Untuk kampanye peluncuran brand di Instagram dan marketplace Tokopedia Official Store.
Contoh: Gaya visual minimalis editorial seperti iklan majalah Vogue atau Kinfolk.
Instruksi: Rasio aspek 4:5, pencahayaan softbox 45 derajat, jangan ada teks dan watermark.`
  );

  const result = analyzePromptTRCEI(promptText);

  const loadSampleWeak = () => {
    setPromptText('Tolong edit foto produk ini biar kelihatan bagus dan estetik ya.');
  };

  const loadSampleMaster = () => {
    setPromptText(`Bertindaklah sebagai Senior Commercial Retoucher dan Fashion Art Director.
Tugas: Ganti latar belakang foto botol parfum kaca ini dengan podium batu travertine krem natural di atas permukaan air tenang dengan pantulan lembut.
Konteks: Materi foto katalog produk utama untuk Tokopedia Official Store dan kampanye Instagram Ads dengan target audiens wanita urban usia 22-35 tahun.
Contoh: Referensi gaya visual kampanye editorial Aesop atau majalah Kinfolk; palet warna netral earthy, pencahayaan lembut, dan proporsi negative space seimbang.
Instruksi: Aspek rasio 4:5 vertikal, pencahayaan softbox 45° arah jam 10 pagi, bayangan kontak tajam di bawah botol. Batasan: Jangan ada teks watermark, jangan ubah logo botol, tanpa warna neon mencolok.`);
  };

  return (
    <section id="uji-prompt" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Diagnostik Kualitas</span>
            <span aria-hidden="true">·</span>
            <span>Evaluator T-R-C-E-I</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Uji Kelayakan Prompt AI Anda
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Tempelkan prompt yang Anda gunakan untuk Photoshop AI, Midjourney, ataupun ChatGPT. Sistem akan menganalisis keberadaan 5 pilar T-R-C-E-I dan memberikan skor serta saran perbaikan instan.
          </p>
        </div>

        {/* Input & Score Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Input Textarea & Sample Buttons (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="prompt-input-area" className="text-xs font-bold text-slate-900">
                Teks Prompt yang Ingin Diuji:
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={loadSampleWeak}
                  className="text-[11px] font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-0.5 rounded transition-colors"
                >
                  Coba Prompt Lemah
                </button>
                <button
                  type="button"
                  onClick={loadSampleMaster}
                  className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded transition-colors"
                >
                  Coba Prompt Masterclass
                </button>
              </div>
            </div>

            <textarea
              id="prompt-input-area"
              rows={8}
              value={promptText}
              onChange={e => setPromptText(e.target.value)}
              placeholder="Ketik atau tempelkan prompt Anda di sini..."
              className="w-full p-4 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white leading-relaxed font-mono"
            />

            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{promptText.trim().split(/\s+/).filter(Boolean).length} kata terdeteksi</span>
              <button
                type="button"
                onClick={() => setPromptText('')}
                className="hover:text-slate-900 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Kosongkan</span>
              </button>
            </div>
          </div>

          {/* Right: Score Gauge & Pillar Badges (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            {/* Score header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Skor Kelengkapan T-R-C-E-I
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-black text-slate-900 tabular-nums">
                    {result.score}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">/ 100</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-500 block">Predikat Kualitas</span>
                <span className={`text-sm font-extrabold ${result.gradeColor}`}>
                  {result.grade}
                </span>
              </div>
            </div>

            {/* Pillar Presence Checkboxes */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-900 block">
                Deteksi 5 Pilar ({result.detectedCount}/5 Terpenuhi):
              </span>

              {(['T', 'R', 'C', 'E', 'I'] as TRCEIKey[]).map(key => {
                const item = result.breakdown[key];
                const labels: Record<TRCEIKey, string> = {
                  T: 'Task (Tugas)',
                  R: 'Role (Peran)',
                  C: 'Context (Konteks)',
                  E: 'Example (Contoh)',
                  I: 'Instruction (Instruksi & Batasan)',
                };

                return (
                  <div
                    key={key}
                    className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 transition-colors ${
                      item.detected
                        ? 'bg-white border-emerald-200 text-slate-900'
                        : 'bg-white/60 border-slate-200 text-slate-500'
                    }`}
                  >
                    {item.detected ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <strong
                          className={item.detected ? 'text-slate-900' : 'text-slate-500'}
                        >
                          {labels[key]}
                        </strong>
                        <span className="text-[10px] uppercase font-bold text-slate-400">
                          {item.detected ? 'Terdeteksi' : 'Belum Ada'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-1 leading-snug">
                        {item.feedback}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actionable Tips */}
            <div className="pt-4 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-900 block mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Rekomendasi Peningkatan:</span>
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {result.actionableTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-slate-400 shrink-0 mt-0.5">&bull;</span>
                    <span className="leading-snug">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Launch to AI Platforms */}
            <div className="pt-4 border-t border-slate-200">
              <AILaunchButtons
                promptText={promptText}
                label="Jalankan Prompt Ini Langsung ke AI:"
              />
            </div>

            {/* Button to improve in builder */}
            {onJumpToBuilder && (
              <button
                onClick={onJumpToBuilder}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Buka Prompt Builder untuk Memperbaiki</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
