import Seo from '../components/Seo';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#8B6BB5' }}>{title}</h2>
    <div style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '15px' }}>{children}</div>
  </div>
);

const CookiePolicy = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff', padding: '80px 24px' }}>
    <Seo
      title="Cookie Policy"
      description="What cookies JAS Craft uses and why. A simple explanation of how we handle cookies on our website."
      path="/cookie-policy"
    />
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#8B6BB5', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back to Home</a>

      <h1 style={{ fontSize: '52px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px' }}>Cookie Policy</h1>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginBottom: '56px' }}>Last updated: March 2026 · JAS Craft Digital Marketing Agency</p>

      <Section title="Cookies — the digital kind">
        <p>No, not the edible ones. Cookies are small text files that get stored on your device when you visit a website. They're used by pretty much every site on the internet, and ours is no different. This page explains what cookies we use and why.</p>
      </Section>

      <Section title="What cookies do we use?">
        <p>We keep it minimal. Here's what's running on our site:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px', lineHeight: 2.4 }}>
          <li><strong style={{ color: 'rgba(255,255,255,0.85)' }}>Essential cookies</strong> — These are required for the site to work. Things like remembering your session or keeping the page from breaking. You can't opt out of these without the site stopping to function.</li>
          <li><strong style={{ color: 'rgba(255,255,255,0.85)' }}>Analytics cookies</strong> — We use basic analytics (like Google Analytics) to understand how people find and use our site. This helps us figure out what's working and what needs improvement. The data is aggregated and anonymous — we can't identify you from it.</li>
          <li><strong style={{ color: 'rgba(255,255,255,0.85)' }}>Preference cookies</strong> — These remember small things, like whether you've dismissed a banner or your display preferences. They make repeat visits a bit smoother.</li>
        </ul>
      </Section>

      <Section title="Third-party cookies">
        <p>Some cookies on our site come from third-party services we use — like Google Analytics or embedded content. These third parties set their own cookies and have their own privacy policies. We don't control what they do with that data, but we only use reputable services that take privacy seriously.</p>
      </Section>

      <Section title="How to manage or disable cookies">
        <p>You're in control. Every major browser lets you view, manage, and delete cookies. Here's how to do it in the most common ones:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px', lineHeight: 2.2 }}>
          <li>Chrome: Settings → Privacy and Security → Cookies</li>
          <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
          <li>Safari: Preferences → Privacy → Manage Website Data</li>
          <li>Edge: Settings → Cookies and Site Permissions</li>
        </ul>
        <br />
        <p>Keep in mind that disabling cookies — especially essential ones — may affect how parts of our site work. Some features might not load correctly without them.</p>
      </Section>

      <Section title="Do we track you across other sites?">
        <p>No. We don't use cross-site tracking cookies or sell any data to advertisers. Our analytics are purely for understanding our own website's performance, not for building profiles on individual users.</p>
      </Section>

      <Section title="Updates to this policy">
        <p>If we change how we use cookies in a meaningful way, we'll update this page and the date at the top. We won't add new tracking without being transparent about it.</p>
      </Section>

      <Section title="Still have questions?">
        <p>Cookies can be a confusing topic. If you want to know more about what's running on our site or have concerns, just email us.</p>
        <br />
        <p>📧 <span style={{ color: '#8B6BB5' }}>jascrafts72@gmail.com</span></p>
      </Section>
    </div>
  </div>
);

export default CookiePolicy;
