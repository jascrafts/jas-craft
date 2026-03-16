import { motion } from 'framer-motion';
import { TrendingUp, Share2, Palette, Search, FileText, Zap } from 'lucide-react';

const SERVICES = [
  { title: 'Digital Marketing', description: 'Performance campaigns that drive revenue, not just traffic. We build and optimize multi-channel strategies.', Icon: TrendingUp },
  { title: 'Social Media Strategy', description: 'Content that builds communities and converts followers into loyal customers across all platforms.', Icon: Share2 },
  { title: 'Brand & Identity', description: 'Create memorable brands that stand out, resonate deeply, and drive long-term value.', Icon: Palette },
  { title: 'Search & SEO', description: 'Rank higher, get found faster. Technical SEO and content strategies that dominate search.', Icon: Search },
  { title: 'Content & Copywriting', description: 'Words that sell. Strategic content that educates, engages, and converts at every touchpoint.', Icon: FileText },
  { title: 'Marketing Automation', description: 'Scale your growth with intelligent automation that nurtures leads and drives conversions 24/7.', Icon: Zap },
];

const Services = () => {
  return (
    <section id="services" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">Our Craft</h2>
          <p className="text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>
            We combine strategic thinking with creative execution to deliver growth that lasts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ title, description, Icon }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group p-8 rounded-2xl transition-all duration-300 cursor-pointer"
              style={{ background: '#141418', border: '1px solid #2A2A35' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(139,107,181,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2A2A35'}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: 'rgba(123,94,167,0.15)', color: '#8B6BB5' }}
              >
                <Icon size={20} />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
