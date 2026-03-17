import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'About',        id: 'about' },
  { label: 'Services',     id: 'services' },
  { label: 'Process',      id: 'process' },
  { label: 'Work',         id: 'work' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Insights',     id: 'insights' },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver — highlight whichever section is most visible
  useEffect(() => {
    const observers = [];
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleLink = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl"
    >
      <div
        className="rounded-full px-8 py-2 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(20,20,24,0.75)' : 'rgba(20,20,24,0.35)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo + Brand Name — clicks scroll to top */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2"
          style={{ textDecoration: 'none' }}
        >
          <img
            src="/logo.png"
            alt="JAS Craft"
            style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: 900, letterSpacing: '-0.01em' }}>JAS Craft</span>
        </a>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map(({ label, id }) => {
            const isActive = activeId === id;
            return (
              <button
                key={id}
                onClick={() => handleLink(id)}
                className="text-sm font-medium transition-colors relative"
                style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.5)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                {label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: 'linear-gradient(90deg, #8B6BB5, #E8956D)' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)' }}
        >
          Start a Project
          <ArrowRight size={15} />
        </button>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="mt-2 rounded-2xl px-6 py-6 flex flex-col gap-4 md:hidden"
          style={{ background: 'rgba(20,20,24,0.97)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleLink(id)}
              className="text-left text-sm font-medium transition-colors"
              style={{ color: activeId === id ? '#fff' : 'rgba(255,255,255,0.6)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo('contact'); setMenuOpen(false); }}
            className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-white px-5 py-3 rounded-full"
            style={{ background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)' }}
          >
            Start a Project <ArrowRight size={15} />
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
