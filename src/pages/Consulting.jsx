export default function Consulting() {
  return (
    <main>
      <section className="page-hero dark">
        <div className="wrap">
          <span className="eyebrow">Work with Hodgson AI</span>
          <h1>Consulting</h1>
          <p>
            Hands-on help setting up AI agents, automation workflows, funnels, and your
            full sales &amp; marketing stack. Book a time or reach out directly.
          </p>
        </div>
      </section>
      <section className="section light">
        <div className="wrap">
          {/*
            If you have a booking widget (e.g. a HighLevel calendar embed), paste it
            below in place of the .embed-slot block.
          */}
          <div className="embed-slot" style={{ marginBottom: 40 }}>
            <p style={{ fontWeight: 600, color: 'var(--text)' }}>Booking calendar goes here</p>
            <p style={{ marginTop: 8 }}>
              Paste your calendar embed in <code>src/pages/Consulting.jsx</code>,
              replacing the <code>.embed-slot</code> block.
            </p>
          </div>
          <div className="section-head" style={{ marginBottom: 24 }}>
            <span className="eyebrow">Direct lines</span>
            <h2>Prefer to reach out first?</h2>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:jacob@hodgson.ai">
              <div className="label">Email</div>
              <div className="value">jacob@hodgson.ai</div>
            </a>
            <a className="contact-card" href="tel:+17137666116">
              <div className="label">Phone</div>
              <div className="value">+1 (713) 766-6116</div>
            </a>
            <a className="contact-card" href="https://wa.me/17132498793" target="_blank" rel="noreferrer">
              <div className="label">WhatsApp</div>
              <div className="value">Message on WhatsApp</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
