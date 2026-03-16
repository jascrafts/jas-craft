import { motion } from 'framer-motion';
import { Target, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: '340+', label: 'Projects Delivered', color: '#E8956D' },
  { value: '98%', label: 'Retention', color: '#8B6BB5' },
  { value: '12+', label: 'Experience', color: '#fff' },
  { value: '24', label: 'Team Specialists', color: '#E8956D' },
];

const BENEFITS = [
  { title: 'Results over reports', desc: 'We care about growth metrics that matter, not vanity numbers.' },
  { title: 'Data-led, human-crafted', desc: 'Strategic decisions backed by data, executed with creative excellence.' },
  { title: 'Long-term partnership', desc: 'We build lasting relationships, not just campaigns.' },
];

const BENEFIT_ICONS = [Target, Users, TrendingUp];

const EngineerGrowth = () => {
  return (
    <section style={{ background: '#F0EDE8' }} className="py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-black mb-8">
            We don't just run campaigns. We{' '}
            <span style={{ color: '#7B5EA7' }}>engineer</span> growth —{' '}
            obsessively.
          </h2>
          <p className="text-black/50 text-base leading-relaxed mb-6">
            Since 2012, we've partnered with ambitious brands to unlock exponential growth through strategic marketing, creative excellence, and relentless optimization.
          </p>
          <p className="text-black/50 text-base leading-relaxed mb-10">
            We're not an agency that takes orders. We're a growth partner that challenges assumptions, tests hypotheses, and delivers measurable results.
          </p>

          <ul className="space-y-6">
            {BENEFITS.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(123,94,167,0.12)', color: '#7B5EA7' }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm mb-0.5">{b.title}</div>
                    <div className="text-black/45 text-sm">{b.desc}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Right: stat grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl p-8 ${i === stats.length - 1 ? 'col-span-2' : ''}`}
              style={{
                background: '#1A1A22',
                border: i === stats.length - 1 ? '1px solid rgba(139,107,181,0.4)' : '1px solid #2A2A35',
              }}
            >
              <div
                className="text-4xl font-black mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {stat.label}
              </div>
              {i === stats.length - 1 && (
                <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  Average Client Revenue Growth — Measured over a 24-month period
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineerGrowth;
