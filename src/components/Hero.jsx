import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TAG_LIST = [
  'Paid Ads','Email Marketing','Marketing Automation','Conversion Rate',
  'Social Media','SEO Growth','Content Strategy','Lead Generation',
  'Brand Identity','Analytics','Performance Marketing','Growth Strategy',
  'Customer Acquisition','Digital Strategy','Brand Awareness',
  'Engagement Rate','Campaign Optimization','Paid Search','Audience Targeting',
  'Email Automation','Content Marketing','Funnel Optimization','Growth Marketing',
  'Traffic Scaling','Conversion Optimization','Influencer Marketing',
  'Retention Strategy','Marketing Insights','Data Driven Growth',
  'Product Marketing','Growth Hacking','Revenue Optimization',
  'Digital Campaigns','Ad Performance','Audience Insights',
  'Brand Strategy','ROI Tracking','A/B Testing','Market Research','UX Optimization',
];

// Layer config — medium float speed + medium parallax
const LAYERS = [
  { floatSpd: 0.00040, floatAmp: 10, opacity: 0.25, blur: 2,  scale: 0.80, fs: 10, parallax: 0.10 },
  { floatSpd: 0.00060, floatAmp: 15, opacity: 0.55, blur: 0,  scale: 0.91, fs: 11, parallax: 0.22 },
  { floatSpd: 0.00085, floatAmp: 20, opacity: 0.90, blur: 0,  scale: 1.00, fs: 12, parallax: 0.38 },
];

// Grid-seed base positions so tags fill the full area evenly
function seedPositions(count, W, H) {
  const cols = Math.ceil(Math.sqrt(count * (W / H)));
  const rows = Math.ceil(count / cols);
  const cW = W / cols, cH = H / rows;
  const pts = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (pts.length >= count) break;
      pts.push({
        x: cW * c + cW * 0.12 + Math.random() * cW * 0.76,
        y: cH * r + cH * 0.12 + Math.random() * cH * 0.76,
      });
    }
  }
  return pts;
}

function buildParticles(W, H) {
  const seeds = seedPositions(TAG_LIST.length, W, H);
  return TAG_LIST.map((text, i) => {
    const layer = LAYERS[i % LAYERS.length];
    return {
      text, layer,
      bx: seeds[i].x,   // base x (fixed)
      by: seeds[i].y,   // base y (fixed)
      phase: Math.random() * Math.PI * 2,   // float phase offset
      phaseX: Math.random() * Math.PI * 2,  // independent x phase
      w: 0, h: 0,
    };
  });
}

const FloatingCanvas = () => {
  const wrapRef = useRef(null);
  const domRefs = useRef([]);
  const parts   = useRef([]);
  // Smoothed mouse offset from container centre (-0.5 to 0.5)
  const mouse   = useRef({ nx: 0, ny: 0 });   // normalised target
  const smooth  = useRef({ nx: 0, ny: 0 });   // lerped value
  const rafRef  = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const W = el.offsetWidth, H = el.offsetHeight;
    parts.current = buildParticles(W, H);

    requestAnimationFrame(() => {
      domRefs.current.forEach((d, i) => {
        if (d) { parts.current[i].w = d.offsetWidth; parts.current[i].h = d.offsetHeight; }
      });
    });

    const onMove = e => {
      const r = el.getBoundingClientRect();
      // Only track when cursor is over the right half container
      if (e.clientX < r.left) { mouse.current.nx = 0; mouse.current.ny = 0; return; }
      // Normalise to -0.5 … +0.5 relative to container centre
      mouse.current.nx = (e.clientX - r.left)  / r.width  - 0.5;
      mouse.current.ny = (e.clientY - r.top)   / r.height - 0.5;
    };
    const onLeave = () => { mouse.current.nx = 0; mouse.current.ny = 0; };
    // Listen on window so pointer-events on child tags don't block tracking
    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    const LERP = 0.06;
    const MAX_PARALLAX = 70; // medium parallax range

    const tick = ts => {
      const cW = el.offsetWidth, cH = el.offsetHeight;

      // Lerp smoothed mouse toward target
      smooth.current.nx += (mouse.current.nx - smooth.current.nx) * LERP;
      smooth.current.ny += (mouse.current.ny - smooth.current.ny) * LERP;

      parts.current.forEach((p, i) => {
        const layer = p.layer;

        // Slow sinusoidal float around base position
        const floatY = Math.sin(ts * layer.floatSpd + p.phase)  * layer.floatAmp;
        const floatX = Math.sin(ts * layer.floatSpd * 0.7 + p.phaseX) * layer.floatAmp * 0.5;

        // Parallax offset — each layer moves a different fraction of mouse delta
        const px = smooth.current.nx * MAX_PARALLAX * layer.parallax;
        const py = smooth.current.ny * MAX_PARALLAX * layer.parallax;

        let x = p.bx + floatX + px;
        let y = p.by + floatY + py;

        // Soft clamp — keep inside container (y max 78% to stay above stats bar)
        const hw = (p.w || 80) / 2, hh = (p.h || 26) / 2;
        const yMax = cH * 0.78;
        x = Math.max(hw + 2, Math.min(cW - hw - 2, x));
        y = Math.max(hh + 2, Math.min(yMax - hh, y));

        const d = domRefs.current[i];
        if (d) d.style.transform = `translate3d(${x - hw}px,${y - hh}px,0) scale(${layer.scale})`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0" style={{ overflow: 'hidden' }}>
      {TAG_LIST.map((text, i) => {
        const layer = LAYERS[i % LAYERS.length];
        return (
          <div
            key={i}
            ref={el => domRefs.current[i] = el}
            onMouseEnter={e => {
              const t = e.currentTarget;
              t.style.opacity = '1';
              t.style.background = 'rgba(123,94,167,0.18)';
              t.style.borderColor = 'rgba(139,107,181,0.8)';
              t.style.boxShadow = '0 0 0 1.5px rgba(139,107,181,0.4), 0 8px 28px rgba(123,94,167,0.28)';
              t.style.color = '#fff';
              t.style.zIndex = '30';
            }}
            onMouseLeave={e => {
              const t = e.currentTarget;
              t.style.opacity = String(layer.opacity);
              t.style.background = 'rgba(255,255,255,0.04)';
              t.style.borderColor = 'rgba(255,255,255,0.1)';
              t.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.06)';
              t.style.color = 'rgba(255,255,255,0.6)';
              t.style.zIndex = String(i % LAYERS.length + 1);
            }}
            style={{
              position: 'absolute', top: 0, left: 0,
              padding: `6px ${layer.fs + 5}px`,
              borderRadius: '999px',
              fontSize: `${layer.fs}px`,
              fontWeight: 600,
              whiteSpace: 'nowrap',
              cursor: 'default',
              userSelect: 'none',
              willChange: 'transform',
              transition: 'opacity .3s, box-shadow .3s, background .3s, color .3s, border-color .3s',
              opacity: layer.opacity,
              filter: layer.blur > 0 ? `blur(${layer.blur}px)` : 'none',
              zIndex: i % LAYERS.length + 1,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              color: 'rgba(255,255,255,0.6)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

const Hero = () => (
  <section
    className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 overflow-hidden"
    style={{ background: '#0D0D0F' }}
  >
    <div className="glow-purple w-[500px] h-[500px] top-[-80px] right-[-60px]" />
    <div className="glow-orange  w-[350px] h-[350px] bottom-[-40px] right-[15%]" />

    {/* Parallax floating tags — right half only */}
    <div className="absolute inset-y-0 right-0 w-1/2" style={{ zIndex: 2 }}>
      <FloatingCanvas />
    </div>

    {/* Left content */}
    <div className="max-w-7xl mx-auto w-full relative" style={{ zIndex: 10 }}>
      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="text-xs font-bold uppercase tracking-[0.3em] mb-8"
        style={{ color: 'rgba(255,255,255,0.35)' }}
      >
        Growth Agency — Est. 2026
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
        <h1 className="text-7xl md:text-[9rem] font-black uppercase leading-[0.9] tracking-tight mb-10 max-w-2xl">
          <span className="block text-white">WE MAKE</span>
          <span className="block" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)', color: 'transparent' }}>BRANDS</span>
          <span className="block" style={{
            background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>GROW</span>
        </h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-sm mb-10">
        <p className="text-sm font-bold text-white mb-2">Your Growth Partner in digital age</p>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Bold strategies that turn ambitions into measurable outcomes. Data-driven, creatively led, obsessively executed across every channel.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex items-center gap-4 mb-20">
        <button
          onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)' }}
        >
          Get Free Audit <ArrowRight size={16} />
        </button>
        <button
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:bg-white/10"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          View Services
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap gap-12 pt-10"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        {[
          { value: '50+',   label: 'Clients Growth' },
          { value: '98%',    label: 'Retention Rate' },
          { value: '5+ Yrs', label: 'In Business' },
        ].map((s, i) => (
          <div key={i}>
            <div className="text-3xl font-black mb-1" style={{
              background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{s.value}</div>
            <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
