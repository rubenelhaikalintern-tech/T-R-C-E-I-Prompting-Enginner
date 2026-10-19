import React, { useState } from 'react';
import { buildTRCEIPrompt } from '../lib/promptLogic';
import type { TRCEIKey, PhotoEditingPromptItem } from '../types/prompt';
import {
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Download,
  CheckCircle2,
  Sliders,
  Send,
} from 'lucide-react';
import { AILaunchButtons } from './AILaunchButtons';

interface PromptBuilderProps {
  initialData?: {
    task?: string;
    role?: string;
    context?: string;
    example?: string;
    instruction?: string;
  };
  onSendToGrader?: (promptText: string) => void;
}

export const PromptBuilder: React.FC<PromptBuilderProps> = ({
  initialData,
  onSendToGrader,
}) => {
  const [task, setTask] = useState(
    initialData?.task ||
      'Ganti latar belakang foto botol parfum kaca ini dengan podium batu travertine krem natural di atas permukaan air tenang dengan pantulan lembut.'
  );
  const [role, setRole] = useState(
    initialData?.role ||
      'Bertindaklah sebagai Senior Commercial Retoucher dan Fashion Art Director agensi periklanan global.'
  );
  const [context, setContext] = useState(
    initialData?.context ||
      'Materi foto katalog produk utama untuk Tokopedia Official Store dan kampanye Instagram Ads dengan target audiens wanita urban usia 22-35 tahun.'
  );
  const [example, setExample] = useState(
    initialData?.example ||
      'Referensi gaya visual kampanye editorial Aesop atau majalah Kinfolk; palet warna netral earthy, pencahayaan lembut, dan proporsi negative space seimbang.'
  );
  const [instruction, setInstruction] = useState(
    initialData?.instruction ||
      'Aspek rasio 4:5 vertikal, pencahayaan softbox 45° arah jam 10 pagi, bayangan kontak tajam di bawah botol. Batasan: Jangan ada teks watermark, jangan ubah logo botol, tanpa warna neon mencolok.'
  );

  const [copiedType, setCopiedType] = useState<'id' | 'en' | null>(null);

  const { promptIndonesian, promptEnglish } = buildTRCEIPrompt({
    task,
    role,
    context,
    example,
    instruction,
  });

  const handleCopy = (text: string, type: 'id' | 'en') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleReset = () => {
    setTask('');
    setRole('');
    setContext('');
    setExample('');
    setInstruction('');
  };

  const handleExportText = () => {
    const content = `=== T-R-C-E-I PROMPT STUDIO EXPORT ===
[Dibuat dengan Formula T-R-C-E-I untuk Desain Grafis & Marcomm]

--- PROMPT VERSI BAHASA INDONESIA ---
${promptIndonesian}

--- PROMPT VISUAL VERSI BAHASA INGGRIS (MIDJOURNEY / GENERATIVE FILL) ---
${promptEnglish}
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `trcei-prompt-${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="builder-interaktif" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Generator Interaktif</span>
            <span aria-hidden="true">·</span>
            <span>Formula T-R-C-E-I</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Pembuat Prompt T-R-C-E-I Interaktif
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Isi masing-masing pilar atau klik rekomendasi frasa cepat di bawah setiap input. Prompt akan tersusun otomatis dalam struktur Bahasa Indonesia dan format visual Bahasa Inggris yang optimal untuk Photoshop AI, Midjourney, maupun Firefly.
          </p>
        </div>

        {/* 2-Zone Sandbox: Left Form (Inputs), Right Preview (Live Generation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-600" />
                <span>Parameter 5 Pilar T-R-C-E-I</span>
              </h3>
              <button
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Form</span>
              </button>
            </div>

            {/* [T] Task Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center text-[10px]">
                    T
                  </span>
                  <span>Task (Tugas Pokok & Objek Visual)</span>
                </label>
                <span className="text-[11px] text-slate-600">Perintah tindakan konkret</span>
              </div>
              <textarea
                rows={2}
                value={task}
                onChange={e => setTask(e.target.value)}
                placeholder="Contoh: Ganti background foto produk dengan balok travertine..."
                className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              {/* Quick suggestion chips */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setTask(
                      'Ganti latar belakang dengan podium batu travertine krem natural berbayangan lembut'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Packshot Travertine
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setTask(
                      'Lakukan generative expand outpainting pada sisi kiri dan kanan menjadi rasio 16:9 lanskap'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Outpainting 16:9
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setTask(
                      'Ubah pose individu subjek agar mengadopsi pose langkah dinamis dari foto referensi, pertahankan wajah asli 100%'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded"
                >
                  + Transfer Pose Referensi
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setTask(
                      'Ambil foto produk dari sudut pandang sangat rendah ke atas (dramatic low-angle worm\'s-eye view) berlatar langit biru'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-teal-700 bg-teal-50 hover:bg-teal-100 rounded"
                >
                  + Low-Angle Hero
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setTask(
                      'Ganti pakaian kasual subjek dengan setelan blazer wol modern arang, kunci 100% bentuk wajah asli (Identity Lock)'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-purple-700 bg-purple-50 hover:bg-purple-100 rounded"
                >
                  + Ganti Busana (Face Lock)
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setTask(
                      'Lakukan color grading sinematik warm golden hour pada foto model kampanye outdoor'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Color Grade Golden Hour
                </button>
              </div>
            </div>

            {/* [R] Role Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-indigo-100 text-indigo-700 font-extrabold flex items-center justify-center text-[10px]">
                    R
                  </span>
                  <span>Role (Peran & Persona AI)</span>
                </label>
                <span className="text-[11px] text-slate-600">Standar profesional industri</span>
              </div>
              <textarea
                rows={2}
                value={role}
                onChange={e => setRole(e.target.value)}
                placeholder="Contoh: Bertindaklah sebagai Senior Commercial Retoucher dan Fashion Art Director..."
                className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-600 focus:bg-white"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setRole(
                      'Bertindaklah sebagai Senior Commercial Retoucher dan Fashion Art Director agensi periklanan global.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Senior Retoucher & Art Director
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setRole(
                      'Bertindaklah sebagai Lead Advertising Art Director spesialis E-Commerce & FMCG conversion.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Lead E-Commerce Art Director
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setRole(
                      'Bertindaklah sebagai Master High-End Beauty Retoucher berstandar majalah mode internasional.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + High-End Beauty Retoucher
                </button>
              </div>
            </div>

            {/* [C] Context Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-purple-100 text-purple-700 font-extrabold flex items-center justify-center text-[10px]">
                    C
                  </span>
                  <span>Context (Konteks Brand & Audiens Sasaran)</span>
                </label>
                <span className="text-[11px] text-slate-600">Channel & tujuan kampanye</span>
              </div>
              <textarea
                rows={2}
                value={context}
                onChange={e => setContext(e.target.value)}
                placeholder="Contoh: Materi foto katalog produk untuk Instagram Ads dan Tokopedia Official Store..."
                className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-purple-600 focus:bg-white"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setContext(
                      'Materi Instagram Carousel & Ads promosi kopi kekinian dengan target pekerja muda urban 20-30 tahun.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Instagram Ads F&B
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setContext(
                      'Key visual billboard luar ruang dan materi laporan tahunan kepemimpinan korporasi teknologi.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Billboard Korporat
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setContext(
                      'Kampanye promosi musiman Ramadan & Idul Fitri untuk koleksi fashion muslimah modern elegan.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Kampanye Ramadan
                </button>
              </div>
            </div>

            {/* [E] Example Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-teal-100 text-teal-700 font-extrabold flex items-center justify-center text-[10px]">
                    E
                  </span>
                  <span>Example (Contoh Acuan Gaya Visual)</span>
                </label>
                <span className="text-[11px] text-slate-600">Jangkar referensi visual</span>
              </div>
              <textarea
                rows={2}
                value={example}
                onChange={e => setExample(e.target.value)}
                placeholder="Contoh: Mengacu pada gaya visual editorial majalah Kinfolk atau iklan komersial Aesop..."
                className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:bg-white"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setExample(
                      'Referensi visual majalah Kinfolk / Aesop: warna netral alami dengan 40% ruang negatif untuk teks.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Minimalisme Kinfolk
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setExample(
                      'Estetika Leica 35mm dokumenter editorial modern dengan warna kulit manusia natural.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Leica 35mm Editorial
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setExample(
                      'Gaya periklanan studio produk Apple: pencahayaan bersih bergradasi dan bayangan lantai realistis.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Apple Clean Studio
                </button>
              </div>
            </div>

            {/* [I] Instruction Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center text-[10px]">
                    I
                  </span>
                  <span>Instruction (Instruksi & Batasan Ketat)</span>
                </label>
                <span className="text-[11px] text-slate-600">Rasio, lighting, negative prompt</span>
              </div>
              <textarea
                rows={2}
                value={instruction}
                onChange={e => setInstruction(e.target.value)}
                placeholder="Contoh: Aspek rasio 4:5 vertikal, pencahayaan softbox 45°, tanpa teks watermark..."
                className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                <button
                  type="button"
                  onClick={() =>
                    setInstruction(
                      'Rasio 4:5, pencahayaan softbox 45° arah jam 10, bayangan kontak tajam. Batasan: Tanpa teks watermark, tanpa warna neon.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Rasio 4:5 Softbox
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setInstruction(
                      'Rasio 16:9 lanskap, pencahayaan golden hour rim light, pertahankan tekstur pori kulit, tanpa blur berlebih.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Rasio 16:9 Golden Hour
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setInstruction(
                      'Rasio 1:1, bayangan kontak presisi, pertahankan ketajaman teks label 100%, dilarang mendistorsi geometri botol.'
                    )
                  }
                  className="px-2 py-0.5 text-[10px] font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded"
                >
                  + Rasio 1:1 E-Commerce
                </button>
              </div>
            </div>
          </div>

          {/* Right Live Output Deck (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sticky top-20">
            {/* Indonesian Structured Prompt */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Prompt Bahasa Indonesia (Lengkap)
                </span>
                <button
                  onClick={() => handleCopy(promptIndonesian, 'id')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1"
                >
                  {copiedType === 'id' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs leading-relaxed max-h-60 overflow-y-auto select-all">
                <pre className="whitespace-pre-wrap">{promptIndonesian}</pre>
              </div>
            </div>

            {/* Visual English Prompt (Midjourney / Generative Fill) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  Prompt Visual EN (Midjourney / SD / Firefly)
                </span>
                <button
                  onClick={() => handleCopy(promptEnglish, 'en')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1"
                >
                  {copiedType === 'en' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
              <div className="p-3 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs leading-relaxed max-h-44 overflow-y-auto select-all">
                <pre className="whitespace-pre-wrap">{promptEnglish}</pre>
              </div>
            </div>

            {/* Direct Launch to AI Platforms */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
              <AILaunchButtons
                promptText={promptIndonesian}
                englishPromptText={promptEnglish}
                label="Buka & Jalankan di Platform AI:"
              />
            </div>

            {/* Actions: Export Text & Send to Grader */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleExportText}
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-800 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File Teks (.txt)</span>
              </button>

              {onSendToGrader && (
                <button
                  onClick={() => onSendToGrader(promptIndonesian)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Uji di Prompt Grader &rarr;</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
