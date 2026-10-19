import React, { useState, useEffect } from 'react';
import { PHOTO_PROMPTS, PROMPT_CATEGORIES, TOOL_TAGS } from '../data/photoPrompts';
import { filterPrompts } from '../lib/promptLogic';
import type { PhotoEditingPromptItem, PromptCategory, ToolTag } from '../types/prompt';
import {
  Search,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  SlidersHorizontal,
  Layers,
  ChevronDown,
  ChevronUp,
  Camera,
  Sun,
  Maximize2,
  Info,
} from 'lucide-react';
import { AILaunchButtons } from './AILaunchButtons';

interface PhotoPromptCatalogProps {
  onSelectPromptForBuilder?: (prompt: PhotoEditingPromptItem) => void;
}

export const PhotoPromptCatalog: React.FC<PhotoPromptCatalogProps> = ({
  onSelectPromptForBuilder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory>('all');
  const [selectedTool, setSelectedTool] = useState<ToolTag>('Semua Tools');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePromptTab, setActivePromptTab] = useState<Record<string, 'id' | 'en'>>({});
  const [expandedBreakdown, setExpandedBreakdown] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('trcei_bookmarked_prompts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('trcei_bookmarked_prompts', JSON.stringify(next));
      } catch (e) {
        // ignore
      }
      return next;
    });
  };

  const filteredItems = filterPrompts(PHOTO_PROMPTS, searchQuery, selectedCategory, selectedTool);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const toggleBreakdown = (id: string) => {
    setExpandedBreakdown(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getLanguageTab = (id: string) => activePromptTab[id] || 'id';

  const setLanguageTab = (id: string, tab: 'id' | 'en') => {
    setActivePromptTab(prev => ({ ...prev, [id]: tab }));
  };

  return (
    <section id="pustaka-prompt" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Pustaka Siap Pakai</span>
            <span aria-hidden="true">·</span>
            <span>Desain Grafis & Marcomm</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Koleksi Prompt Photo-Editing Desain Grafis & Marcomm
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Daftar resep prompt praktis berstruktur T-R-C-E-I untuk kebutuhan komersial: foto katalog produk e-commerce, slide materi iklan digital (Instagram/TikTok), key visual billboard, perluasan kanvas generative fill, hingga retouching kulit alami.
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="space-y-4 mb-10">
          {/* Category Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {PROMPT_CATEGORIES.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as PromptCategory)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search and Tool Select Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari prompt foto (misal: travertine, sneakers, ramadan, double exposure, outpainting)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
              />
            </div>

            {/* Tool Filter Selector */}
            <div className="sm:col-span-4 flex items-center gap-2">
              <label htmlFor="tool-filter" className="text-xs font-medium text-slate-500 whitespace-nowrap">
                Tool:
              </label>
              <select
                id="tool-filter"
                value={selectedTool}
                onChange={e => setSelectedTool(e.target.value as ToolTag)}
                aria-label="Filter berdasarkan perangkat lunak AI"
                className="w-full py-2 px-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-slate-900 focus:bg-white"
              >
                {TOOL_TAGS.map(tool => (
                  <option key={tool} value={tool}>
                    {tool}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Prompts Count & Bookmarks Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 pb-4 border-b border-slate-100 mb-8">
          <div>
            Menampilkan <strong className="text-slate-900">{filteredItems.length}</strong> resep prompt teruji
          </div>
          {bookmarks.length > 0 && (
            <div className="flex items-center gap-1 text-amber-700 font-medium">
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>{bookmarks.length} prompt tersimpan di bookmark</span>
            </div>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-8">
            <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900 mb-1">
              Tidak ada prompt yang cocok
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
              Coba gunakan kata kunci pencarian lain atau pilih kategori "Semua Kategori".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTool('Semua Tools');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map(item => {
            const isBookmarked = bookmarks.includes(item.id);
            const isExpanded = !!expandedBreakdown[item.id];
            const currentTab = getLanguageTab(item.id);
            const isPromptCopied = copiedId === `${item.id}-${currentTab}`;

            const activePromptText =
              currentTab === 'id' ? item.promptIndonesian : item.promptEnglish;

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Image Preview Banner if available */}
                {item.image && (
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden border-b border-slate-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      Hasil Visual T-R-C-E-I
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Metadata Header (No pills, unboxed metadata with separators) */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-800">{item.targetTool}</span>
                    </div>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      title={isBookmarked ? 'Hapus bookmark' : 'Simpan prompt'}
                      className="text-slate-400 hover:text-amber-600 transition-colors p-1"
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4 text-amber-600" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {item.summary}
                  </p>

                  {/* Tech Specs Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] mb-5">
                    <div>
                      <span className="text-slate-600 block">Aspek Rasio</span>
                      <strong className="text-slate-900 truncate block font-mono">
                        {item.techSpecs.aspectRatio}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-600 block">Pencahayaan</span>
                      <strong className="text-slate-900 truncate block">
                        {item.techSpecs.lighting}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-600 block">Lensa & Kamera</span>
                      <strong className="text-slate-900 truncate block">
                        {item.techSpecs.cameraLens}
                      </strong>
                    </div>
                    <div>
                      <span className="text-slate-600 block">Profil Warna</span>
                      <strong className="text-slate-900 truncate block font-mono">
                        {item.techSpecs.colorProfile}
                      </strong>
                    </div>
                  </div>

                  {/* Language Tab Selector (Indonesian / English) */}
                  <div className="flex items-center justify-between border-b border-slate-200 mb-3 pb-1">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setLanguageTab(item.id, 'id')}
                        className={`text-xs pb-1 font-semibold transition-colors border-b-2 ${
                          currentTab === 'id'
                            ? 'text-slate-900 border-slate-900'
                            : 'text-slate-500 border-transparent hover:text-slate-800'
                        }`}
                      >
                        Prompt Bahasa Indonesia (Lengkap)
                      </button>
                      <button
                        onClick={() => setLanguageTab(item.id, 'en')}
                        className={`text-xs pb-1 font-semibold transition-colors border-b-2 ${
                          currentTab === 'en'
                            ? 'text-slate-900 border-slate-900'
                            : 'text-slate-500 border-transparent hover:text-slate-800'
                        }`}
                      >
                        Prompt Visual EN (Midjourney/SD)
                      </button>
                    </div>

                    <button
                      onClick={() => handleCopy(activePromptText, `${item.id}-${currentTab}`)}
                      className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors flex items-center gap-1.5"
                    >
                      {isPromptCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-600" />
                          <span>Salin Prompt</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Prompt Text Block */}
                  <div className="relative p-3.5 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs leading-relaxed overflow-x-auto max-h-56 select-all mb-4">
                    <pre className="whitespace-pre-wrap">{activePromptText}</pre>
                  </div>

                  {/* Negative Prompt if present */}
                  {item.negativePrompt && (
                    <div className="p-2.5 bg-rose-50 border border-rose-100 rounded-lg text-xs mb-4">
                      <span className="font-bold text-rose-800">Negative Prompt (Hindari): </span>
                      <span className="text-rose-900 font-mono text-[11px]">{item.negativePrompt}</span>
                    </div>
                  )}

                  {/* Direct Launch to AI (ChatGPT, Midjourney, Gemini, Claude) */}
                  <div className="mb-4 pt-1 border-t border-slate-100">
                    <AILaunchButtons
                      promptText={activePromptText}
                      englishPromptText={item.promptEnglish}
                      label="Buka Langsung di Platform AI:"
                    />
                  </div>

                  {/* Toggle TRCEI Breakdown Details */}
                  <div className="border-t border-slate-100 pt-3">
                    <button
                      onClick={() => toggleBreakdown(item.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-slate-900 py-1"
                    >
                      <span>Lihat Rincian 5 Pilar T-R-C-E-I</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 space-y-2 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <div>
                          <strong className="text-blue-700 font-bold block">[T] Task:</strong>
                          <span className="text-slate-700">{item.trcei.task}</span>
                        </div>
                        <div>
                          <strong className="text-indigo-700 font-bold block">[R] Role:</strong>
                          <span className="text-slate-700">{item.trcei.role}</span>
                        </div>
                        <div>
                          <strong className="text-purple-700 font-bold block">[C] Context:</strong>
                          <span className="text-slate-700">{item.trcei.context}</span>
                        </div>
                        <div>
                          <strong className="text-teal-700 font-bold block">[E] Example:</strong>
                          <span className="text-slate-700">{item.trcei.example}</span>
                        </div>
                        <div>
                          <strong className="text-emerald-700 font-bold block">[I] Instruction:</strong>
                          <span className="text-slate-700">{item.trcei.instruction}</span>
                        </div>

                        {/* Pro Tips list */}
                        {item.proTips.length > 0 && (
                          <div className="pt-3 mt-3 border-t border-slate-200">
                            <strong className="text-amber-800 font-bold block mb-1">
                              Tips Desainer Grafis & Rekomendasi Masking:
                            </strong>
                            <ul className="list-disc pl-4 space-y-1 text-slate-700">
                              {item.proTips.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer action bar */}
                {onSelectPromptForBuilder && (
                  <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
                    <button
                      onClick={() => onSelectPromptForBuilder(item)}
                      className="text-xs font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                    >
                      Kustomisasi di Builder &rarr;
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
