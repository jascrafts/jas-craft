import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-10 px-6" style={{ background: '#0D0D0F' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden px-8 py-24 md:px-20 md:py-28 text-center"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #3D2B6B 0%, #1A1020 40%, #3D2010 100%)',
            }}
          />
          {/* Glow blobs */}
          <div
            className="absolute top-[-60px] left-[-60px] w-[350px] h-[350px] rounded-full blur-[100px]"
            style={{ background: '#7B5EA7', opacity: 0.35 }}
          />
          <div
            className="absolute bottom-[-60px] right-[-40px] w-[300px] h-[300px] rounded-full blur-[100px]"
            style={{ background: '#E8956D', opacity: 0.25 }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
              style={{ background: 'rgba(123,94,167,0.3)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <Sparkles size={26} style={{ color: '#E8956D' }} />
            </div>

            <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white mb-5 tracking-tight">
              Ready to Grow?
            </h2>
            <p className="text-base md:text-lg mb-12 max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Get a free marketing audit and discover your biggest growth opportunities.
            </p>

            {/* Email input row */}
            <div className="w-full max-w-lg">
              <div
                className="flex flex-col sm:flex-row gap-3 p-2 rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-transparent text-white text-sm px-5 py-3 outline-none placeholder:text-white/40"
                />
                <button
                  className="flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white whitespace-nowrap transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)' }}
                >
                  Get Free Audit
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                No credit card required. Takes 2 minutes to complete.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
