import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import blogPosts from '../data/blogPosts';

const Blog = () => (
  <section id="insights" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-3">Insights</h2>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Strategies, insights, and ideas from our team of growth experts
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:opacity-80 mt-6 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"
          style={{ background: 'linear-gradient(135deg, #8B6BB5, #E8956D)', color: '#fff' }}
        >
          View All Articles <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              to={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden cursor-pointer transition-all flex flex-col h-full"
              style={{ background: '#141418', border: '1px solid #2A2A35', textDecoration: 'none', display: 'flex' }}
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
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-black uppercase tracking-widest mb-4 block" style={{ color: '#8B6BB5' }}>
                  {post.category}
                </span>
                <h4 className="text-base font-bold text-white mb-3 transition-colors group-hover:text-[#8B6BB5] flex-1">
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
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
