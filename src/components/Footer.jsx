import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

const COLS = [
  { heading: 'Services', links: ['Digital Marketing', 'Social Media Strategy', 'Brand & Identity', 'Search & SEO', 'Content & Copywriting', 'Marketing Automation'] },
  { heading: 'Company', links: ['About Us', 'Our Team', 'Careers', 'Case Studies', 'Blog', 'Contact'] },
  { heading: 'Resources', links: ['Free Audit', 'Growth Guide', 'Marketing Resources', 'Industry Reports', 'Webinars', 'Newsletter'] },
];

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6" style={{ background: '#0D0D0F', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-black uppercase tracking-tighter text-white mb-5">OVRL</div>
            <p className="text-sm leading-relaxed mb-7 max-w-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
              We engineer growth for ambitious brands through strategic marketing, creative excellence, and relentless optimization.
            </p>
            <div className="space-y-3 mb-7">
              <a href="mailto:hello@ovrl.agency" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Mail size={14} /> hello@ovrl.agency
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Phone size={14} /> +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <MapPin size={14} /> San Francisco, CA
              </div>
            </div>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-5">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.35)' }}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs uppercase tracking-widest font-bold" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.2)' }}>
          <div>?? 2026 OVRL. All rights reserved.</div>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
