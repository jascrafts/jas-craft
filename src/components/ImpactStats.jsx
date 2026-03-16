import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink } from 'lucide-react';

// ─── Add/edit your videos here ───────────────────────────────────────────────
// id: YouTube video ID from https://www.youtube.com/watch?v=VIDEO_ID
const VIDEOS = [
  {
    id: 'dQw4w9WgXcQ',
    brand: 'AKS',
    industry: 'Auto Auctions & Marketplaces',
    title: 'Unlocking New Seller Revenue at Scale',
    ongoing: false,
    stats: [
      { value: '44',    label: 'Meetings Booked' },
      { value: '$35K+', label: 'Revenue', purple: true },
    ],
  },
  {
    id: 'ScMzIvxBSi4',
    brand: 'UNORE',
    industry: 'Design Agency',
    title: 'Scaling Meetings Without Hiring In-House',
    ongoing: true,
    stats: [
      { value: '36',   label: 'Meetings Booked' },
      { value: '650%', label: 'ROI', purple: true },
    ],
  },
  {
    id: 'ysz5S6PUM-U',
    brand: 'Arounda',
    industry: 'UI/UX & Development',
    title: 'From Cold Outreach to a Predictable Pipeline',
    ongoing: false,
    stats: [
      { value: '62',    label: 'Meetings Booked' },
      { value: '$112K', label: 'Revenue', purple: true },
    ],
  },
];

const thumb = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

function VideoCard({ v, index, onPlay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onPlay(v)}
    >
      {/* Thumbnail */}
      <div className="relative rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: '16/9', background: '#141418' }}>
        <img
          src={thumb(v.id)}
          alt={v.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={e => { e.target.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`; }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.38)' }} />

        {/* Brand badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-black text-white"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          {v.brand}
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.35)' }}
          >
            <Play size={20} fill="white" className="text-white ml-1" />
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full"
          style={{ background: 'linear-gradient(135deg, #8B6BB5, #E8956D)', color: '#fff' }}
        >
          {v.industry}
        </span>
        {v.ongoing && (
          <span
            className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: 'rgba(139,107,181,0.2)', color: '#8B6BB5', border: '1px solid rgba(139,107,181,0.4)' }}
          >
            Ongoing
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="text-base font-bold text-white mb-4 leading-snug group-hover:text-[#8B6BB5] transition-colors">
        {v.title}
      </h4>

      {/* Stats */}
      <div className="flex gap-3">
        {v.stats.map((s, i) => (
          <div key={i} className="flex-1 rounded-xl px-4 py-3" style={{ background: '#1A1A22', border: '1px solid #2A2A35' }}>
            <div className="text-xl font-black mb-0.5" style={{ color: s.purple ? '#8B6BB5' : '#fff' }}>{s.value}</div>
            <div className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function VideoModal({ v, onClose }) {
  if (!v) return null;
  return (
    <AnimatePresence>
      <motion.div
        key="bd"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 flex items-center justify-center px-4"
        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)', zIndex: 9999 }}
        onClick={onClose}
      >
        <motion.div
          key="md"
          initial={{ scale: 0.93, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.93, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="w-full max-w-4xl rounded-2xl overflow-hidden"
          style={{ background: '#141418', border: '1px solid #2A2A35' }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid #2A2A35' }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#8B6BB5' }}>{v.industry}</span>
              <h3 className="text-sm font-bold text-white mt-0.5">{v.title}</h3>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
              >
                <ExternalLink size={14} />
              </a>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
              >
                <X size={16} />
              </button>
            </div>
          </div>
          <div style={{ aspectRatio: '16/9' }}>
            <iframe
              src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
              title={v.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen className="w-full h-full" style={{ border: 'none' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const ImpactStats = () => {
  const [playing, setPlaying] = useState(null);

  return (
    <section id="work" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Our Work</h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Real campaigns. Real results. Watch how we grow brands.
          </p>
        </div>

        {/* 3 video cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((v, i) => (
            <VideoCard key={v.id} v={v} index={i} onPlay={setPlaying} />
          ))}
        </div>
      </div>

      <VideoModal v={playing} onClose={() => setPlaying(null)} />
    </section>
  );
};

export default ImpactStats;
