const TermsOfService = () => (
  <div style={{ background: '#0D0D0F', minHeight: '100vh', color: '#fff', padding: '80px 24px' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <a href="/" style={{ color: '#8B6BB5', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>← Back to Home</a>
      <h1 style={{ fontSize: '48px', fontWeight: 900, textTransform: 'uppercase', marginBottom: '8px' }}>Terms of Service</h1>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginBottom: '48px' }}>Last updated: March 2026</p>

      {[
        { title: '1. Acceptance of Terms', body: 'By accessing and using the JAS Craft website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
        { title: '2. Services', body: 'JAS Craft provides digital marketing services including but not limited to paid advertising, social media strategy, brand identity, SEO, content creation, and marketing automation. Service details are outlined in individual client agreements.' },
        { title: '3. Client Responsibilities', body: 'Clients are responsible for providing accurate information, timely feedback, and necessary access to platforms and assets required to deliver services. Delays caused by the client may affect project timelines.' },
        { title: '4. Intellectual Property', body: 'All creative work, strategies, and deliverables produced by JAS Craft remain our intellectual property until full payment is received. Upon payment, ownership transfers to the client as agreed in the service contract.' },
        { title: '5. Payment Terms', body: 'Payment terms are outlined in individual service agreements. Late payments may result in suspension of services. All fees are non-refundable unless otherwise stated in writing.' },
        { title: '6. Limitation of Liability', body: 'JAS Craft is not liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.' },
        { title: '7. Termination', body: 'Either party may terminate services with written notice as specified in the service agreement. Upon termination, all outstanding payments become immediately due.' },
        { title: '8. Contact', body: 'For questions regarding these Terms of Service, contact us at jascrafts72@gmail.com.' },
      ].map((s, i) => (
        <div key={i} style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '10px', color: '#8B6BB5' }}>{s.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontSize: '15px' }}>{s.body}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TermsOfService;
