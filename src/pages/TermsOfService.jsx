const Section = ({ title, children }) => (
  <div style={{ marginBottom: '40px' }}>
    <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#8B6BB5' }}>{title}</h2>
    <div style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.9, fontSize: '15px' }}>{children}</div>
  </div>
);

const TermsOfService = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff', padding: '80px 24px' }}>
    <div style={{ maxWidth: '820px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#8B6BB5', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back to Home</a>

      <h1 style={{ fontSize: '52px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '6px' }}>Terms of Service</h1>
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', marginBottom: '56px' }}>Last updated: March 2026 · JAS Craft Digital Marketing Agency</p>

      <Section title="Let's start with the basics">
        <p>These terms govern your use of the JAS Craft website and any services we provide. By working with us or browsing our site, you're agreeing to what's written here. We've tried to keep it straightforward — no walls of legalese, just clear expectations on both sides.</p>
      </Section>

      <Section title="What we do">
        <p>JAS Craft is a digital marketing agency based in New Delhi. We help brands grow through paid advertising, social media strategy, content creation, SEO, brand identity, and marketing automation. The exact scope of work for any client engagement is always defined in a separate agreement before we begin.</p>
      </Section>

      <Section title="Working together — what we expect from you">
        <p>Good work requires good collaboration. When you hire us, we'll need a few things from your side:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px', lineHeight: 2.2 }}>
          <li>Accurate information about your business, goals, and target audience</li>
          <li>Timely feedback on drafts, strategies, and deliverables</li>
          <li>Access to the platforms, accounts, or assets we need to do the work</li>
          <li>A point of contact who can make decisions or escalate when needed</li>
        </ul>
        <br />
        <p>If delays happen on your end, they may push back timelines. We'll always communicate openly if that's the case.</p>
      </Section>

      <Section title="Ownership of work">
        <p>Everything we create — ads, copy, designs, strategies — remains our intellectual property until the project is fully paid for. Once payment is received and cleared, ownership of the deliverables transfers to you, as outlined in your service agreement.</p>
        <br />
        <p>We may use anonymised or approved examples of our work in our portfolio or case studies. If you'd prefer we don't, just let us know in writing and we'll respect that.</p>
      </Section>

      <Section title="Payments">
        <p>Payment terms are agreed upon before any project begins and are detailed in your service contract. A few things to keep in mind:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px', lineHeight: 2.2 }}>
          <li>Invoices are due by the date specified in your agreement</li>
          <li>Late payments may result in a pause on active work until the balance is cleared</li>
          <li>Fees are generally non-refundable once work has commenced, unless we've agreed otherwise in writing</li>
        </ul>
        <br />
        <p>If you're ever having trouble with a payment, talk to us. We'd rather find a solution than let it become a problem.</p>
      </Section>

      <Section title="What we're not responsible for">
        <p>We put genuine effort into every campaign and project, but marketing results depend on many factors outside our control — market conditions, platform algorithm changes, audience behaviour, and more. We can't guarantee specific outcomes like a set number of leads or a particular return on ad spend.</p>
        <br />
        <p>Our liability is limited to the amount you've paid for the specific service in question. We're not liable for indirect losses, lost profits, or anything beyond our direct scope of work.</p>
      </Section>

      <Section title="Ending the engagement">
        <p>Either party can end the working relationship with written notice, as specified in your service agreement. When that happens, any outstanding invoices become due immediately. We'll hand over all completed work and relevant assets in an orderly way.</p>
      </Section>

      <Section title="Changes to these terms">
        <p>We may update these terms occasionally. If we make significant changes, we'll update the date at the top of this page. Continued use of our services after changes means you accept the updated terms.</p>
      </Section>

      <Section title="Questions or concerns?">
        <p>If something here doesn't make sense or you want to discuss anything before signing on, just reach out. We're approachable.</p>
        <br />
        <p>📧 <span style={{ color: '#8B6BB5' }}>jascrafts72@gmail.com</span></p>
      </Section>
    </div>
  </div>
);

export default TermsOfService;
