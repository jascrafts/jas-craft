import { motion } from 'framer-motion';
import { Compass, Lightbulb, Rocket, BarChart2 } from 'lucide-react';

const STEPS = [
  { number: '01', title: 'Discover & Define', description: 'Deep dive into your business, audience, competitors, and opportunities. We define clear goals and success metrics.', Icon: Compass },
  { number: '02', title: 'Strategise & Plan', description: 'Craft a custom growth roadmap with data-backed strategies, channel selection, and creative direction.', Icon: Lightbulb },
  { number: '03', title: 'Execute & Launch', description: 'Bring strategies to life with precision execution across all channels, content, and creative assets.', Icon: Rocket },
  { number: '04', title: 'Optimise & Scale', description: 'Continuous testing, learning, and optimization to maximize ROI and scale what works.', Icon: BarChart2 },
];

const Timeline = () => {
  return (
    <section id="process" className="py-28 px-6 overflow-hidden" style={{ background: '#0D0D0F' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">How We Work</h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            A proven process refined over 12 years and 340+ successful partnerships
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #7B5EA7 30%, #7B5EA7 70%, transparent)' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {STEPS.map(({ number, title, description, Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-start lg:items-center lg:text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-black text-white mb-8"
                  style={{ background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)' }}
                >
                  {number}
                </div>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(123,94,167,0.15)', color: '#8B6BB5' }}
                >
                  <Icon size={18} />
                </div>
                <h4 className="text-base font-bold text-white mb-3">{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
