import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    category: 'cricit',
    title: 'मेजर लीग क्रिकेट में चमके सौरभ नेत्रवलकर, ट्रेविस हैड और स्मिथ ने भी लगाया रनों का अम्बार',
    excerpt: 'मेजर लीग क्रिकेट (एमएलसी) 2024 का सीजन बेहद रोमांचक रहा। इस टूर्नामेंट में कुल छह टीमों ने भाग लिया और सभी टीमों ने अपने बेहतरीन प्रदर्शन से दर्शकों का दिल जीता।',
    date: 'July 30, 2024',
    readTime: '18 min read',
    url: 'https://cricit.com/cricket/%E0%A4%AE%E0%A5%87%E0%A4%9C%E0%A4%B0-%E0%A4%B2%E0%A5%80%E0%A4%97-%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%87%E0%A4%9F-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%9A%E0%A4%AE%E0%A4%95%E0%A5%87/',
    thumb: '/blogcrickt.jpg',
  },
  {
    category: 'cricit',
    title: 'India start campaign sith 7-wicket win over Pakistan',
    excerpt: 'India Women\'s Cricket Team started their Asia Cup campaign with a dominant performance against Pakistan Women.',
    date: 'July 20, 2024',
    readTime: '14 min read',
    url: 'https://cricit.com/cricket/india-start-campaign-sith-7-wicket-win-over-pakistan/',
    thumb: '/WomenCricket.jpg',
  },
  {
    category: 'cricit',
    title: 'Hardik pandya and Natasha confirm divorce',
    excerpt: 'Hardik Pandya, the star Indian all-rounder and his wife Natasha Stankovic announced their divorce on Thursday, July 18.',
    date: 'July 19, 2024',
    readTime: '7 min read',
    url: 'https://cricit.com/cricket/hardik-pandya-and-natasha-confirm-divorce/',
    thumb: '/hrdikpandya.jpg',
  },
];

const Blog = () => (
  <section id="insights" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-3">Insights</h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Strategies, insights, and ideas from our team of growth experts
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold transition-colors group" style={{ color: '#8B6BB5' }}>
          View All Articles
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, idx) => (
          <motion.a
            key={idx}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group rounded-2xl overflow-hidden cursor-pointer transition-all"
            style={{ background: '#141418', border: '1px solid #2A2A35', textDecoration: 'none', display: 'block' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,107,181,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A35'}
          >
            <div className="h-48 relative overflow-hidden">
              <img
                src={post.thumb}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <span className="text-xs font-black uppercase tracking-widest mb-4 block" style={{ color: '#8B6BB5' }}>
                {post.category}
              </span>
              <h4 className="text-base font-bold text-white mb-3 transition-colors group-hover:text-[#8B6BB5]">
                {post.title}
              </h4>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {post.excerpt}
              </p>
              <div
                className="flex items-center gap-5 text-xs font-bold uppercase tracking-widest pt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)' }}
              >
                <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
