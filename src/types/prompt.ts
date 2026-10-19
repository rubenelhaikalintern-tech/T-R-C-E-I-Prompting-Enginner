export type TRCEIKey = 'T' | 'R' | 'C' | 'E' | 'I';

export interface TRCEIPillar {
  key: TRCEIKey;
  letter: string;
  name: string;
  indonesianName: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  triggerPhrases: string[];
  graphicDesignApplication: string;
  badExample: string;
  goodExample: string;
  checklistPrompt: string;
}

export type PromptCategory = 
  | 'all'
  | 'ecommerce'
  | 'social_ads'
  | 'branding_kv'
  | 'manipulation'
  | 'retouch_grading'
  | 'pose_transfer'
  | 'multi_perspective'
  | 'wardrobe_swap';

export type ToolTag = 
  | 'Semua Tools'
  | 'Photoshop Generative Fill'
  | 'Midjourney v6'
  | 'Adobe Firefly'
  | 'Stable Diffusion'
  | 'Universal Visual AI';

export interface PhotoEditingPromptItem {
  id: string;
  title: string;
  category: Exclude<PromptCategory, 'all'>;
  categoryLabel: string;
  targetTool: ToolTag;
  summary: string;
  image?: string;
  trcei: {
    task: string;
    role: string;
    context: string;
    example: string;
    instruction: string;
  };
  promptIndonesian: string;
  promptEnglish: string;
  negativePrompt?: string;
  techSpecs: {
    aspectRatio: string;
    lighting: string;
    cameraLens: string;
    colorProfile: string;
  };
  proTips: string[];
}

export interface AnalysisElementResult {
  detected: boolean;
  confidence: number;
  snippet?: string;
  feedback: string;
}

export interface PromptAnalysisResult {
  score: number;
  grade: 'Pemula' | 'Berkembang' | 'Kompeten' | 'Mahir' | 'Master Prompt TRCEI';
  gradeColor: string;
  breakdown: Record<TRCEIKey, AnalysisElementResult>;
  detectedCount: number;
  actionableTips: string[];
}
