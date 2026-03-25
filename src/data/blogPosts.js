// ─── ADD NEW BLOG POSTS HERE ─────────────────────────────────────────────────
// slug: URL-friendly identifier (no spaces, use hyphens)
// thumb: image path from /public or full URL
// content: array of { type, text } blocks
//   types: 'paragraph', 'heading', 'subheading', 'quote', 'list'
//   for 'list': use { type: 'list', items: ['item1', 'item2'] }

const blogPosts = [
  {
    slug: 'major-league-cricket-2024',
    category: 'Cricket',
    title: 'मेजर लीग क्रिकेट में चमके सौरभ नेत्रवलकर, ट्रेविस हैड और स्मिथ ने भी लगाया रनों का अम्बार',
    excerpt: 'मेजर लीग क्रिकेट (एमएलसी) 2024 का सीजन बेहद रोमांचक रहा। इस टूर्नामेंट में कुल छह टीमों ने भाग लिया।',
    date: 'July 30, 2024',
    readTime: '18 min read',
    thumb: '/blogcrickt.jpg',
    content: [
      { type: 'paragraph', text: 'मेजर लीग क्रिकेट (एमएलसी) 2024 का सीजन बेहद रोमांचक रहा। इस टूर्नामेंट में कुल छह टीमों ने भाग लिया और सभी टीमों ने अपने बेहतरीन प्रदर्शन से दर्शकों का दिल जीता।' },
      { type: 'heading', text: 'सौरभ नेत्रवलकर का शानदार प्रदर्शन' },
      { type: 'paragraph', text: 'भारतीय मूल के अमेरिकी क्रिकेटर सौरभ नेत्रवलकर ने इस सीजन में अपनी गेंदबाजी से सभी को प्रभावित किया। उन्होंने टूर्नामेंट में कई महत्वपूर्ण विकेट लिए और अपनी टीम को जीत दिलाने में अहम भूमिका निभाई।' },
      { type: 'heading', text: 'ट्रेविस हैड और स्मिथ की बल्लेबाजी' },
      { type: 'paragraph', text: 'ऑस्ट्रेलियाई बल्लेबाज ट्रेविस हैड और स्टीव स्मिथ ने भी इस टूर्नामेंट में अपनी बल्लेबाजी का जलवा दिखाया। दोनों ने मिलकर कई बड़ी पारियां खेलीं और रनों का अंबार लगाया।' },
      { type: 'quote', text: 'एमएलसी ने अमेरिका में क्रिकेट को एक नई पहचान दी है और यह टूर्नामेंट हर साल और बड़ा होता जा रहा है।' },
      { type: 'paragraph', text: 'टूर्नामेंट के फाइनल में रोमांचक मुकाबला देखने को मिला जहां दर्शकों को क्रिकेट का असली मजा आया। एमएलसी ने साबित किया कि अमेरिका में भी क्रिकेट की जड़ें मजबूत हो रही हैं।' },
    ],
  },
  {
    slug: 'india-women-7-wicket-win-pakistan',
    category: 'Cricket',
    title: 'India start campaign with 7-wicket win over Pakistan',
    excerpt: "India Women's Cricket Team started their Asia Cup campaign with a dominant performance against Pakistan Women.",
    date: 'July 20, 2024',
    readTime: '14 min read',
    thumb: '/WomenCricket.jpg',
    content: [
      { type: 'paragraph', text: "India Women's Cricket Team started their Asia Cup campaign with a dominant performance against Pakistan Women, securing a convincing 7-wicket victory that set the tone for the rest of the tournament." },
      { type: 'heading', text: 'A Dominant Bowling Display' },
      { type: 'paragraph', text: "India's bowlers were on fire from the very first over. The pace attack rattled Pakistan's top order early, and the spinners kept the pressure on throughout the middle overs. Pakistan were restricted to a below-par total that India chased down with ease." },
      { type: 'heading', text: 'Batting Masterclass' },
      { type: 'paragraph', text: "The Indian batting lineup showed great composure in the chase. The openers gave a solid start and the middle order finished the job professionally. It was a complete team performance that will give India great confidence going into the rest of the tournament." },
      { type: 'quote', text: "We came here to win and we executed our plans perfectly. The team is in great shape and we're looking forward to the challenges ahead." },
      { type: 'paragraph', text: "This victory not only gave India two crucial points but also sent a strong message to the other teams in the tournament. India look like strong contenders for the Asia Cup title this year." },
    ],
  },
  {
    slug: 'hardik-pandya-natasha-divorce',
    category: 'Cricket',
    title: 'Hardik Pandya and Natasha confirm divorce',
    excerpt: 'Hardik Pandya, the star Indian all-rounder and his wife Natasha Stankovic announced their divorce on Thursday, July 18.',
    date: 'July 19, 2024',
    readTime: '7 min read',
    thumb: '/hrdikpandya.jpg',
    content: [
      { type: 'paragraph', text: 'Hardik Pandya, the star Indian all-rounder and his wife Natasha Stankovic announced their divorce on Thursday, July 18, bringing an end to their marriage that had been the subject of much speculation in recent months.' },
      { type: 'heading', text: 'The Announcement' },
      { type: 'paragraph', text: 'Both Hardik and Natasha took to their respective social media handles to confirm the news, asking fans and media to respect their privacy during this difficult time. The couple, who got married in 2020, have a son together named Agastya.' },
      { type: 'quote', text: 'After 4 years of being together, Natasha and I have decided to part ways. We tried our best together and are proud of what we built. Our priority is and will always be Agastya.' },
      { type: 'heading', text: 'Impact on Cricket' },
      { type: 'paragraph', text: "Despite the personal turmoil, Hardik has continued to perform for the Indian cricket team. His ability to separate personal life from professional commitments has been praised by teammates and coaches alike. The cricketing fraternity has largely shown support for both individuals during this challenging period." },
      { type: 'paragraph', text: 'Fans across the country have expressed their support for both Hardik and Natasha, wishing them well as they navigate this new chapter in their lives.' },
    ],
  },
];

export default blogPosts;
