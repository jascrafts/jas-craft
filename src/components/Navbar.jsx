import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl"
    >
      <div
        className="rounded-full px-8 py-3.5 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(20,20,24,0.95)' : 'rgba(20,20,24,0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo — overflow outside pill so navbar height stays compact */}
        <div style={{ position: 'relative', height: '36px', width: '90px', overflow: 'visible' }}>
          <img
            src="/logo.png"
            alt="JAS Clickcraft"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              height: '90px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Work', 'Services', 'About', 'Journal', 'Careers'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium transition-colors"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)' }}
        >
          Start a Project
          <ArrowRight size={15} />
        </button>

        {/* Mobile menu toggle */}
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
          {['Work', 'Services', 'About', 'Journal', 'Careers'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-white/70 hover:text-white text-sm font-medium">
              {link}
            </a>
          ))}
          <button
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
