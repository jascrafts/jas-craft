import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Vivek Sharma',
    role: 'CEO, ABS Headphones',
    text: 'A big shoutout to Jas Craft for the amazing marketing work they’ve done for us. They truly understood our vision and translated it into a successful campaign. It’s rare to find a team so dedicated and results-driven. Thank you for helping us reach new heights.',
    initials: 'VS',
  },
  {
    name: 'Chaudhary properties',
    role: 'CEO, Anurag',
    text: 'A huge thank you to the Jas Craft team for their exceptional marketing support. Their strategic approach and creativity have been instrumental in our recent growth. The results speak for themselves. Highly recommended for any brand looking to scale.',
    initials: 'CP',
  },
  {
    name: 'Nitesh sharma',
    role: 'Founder',
    text: 'A massive shoutout to the team at Jas Craft! They recently created a video for our shop, Mental Momos, and the response has been incredible—it went viral! Their creativity and execution truly captured our brands vibe. Highly recommend them for anyone looking to make a real impact.',
    initials: 'NS',
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
                  {[...Array(5)].map((_, i) => {
                    // Last card (idx===2): show 4 full + 1 half star
                    const isHalf = idx === 2 && i === 4;
                    return (
                      <span key={i} style={{ position: 'relative', display: 'inline-block', width: 14, height: 14 }}>
                        <Star size={14} fill="rgba(232,149,109,0.25)" color="rgba(232,149,109,0.25)" />
                        {!isHalf && (
                          <span style={{ position: 'absolute', inset: 0 }}>
                            <Star size={14} fill="#E8956D" color="#E8956D" />
                          </span>
                        )}
                        {isHalf && (
                          <span style={{ position: 'absolute', inset: 0, overflow: 'hidden', width: '50%' }}>
                            <Star size={14} fill="#E8956D" color="#E8956D" />
                          </span>
                        )}
                      </span>
                    );
                  })}
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
