// ═══════════════════════════════════════════════════════════════
//  HOW TO ADD A NEW VIDEO
// ═══════════════════════════════════════════════════════════════
//  1. Copy a block below and paste it at the TOP of the array
//  2. For YouTube: set id to the video ID (e.g. 'dQw4w9WgXcQ')
//  3. For local video: set id to '/filename.mp4' and thumb to '/thumb.png'
//  4. Save — done!
// ════════════════════════════════════════════════════════════════

const workVideos = [
  {
    id: 'a9t97923JRc',
    brand: 'BJMC',
    industry: 'Radio Jockey',
    title: 'Become a Radio Jockey with BJMC at LLDIMS | Admissions Open 2025-26 | GGSIPU',
    ongoing: false,
    stats: [
      { value: '46%', label: 'popular' },
      { value: '21K+', label: 'views', purple: true },
    ],
  },
  {
    id: '/abs.mp4',
    thumb: '/absthumb.png',
    brand: 'ABS',
    industry: 'HeadPhones',
    title: 'Wherever you go, let the music lead the way. In a World Full of Noise, I Choose My Own Melody',
    ongoing: true,
    stats: [
      { value: '26', label: 'Meetings Booked' },
      { value: '67%', label: 'ROI', purple: true },
    ],
  },
  {
    id: 'tbrCUDAki6M',
    brand: 'NEET',
    industry: 'Education',
    title: 'NEET PG 2025 Result Out 🚨 | Score, Rank, Cut-Off & Counselling Updates',
    ongoing: false,
    stats: [
      { value: '43%', label: 'popular' },
      { value: '12K', label: 'views', purple: true },
    ],
  },
];

export default workVideos;
