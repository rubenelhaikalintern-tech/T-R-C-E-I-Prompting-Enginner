import React from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import { TRCEI_PILLARS } from '../data/trceiPillars';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `=== LEMBAR CONTEK CEPAT FORMULA T-R-C-E-I ===
[T] TASK (Tugas Pokok)
- Pertanyaan: Apa instruksi tindakan spesifik yang harus diselesaikan AI?
- Frasa Pemicu: "Ganti latar belakang foto...", "Lakukan generative expand...", "Color grading sinematik..."

[R] ROLE (Peran Persona)
- Pertanyaan: Siapa identitas & keahlian profesional yang diadopsi AI?
- Frasa Pemicu: "Bertindaklah sebagai Senior Commercial Retoucher & Fashion Art Director..."

[C] CONTEXT (Konteks & Sasaran)
- Pertanyaan: Untuk channel apa, brand mana, dan siapa target konsumennya?
- Frasa Pemicu: "Materi katalog Tokopedia Official Store & Instagram Ads untuk audiens Gen Z urban..."

[E] EXAMPLE (Contoh & Acuan Gaya)
- Pertanyaan: Seperti apa gaya referensi visual atau brand acuan yang dituju?
- Frasa Pemicu: "Gaya pencahayaan bersih editorial majalah Kinfolk / produk premium Apple..."

[I] INSTRUCTION (Instruksi & Batasan)
- Pertanyaan: Apa parameter teknis, rasio dimensi, dan larangan mutlak?
- Frasa Pemicu: "Rasio 4:5 vertikal, softbox 45°, tanpa teks watermark, pertahankan tekstur pori kulit alami."
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
              TR
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-none">
                Lembar Contek Cepat T-R-C-E-I
              </h3>
              <span className="text-xs text-slate-500">
                Panduan Singkat untuk Meja Kerja Desainer & Tim Marcomm
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Tutup Lembar Contek"
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cheat Sheet Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-3">Pilar</th>
                <th className="py-3 px-3">Pertanyaan Kunci</th>
                <th className="py-3 px-3">Contoh Frasa Pembuka</th>
                <th className="py-3 px-3">Fungsi Desain Grafis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {TRCEI_PILLARS.map(p => (
                <tr key={p.key} className="hover:bg-slate-50/60">
                  <td className="py-3 px-3 font-bold text-slate-900 whitespace-nowrap">
                    [{p.letter}] {p.name}
                  </td>
                  <td className="py-3 px-3 text-slate-600">
                    {p.checklistPrompt}
                  </td>
                  <td className="py-3 px-3 font-mono text-[11px] text-slate-800">
                    "{p.triggerPhrases[0]}"
                  </td>
                  <td className="py-3 px-3 text-slate-600 text-[11px]">
                    {p.graphicDesignApplication}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Rules: Do's & Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <span className="font-bold text-emerald-900 block mb-2">
              DO'S (Wajib Dilakukan):
            </span>
            <ul className="list-disc pl-4 space-y-1 text-emerald-950">
              <li>Sebutkan sudut pencahayaan (misal: "softbox 45° key light").</li>
              <li>Tentukan rasio aspek sesuai media penempatan (--ar 4:5 / 16:9).</li>
              <li>Sisakan ruang negatif (negative space) untuk teks headline copy.</li>
              <li>Tekankan tekstur pori-pori kulit alami pada foto portrait manusia.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
            <span className="font-bold text-rose-900 block mb-2">
              DON'TS (Wajib Dihindari):
            </span>
            <ul className="list-disc pl-4 space-y-1 text-rose-950">
              <li>Jangan biarkan AI menambahkan teks atau kaligrafi buatan sendiri.</li>
              <li>Hindari kata sifat umum ("bagus", "estetik", "keren") tanpa acuan.</li>
              <li>Jangan gunakan filter blur penghapus pori yang memberi efek plastik.</li>
              <li>Hindari warna neon berlebihan yang tidak sesuai identitas merek.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
