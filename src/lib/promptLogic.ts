import type { TRCEIKey, PromptAnalysisResult, PhotoEditingPromptItem, PromptCategory, ToolTag } from '../types/prompt';

/**
 * Evaluates a given prompt text against the 5 pillars of T-R-C-E-I:
 * T = Task (Tugas)
 * R = Role (Peran)
 * C = Context (Konteks)
 * E = Example (Contoh / Referensi)
 * I = Instruction / Constraints (Instruksi / Batasan)
 */
export function analyzePromptTRCEI(text: string): PromptAnalysisResult {
  const cleanText = text.trim();
  if (!cleanText) {
    return {
      score: 0,
      grade: 'Pemula',
      gradeColor: 'text-rose-600',
      detectedCount: 0,
      breakdown: {
        T: { detected: false, confidence: 0, feedback: 'Belum ada Tugas (Task) yang jelas didefinisikan.' },
        R: { detected: false, confidence: 0, feedback: 'Belum menentukan Peran (Role) persona AI.' },
        C: { detected: false, confidence: 0, feedback: 'Belum menyertakan Konteks (Context) audiens atau tujuan.' },
        E: { detected: false, confidence: 0, feedback: 'Belum ada Contoh (Example) atau referensi gaya.' },
        I: { detected: false, confidence: 0, feedback: 'Belum ada Instruksi teknis atau Batasan (Instruction).' },
      },
      actionableTips: [
        'Mulai dengan menentukan Task: Apa tindakan utama yang diinginkan (misal: "Edit background foto produk...")',
        'Beri persona Role AI (misal: "Bertindaklah sebagai Senior Commercial Retoucher...")',
      ],
    };
  }

  const lower = cleanText.toLowerCase();

  // Task Detection regex & keywords (Indonesian & English)
  const taskPatterns = [
    /(?:task|tugas|tujuan utama|goal)\s*[:=-]/i,
    /(?:buatkan|hasilkan|edit|ubah|ganti|hapus|tambahkan|rancang|manipulasi|retouch|generate|create|replace|remove|enhance|compositing)/i,
    /(?:foto produk|banner|key visual|mockup|poster|desain|carousel)/i,
  ];
  const tDetected = taskPatterns.some(p => p.test(cleanText));

  // Role Detection regex & keywords
  const rolePatterns = [
    /(?:role|peran|persona)\s*[:=-]/i,
    /(?:bertindaklah sebagai|kamu adalah|anda adalah|sebagai seorang|jadilah|act as|you are an?|pretend to be)/i,
    /(?:graphic designer|desainer grafis|art director|retoucher|fotografer|photographer|creative director|marketing specialist)/i,
  ];
  const rDetected = rolePatterns.some(p => p.test(cleanText));

  // Context Detection regex & keywords
  const contextPatterns = [
    /(?:context|konteks|latar belakang|background)\s*[:=-]/i,
    /(?:untuk|target|audiens|brand|merek|kampanye|campaign|peluncuran|launching|katalog|instagram|e-commerce|tokopedia|shopee|billboard)/i,
    /(?:konsumen|pasar|industri|kategori produk|segmentasi)/i,
  ];
  const cDetected = contextPatterns.some(p => p.test(cleanText));

  // Example Detection regex & keywords
  const examplePatterns = [
    /(?:example|contoh|referensi|reference|sample)\s*[:=-]/i,
    /(?:seperti|gaya seperti|mirip dengan|in the style of|referensi visual|sebagai referensi|inspirasi dari|kinfolk|vogue|apple aesthetic)/i,
    /(?:format output|contoh format|seperti berikut)/i,
  ];
  const eDetected = examplePatterns.some(p => p.test(cleanText));

  // Instruction Detection regex & keywords
  const instructionPatterns = [
    /(?:instruction|instruksi|aturan|batasan|constraint|negative prompt)\s*[:=-]/i,
    /(?:jangan|hindari|pastikan|wajib|aspek rasio|resolusi|lighting|pencahayaan|depth of field|sharp focus|8k|clean background|tanpa teks|no watermark)/i,
    /(?:--ar|--v|--s|aspect ratio|dimensi|format file)/i,
  ];
  const iDetected = instructionPatterns.some(p => p.test(cleanText));

  const count = [tDetected, rDetected, cDetected, eDetected, iDetected].filter(Boolean).length;
  
  // Word count & depth factor
  const wordCount = cleanText.split(/\s+/).length;
  let score = count * 18; // up to 90
  if (wordCount > 30) score += 5;
  if (wordCount > 60) score += 5;
  if (score > 100) score = 100;
  if (score === 0 && cleanText.length > 5) score = 15;

  let grade: PromptAnalysisResult['grade'] = 'Pemula';
  let gradeColor = 'text-rose-600';
  if (score >= 85) {
    grade = 'Master Prompt TRCEI';
    gradeColor = 'text-emerald-600';
  } else if (score >= 70) {
    grade = 'Mahir';
    gradeColor = 'text-teal-600';
  } else if (score >= 50) {
    grade = 'Kompeten';
    gradeColor = 'text-amber-600';
  } else if (score >= 30) {
    grade = 'Berkembang';
    gradeColor = 'text-orange-600';
  }

  const actionableTips: string[] = [];
  if (!tDetected) {
    actionableTips.push('Tambahkan Tugas (Task) konkret: Sebutkan objek visual spesifik dan output yang diinginkan.');
  }
  if (!rDetected) {
    actionableTips.push('Beri Peran (Role): Misal "Bertindaklah sebagai Senior Commercial Retoucher & Art Director..."');
  }
  if (!cDetected) {
    actionableTips.push('Jelaskan Konteks (Context): Sebutkan platform (misal Instagram Ads, Billboard) dan target audiens.');
  }
  if (!eDetected) {
    actionableTips.push('Sertakan Contoh/Referensi (Example): Sebutkan rujukan estetika fotografi atau format lighting idaman.');
  }
  if (!iDetected) {
    actionableTips.push('Tentukan Batasan & Instruksi (Instruction): Atur rasio aspek, tata cahaya, serta larangan (misal: tanpa blur berlebih, tanpa watermark).');
  }

  if (actionableTips.length === 0) {
    actionableTips.push('Luar biasa! Prompt Anda telah memenuhi kelima pilar T-R-C-E-I secara seimbang dan detail.');
  }

  return {
    score,
    grade,
    gradeColor,
    detectedCount: count,
    breakdown: {
      T: {
        detected: tDetected,
        confidence: tDetected ? 0.9 : 0.1,
        feedback: tDetected
          ? 'Tugas (Task) teridentifikasi: Tindakan manipulasi atau pembuatan visual sudah dinyatakan.'
          : 'Belum ada Task spesifik. Sebutkan aksi utama yang ingin AI kerjakan.',
      },
      R: {
        detected: rDetected,
        confidence: rDetected ? 0.9 : 0.1,
        feedback: rDetected
          ? 'Peran (Role) teridentifikasi: AI diarahkan dengan persona profesional yang tepat.'
          : 'Belum ada Role persona. Definisikan keahlian AI (misal: Master Food Stylist atau Lighting Specialist).',
      },
      C: {
        detected: cDetected,
        confidence: cDetected ? 0.9 : 0.1,
        feedback: cDetected
          ? 'Konteks (Context) teridentifikasi: Informasi audiens, channel, atau brand telah disediakan.'
          : 'Belum ada Konteks. Tambahkan untuk media apa gambar ini digunakan dan siapa target audiensnya.',
      },
      E: {
        detected: eDetected,
        confidence: eDetected ? 0.9 : 0.1,
        feedback: eDetected
          ? 'Contoh (Example) teridentifikasi: Referensi visual atau tolok ukur style tertera.'
          : 'Belum ada Contoh. Sebutkan referensi style (misal: studio Kinfolk, editorial Vogue, atau Apple minimalism).',
      },
      I: {
        detected: iDetected,
        confidence: iDetected ? 0.9 : 0.1,
        feedback: iDetected
          ? 'Instruksi & Batasan (Instruction) teridentifikasi: Parameter teknis dan constraint telah diatur.'
          : 'Belum ada Batasan. Tentukan aspek rasio (--ar), arah lighting, serta hal-hal yang dilarang muncul.',
      },
    },
    actionableTips,
  };
}

/**
 * Builds a structured Indonesian & visual prompt based on user TRCEI inputs.
 */
export function buildTRCEIPrompt(data: {
  task: string;
  role: string;
  context: string;
  example: string;
  instruction: string;
}): { promptIndonesian: string; promptEnglish: string } {
  const { task, role, context, example, instruction } = data;

  const promptIndonesian = `[ROLE]
${role || 'Bertindaklah sebagai Senior Graphic Designer dan Commercial Retoucher profesional.'}

[TASK]
${task || 'Edit dan sempurnakan komposisi visual foto produk ini untuk kebutuhan materi promosi grafis.'}

[CONTEXT]
${context || 'Dibutuhkan untuk materi kampanye pemasaran digital media sosial dan katalog komersial dengan target audiens modern.'}

[EXAMPLE]
${example || 'Gaya pencahayaan bersih layaknya foto studio komersial premium, penataan rapi dengan soft directional light.'}

[INSTRUCTION & BATASAN]
${instruction || 'Resolusi tinggi, ketajaman optik maksimal, rasio aspek 4:5, pertahankan warna asli produk, tanpa teks watermark.'}`;

  const promptEnglish = `${role ? `As a ${role}: ` : 'As a professional commercial art director and retoucher: '}
${task ? `${task}. ` : 'High-end commercial photo edit and visual enhancement. '}
Context: ${context || 'Commercial marketing campaign'}. 
Visual style reference: ${example || 'Clean minimalist studio aesthetics, soft diffused lighting'}. 
Specifications & Constraints: ${instruction || 'High resolution, 8k, sharp focus, master color grading, no text, no watermark, perfectly balanced exposure'}.`;

  return {
    promptIndonesian,
    promptEnglish: promptEnglish.trim(),
  };
}

/**
 * Filters the prompt library by category, search term, and tool
 */
export function filterPrompts(
  items: PhotoEditingPromptItem[],
  query: string,
  category: PromptCategory,
  tool: ToolTag
): PhotoEditingPromptItem[] {
  const q = query.trim().toLowerCase();

  return items.filter(item => {
    // Category match
    if (category !== 'all' && item.category !== category) {
      return false;
    }

    // Tool match
    if (tool !== 'Semua Tools' && item.targetTool !== tool) {
      return false;
    }

    // Search query match
    if (q) {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSummary = item.summary.toLowerCase().includes(q);
      const matchPrompt = item.promptIndonesian.toLowerCase().includes(q);
      const matchEnPrompt = item.promptEnglish.toLowerCase().includes(q);
      const matchTips = item.proTips.some(tip => tip.toLowerCase().includes(q));
      if (!matchTitle && !matchSummary && !matchPrompt && !matchEnPrompt && !matchTips) {
        return false;
      }
    }

    return true;
  });
}
