import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TRCEIGuideSection } from './components/TRCEIGuideSection';
import { PhotoPromptCatalog } from './components/PhotoPromptCatalog';
import { PromptBuilder } from './components/PromptBuilder';
import { PromptGrader } from './components/PromptGrader';
import { GlossarySection } from './components/GlossarySection';
import { CheatSheetModal } from './components/CheatSheetModal';
import { Footer } from './components/Footer';
import type { TRCEIKey, PhotoEditingPromptItem } from './types/prompt';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [builderData, setBuilderData] = useState<{
    task?: string;
    role?: string;
    context?: string;
    example?: string;
    instruction?: string;
  } | undefined>(undefined);
  const [graderPrompt, setGraderPrompt] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    if (sectionId === 'beranda') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleUsePillarInBuilder = (pillar: TRCEIKey, phrase: string) => {
    const keyMap: Record<TRCEIKey, 'task' | 'role' | 'context' | 'example' | 'instruction'> = {
      T: 'task',
      R: 'role',
      C: 'context',
      E: 'example',
      I: 'instruction',
    };
    const field = keyMap[pillar];
    setBuilderData(prev => ({
      ...prev,
      [field]: phrase,
    }));
    scrollToSection('builder-interaktif');
  };

  const handleSelectPromptForBuilder = (item: PhotoEditingPromptItem) => {
    setBuilderData({
      task: item.trcei.task,
      role: item.trcei.role,
      context: item.trcei.context,
      example: item.trcei.example,
      instruction: item.trcei.instruction,
    });
    scrollToSection('builder-interaktif');
  };

  const handleSendToGrader = (promptText: string) => {
    setGraderPrompt(promptText);
    scrollToSection('uji-prompt');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Bar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={scrollToSection}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreGuide={() => scrollToSection('panduan-trcei')}
          onExplorePrompts={() => scrollToSection('pustaka-prompt')}
          onOpenBuilder={() => scrollToSection('builder-interaktif')}
        />

        {/* 1. Prinsip T-R-C-E-I Guide */}
        <TRCEIGuideSection onUseInBuilder={handleUsePillarInBuilder} />

        {/* 2. Photo-Editing Prompt Library for Graphic Design & Marcomm */}
        <PhotoPromptCatalog onSelectPromptForBuilder={handleSelectPromptForBuilder} />

        {/* 3. Interactive T-R-C-E-I Prompt Builder */}
        <PromptBuilder
          key={JSON.stringify(builderData)}
          initialData={builderData}
          onSendToGrader={handleSendToGrader}
        />

        {/* 4. T-R-C-E-I Prompt Grader / Analyzer */}
        <PromptGrader
          key={graderPrompt}
          initialPrompt={graderPrompt}
          onJumpToBuilder={() => scrollToSection('builder-interaktif')}
        />

        {/* 5. Glossary of Terms */}
        <GlossarySection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
      />

      {/* Modal Cheat Sheet */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
