import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/photoPrompts';
import { BookOpen, Search } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = GLOSSARY_TERMS.filter(
    item =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glosarium" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              <span>Kosakata Industri</span>
              <span aria-hidden="true">·</span>
              <span>Desain Grafis & Marcomm</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
              Kamus Istilah Teknis Prompting & Desain Grafis
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Memahami istilah teknis fotografi, lighting, dan rekayasa prompt sangat penting agar AI menghasilkan visual presisi tanpa salah persepsi.
            </p>
          </div>

          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari istilah desain..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
            >
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-900"></span>
                <span>{item.term}</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
