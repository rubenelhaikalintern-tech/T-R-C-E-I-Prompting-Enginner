import type { PhotoEditingPromptItem } from '../types/prompt';

export const PHOTO_PROMPTS: PhotoEditingPromptItem[] = [
  {
    id: 'prompt-skincare-travertine',
    title: 'Studio Packshot Skincare Botanical pada Batu Travertine',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Produk',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Penggantian latar belakang foto botol serum kosmetik menjadi podium batu travertine elegan dengan bayangan daun eukaliptus lembut dan tetesan air mikro.',
    image: '/src/assets/images/product_commercial_mockup_1792408605298.jpg',
    trcei: {
      task: 'Ganti latar belakang foto botol serum amber kaca ini dengan podium balok batu travertine bertekstur alami, genangan tetesan air kristal bening, dan bayangan daun botanikal lembut di dinding belakang.',
      role: 'Bertindaklah sebagai Senior Commercial Product Photographer dan Digital Retoucher untuk brand kecantikan luxury.',
      context: 'Materi foto katalog produk utama untuk Tokopedia Official Store, Shopee Mall, dan website landing page. Target audiens wanita urban 20-35 tahun pencinta skincare organik ramah lingkungan.',
      example: 'Gaya pencahayaan bersih studio Skandinavia seperti iklan editorial Aesop atau majalah Kinfolk, dengan komposisi ruang bernapas (negative space) seimbang.',
      instruction: 'Pencahayaan softbox 45 derajat arah jam 10 pagi, bayangan jatuh lembut realistis di bawah balok batu (contact shadow), pantulan botol natural pada permukaan, tanpa teks, tanpa distorsi label asli botol.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Commercial Retoucher dan Fotografer Produk Kosmetik Mewah.

[TASK]
Ganti latar belakang botol serum amber kaca ini dengan podium batu travertine berpori krem natural, dengan permukaan atas terdapat beberapa bulir tetesan air segar bening, serta bayangan siluet daun eukaliptus halus yang jatuh lembut di dinding belakang berwarna krem hangat.

[CONTEXT]
Materi visual foto katalog produk unggulan untuk toko resmi e-commerce dan website komersial. Brand berorientasi pada kemewahan alami, bahan organik bersertifikat, dan estetika tenang.

[EXAMPLE]
Mengacu pada gaya visual kampanye editorial kecantikan Aesop dan majalah Cereal; pencahayaan alami difus, warna netral bersahaja (earthy cream), dan kontras lembut.

[INSTRUCTION & BATASAN]
- Buat bayangan kontak (ambient occlusion) yang sangat realistis di dasar botol dan balok batu.
- Pertahankan keutuhan dan ketajaman teks label botol asli 100%.
- Hindari latar belakang putih hampa biasa atau warna neon yang mencolok.
- Rasio aspek 1:1 untuk feed marketplace / 4:5 untuk mobile store.`,
    promptEnglish: `Commercial studio product photography of an amber glass dropper bottle placed on a textured warm cream travertine stone block pedestal, tiny crisp water droplets on stone surface, soft delicate eucalyptus leaf shadows falling on warm beige wall behind, diffused 45-degree morning sunlight, shallow depth of field, 8k commercial packshot finish --ar 1:1 --no text, blurry label, fake reflections`,
    negativePrompt: 'blurry label, distorted bottle geometry, neon saturated colors, plastic looking stone, artificial harsh shadows, watermark',
    techSpecs: {
      aspectRatio: '1:1 atau 4:5',
      lighting: 'Diffused Morning Sunlight (Softbox 45° Key Light)',
      cameraLens: '85mm f/4 Macro Lens (Pin-sharp bottle)',
      colorProfile: 'sRGB / Display P3'
    },
    proTips: [
      'Di Photoshop Generative Fill: Seleksi latar belakang di luar botol dengan feather 1.5px agar transisi tepi kaca tetap tajam namun menyatu alami.',
      'Tambahkan layer Curves di atas botol untuk menyamakan suhu warna (color temperature) botol dengan bayangan travertine baru.'
    ]
  },
  {
    id: 'prompt-corporate-kv',
    title: 'Key Visual Kampanye Eksekutif & Komunikasi Kepemimpinan',
    category: 'branding_kv',
    categoryLabel: 'Key Visual Branding',
    targetTool: 'Midjourney v6',
    summary: 'Compositing foto portrait pemimpin bisnis modern berlatar arsitektur gedung kontemporer dengan pencahayaan golden hour hangat dan ruang negatif luas untuk headline iklan.',
    image: '/src/assets/images/brand_campaign_visual_1792408604877.jpg',
    trcei: {
      task: 'Rancang foto portrait editorial profesional dari seorang pemimpin kreatif wanita dengan pakaian blazer arang modern di depan arsitektur beton dan kaca minimalis saat golden hour.',
      role: 'Kamu adalah Art Director agensi periklanan global spesialis kampanye brand korporat dan teknologi kelas dunia.',
      context: 'Materi Key Visual (KV) utama untuk billboard outdoor, laporan tahunan investor (annual report), dan spanduk LinkedIn Ads kampanye Thought Leadership.',
      example: 'Gaya fotografi editorial majalah Forbes atau Bloomberg Businessweek, menggunakan estetika optik Leica 35mm dengan warna kulit natural.',
      instruction: 'Sudut eye-level seimbang, rasio 4:3 / 16:9, sediakan 40% ruang kosong di sisi samping untuk penempatan logo dan headline korporat, tekstur kulit natural tanpa efek plastik.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Art Director & Fotografer Editorial Korporat Tingkat Internasional.

[TASK]
Ciptakan foto portrait editorial dari seorang wanita profesional kreatif dan percaya diri, mengenakan blazer formal modern warna arang, berdiri di area outdoor depan arsitektur beton dan kaca bergaris bersih, dengan cahaya matahari terbenam (golden hour) memberikan rim light keemasan halus pada rambut dan bahunya.

[CONTEXT]
Materi Key Visual kampanye rebranding perusahaan teknologi dan komunikasi kepemimpinan eksekutif untuk billboard jalan protokol, situs web perusahaan, dan publikasi media bisnis.

[EXAMPLE]
Estetika fotografi dokumenter editorial modern seperti majalah Monocle atau The Financial Times; palet warna tenang, gradasi kontras tinggi berkelas, dan tekstur organik.

[INSTRUCTION & BATASAN]
- Tekstur kulit harus tampak manusiawi dan alami (natural skin pores, no artificial wax smoothing).
- Komposisi menyisakan ruang kosong negatif di sekeliling subjek agar mudah dipadukan dengan tipografi judul iklan.
- Pencahayaan hangat 3200K rim light dengan pengisi cahaya lembut pada wajah.
- Dilarang menambahkan elemen logo palsu, teks mengapung, atau distorsi anatomi tangan.`,
    promptEnglish: `Cinematic marketing communication editorial portrait of a confident creative professional woman outdoors against minimalist modern concrete and glass architecture, golden hour warm rim light, natural skin tones with visible texture, Leica 35mm photography aesthetic, clean balanced composition with negative space for typography --ar 4:3 --style raw --v 6.0`,
    negativePrompt: 'airbrushed skin, plastic wax doll face, deformed hands, distorted building lines, blurry eyes, text, watermark',
    techSpecs: {
      aspectRatio: '4:3 (Editorial) / 16:9 (Billboard KV)',
      lighting: 'Golden Hour Natural Sun (Warm Backlight Rim + Reflector Fill)',
      cameraLens: 'Leica Summilux 35mm f/1.4',
      colorProfile: 'ProPhoto RGB / Adobe RGB'
    },
    proTips: [
      'Gunakan teknik Rule of Thirds dengan menempatkan mata subjek di sepertiga garis atas frame.',
      'Sediakan negative space di sebelah kanan untuk memudahkan tim copywriter menaruh slogan kampanye marcomm.'
    ]
  },
  {
    id: 'prompt-generative-workspace',
    title: 'Visual Ruang Kerja Desainer Grafis & Studio Kreatif',
    category: 'branding_kv',
    categoryLabel: 'Key Visual Branding',
    targetTool: 'Universal Visual AI',
    summary: 'Visual studio desain grafis modern dengan desainer wanita sedang mengolah prompt AI dan retouching foto pada dual-monitor profesional dengan pencahayaan hangat alami.',
    image: '/src/assets/images/hero_prompt_studio_1792408605204.jpg',
    trcei: {
      task: 'Ciptakan pemandangan studio desain grafis kontemporer berestetika tinggi, menampilkan desainer profesional di meja kayu bersih dengan dua monitor berlayar besar yang memperlihatkan alur kerja compositing foto dan rekayasa prompt visual.',
      role: 'Sebagai Senior Art Director & Visual Storyteller studio agensi kreatif inovatif.',
      context: 'Materi komunikasi pemasaran untuk workshop desain grafis berbasis AI, kursus masterclass agensi, dan banner promosi program sertifikasi industri kreatif.',
      example: 'Nuansa interior arsitektural minimalis Skandinavia dengan jendela kaca pabrik loft industri, tanaman hias sukulen, dan pencahayaan lampu meja arsitek yang hangat.',
      instruction: 'Sudut pandang sinematik three-quarter, ketajaman detail meja dan monitor, pencahayaan kombinasi cahaya jendela pagi dan lampu baca hangat, tanpa teks sembarangan di dinding.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Visual Storyteller dan Art Director Industri Kreatif.

[TASK]
Rancang visual ruang studio desain grafis modern yang inspiratif: seorang desainer sedang fokus bekerja di meja kayu bersih menggunakan pen tablet grafis, dengan dua monitor profesional menampilkan antarmuka perangkat lunak manipulasi foto dan sketsa ide visual kreatif.

[CONTEXT]
Materi promosi utama untuk akademi desain komunikasi visual, landing page pelatihan rekayasa prompt AI untuk agensi kreatif, dan konten edukasi media sosial.

[EXAMPLE]
Estetika studio kerja modern ala agensi desain ternama di London/Tokyo; perpaduan dinding beton ekspos bersih, rak buku inspirasi, tanaman hijau asri, dan lampu aksen hangat 2700K.

[INSTRUCTION & BATASAN]
- Komposisi sinematik 16:9 yang luas dan seimbang.
- Suasana kerja terasa autentik, rapi, dan mencerminkan profesionalisme tinggi.
- Hindari efek fiksi ilmiah berlebihan atau sinar laser neon fiktif; pertahankan atmosfer studio nyata.`,
    promptEnglish: `Modern aesthetic creative graphic design workspace with designer monitors displaying photo editing layers and prompt engineering concepts, clean architectural desk, soft diffused natural daylight mixed with warm ambient studio lighting, elegant minimalist aesthetic, cinematic depth of field, high resolution editorial photograph --ar 16:9 --v 6.0`,
    negativePrompt: 'chaotic messy wires, cartoon rendering, sci-fi neon holograms, fake floating screens, distorted limbs',
    techSpecs: {
      aspectRatio: '16:9 Landscape',
      lighting: 'Ambient North Window Light + Warm Task Lamp',
      cameraLens: '50mm f/1.8 Architectural Framing',
      colorProfile: 'Display P3'
    },
    proTips: [
      'Cocok dijadikan background header landing page atau backdrop webinar kreatif marcomm.',
      'Gunakan gradient overlay lembut di atas visual saat menambahkan teks judul agar keterbacaan (contrast ratio) tetap optimal.'
    ]
  },
  {
    id: 'prompt-sneakers-floating-shadow',
    title: 'Sepatu Sneakers Komersial dengan Bayangan Kontak Realistis',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Produk',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Menempatkan produk sepatu kets streetwear di atas lantai beton industri dengan bayangan dinamis realistis dan partikel debu mikro untuk kesan energik.',
    trcei: {
      task: 'Gantikan latar belakang foto sepatu sneakers dengan permukaan lantai beton industri polished dengan bayangan kontak yang tajam di bawah sol dan pantulan samar air di kejauhan.',
      role: 'Bertindaklah sebagai Commercial Footwear Retoucher berpengalaman menangani brand olahraga dunia.',
      context: 'Banner promosi rilis produk sepatu edisi terbatas di aplikasi mobile marketplace dan iklan bersponsor Meta Ads.',
      example: 'Gaya visual kampanye Nike SNKRS atau Adidas Originals; sudut kamera dinamis sedikit low-angle dengan tekstur sol karet yang sangat tajam.',
      instruction: 'Pastikan bayangan jatuh ke arah kanan bawah sesuai sumber cahaya utama, jangan ubah warna kain dan logo sepatu, tanpa flare lensa berlebih.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Commercial Retoucher Footwear & Streetwear Campaign.

[TASK]
Gantikan latar belakang produk sepatu sneakers ini dengan permukaan lantai semen beton industri abu-abu halus (polished concrete floor), dengan bayangan kontak gelap presisi di bawah sol sepatu serta sedikit pantulan kilau tipis di permukaan lantai.

[CONTEXT]
Foto materi iklan e-commerce dan carousel Meta Ads untuk peluncuran sepatu streetwear terbaru dengan target audiens pria dan wanita usia 18-30 tahun.

[EXAMPLE]
Gaya fotografi komersial studio Nike Tech / Hypebeast lookbook: ketajaman tekstur material jala (mesh) dan jahitan sepatu tetap prima, dengan kontras terarah.

[INSTRUCTION & BATASAN]
- Buat gradasi bayangan: sangat pekat tepat di bawah titik sentuh sepatu (ambient occlusion) dan memudar halus ke arah luar.
- Jangan ada distorsi pada bentuk siluet asli sepatu.
- Rasio aspek 4:5 vertikal untuk mobile ads.`,
    promptEnglish: `Commercial footwear studio photography of sneakers isolated on clean polished industrial concrete floor, realistic directional contact shadow beneath rubber sole, subtle floor reflections, high contrast studio lighting from upper left, razor sharp texture on fabric stitching, 8k commercial quality --ar 4:5`,
    negativePrompt: 'floating shoe without shadow, fake looking reflection, distorted laces, clipped sole, washed out contrast',
    techSpecs: {
      aspectRatio: '4:5 (Instagram Feed & Mobile Ads)',
      lighting: 'High-contrast Studio Rim + Key Light 60° Left',
      cameraLens: '50mm Macro Prime',
      colorProfile: 'sRGB'
    },
    proTips: [
      'Di Photoshop AI: Gunakan kuas seleksi hanya pada area lantai di bawah sepatu, masukkan prompt "polished concrete ground with realistic contact shadow".',
      'Kunci realisme ada pada bayangan: buat bayangan memiliki 2 lapis (lapis inti gelap di bawah sol, dan lapis difus yang menyebar).'
    ]
  },
  {
    id: 'prompt-carousel-visual-hook',
    title: 'Visual Hook Carousel Media Sosial: Kontras & Elemen Melayang',
    category: 'social_ads',
    categoryLabel: 'Materi Iklan Digital',
    targetTool: 'Midjourney v6',
    summary: 'Desain visual slide pertama Instagram Carousel yang menghentikan scroll (scroll-stopper hook) dengan komposisi dramatis produk dan bahan baku natural mengapung.',
    trcei: {
      task: 'Ciptakan visual dramatis produk minuman botol cold brew coffee yang dikelilingi biji kopi panggang dan pecahan es batu yang melayang secara artistik (levitating dynamic freeze-action).',
      role: 'Sebagai Art Director Creative Advertising khusus Social Media Conversion & Content Strategy.',
      context: 'Slide 1 Instagram Carousel untuk campaign "Bangunkan Energimu": tujuan utama menghentikan jempol audiens (high scroll-stop rate).',
      example: 'Gaya visual periklanan beverage dynamic action seperti kampanye Starbucks Reserve atau Red Bull Creative Lab.',
      instruction: 'Kecepatan rana beku (high-speed freeze frame 1/8000s), tetesan kondensasi dingin pada botol kaca, pencahayaan dramatis tepi (rim light) keemasan, rasio 4:5.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Creative Art Director Spesialis Media Sosial dan Fotografer High-Speed Beverage.

[TASK]
Hasilkan visual hook berenergi tinggi: botol kaca kopi cold brew premium berada di tengah frame, dikelilingi oleh biji kopi arabika panggang utuh dan pecahan kubus es kristal jernih yang melayang beku di udara di sekelilingnya, dengan cipratan mikro tetesan kopi cair yang tertangkap kamera dalam gerakan terhenti.

[CONTEXT]
Materi visual hook slide pembuka Instagram Carousel & TikTok Ads untuk brand kopi lokal kekinian. Target audiens adalah penikmat kopi yang mencari kesegaran instan.

[EXAMPLE]
Mengacu pada gaya periklanan beverage komersial modern kelas atas; kontras warna cokelat moka pekat dengan latar belakang abu-abu arang gelap bertekstur.

[INSTRUCTION & BATASAN]
- Efek aksi beku kecepatan rana tinggi (1/8000s shutter speed freeze effect).
- Tetesan air embun mikro (condensation droplets) tampak nyata dan berkilau pada permukaan kaca botol.
- Ruang tengah tetap bersih untuk fokus botol, ruang atas aman untuk teks hook utama.
- Batasan: JANGAN ada teks apapun di gambar, tanpa logo buatan, tanpa blur gerakan berlebih.`,
    promptEnglish: `Dynamic commercial high-speed beverage photography of a sleek cold brew glass bottle centered, surrounded by levitating roasted coffee beans and crystal clear ice cubes frozen in mid-air, micro splash droplets, dramatic golden amber rim lighting, dark moody charcoal backdrop, 8k commercial quality --ar 4:5 --v 6.0`,
    negativePrompt: 'motion blur, muddy colors, deformed glass bottle, fake brand text, low resolution, flat lighting',
    techSpecs: {
      aspectRatio: '4:5 (Social Ads Hook)',
      lighting: 'Dramatic Dual Rim Lights + Honeycomb Grid Key Light',
      cameraLens: '100mm f/2.8 Macro Lens with Profoto High-Speed Sync',
      colorProfile: 'Display P3'
    },
    proTips: [
      'Slide pertama adalah penentu CTR (Click-Through Rate). Biarkan sepertiga bagian atas gambar memiliki latar belakang gelap agar teks judul hook berwarna putih/kuning terbaca kontras tanpa harus memakai shape pelapis tebal.'
    ]
  },
  {
    id: 'prompt-ramadan-festive-backdrop',
    title: 'Backdrop Promosi Musiman Ramadan & Idul Fitri Elegan',
    category: 'social_ads',
    categoryLabel: 'Materi Iklan Digital',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Latar belakang promosi musiman Ramadan dengan ornamen lengkungan arsitektur Timur Tengah modern, lentera tembaga hangat, dan bulan sabit tipis tanpa kesan norak.',
    trcei: {
      task: 'Ganti latar belakang foto fashion busana muslim dengan interior lengkungan arsitektural Moroccan modern berwarna pasir hangat, disinari cahaya lentera tembaga berukir lembut.',
      role: 'Sebagai Senior Fashion Stylist dan Art Director Kampanye Festif Marcomm.',
      context: 'Materi kampanye Ramadhan Mega Sale untuk busana muslimah kontemporer di Instagram Ads, Website Banner, dan Billboard Digital mall.',
      example: 'Nuansa arsitektur minimalis kontemporer Dubai/Marrakech; warna terakota lembut, pasir gurun, dan aksen emas redup (matte brushed gold).',
      instruction: 'Cahaya lembut tidak menenggelamkan warna baju model, bayangan dekoratif lembut di lantai, tanpa teks kaligrafi acak AI, rasio 9:16 atau 4:5.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Fashion Art Director dan Stylist Kampanye Busana Muslim Modern.

[TASK]
Gantikan latar belakang model busana muslim ini dengan arsitektur lengkungan minimalis kontemporer (modern Islamic archways) berdinding semen warna pasir hangat (warm sand plaster), dengan lentera gantung tembaga berukir geometris halus yang memancarkan cahaya lilin hangat lembut di sudut kanan atas.

[CONTEXT]
Materi promosi utama Ramadan & Lebaran Fashion Collection untuk katalog online dan materi iklan media sosial. Nuansa merek berakar pada kesucian, kehangatan keluarga, dan kemewahan yang bersahaja.

[EXAMPLE]
Gaya editorial arsitektur modern Timur Tengah kontemporer; warna-warna hangat seperti pasir, terakota pucat, krem, dan aksen emas tua matte yang tenang.

[INSTRUCTION & BATASAN]
- Pertahankan warna dan detail lipatan kain baju model secara presisi 100%.
- Cahaya lentera hanya berfungsi sebagai aksen ambient hangat, tidak boleh mengubah warna kain pakaian asli.
- Batasan ketat: Jangan ada kaligrafi teks acak/rusak di dinding, jangan ada dekorasi berlebihan yang mengaburkan subjek busana.`,
    promptEnglish: `Minimalist contemporary middle-eastern architectural archway background with smooth warm sand plaster walls, delicate warm glowing brass lantern hanging in upper corner, soft ambient daylight, elegant serene Ramadan campaign atmosphere, clean negative space --ar 4:5 --no text, fake calligraphy, kitsch decorations`,
    negativePrompt: 'garish green colors, distorted Arabic calligraphy, noisy clutter, overexposed highlights, plastic lanterns',
    techSpecs: {
      aspectRatio: '4:5 (Instagram) atau 9:16 (Story/Reels)',
      lighting: 'Warm Ambient Lantern (2800K) + Soft Sunbeam through Arch',
      cameraLens: '50mm f/2.0 Portrait Lens',
      colorProfile: 'sRGB'
    },
    proTips: [
      'Hindari penggunaan warna hijau neon klise; gunakan palet warna pasir hangat (warm beige) dan aksen kuningan antik untuk kesan festive premium yang lebih diminati konsumen urban saat ini.'
    ]
  },
  {
    id: 'prompt-generative-fill-outpainting',
    title: 'Perluasan Kanvas Tanpa Jahitan (Outpainting 1:1 ke 16:9 Billboard)',
    category: 'manipulation',
    categoryLabel: 'Manipulasi Grafis',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Memperluas foto produk atau model dari format kotak 1:1 menjadi bidang lanskap 16:9 untuk billboard jalan raya atau hero banner web tanpa merusak proporsi subjek utama.',
    trcei: {
      task: 'Lakukan generative expand pada sisi kiri dan kanan gambar untuk memperluas lingkungan lanskap alam minimalis secara berkelanjutan dan menyatu alami dengan foto asli.',
      role: 'Sebagai Senior Digital Compositor & Matte Painter agensi periklanan.',
      context: 'Adaptasi aset foto dari materi Instagram Feed (1:1) menjadi materi spanduk website beranda (16:9) dan baliho billboard horizontal outdoor.',
      example: 'Ekstensi lingkungan fotorealistik dengan horizon garis tanah yang lurus mulus dan kesinambungan sudut pencahayaan dari gambar tengah.',
      instruction: 'Pertahankan 100% foto asli di tengah tanpa ada resampling atau penghalusan, cocokkan grain kamera dan depth of field di area baru.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Digital Matte Painter dan Rekayasawan Compositing Iklan.

[TASK]
Perluas bidang gambar di sisi kiri dan kanan (Generative Expand / Outpainting) secara mulus melanjutkan lingkungan lanskap perbukitan rumput hijau minimalis dengan kabut pagi tipis di latar belakang yang serasi dengan foto subjek di bagian tengah.

[CONTEXT]
Proses adaptasi aset visual (creative asset scaling) dari format bujur sangkar (1:1) menjadi format lanskap lebar (16:9) untuk spanduk digital billboard dan header desktop website.

[EXAMPLE]
Kualitas compositing visual layar lebar (anamorphic cinematography); kesinambungan pencahayaan dari arah kiri, tingkat blur bokeh latar belakang yang konsisten dengan foto asli.

[INSTRUCTION & BATASAN]
- Jaga agar objek utama di tengah tidak tersentuh atau berubah sedikit pun.
- Garis cakrawala (horizon line) dan sudut datang cahaya di area perluasan harus presisi mengikuti foto aslinya.
- Sediakan ruang lapang di sepertiga kiri untuk penempatan logo dan teks promosi.
- Batasan: Jangan memunculkan objek aneh seperti hewan tiba-tiba, tiang listrik, atau struktur janggal.`,
    promptEnglish: `Seamless continuous expansion of the minimalist green meadow landscape with distant soft morning fog, perfectly matching lighting angle and camera depth of field, wide panoramic vista with clean negative space --ar 16:9`,
    negativePrompt: 'seam lines, mismatched lighting, random people, unnatural structures, blurred artifacts, distortion',
    techSpecs: {
      aspectRatio: '16:9 Panorama',
      lighting: 'Matched to Source Image Direction',
      cameraLens: 'Matched Depth of Field & Perspective',
      colorProfile: 'Same as Source PSD'
    },
    proTips: [
      'Di Photoshop Generative Fill: Pilih area kanvas kosong yang diperluas dengan sedikit overlap 20-30 pixel ke gambar asli agar transisi sambungan tidak terlihat.',
      'Jika prompt teks dikosongkan di Generative Fill, Photoshop akan memprediksi konteks secara otomatis; namun menambahkan prompt lingkungan spesifik menjamin tidak ada elemen aneh yang muncul.'
    ]
  },
  {
    id: 'prompt-teal-orange-grading',
    title: 'Color Grading Sinematik Teal & Orange untuk Foto Komunikasi Pemasaran',
    category: 'retouch_grading',
    categoryLabel: 'Koreksi & Retouching',
    targetTool: 'Universal Visual AI',
    summary: 'Pengaturan palet warna sinematik komplementer (Teal di area bayangan/shadows dan Warm Orange di area highlight dan warna kulit) untuk foto outdoor marketing.',
    trcei: {
      task: 'Terapkan color grading sinematik komplementer: sematkan rona biru kehijauan (teal) pada bayangan lingkungan dan hangatkan warna kulit subjek menjadi oranye emas natural yang sehat.',
      role: 'Sebagai Senior Colorist dan Post-Production Director untuk materi promosi film dan kampanye periklanan komersial.',
      context: 'Materi foto dokumentasi acara peluncuran produk dan foto kampanye lifestyle outdoor untuk feed brand anak muda.',
      example: 'Gaya sinematik film bioskop Hollywood kontemporer (seperti film arahan Denis Villeneuve atau lookbook fashion modern).',
      instruction: 'Jangan biarkan warna kulit subjek bergeser ke arah kemerahan atau kehijauan, jaga detail gelap (shadows) tidak remuk (no crushed blacks), kurva kontras S-Curve halus.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Colorist Pascaproduksi Iklan dan Ahli Teori Warna Visual.

[TASK]
Lakukan penyelarasan warna (color grading) sinematik berstandar film layar lebar: berikan nuansa warna cyan-teal yang dalam dan tenang pada area bayangan arsitektur latar belakang, sambil menjaga dan memperkaya rona hangat keemasan (warm honey orange) pada kulit subjek manusia dan pencahayaan utama.

[CONTEXT]
Materi visual kampanye gaya hidup perkotaan untuk materi publikasi majalah gaya hidup, poster promosi konser musik, dan spanduk web marcomm.

[EXAMPLE]
Acuan visual adalah gradasi warna sinematik 35mm Hollywood modern; kontras komplementer yang dinamis namun tetap menjaga keaslian tekstur dunia nyata.

[INSTRUCTION & BATASAN]
- Pisahkan saturasi kulit (skin tones luminance) agar tetap tampak sehat dan tidak terbakar matahari buatan.
- Jaga titik hitam terdalam (shadow roll-off) tetap memiliki detail informasi, jangan sampai menjadi hitam pekat tanpa detail (no crushed blacks).
- Batasan: Hindari saturasi berlebih yang membuat foto tampak seperti filter murahan aplikasi ponsel.`,
    promptEnglish: `Master cinematic color grading photograph with balanced complementary teal in the shadows and rich warm golden honey tones in highlights and human skin, subtle film curve, atmospheric cinematic mood, clean professional editorial finish --ar 16:9`,
    negativePrompt: 'oversaturated neon, crushed darks, greenish skin tones, washed out haze, low quality jpeg artifacts',
    techSpecs: {
      aspectRatio: '16:9 Cinematic',
      lighting: 'Golden Hour Ambient with Ambient Sky Fill',
      cameraLens: 'Anamorphic Lens Character',
      colorProfile: 'DCI-P3 / Adobe RGB'
    },
    proTips: [
      'Gunakan bantuan Vectorscope di Adobe Lightroom / Photoshop Camera Raw untuk memastikan garis warna kulit (Skin Tone Indicator line) tetap berada pada sudut ~100-110 derajat terlepas dari seberapa kuat efek teal di latar belakang.'
    ]
  },
  {
    id: 'prompt-double-exposure-poster',
    title: 'Manipulasi Double Exposure Siluet Model & Kota Metropolitan',
    category: 'manipulation',
    categoryLabel: 'Manipulasi Grafis',
    targetTool: 'Midjourney v6',
    summary: 'Compositing foto artistik perpaduan siluet profil samping wajah profesional dengan lanskap gedung pencakar langit megapolitan bercahaya senja untuk poster konferensi bisnis.',
    trcei: {
      task: 'Rancang manipulasi grafis double exposure tingkat tinggi: siluet profil samping wajah seorang pria/wanita visioner menyatu harmonis dengan lanskap gedung metropolitan Jakarta/Tokyo di saat senja berkabut.',
      role: 'Sebagai Senior Conceptual Graphic Designer & Poster Artist.',
      context: 'Materi poster utama konferensi kepemimpinan inovasi masa depan, sampul podcast bisnis, dan materi presentasi Keynote pimpinan korporat.',
      example: 'Karya seni double exposure editorial pemenang penghargaan; perpaduan bersih dengan garis kontur wajah yang masih terbaca jelas.',
      instruction: 'Latar belakang putih bersih minimalis (high-key background) agar siluet menjadi fokus utama, perpaduan arsitektur kota yang detail di dalam bentuk kepala, tanpa efek berantakan.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Conceptual Graphic Designer dan Master Compositing Poster.

[TASK]
Ciptakan karya seni manipulasi grafis eksposur ganda (double exposure) artistik: siluet profil samping (side profile) wajah seorang profesional visioner berpadu secara mulus dengan lanskap panorama gedung pencakar langit kota metropolitan modern berkabut cahaya senja yang mengisi bagian dalam kontur kepala dan rambutnya.

[CONTEXT]
Materi poster utama KTT Inovasi & Transformasi Bisnis Digital, sampul buku kepemimpinan korporat, dan aset kampanye media sosial berbobot tinggi.

[EXAMPLE]
Gaya poster seni film festival editorial; siluet kontras tinggi berlatar belakang putih abu-abu terang minimalis, di mana detail arsitektur kota terlihat presisi di dalam bentuk siluet.

[INSTRUCTION & BATASAN]
- Pastikan garis profil hidung, bibir, dan dagu subjek tetap terbaca tegas dan proporsional.
- Gunakan latar belakang high-key bersih (off-white) agar mudah diintegrasikan dengan tata letak tipografi poster.
- Batasan: Jangan biarkan gedung keluar secara kasar dari garis tepi kepala; perpaduan harus terasa organik dan puitis.`,
    promptEnglish: `Artistic conceptual double exposure portrait of a visionary professional side profile seamlessly blended with a modern metropolitan skyscraper cityscape at dusk inside the head silhouette, isolated on a clean high-key minimalist light background, graphic design poster masterwork, sharp architectural details --ar 3:4 --v 6.0`,
    negativePrompt: 'messy blending, distorted facial profile, low resolution, dirty background, extra limbs, chaotic clutter',
    techSpecs: {
      aspectRatio: '3:4 (Poster / Keynote Slide)',
      lighting: 'High-Key Rim Silhouette Lighting',
      cameraLens: 'Studio Profile Setup + Cityscape Telephoto',
      colorProfile: 'sRGB'
    },
    proTips: [
      'Gunakan teknik masking layer dengan blend mode "Screen" atau "Lighten" di Photoshop jika Anda memadukan foto asli Anda sendiri dengan visual kota hasil AI ini.'
    ]
  },
  {
    id: 'prompt-natural-skin-retouch',
    title: 'Commercial Skin Retouching: Kulit Natural Bertekstur Tanpa Efek Plastik',
    category: 'retouch_grading',
    categoryLabel: 'Koreksi & Retouching',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Pembersihan noda dan perataan warna kulit wajah untuk foto komersial kosmetik dengan menjaga keaslian pori-pori mikro kulit manusia (anti-wax plastic look).',
    trcei: {
      task: 'Lakukan perbaikan tekstur kulit wajah secara mikro: hilangkan noda kemerahan sementara dan ratakan warna kulit wajah dengan mempertahankan 100% pori-pori alami dan struktur mikro kulit.',
      role: 'Sebagai Master High-End Beauty Retoucher untuk rumah kosmetik luxury.',
      context: 'Materi foto close-up kampanye produk perawatan kulit (skincare) resolusi tinggi untuk materi cetak display gerai kosmetik dan majalah cetak.',
      example: 'Standar retouching komersial majalah Vogue dan Harper’s Bazaar; kulit tampak sehat bercahaya (dewy skin) namun jelas memiliki tekstur pori-pori manusia nyata.',
      instruction: 'Jangan gunakan algoritma blur atau skin-softening murahan yang menghapus pori kulit, pertahankan garis bulu mata dan kilau mata tajam, warna kulit hangat natural.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Master High-End Beauty Retoucher Berstandar Majalah Mode Internasional.

[TASK]
Lakukan penyempurnaan tekstur kulit wajah foto portrait kecantikan jarak dekat (beauty close-up): bersihkan noda kecil sementara, seimbangkan nada warna kemerahan (micro redness correction), sambil mempertahankan integritas pori-pori kulit mikro (natural skin pores), kilau alami kulit sehat (healthy skin glow), dan ketajaman optik iris mata.

[CONTEXT]
Materi visual iklan billboard kosmetik resolusi ultra-tinggi dan display promosi konter department store kecantikan ternama.

[EXAMPLE]
Retouching komersial kecantikan editorial Vogue; bukan filter ponsel penghalus instan, melainkan hasil teknik pemisahan frekuensi (Frequency Separation) manual tingkat mahir.

[INSTRUCTION & BATASAN]
- DILARANG menghapus tekstur pori-pori kulit (anti-plastic look, no fake silicone skin).
- Pertahankan struktur tulang wajah, garis alis, dan bulu mata asli tanpa distorsi.
- Jaga kilau titik cahaya (specular highlights) pada tulang pipi agar tidak meledak (blown out highlights).`,
    promptEnglish: `Ultra close-up commercial beauty editorial portrait, master retouched authentic human skin texture with visible natural microscopic pores and delicate peach fuzz, healthy glowing hydration, razor sharp catchlight in iris, high fashion magazine advertising standard, Leica 90mm macro lens --ar 4:5 --v 6.0`,
    negativePrompt: 'airbrushed blur, wax doll, plastic mannequin skin, artificial texture, blurry eyelashes, distorted teeth',
    techSpecs: {
      aspectRatio: '4:5 (Close-up Portrait)',
      lighting: 'Beauty Dish Key Light + Silver Reflector Under Chin',
      cameraLens: '100mm f/8 Macro Prime',
      colorProfile: 'Adobe RGB'
    },
    proTips: [
      'Di Photoshop Generative Fill: Pilih hanya area noda dengan lasso tool ber-feather 1px lalu ketik prompt "clean natural human skin pores", jangan pilih seluruh wajah sekaligus agar bentuk wajah asli tidak diganti AI.'
    ]
  },
  {
    id: 'prompt-pose-transfer-reference',
    title: 'Transfer Pose Dinamis dari Gambar Referensi ke Karakter Individu',
    category: 'pose_transfer',
    categoryLabel: 'Transfer & Ubah Pose',
    targetTool: 'Midjourney v6',
    summary: 'Mentransfer pose langkah dinamis (confident walking stride) dari gambar pose referensi ke karakter individu yang sudah ada, dengan mengunci 100% konsistensi fitur wajah, warna kulit, dan rambut asli.',
    image: '/src/assets/images/pose_model_dynamic_1792409755299.jpg',
    trcei: {
      task: 'Ubah pose berdiri statis dari individu subjek pada gambar asli agar mengadopsi pose melangkah dinamis (confident walking stride three-quarter angle) persis seperti pada gambar pose referensi, sambil mempertahankan 100% kemiripan bentuk wajah, warna kulit, dan identitas fisik aslinya.',
      role: 'Bertindaklah sebagai Senior Fashion Art Director dan spesialis Character Consistency & Pose Retargeting berbasis AI.',
      context: 'Materi lookbook fashion katalog digital dan materi kampanye media sosial untuk peluncuran busana kerja kontemporer (modern workwear) dengan target profesional muda.',
      example: 'Gaya pose editorial majalah Vogue Runway; langkah tegap natural, pakaian bergerak jatuh secara dinamis mengikuti arah langkah, setting interior arsitektural minimalis berlantai beton halus.',
      instruction: 'Kunci identitas wajah (Face Lock): Jangan ubah struktur tulang pipi, mata, bibir, gaya rambut ikal, dan warna kulit subjek. Rasio 4:3, pencahayaan difus jendela besar, tanpa distorsi jari tangan.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Fashion Art Director dan Ahli Konsistensi Karakter & Pose Retargeting.

[TASK]
Ambil identitas individu dari Foto Subjek (Subjek A) dan terapkan pose melangkah dinamis (confident walking stride pose) dari Foto Referensi Pose (Referensi B): subjek melangkah tegap ke arah kanan dengan sudut three-quarter, mengenakan setelan jas tailored kontemporer warna krem hangat di dalam ruang arsitektural beton minimalis berpencahayaan alami jendela tinggi.

[CONTEXT]
Materi kampanye katalog digital fashion komersial dan visual Instagram Carousel untuk koleksi busana tailoring modern wanita karir.

[EXAMPLE]
Estetika pemotretan lookbook desainer internasional; gerakan langkah terasa autentik dan dinamis, kain celana jatuh dengan lipatan natural saat kaki melangkah, bayangan jatuh seimbang di lantai beton.

[INSTRUCTION & BATASAN]
- KONSISTENSI WAJAH (IDENTITY LOCK): Pertahankan 100% bentuk wajah asli, jarak mata, bentuk hidung, garis rahang, dan rona kulit subjek dari foto asal.
- Batasan ketat: Jangan memunculkan anatomi ekstremitas ganjil, jangan ada jari tambahan, dan jangan mengubah proporsi tinggi badan asli subjek.
- Parameter Midjourney: Gunakan foto wajah subjek dengan parameter --cref [URL_Foto_Subjek] --cw 100 dan gunakan foto pose dengan --sref [URL_Foto_Pose].`,
    promptEnglish: `Fashion editorial portrait of the exact same subject from reference photo, matching face, skin tone and hair, adopting a dynamic confident walking stride pose from the pose reference, three-quarter angle, wearing tailored neutral beige contemporary jacket and wide trousers, minimalist architectural concrete interior, soft window natural daylight, Leica 50mm f/2.0 --ar 4:3 --cref [IMAGE_URL] --cw 100 --v 6.0`,
    negativePrompt: 'deformed legs, extra feet, distorted face, changed ethnicity, unnatural stride, floating feet, blurry eyes, warped hands',
    techSpecs: {
      aspectRatio: '4:3 (Editorial Lookbook)',
      lighting: 'Large North-facing Soft Window Daylight',
      cameraLens: '50mm f/2.0 Full Frame Lens (True perspective)',
      colorProfile: 'Display P3'
    },
    proTips: [
      'Di Midjourney v6: Gunakan kombinasi `--cref [URL_Foto_Subjek] --cw 100` untuk mengunci fitur wajah subjek, lalu tambahkan URL pose di awal prompt atau gunakan `--sref` untuk menjaga konsistensi gaya pencahayaan.',
      'Di Stable Diffusion / ComfyUI: Gunakan modul ControlNet OpenPose dengan gambar pose referensi sebagai input ControlNet, dan pasang IP-Adapter Plus FaceID pada foto individu subjek untuk akurasi pose dan wajah 99%.'
    ]
  },
  {
    id: 'prompt-product-low-angle-hero',
    title: 'Perspektif Low-Angle (Worm\'s-Eye View) Monumental untuk Hero Shot Produk',
    category: 'multi_perspective',
    categoryLabel: 'Sudut & Perspektif Kamera',
    targetTool: 'Universal Visual AI',
    summary: 'Pengambilan gambar produk dari sudut pandang sangat rendah ke atas (low-angle hero perspective) berlatar langit biru dan tepian beton arsitektural minimalis untuk kesan megah dan dominan.',
    image: '/src/assets/images/product_angle_perspective_1792409755775.jpg',
    trcei: {
      task: 'Ubah sudut pengambilan foto produk botol parfum kaca mewah ini menjadi perspektif sudut rendah dramatis (dramatic extreme low-angle / worm\'s-eye view), memandang ke atas dari sudut tajam tepian podium beton abu-abu berlatar langit biru cerah.',
      role: 'Sebagai Senior Commercial Beverage & Luxury Fragrance Art Director.',
      context: 'Materi spanduk billboard outdoor utama dan visual landing page hero section produk wewangian edisi terbatas, memproyeksikan aura kemewahan tak tertandingi dan prestise tinggi.',
      example: 'Gaya fotografi iklan komersial parfum Dior Sauvage atau Chanel Bleu; produk tampak kokoh, megah, seperti monumen arsitektur modern bergaris bersih.',
      instruction: 'Sudut kamera 20 derajat dari bawah menghadap ke atas, pencahayaan tepi matahari senja keemasan (golden rim light) pada kontur botol kaca, cairan parfum tembus pandang dengan kilau hangat, teks label tajam, rasio 4:3.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Commercial Luxury Fragrance Art Director dan Master Fotografer Produk Komersial.

[TASK]
Ambil foto produk botol parfum kaca mewah ini dari sudut pandang sangat rendah ke atas (dramatic low-angle worm\'s-eye perspective): kamera ditempatkan di bawah tepian sudut balok beton arsitektur abu-abu tebal, memandang ke atas ke arah botol kaca yang berdiri kokoh dan monumental menghadap langit biru terbuka berawan tipis.

[CONTEXT]
Materi Key Visual hero shot untuk peluncuran kampanye media luar ruang (OOH Billboard) dan landing page utama produk wewangian premium unisex.

[EXAMPLE]
Gaya sinematik kampanye parfum luxury global; kontras garis arsitektur brutalist modern yang tegas dipadukan dengan kelembutan pantulan langit pada kaca botol.

[INSTRUCTION & BATASAN]
- Sudut kamera ekstrim dari bawah (looking straight up at 20-30 degree incline).
- Transparansi kaca dan kehangatan rona cairan parfum di dalam botol tetap memancarkan cahaya keemasan alami (subsurface scattering).
- Teks label botol harus tetap tegak lurus dan terbaca tajam tanpa distorsi perspektif yang merusak logo.
- Batasan: Dilarang membuat botol tampak melengkung atau menceng, hindari distorsi lensa fish-eye yang merusak proporsi tutup botol.`,
    promptEnglish: `Dramatic low-angle worm\'s-eye view commercial product photography looking up at a luxury amber perfume glass bottle standing on the edge of a brutalist concrete rooftop ledge, vast clean blue sky with subtle wisps of clouds, crisp architectural rim lighting, sharp glass refractions, golden liquid glow, 8k commercial packshot --ar 4:3 --v 6.0`,
    negativePrompt: 'fish-eye distortion, bent bottle lines, muddy glass, crooked label, overcast dull lighting, plastic cap',
    techSpecs: {
      aspectRatio: '4:3 (Hero Banner / Billboard)',
      lighting: 'Low Sun Natural Rim Light + Reflected Ambient Skylight',
      cameraLens: '24mm Tilt-Shift Lens (Low-angle without keystoning distortion)',
      colorProfile: 'Display P3'
    },
    proTips: [
      'Gunakan kata kunci teknis lensa: "Tilt-Shift 24mm perspective control" dalam prompt AI untuk mencegah distorsi garis botol melengkung saat diambil dari sudut rendah.',
      'Di Photoshop AI Generative Fill: Pilih area di atas dan samping botol, gunakan prompt "brutalist concrete ledge looking up at clear blue sky, low angle perspective".'
    ]
  },
  {
    id: 'prompt-product-topdown-flatlay',
    title: 'Perspektif 90° Top-Down Flat Lay (Bird\'s-Eye View) untuk E-Commerce',
    category: 'multi_perspective',
    categoryLabel: 'Sudut & Perspektif Kamera',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Mengubah sudut pengambilan foto produk menjadi tegak lurus 90 derajat dari atas (flat lay / bird\'s-eye view) dikelilingi bahan alami pendukung tersusun rapi untuk katalog dan marketplace.',
    trcei: {
      task: 'Ubah perspektif foto produk kosmetik botol serum dari sudut depan menjadi sudut tegak lurus 90 derajat dari atas (knolling / flat lay 90° top-down), tertata rapi di atas meja marmer putih bersama pipet kaca dan irisan jeruk nipis segar.',
      role: 'Sebagai Commercial Food & Cosmetic Stylist spesialis foto katalog e-commerce.',
      context: 'Materi infografis kandungan bahan produk (ingredient breakdown) untuk slide kedua Instagram Carousel dan marketplace Shopee/Tokopedia.',
      example: 'Gaya penataan geometris bersih (knolling arrangement) majalah kuliner dan kecantikan Skandinavia; bayangan lembut jatuh vertikal ke bawah objek.',
      instruction: 'Perspektif ortografis 90° tepat tanpa kemiringan sudut (zero tilt), bayangan jatuh lembut tepat di bawah setiap objek, fokus tajam dari sudut ke sudut, rasio 1:1.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Commercial Knolling & Cosmetic Stylist Tingkat Mahir.

[TASK]
Ambil foto produk serum wajah ini dari sudut pandang tegak lurus 90 derajat tepat dari atas (flat lay / 90-degree top-down bird\'s-eye view): produk botol diletakkan mendatar di atas permukaan batu marmer putih Carrara berurat abu-abu halus, dikelilingi oleh pipet kaca berisi tetesan cairan esensial, irisan segar jeruk botani, dan ranting herbal yang tersusun presisi dalam komposisi knolling seimbang.

[CONTEXT]
Materi visual penjelasan kandungan alami (ingredients story) untuk carousel edukasi media sosial dan banner etalase toko online.

[EXAMPLE]
Estetika tata letak fotografi knolling majalah Kinfolk; jarak antar objek seragam, penataan ruang bernapas teratur, pencahayaan lembut menyeluruh tanpa bayangan keras yang mengganggu.

[INSTRUCTION & BATASAN]
- Sudut kamera tegak lurus 90° sempurna (true overhead flat lay, no perspective slant).
- Pencahayaan softbox besar dari atas menyebar rata ke seluruh permukaan (overhead diffused dome lighting).
- Batasan: JANGAN ada bayangan orang/fotografer yang menimpa objek, hindari refleksi lampu kamera pada kaca botol.`,
    promptEnglish: `Clean 90-degree top-down flat lay knolling commercial photography of a cosmetic dropper bottle lying flat on white Carrara marble surface, neatly arranged with glass dropper with serum droplets, fresh botanical citrus slices and delicate herbs, soft overhead diffused studio lighting, razor sharp corner-to-corner focus, 8k --ar 1:1`,
    negativePrompt: 'angled view, tilted perspective, harsh shadows, photographer reflection, messy clutter, blurry edges',
    techSpecs: {
      aspectRatio: '1:1 (Square Feed & Marketplace)',
      lighting: 'Giant Overhead Scrim Softbox (Even shadowless diffusion)',
      cameraLens: '50mm Macro Prime at f/8 (Flat field focus)',
      colorProfile: 'sRGB'
    },
    proTips: [
      'Foto flat lay membutuhkan bukaan diafragma sempit (f/8 - f/11) agar semua elemen dari ujung ke ujung memiliki ketajaman yang setara.',
      'Sediakan area kosong di salah satu kuadran sudut untuk mempermudah desainer menempatkan badge atau icon manfaat produk (100% Organic, BPOM Certified).'
    ]
  },
  {
    id: 'prompt-wardrobe-swap-business-suit',
    title: 'Ganti Busana Kasual Menjadi Setelan Blazer Bisnis Mewah (Identity & Face Lock)',
    category: 'wardrobe_swap',
    categoryLabel: 'Ganti Busana (Kunci Wajah)',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Mengganti pakaian kaos/baju kasual individu menjadi setelan jas blazer wol modern warna arang (charcoal) dengan mengunci 100% bentuk rahang, mata, hidung, bibir, dan pori kulit asli tanpa deformasi.',
    trcei: {
      task: 'Ganti busana kasual yang dikenakan subjek individu ini dengan setelan blazer formal kontemporer wol warna arang gelap (charcoal bespoke tailored blazer) dengan dalaman kerah tinggi (turtleneck) rajut hitam elegan, sambil mempertahankan 100% struktur wajah, warna kulit, ekspresi, dan proporsi tubuh aslinya.',
      role: 'Sebagai Senior Executive Retoucher dan Digital Fashion Tailor untuk agensi PR korporat.',
      context: 'Materi foto profil eksekutif untuk halaman About Us website korporasi, profil LinkedIn pimpinan, dan rilis pers media massa.',
      example: 'Gaya fotografi profil pimpinan bisnis majalah Forbes / Harvard Business Review; jahitan jas rapi berkualitas tinggi dengan tekstur tenun wol nyata.',
      instruction: 'INPAINTING FACE LOCK: Jangan sentuh area wajah, rambut, leher, atau bentuk dagu subjek. Sesuaikan bayangan pakaian baru dengan arah jatuhnya cahaya di wajah asli. Rasio 4:5.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Executive Retoucher dan Digital Wardrobe Tailor Korporat.

[TASK]
Gantikan pakaian baju kasual pada tubuh subjek ini dengan setelan blazer formal modern berpotongan rapi (tailored bespoke charcoal wool blazer) dengan kerah bergaris tegas dan dalaman sweater turtleneck rajut halus warna hitam pekat, dengan lipatan kain natural yang pas mengikuti postur bahu subjek.

[CONTEXT]
Pembuatan foto headshot eksekutif resmi untuk laporan tahunan pemegang saham (annual shareholder report), website perusahaan, dan pengumuman promosi jabatan di media profesional.

[EXAMPLE]
Estetika portrait majalah Bloomberg Markets / Fortune 500; kualitas kain wol mewah dengan tekstur tenun mikro yang terlihat jelas, kancing jas berkualitas tinggi, dan garis bahu yang tegap percaya diri.

[INSTRUCTION & BATASAN (IDENTITY LOCK)]
- KUNCI IDENTITAS WAJAH MUTLAK: DILARANG MENGUBAH FITUR WAJAH, MATA, HIDUNG, BIBIR, BENTUK RAHANG, TONE WARNA KULIT, DAN GAYA RAMBUT SUBJEK SEDIKIT PUN.
- Lakukan masking seleksi hanya pada area baju di bawah leher (neckline down to waist).
- Penyesuaian cahaya: Sudut jatuh bayangan kerah blazer pada leher harus sinkron 100% dengan sumber cahaya yang ada pada wajah asli subjek.`,
    promptEnglish: `Professional corporate headshot retouching replacing casual shirt with a modern tailored charcoal grey wool business blazer and fine knit black turtleneck, crisp bespoke tailoring seams, matching the existing lighting and shoulder anatomy of the original subject, preserving 100% identical facial features and skin texture --ar 4:5`,
    negativePrompt: 'changed face, altered facial features, plastic skin, ill-fitting clothes, wrinkled messy fabric, deformed neck, cartoon texture',
    techSpecs: {
      aspectRatio: '4:5 (Professional Headshot)',
      lighting: 'Matched Exactly to Original Source Face Lighting',
      cameraLens: '85mm Portrait Prime',
      colorProfile: 'Display P3 / sRGB'
    },
    proTips: [
      'Di Photoshop Generative Fill: Seleksi HANYA area baju dengan Quick Selection Tool. Buat feather seleksi 2px, lalu lebarkan seleksi 3px (Expand Selection) ke arah kerah leher agar baju baru menutupi pakaian lama tanpa celah.',
      'Ketik prompt khusus pakaian di kotak Generative Fill: "tailored charcoal bespoke wool blazer with fine black turtleneck", biarkan AI menyesuaikan lipatan kain dengan anatomi bahu asli.'
    ]
  },
  {
    id: 'prompt-wardrobe-swap-traditional-formal',
    title: 'Ganti Pakaian Menjadi Kemeja Batik Sutra Kontemporer (Preserve Facial Structure)',
    category: 'wardrobe_swap',
    categoryLabel: 'Ganti Busana (Kunci Wajah)',
    targetTool: 'Photoshop Generative Fill',
    summary: 'Transformasi busana individu ke kemeja batik sutra eksklusif motif geometris modern untuk materi profil eksekutif tahunan, mempertahankan proporsi leher dan senyum natural subjek.',
    trcei: {
      task: 'Gantikan busana pada foto individu ini menjadi kemeja batik tulis sutra pria/wanita lengan panjang eksklusif berkerah tegak dengan motif geometris kontemporer bernuansa emas tembaga dan cokelat sogan tua, tanpa merubah ekspresi atau bentuk wajah asli.',
      role: 'Sebagai Senior Commercial Retoucher dan Fashion Stylist Busana Tradisional Indonesia Modern.',
      context: 'Materi foto resmi dewan direksi BUMN/korporasi nasional untuk laporan tata kelola perusahaan dan materi perayaan hari nasional di media cetak komersial.',
      example: 'Gaya busana kemeja batik sutra eksklusif desainer ternama (seperti Iwan Tirta Private Collection); kilau halus kain sutra dengan presisi pola sambungan di kancing depan.',
      instruction: 'Pertahankan 100% wajah, telinga, leher, dan gestur tubuh asli. Pasang pola batik simetris proporsional, tanpa ada pola acak rusak khas AI generatif murahan.'
    },
    promptIndonesian: `[ROLE]
Bertindaklah sebagai Senior Commercial Retoucher & Stylist Busana Formal Kebangsaan.

[TASK]
Gantikan pakaian subjek ini menjadi kemeja batik sutra lengan panjang premium berkerah shanghai modern, dengan motif batik kontemporer geometris halus berwarna dasar hitam arang dipadukan aksen tembaga emas redup (matte bronze-gold), dengan kilau halus kain sutra alami (silk sheen).

[CONTEXT]
Materi foto resmi dewan komisaris dan direksi korporasi nasional untuk laporan tahunan (annual report) dan publikasi media bisnis nasional.

[EXAMPLE]
Estetika busana resmi kenegaraan ala perancang busana batik adibusana terkemuka; sambungan motif di garis kancing depan rapi dan simetris, potongan bahu pas di badan.

[INSTRUCTION & BATASAN]
- WAJAH & ANATOMI TERKUNCI: Jaga keaslian wajah, tekstur kulit, dan ekspresi senyum asli subjek secara sempurna.
- Seleksi masking presisi di sekeliling leher dan pundak subjek.
- Batasan: Hindari motif batik yang pecah atau buram; garis canting motif batik harus tajam dan jelas.`,
    promptEnglish: `High-end Indonesian contemporary luxury silk long-sleeve batik shirt with clean geometric traditional motif in dark charcoal and subtle matte bronze accents, bespoke tailored fit matching subject body, authentic natural silk sheen, preserving original face, skin and hair completely --ar 4:5`,
    negativePrompt: 'altered face, messy blurry batik pattern, distorted collar, cartoonish fabric, deformed neck',
    techSpecs: {
      aspectRatio: '4:5 (Official Portrait)',
      lighting: 'Studio Three-Point Portrait Lighting',
      cameraLens: '85mm f/2.8 Prime',
      colorProfile: 'Adobe RGB'
    },
    proTips: [
      'Gunakan kata kunci "bespoke tailored fit" dan "crisp symmetrical pattern alignment" untuk mencegah AI menghasilkan motif kain yang terdistorsi di lipatan baju.'
    ]
  }
];

export const PROMPT_CATEGORIES = [
  { id: 'all', label: 'Semua Kategori', icon: 'Sparkles' },
  { id: 'pose_transfer', label: 'Transfer & Ubah Pose', icon: 'UserCheck' },
  { id: 'multi_perspective', label: 'Sudut & Perspektif Kamera', icon: 'Maximize2' },
  { id: 'wardrobe_swap', label: 'Ganti Busana (Kunci Wajah)', icon: 'Shirt' },
  { id: 'ecommerce', label: 'E-Commerce & Produk', icon: 'ShoppingBag' },
  { id: 'social_ads', label: 'Materi Iklan Digital', icon: 'Megaphone' },
  { id: 'branding_kv', label: 'Key Visual Branding', icon: 'Award' },
  { id: 'manipulation', label: 'Manipulasi Grafis', icon: 'Layers' },
  { id: 'retouch_grading', label: 'Koreksi & Retouching', icon: 'Sliders' },
] as const;

export const TOOL_TAGS: ToolTag[] = [
  'Semua Tools',
  'Photoshop Generative Fill',
  'Midjourney v6',
  'Adobe Firefly',
  'Stable Diffusion',
  'Universal Visual AI'
];

export const GLOSSARY_TERMS = [
  {
    term: 'T-R-C-E-I',
    definition: 'Kerangka kerja (framework) prompting AI yang terdiri dari Task (Tugas), Role (Peran), Context (Konteks), Example (Contoh), dan Instruction (Instruksi & Batasan). Menjamin prompt terstruktur dan bebas bias interpretasi.'
  },
  {
    term: 'Pose Transfer / OpenPose',
    definition: 'Teknik kecerdasan buatan (ControlNet OpenPose / Midjourney Character Reference) yang mengekstrak kerangka tulang/pose dari foto pose referensi dan menerapkannya ke karakter individu yang ada tanpa merusak fitur wajah atau proporsi tubuh aslinya.'
  },
  {
    term: 'Worm\'s-Eye / Low-Angle Perspective',
    definition: 'Sudut pengambilan foto dari posisi sangat rendah menghadap ke atas. Dalam desain grafis dan periklanan komersial, teknik ini memberikan kesan dominan, megah, dan monumental pada botol parfum, mobil, atau pimpinan perusahaan.'
  },
  {
    term: 'Bird\'s-Eye View / Knolling Flat Lay',
    definition: 'Sudut pengambilan gambar tegak lurus 90 derajat dari atas. Sangat disukai dalam desain katalog e-commerce dan Instagram Carousel karena memungkinkan penataan beberapa objek pendukung (ingredients breakdown) dengan ruang bernapas yang tertib.'
  },
  {
    term: 'Virtual Wardrobe Swap (Inpainting Mask)',
    definition: 'Teknik mengganti pakaian subjek menggunakan masking selektif di Photoshop Generative Fill atau Stable Diffusion Inpainting, dengan mengunci (face lock) area wajah, leher, dan proporsi tubuh agar identitas individu tetap 100% konsisten.'
  },
  {
    term: 'Generative Fill',
    definition: 'Fitur kecerdasan buatan berbasis seleksi piksel (in-painting / out-painting) yang memungkinkan desainer menambah, mengganti, atau memperluas objek foto dengan memadukan pencahayaan dan perspektif secara otomatis.'
  },
  {
    term: 'Negative Prompt',
    definition: 'Kumpulan kata kunci atau larangan yang diinstruksikan kepada AI untuk secara mutlak dihindari (misal: "tanpa teks", "no watermark", "no deformed hands", "anti-plastic skin").'
  },
  {
    term: 'Aspect Ratio (--ar)',
    definition: 'Perbandingan proporsi antara lebar dan tinggi gambar. Rasio standar marcomm: 1:1 (Feed/Marketplace), 4:5 (Instagram Portrait), 9:16 (Stories/Reels/TikTok), 16:9 (Landscape Banner/Billboard).'
  },
  {
    term: 'Ambient Occlusion / Contact Shadow',
    definition: 'Bayangan kontak sangat pekat yang terbentuk tepat di celah antara dasar produk dan permukaan lantai. Kunci nomor satu agar hasil pergantian latar belakang foto produk terlihat nyata menyatu.'
  },
  {
    term: 'Negative Space',
    definition: 'Area kosong atau ruang bernapas di sekitar objek utama yang sengaja disisakan agar tim desainer grafis dapat menempatkan judul penawaran, copy iklan, atau logo brand dengan tingkat keterbacaan (legibility) tinggi.'
  },
  {
    term: 'Teal & Orange',
    definition: 'Teknik color grading komplementer klasik di mana warna bayangan (shadows) digeser ke arah biru kehijauan (teal) dan warna terang/kulit (highlights) diarahkan ke oranye hangat untuk kontras visual dinamis.'
  }
];
