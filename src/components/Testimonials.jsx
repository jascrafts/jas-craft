import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    text: 'Working with JSS was a game-changer for our brand. Our revenue increased by 150% within the first six months of our partnership.',
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, Lumina',
    text: 'The technical precision and creative flair that JSS brings to the table is unmatched. They truly understand what it means to engineer growth.',
    initials: 'MC',
  },
  {
    name: 'Emma Davis',
    role: 'Founder, Bloom Digital',
    text: 'Their strategic approach to digital marketing helped us dominate a highly competitive market. We couldn\'t be happier with the results.',
    initials: 'ED',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: '#8B6BB5' }}>
            Client Stories
          </p>
          <h3 className="text-4xl md:text-5xl font-black text-white">Trusted by innovative brands.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl flex flex-col justify-between transition-transform hover:-translate-y-1"
              style={{ background: '#141418', border: '1px solid #2A2A35' }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#E8956D" color="#E8956D" />
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-8 italic" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #8B6BB5, #E8956D)' }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{review.name}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {review.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
