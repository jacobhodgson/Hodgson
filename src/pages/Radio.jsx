export default function Radio() {
  return (
    <main>
      <section className="page-hero dark">
        <div className="wrap">
          <span className="eyebrow">Free Public Internet Radio</span>
          <h1>Streaming Radio</h1>
          <p>
            Free public internet radio, streaming live — hit play and keep it on while
            you work.
          </p>
        </div>
      </section>
      <section className="section light">
        <div className="wrap">
          {/*
            Drop your radio player embed below. Replace this .embed-slot div with the
            <iframe> or player snippet from your streaming provider — everything else
            (nav, styling, footer) is already wired up.
          */}
          <div className="embed-slot">
            <p style={{ fontWeight: 600, color: 'var(--text)' }}>Radio player goes here</p>
            <p style={{ marginTop: 8 }}>
              Paste your streaming player embed in <code>src/pages/Radio.jsx</code>,
              replacing the <code>.embed-slot</code> block.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
