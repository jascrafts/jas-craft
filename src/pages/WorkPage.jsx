import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { VideoCard, VideoModal } from '../components/ImpactStats';
import workVideos from '../data/workVideos';

const WorkPage = () => {
  const [playing, setPlaying] = useState(null);
  const [filter, setFilter] = useState('All');

  const industries = ['All', ...new Set(workVideos.map(v => v.industry))];
  const filtered = filter === 'All' ? workVideos : workVideos.filter(v => v.industry === filter);

  return (
    <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <main className="pt-32 pb-28 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold mb-10 hover:opacity-80 transition-opacity"
            style={{ color: '#8B6BB5', textDecoration: 'none' }}
          >
            <ArrowRight size={15} style={{ transform: 'rotate(180deg)' }} /> Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(123,94,167,0.12)', color: '#8B6BB5', border: '1px solid rgba(123,94,167,0.25)' }}
            >
              Real Campaigns. Real Results.
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Our Work</h1>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Watch how we grow brands across every industry.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {industries.map(ind => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className="text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full transition-all"
                style={filter === ind
                  ? { background: 'linear-gradient(135deg, #8B6BB5, #E8956D)', color: '#fff' }
                  : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)' }
                }
              >
                {ind}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <VideoCard v={v} index={i} onPlay={setPlaying} />
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-20 text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
              No videos in this category yet.
            </p>
          )}
        </div>
      </main>

      <VideoModal v={playing} onClose={() => setPlaying(null)} />
      <Footer />
    </div>
  );
};

export default WorkPage;
