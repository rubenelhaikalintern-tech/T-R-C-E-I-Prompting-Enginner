import type { TRCEIPillar } from '../types/prompt';

export const TRCEI_PILLARS: TRCEIPillar[] = [
  {
    key: 'T',
    letter: 'T',
    name: 'Task',
    indonesianName: 'Tugas Pokok',
    tagline: 'Perintah tindakan konkret & spesifik yang ingin dicapai',
    description: 'Task adalah inti perintah. AI membutuhkan kejelasan tindakan presisi: apakah mengedit latar belakang, melakukan color grading, memperluas kanvas (outpainting), atau menyusun key visual.',
    whyItMatters: 'Tanpa Task yang tegas, AI akan berasumsi bebas atau menghasilkan gambar umum tanpa fokus yang dapat digunakan untuk layout desainer.',
    triggerPhrases: [
      'Ganti latar belakang foto produk ini dengan...',
      'Lakukan perluasan kanvas (generative expand/outpainting) di sisi kiri dan kanan...',
      'Hapus elemen yang mengganggu dan gantikan dengan bayangan realistis...',
      'Lakukan color grading sinematik warm golden hour pada foto model...',
      'Rancang komposisi key visual untuk kampanye billboard...'
    ],
    graphicDesignApplication: 'Dalam desain grafis, Task menentukan tindakan layer: seleksi mask, generative fill, penyesuaian kurva warna, isolasi objek, atau penambahan ruang kosong (negative space) untuk tipografi.',
    badExample: 'Tolong buatkan foto produk ini jadi lebih bagus dan estetik.',
    goodExample: 'Ganti latar belakang foto botol parfum kaca ini dengan podium marmer putih travertine di atas genangan air dangkal yang tenang, dengan pantulan lembut dan cipratan mikro di samping kanan.',
    checklistPrompt: 'Apakah Anda sudah menuliskan kata kerja tindakan visual yang konkret dan objek utama yang ingin dimanipulasi?'
  },
  {
    key: 'R',
    letter: 'R',
    name: 'Role',
    indonesianName: 'Peran & Persona',
    tagline: 'Identitas profesional & keahlian yang diadopsi AI',
    description: 'Role memberikan kerangka berpikir teknis kepada model AI. Dengan menginstruksikan peran tertentu, AI otomatis mengaktifkan parameter kosakata industri desain, fotografi komersial, dan standar agensi.',
    whyItMatters: 'Mengubah output dari sekadar "gambar AI biasa" menjadi visual dengan pencahayaan studio terukur, komposisi rule-of-thirds, dan proporsi komersial.',
    triggerPhrases: [
      'Bertindaklah sebagai Senior Commercial Retoucher dan Lighting Specialist...',
      'Kamu adalah Art Director untuk kampanye periklanan FMCG global...',
      'Sebagai Food Stylist dan Fotografer Kuliner profesional...',
      'Bertindaklah sebagai Lead Creative Designer spesialis E-Commerce Advertising...'
    ],
    graphicDesignApplication: 'Memberi tahu AI perspektif estetika: apakah foto harus mengikuti standar komersial high-end (retouch kulit natural bertekstur, bukan wax/plastik) atau gaya editorial eksperimental.',
    badExample: 'Kamu adalah bot pembuat gambar.',
    goodExample: 'Bertindaklah sebagai Senior Commercial Retoucher & Fashion Art Director berpengalaman di majalah mode internasional ternama.',
    checklistPrompt: 'Apakah Anda telah menyematkan persona keahlian (misal Art Director, Commercial Retoucher, atau Food Stylist)?'
  },
  {
    key: 'C',
    letter: 'C',
    name: 'Context',
    indonesianName: 'Konteks & Sasaran',
    tagline: 'Latar belakang brand, target audiens, dan channel distribusi',
    description: 'Konteks menjelaskan "mengapa" dan "untuk siapa" visual ini dibuat. Mencakup identitas merek (luxury, casual, playful, eco-friendly), medium publikasi (Instagram Feed, TikTok thumbnail, Billboard), dan target konsumen.',
    whyItMatters: 'Mencegah ketidaksesuaian suasana (tonal mismatch). Tanpa konteks, visual produk kecantikan organik bisa tampak seperti poster film sci-fi atau iklan gaming.',
    triggerPhrases: [
      'Visual ini untuk kampanye peluncuran produk perawatan kulit organik di Instagram...',
      'Target audiens adalah generasi Z pekerja kantoran di kota metropolitan yang menyukai kesederhanaan elegan...',
      'Brand ini memiliki identitas minimalis, ramah lingkungan, dengan palet warna earthy tones...',
      'Akan dicetak untuk materi promosi POP (Point of Purchase) di gerai ritel modern...'
    ],
    graphicDesignApplication: 'Menentukan moodboard warna, pencahayaan, serta kesiapan visual untuk menerima teks penawaran (copywriting) pemasaran.',
    badExample: 'Buat untuk promosi jualan di internet.',
    goodExample: 'Materi visual ini diperuntukkan bagi kampanye digital Instagram Ads & Tokopedia Official Store merk kecantikan ramah lingkungan. Target audiens adalah wanita urban usia 22–35 tahun yang mengutamakan bahan natural dengan tone brand tenang (serene earthy minimalism).',
    checklistPrompt: 'Apakah brand tone, target konsumen, dan channel penayangan (Instagram, Billboard, E-commerce) sudah disebutkan?'
  },
  {
    key: 'E',
    letter: 'E',
    name: 'Example',
    indonesianName: 'Contoh & Acuan Gaya',
    tagline: 'Referensi visual, acuan estetika, atau format output',
    description: 'Example memberikan jangkar (visual anchor) konkret. Dapat berupa referensi brand ternama, genre fotografi (Editorial Leica 35mm, Studio Packshot Apple, Kinfolk Magazine), atau struktur output yang diinginkan.',
    whyItMatters: 'Kata-kata abstrak seperti "modern" atau "elegan" memiliki seribu arti bagi AI. Menyebutkan referensi gaya konkret menghilangkan bias interpretasi.',
    triggerPhrases: [
      'Gaya visual mengacu pada fotografi editorial majalah Kinfolk...',
      'Komposisi pencahayaan bersih minimalis layaknya kampanye peluncuran produk Apple...',
      'Format output terstruktur: [Deskripsi Visual Utama] / [Pencahayaan] / [Negative Elements]...',
      'Mengacu pada gaya visual fashion lookbook streetwear kontemporer Jepang...'
    ],
    graphicDesignApplication: 'Memastikan konsistensi gaya (style consistency) dalam satu serial kampanye marcomm atau multi-slide carousel.',
    badExample: 'Buat yang estetik dan kekinian.',
    goodExample: 'Referensi gaya visual: Fotografi editorial produk mewah seperti kampanye Aesop atau majalah Cereal. Latar belakang memiliki tekstur dinding semen halus (micro-cement), palet warna krem netral dan zaitun redup, dengan 40% ruang negatif di sisi kiri.',
    checklistPrompt: 'Apakah Anda telah mencantumkan referensi brand ternama, fotografer acuan, atau gaya majalah tertentu?'
  },
  {
    key: 'I',
    letter: 'I',
    name: 'Instruction',
    indonesianName: 'Instruksi & Batasan (Constraints)',
    tagline: 'Parameter teknis, rasio dimensi, dan larangan mutlak',
    description: 'Instruction mengatur batasan teknis (Do’s and Don’ts). Termasuk aspek rasio (--ar 4:5, 16:9), teknik pencahayaan (softbox 45°, rim light, golden hour), sudut kamera (eye-level, flat lay, low angle), dan Negative Prompt.',
    whyItMatters: 'Instruksi teknis adalah penentu kelayakan desain. Menjamin gambar tidak terpotong saat dipasang di template grafis dan terbebas dari artefak cacat AI.',
    triggerPhrases: [
      'Aspek rasio wajib 4:5 (vertikal portrait untuk Instagram Feed)...',
      'Pencahayaan: Key light softbox dari kiri atas, fill light lembut, backlight rim lembut...',
      'Kedalaman ruang f/2.8 dengan fokus mikro super tajam pada logo kemasan...',
      'Batasan / Negative Prompt: JANGAN tambahkan teks, logo palsu, tangan manusia melayang, atau warna terlalu jenuh...'
    ],
    graphicDesignApplication: 'Memberikan ruang aman bagi tipografi desainer (negative space reservation), menjaga saturasi warna agar tetap dalam gamut cetak (CMYK-ready) atau tampilan layar OLED yang nyaman.',
    badExample: 'Resolusi bagus dan gambar jangan jelek.',
    goodExample: 'Instruksi teknis: Rasio aspek 4:5 vertikal, depth of field f/2.8 dengan fokus super tajam pada label botol, pencahayaan diffuse window light alami dari arah jam 10. Batasan ketat: Dilarang menyisipkan teks atau watermark, jangan ada distorsi pada bentuk kemasan, hindari warna neon atau kontras berlebihan.',
    checklistPrompt: 'Apakah aspek rasio, arah lighting, fokus lensa, dan elemen terlarang (negative prompt) sudah ditentukan?'
  }
];
