const PrivacyPolicy = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff', padding: '80px 24px' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#8B6BB5', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>← Back to Home</a>
      <h1 style={{ fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>Privacy Policy</h1>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '48px' }}>Last updated: March 2026</p>

      {[
        { title: '1. Information We Collect', body: 'We collect information you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide when filling out our contact forms or requesting a free audit.' },
        { title: '2. How We Use Your Information', body: 'We use the information we collect to respond to your inquiries, provide our marketing services, send you updates and promotional materials (with your consent), and improve our website and services.' },
        { title: '3. Information Sharing', body: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our website and conducting our business.' },
        { title: '4. Data Security', body: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
        { title: '5. Cookies', body: 'Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our site.' },
        { title: '6. Your Rights', body: 'You have the right to access, correct, or delete your personal data at any time. To exercise these rights, please contact us at jascrafts72@gmail.com.' },
        { title: '7. Contact Us', body: 'If you have any questions about this Privacy Policy, please contact us at jascrafts72@gmail.com.' },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '10px', color: '#8B6BB5' }}>{s.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '15px' }}>{s.body}</p>
        </div>
      ))}
    </div>
  </div>
);

export default PrivacyPolicy;
