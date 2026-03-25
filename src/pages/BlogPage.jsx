import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import blogPosts from '../data/blogPosts';

const BlogPage = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff' }}>
    <Navbar />
    <main className="pt-32 pb-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ background: 'rgba(123,94,167,0.12)', color: '#8B6BB5', border: '1px solid rgba(123,94,167,0.25)' }}
          >
            JAS Craft Blog
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Insights</h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Strategies, insights, and ideas from our team of growth experts
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden flex flex-col h-full"
                style={{ background: '#141418', border: '1px solid #2A2A35', textDecoration: 'none', display: 'flex' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,107,181,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A35'}
              >
                {/* Thumbnail */}
                <div className="h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={post.thumb}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <span className="text-xs font-black uppercase tracking-widest mb-3 block" style={{ color: '#8B6BB5' }}>
                    {post.category}
                  </span>
                  <h2 className="text-base font-bold text-white mb-3 leading-snug transition-colors group-hover:text-[#8B6BB5] flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest pt-5"
                      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)' }}
                    >
                      <span className="flex items-center gap-1.5"><Calendar size={11} /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={11} /> {post.readTime}</span>
                    </div>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform mt-5" style={{ color: '#8B6BB5' }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default BlogPage;
