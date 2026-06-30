import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, ArrowRight } from 'lucide-react';
import teamMembers from '../data/teamMembers';

const TeamCard = ({ member, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: idx * 0.1 }}
    className="group relative rounded-3xl overflow-hidden p-8 flex flex-col items-center text-center"
    style={{ background: '#141418', border: '1px solid #2A2A35' }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,107,181,0.4)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A35'}
  >
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(123,94,167,0.18) 0%, transparent 70%)', filter: 'blur(20px)' }}
    />
    <div className="relative mb-6">
      <div className="w-36 h-36 rounded-full overflow-hidden" style={{ border: '2px solid rgba(123,94,167,0.4)' }}>
        <img src={member.avatar} alt={member.name} loading="lazy" decoding="async" width="144" height="144" className="w-full h-full object-cover" />
      </div>
    </div>
    <h3 className="text-lg font-black text-white mb-1">{member.name}</h3>
    <span
      className="text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
      style={{ background: 'linear-gradient(135deg, rgba(123,94,167,0.2), rgba(232,149,109,0.15))', color: '#8B6BB5' }}
    >
      {member.role}
    </span>
    <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>{member.bio}</p>
    <div className="flex gap-3 mt-auto">
      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
        className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
        <Linkedin size={14} />
      </a>
      <a href={member.instagram} target="_blank" rel="noopener noreferrer"
        className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
        style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
        <Instagram size={14} />
      </a>
    </div>
  </motion.div>
);

const OurTeam = () => (
  <section id="team" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
    <div className="max-w-7xl mx-auto">
      <div className="relative text-center mb-20">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
          style={{ background: 'rgba(123,94,167,0.12)', color: '#8B6BB5', border: '1px solid rgba(123,94,167,0.25)' }}
        >
          The People Behind the Work
        </span>
        <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Our Team</h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.4)' }}>
          A small, focused team obsessed with results. No fluff — just people who know their craft.
        </p>
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl transition-all hover:opacity-80 mt-6 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"
          style={{ background: 'linear-gradient(135deg, #8B6BB5, #E8956D)', color: '#fff' }}
        >
          View Our Team <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.slice(0, 3).map((member, idx) => (
          <TeamCard key={idx} member={member} idx={idx} />
        ))}
      </div>
    </div>
  </section>
);

export { TeamCard };
export default OurTeam;
