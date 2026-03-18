const CookiePolicy = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff', padding: '80px 24px' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#8B6BB5', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>← Back to Home</a>
      <h1 style={{ fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>Cookie Policy</h1>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '48px' }}>Last updated: March 2026</p>

      {[
        { title: '1. What Are Cookies', body: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.' },
        { title: '2. How We Use Cookies', body: 'We use cookies to understand how visitors interact with our website, remember your preferences, analyze site traffic and performance, and provide a better user experience.' },
        { title: '3. Types of Cookies We Use', body: 'Essential Cookies: Required for the website to function properly. Analytics Cookies: Help us understand how visitors use our site (e.g., Google Analytics). Preference Cookies: Remember your settings and preferences for future visits.' },
        { title: '4. Third-Party Cookies', body: 'Some cookies on our site are set by third-party services such as Google Analytics. These third parties have their own privacy policies governing the use of this information.' },
        { title: '5. Managing Cookies', body: 'You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect the functionality of our website.' },
        { title: '6. Updates to This Policy', body: 'We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.' },
        { title: '7. Contact Us', body: 'If you have questions about our use of cookies, please contact us at jascrafts72@gmail.com.' },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '10px', color: '#8B6BB5' }}>{s.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '15px' }}>{s.body}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CookiePolicy;
