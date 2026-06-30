import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Instagram } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import teamMembers from '../data/teamMembers';

const LandscapeCard = ({ member, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: idx * 0.08 }}
    className="group flex flex-col sm:flex-row items-center sm:items-stretch gap-0 rounded-3xl overflow-hidden"
    style={{ background: '#141418', border: '1px solid #2A2A35' }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,107,181,0.4)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A35'}
  >
    {/* Photo — left side */}
    <div className="relative flex-shrink-0 w-full sm:w-52 h-52 sm:h-auto overflow-hidden">
      <img
        src={member.avatar}
        alt={member.name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* gradient overlay on right edge */}
      <div
        className="hidden sm:block absolute inset-y-0 right-0 w-12"
        style={{ background: 'linear-gradient(to right, transparent, #141418)' }}
      />
    </div>

    {/* Info — right side */}
    <div className="flex flex-col justify-center px-8 py-7 flex-1">
      {/* Index number */}
      <span
        className="text-xs font-black uppercase tracking-widest mb-3"
        style={{ color: 'rgba(255,255,255,0.15)' }}
      >
        {String(idx + 1).padStart(2, '0')}
      </span>

      <h3 className="text-2xl font-black text-white mb-2">{member.name}</h3>

      <span
        className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start"
        style={{ background: 'linear-gradient(135deg, rgba(123,94,167,0.25), rgba(232,149,109,0.15))', color: '#8B6BB5' }}
      >
        {member.role}
      </span>

      <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(255,255,255,0.45)' }}>
        {member.bio}
      </p>

      <div className="flex gap-3">
        <a
          href={member.linkedin}
          target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          <Linkedin size={14} />
        </a>
        <a
          href={member.instagram}
          target="_blank" rel="noopener noreferrer"
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          <Instagram size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

const TeamPage = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff' }}>
    <Seo
      title="Our Team — Meet the JAS Craft Crew"
      description="Meet the JAS Craft team — content strategists, performance marketers, videographers and editors crafting brand growth for ambitious businesses."
      path="/team"
    />
    <Navbar />
    <main className="pt-32 pb-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold mb-10 hover:opacity-80 transition-opacity"
          style={{ color: '#8B6BB5', textDecoration: 'none' }}
        >
          <ArrowRight size={15} style={{ transform: 'rotate(180deg)' }} /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(123,94,167,0.12)', color: '#8B6BB5', border: '1px solid rgba(123,94,167,0.25)' }}
          >
            The People Behind the Work
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Our Team</h1>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Meet the people who make it happen — strategists, creatives, and growth specialists all under one roof.
          </p>
        </div>

        {/* Landscape cards */}
        <div className="flex flex-col gap-5">
          {teamMembers.map((member, idx) => (
            <LandscapeCard key={idx} member={member} idx={idx} />
          ))}
        </div>

      </div>
    </main>
    <Footer />
  </div>
);

export default TeamPage;
