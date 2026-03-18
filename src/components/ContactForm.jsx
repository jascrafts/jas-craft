import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import avatar1 from '../assets/avatar3.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar1.jpg';

const TO = 'jascrafts72@gmail.com';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Project Inquiry from ${form.name || 'Website'}`);
    const body = encodeURIComponent(
`Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone || 'N/A'}
Service Interest: ${form.service || 'N/A'}

Message:
${form.message}`
    );
    window.open(`https://mail.google.com/mail/?view=cm&to=${TO}&su=${subject}&body=${body}`, '_blank');
  };
  return (
    <section id="contact" className="py-28 px-6" style={{ background: '#0D0D0F' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(123,94,167,0.12)', color: '#8B6BB5', border: '1px solid rgba(123,94,167,0.25)' }}
          >
            Get In Touch
          </span>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-3">Let's Start Your Growth Journey</h3>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Ready to elevate your marketing? Get in touch with our team today.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden flex flex-col lg:flex-row"
          style={{ background: '#141418', border: '1px solid #2A2A35' }}
        >
          {/* Left info panel */}
          <div
            className="lg:w-[42%] p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(123,94,167,0.2) 0%, rgba(232,149,109,0.1) 100%)',
            }}
          >
            <div>
              <h4 className="text-3xl font-black text-white mb-5 leading-tight">
                We'd love to hear from you
              </h4>
              <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Whether you're looking to scale your business, launch a new campaign, or explore partnership opportunities, our team is here to help.
              </p>

              <div className="flex items-center gap-4 mb-10">
                <div className="flex -space-x-3">
                  {[avatar1, avatar2, avatar3].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-11 h-11 rounded-full object-cover"
                      style={{ border: '2px solid #141418' }}
                      alt={`Team member ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Our expert team is ready to help
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-gradient mb-1">{s.value}</div>
                  <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div
            className="lg:w-[58%] p-10 lg:p-14"
            style={{ background: '#7B5EA7' }}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>Name *</label>
                  <input type="text" placeholder="Your full name" required value={form.name} onChange={set('name')}
                    className="w-full rounded-xl px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>Email *</label>
                  <input type="email" placeholder="your@email.com" required value={form.email} onChange={set('email')}
                    className="w-full rounded-xl px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/30"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>Phone</label>
                <input type="tel" placeholder="+91 (555) 000-0000" value={form.phone} onChange={set('phone')}
                  className="w-full rounded-xl px-5 py-3.5 text-sm text-white outline-none placeholder:text-white/30"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>Service Interest *</label>
                <select required value={form.service} onChange={set('service')}
                  className="w-full rounded-xl px-5 py-3.5 text-sm font-medium outline-none"
                  style={{ background: '#fff', color: '#0D0D0F', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <option value="">Select a service</option>
                  <option>Digital Marketing</option>
                  <option>Paid Ads</option>
                  <option>Brand & Identity</option>
                  <option>Social Media Strategy</option>
                  <option>Search & SEO</option>
                  <option>Content & Copywriting</option>
                  <option>Marketing Automation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>Message *</label>
                <textarea rows={4} placeholder="Tell us about your project..." required value={form.message} onChange={set('message')}
                  className="w-full rounded-xl px-5 py-3.5 text-sm text-white outline-none resize-none placeholder:text-white/30"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }} />
              </div>

              <button type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold transition-all hover:opacity-95"
                style={{ background: 'linear-gradient(135deg, #8B6BB5 0%, #E8956D 100%)', color: '#fff' }}>
                Get Started
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
