import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzePromptTRCEI, buildTRCEIPrompt, filterPrompts } from './promptLogic.ts';
import type { PhotoEditingPromptItem } from '../types/prompt.ts';

test('analyzePromptTRCEI handles empty text gracefully', () => {
  const result = analyzePromptTRCEI('');
  assert.equal(result.score, 0);
  assert.equal(result.grade, 'Pemula');
  assert.equal(result.detectedCount, 0);
  assert.equal(result.breakdown.T.detected, false);
});

test('analyzePromptTRCEI detects all 5 pillars in a comprehensive prompt', () => {
  const samplePrompt = `
    Bertindaklah sebagai Senior Graphic Designer.
    Tugas: Edit foto produk botol parfum ini dengan mengganti latar belakangnya.
    Konteks: Untuk kampanye peluncuran brand di Instagram dan marketplace e-commerce.
    Contoh: Gaya visual minimalis seperti iklan editorial majalah Vogue.
    Instruksi: Rasio aspek 4:5, pencahayaan softbox 45 derajat, jangan ada teks dan watermark.
  `;

  const result = analyzePromptTRCEI(samplePrompt);
  assert.equal(result.breakdown.T.detected, true);
  assert.equal(result.breakdown.R.detected, true);
  assert.equal(result.breakdown.C.detected, true);
  assert.equal(result.breakdown.E.detected, true);
  assert.equal(result.breakdown.I.detected, true);
  assert.equal(result.detectedCount, 5);
  assert.ok(result.score >= 85);
  assert.equal(result.grade, 'Master Prompt TRCEI');
});

test('analyzePromptTRCEI provides targeted suggestions when pillars are missing', () => {
  const weakPrompt = 'Tolong buatkan gambar sepatu merah.';
  const result = analyzePromptTRCEI(weakPrompt);
  
  assert.equal(result.breakdown.T.detected, true); // "buatkan" is a task
  assert.equal(result.breakdown.R.detected, false); // no role
  assert.ok(result.actionableTips.some(tip => tip.includes('Peran (Role)')));
  assert.ok(result.score < 60);
});

test('buildTRCEIPrompt constructs structured prompt with Indonesian and English sections', () => {
  const input = {
    role: 'Art Director',
    task: 'Edit pencahayaan produk',
    context: 'Instagram Story Ads',
    example: 'Gaya sinematik golden hour',
    instruction: 'Tanpa watermark, rasio 9:16',
  };

  const output = buildTRCEIPrompt(input);
  assert.ok(output.promptIndonesian.includes('[ROLE]'));
  assert.ok(output.promptIndonesian.includes('Art Director'));
  assert.ok(output.promptIndonesian.includes('[TASK]'));
  assert.ok(output.promptEnglish.includes('Instagram Story Ads'));
});

test('filterPrompts correctly filters by category, tool, and query', () => {
  const mockItems: PhotoEditingPromptItem[] = [
    {
      id: 'item-1',
      title: 'Studio Packshot Skincare',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce & Produk',
      targetTool: 'Photoshop Generative Fill',
      summary: 'Ganti latar belakang produk kosmetik dengan travertine',
      promptIndonesian: 'Ganti latar belakang dengan travertine stone',
      promptEnglish: 'Replace background with travertine stone block',
      techSpecs: {
        aspectRatio: '1:1',
        lighting: 'Studio Softbox',
        cameraLens: '85mm macro',
        colorProfile: 'sRGB',
      },
      proTips: ['Gunakan Feather 2px pada seleksi'],
    },
    {
      id: 'item-2',
      title: 'Key Visual Billboard Creative',
      category: 'branding_kv',
      categoryLabel: 'Key Visual Branding',
      targetTool: 'Midjourney v6',
      summary: 'Portrait eksekutif untuk kampanye luar ruang',
      promptIndonesian: 'Compositing foto portrait corporate modern',
      promptEnglish: 'Editorial corporate portrait outdoors',
      techSpecs: {
        aspectRatio: '16:9',
        lighting: 'Golden Hour Rim',
        cameraLens: '50mm f/1.4',
        colorProfile: 'Display P3',
      },
      proTips: ['Pastikan kontras teks terjaga di area gelap'],
    },
  ];

  // Category filter
  const ecommerceOnly = filterPrompts(mockItems, '', 'ecommerce', 'Semua Tools');
  assert.equal(ecommerceOnly.length, 1);
  assert.equal(ecommerceOnly[0].id, 'item-1');

  // Search filter
  const searchResult = filterPrompts(mockItems, 'billboard', 'all', 'Semua Tools');
  assert.equal(searchResult.length, 1);
  assert.equal(searchResult[0].id, 'item-2');

  // Tool filter
  const toolResult = filterPrompts(mockItems, '', 'all', 'Midjourney v6');
  assert.equal(toolResult.length, 1);
  assert.equal(toolResult[0].id, 'item-2');
});

test('filterPrompts correctly filters newly added categories (pose, perspective, wardrobe)', () => {
  const newItems: PhotoEditingPromptItem[] = [
    {
      id: 'pose-1',
      title: 'Pose Transfer Test',
      category: 'pose_transfer',
      categoryLabel: 'Transfer & Ubah Pose',
      targetTool: 'Midjourney v6',
      summary: 'Transfer pose referensi',
      promptIndonesian: 'Ubah pose model',
      promptEnglish: 'Change model pose',
      techSpecs: { aspectRatio: '4:3', lighting: 'Soft', cameraLens: '50mm', colorProfile: 'sRGB' },
      proTips: []
    },
    {
      id: 'persp-1',
      title: 'Low Angle Test',
      category: 'multi_perspective',
      categoryLabel: 'Sudut & Perspektif Kamera',
      targetTool: 'Universal Visual AI',
      summary: 'Low angle shot',
      promptIndonesian: 'Perspektif sudut rendah',
      promptEnglish: 'Low angle perspective',
      techSpecs: { aspectRatio: '4:3', lighting: 'Sun', cameraLens: '24mm', colorProfile: 'sRGB' },
      proTips: []
    },
    {
      id: 'ward-1',
      title: 'Wardrobe Swap Test',
      category: 'wardrobe_swap',
      categoryLabel: 'Ganti Busana (Kunci Wajah)',
      targetTool: 'Photoshop Generative Fill',
      summary: 'Ganti blazer bisnis',
      promptIndonesian: 'Ganti baju dengan blazer',
      promptEnglish: 'Replace casual clothes with blazer',
      techSpecs: { aspectRatio: '4:5', lighting: 'Studio', cameraLens: '85mm', colorProfile: 'sRGB' },
      proTips: []
    }
  ];

  const poseResults = filterPrompts(newItems, '', 'pose_transfer', 'Semua Tools');
  assert.equal(poseResults.length, 1);
  assert.equal(poseResults[0].id, 'pose-1');

  const perspResults = filterPrompts(newItems, '', 'multi_perspective', 'Semua Tools');
  assert.equal(perspResults.length, 1);
  assert.equal(perspResults[0].id, 'persp-1');

  const wardResults = filterPrompts(newItems, '', 'wardrobe_swap', 'Semua Tools');
  assert.equal(wardResults.length, 1);
  assert.equal(wardResults[0].id, 'ward-1');
});
