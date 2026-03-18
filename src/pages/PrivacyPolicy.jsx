const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#8B6BB5' }}>{title}</h2>
    <div style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '15px' }}>{children}</div>
  </div>
);

const PrivacyPolicy = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff', padding: '80px 24px' }}>
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#8B6BB5', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back to Home</a>

      <h1 style={{ fontSize: '52px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px' }}>Privacy Policy</h1>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginBottom: '56px' }}>Last updated: March 2026 · JAS Craft Digital Marketing Agency</p>

      <Section title="We'll keep this simple">
        <p>At JAS Craft, we take your privacy seriously — not because we have to, but because we genuinely respect the people who trust us with their information. This policy explains what we collect, why we collect it, and how we use it. No legal jargon, just plain honesty.</p>
      </Section>

      <Section title="What information do we collect?">
        <p>When you reach out to us — whether through our contact form, the free audit request, or by emailing us directly — we collect the information you voluntarily share. This typically includes your name, email address, phone number, and details about your business or project.</p>
        <br />
        <p>We also collect basic analytics data (like which pages you visit and how long you stay) to understand how people use our website. This helps us improve the experience for everyone.</p>
      </Section>

      <Section title="Why do we collect it?">
        <p>Simple — to help you. We use your information to:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px', lineHeight: 2.2 }}>
          <li>Respond to your inquiries and project requests</li>
          <li>Deliver the marketing services you've hired us for</li>
          <li>Send you relevant updates, insights, or offers (only if you've opted in)</li>
          <li>Improve our website and the way we communicate</li>
        </ul>
        <br />
        <p>We will never sell your data. We will never share it with third parties for their own marketing purposes. That's a promise.</p>
      </Section>

      <Section title="Who else sees your data?">
        <p>We work with a small number of trusted tools and platforms to run our business — things like email services and analytics software. These tools may process your data on our behalf, but they're bound by strict data protection agreements. We don't give them permission to use your data for anything other than helping us serve you.</p>
      </Section>

      <Section title="How long do we keep your data?">
        <p>We keep your information for as long as it's needed to provide our services or as required by law. If you'd like us to delete your data at any time, just ask — we'll take care of it promptly.</p>
      </Section>

      <Section title="Your rights">
        <p>You have the right to access the personal data we hold about you, correct anything that's inaccurate, or ask us to delete it entirely. You can also withdraw consent for marketing communications at any time — just reply "unsubscribe" to any email we send.</p>
        <br />
        <p>To exercise any of these rights, email us at <span style={{ color: '#8B6BB5' }}>jascrafts72@gmail.com</span> and we'll get back to you within 48 hours.</p>
      </Section>

      <Section title="Cookies">
        <p>Our website uses cookies to function properly and to understand how visitors interact with our content. You can read more about this in our Cookie Policy. You can disable cookies in your browser settings at any time, though some parts of the site may not work as well without them.</p>
      </Section>

      <Section title="Changes to this policy">
        <p>If we ever make significant changes to how we handle your data, we'll update this page and note the date at the top. We won't make changes that reduce your rights without letting you know.</p>
      </Section>

      <Section title="Questions?">
        <p>If anything here is unclear or you have concerns, please reach out. We're a small team and we actually read our emails.</p>
        <br />
        <p>📧 <span style={{ color: '#8B6BB5' }}>jascrafts72@gmail.com</span></p>
      </Section>
    </div>
  </div>
);

export default PrivacyPolicy;
