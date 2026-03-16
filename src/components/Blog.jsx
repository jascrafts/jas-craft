import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    category: 'Growth Strategy',
    title: 'How to Engineer 3x Growth in 1 Month',
    excerpt: 'The exact framework we use to help brands scale faster with data-driven marketing strategies.',
    date: 'Mar 1, 2026',
    readTime: '8 min read',
  },
  {
    category: 'Performance Marketing',
    title: 'Why Most Agencies Get ROAS Wrong',
    excerpt: 'Understanding true marketing ROI beyond surface-level metrics and vanity numbers.',
    date: 'Feb 25, 2026',
    readTime: '6 min read',
  },
  {
    category: 'Brand Building',
    title: 'Building a Brand That Lasts in 2026',
    excerpt: 'Modern brand strategy that combines emotional connection with performance-driven growth.',
    date: 'Feb 18, 2026',
    readTime: '10 min read',
  },
];

const Blog = () => (
  <section id="journal" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
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
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group rounded-2xl overflow-hidden cursor-pointer transition-all"
            style={{ background: '#141418', border: '1px solid #2A2A35' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,107,181,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A35'}
          >
            <div
              className="h-48 relative flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(123,94,167,0.25) 0%, rgba(232,149,109,0.15) 100%)' }}
            >
              <span className="text-3xl font-black tracking-tighter" style={{ color: 'rgba(255,255,255,0.06)' }}>
                OVRL
              </span>
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
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
