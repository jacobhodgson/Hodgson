import Pipeline from '../components/Pipeline.jsx'
import { LINKS, SCREENSHOTS, STAGES, RESOURCES } from '../data.js'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero dark">
        <div className="wrap">
          <span className="eyebrow">AI Sales &amp; Marketing Automation</span>
          <h1 style={{ marginTop: 18 }}>
            Deploy AI agents. Automate workflows. <em>Book more business.</em>
          </h1>
          <p className="hero-lede">
            Generate leads and deliver seamless client experiences with the #1 globally
            recognized AI sales and marketing automation platform — one system for
            capturing, nurturing, and closing.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={LINKS.trial}>Start 14-Day Free Trial</a>
            <a className="btn btn-ghost" href={LINKS.video} target="_blank" rel="noreferrer">
              ▶ Watch it in action
            </a>
          </div>
          <p className="disclosure">
            I'm a HighLevel paid affiliate, and I make commissions when you purchase through these links.
          </p>
          <Pipeline />
        </div>
      </section>

      {/* Screenshots */}
      <section className="section shots light">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Inside the platform</span>
            <h2>One dashboard for the whole client journey</h2>
          </div>
          <div className="shots-track" tabIndex="0" aria-label="Platform screenshots, scroll horizontally">
            {SCREENSHOTS.map((src, i) => (
              <figure className="shot" key={src}>
                <img
                  src={src}
                  alt={`Hodgson AI marketing automation dashboard, view ${i + 1}`}
                  loading={i > 1 ? 'lazy' : 'eager'}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Features by funnel stage */}
      <section className="section light" id="features">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">12 features · 4 stages</span>
            <h2>Every feature has a place in the pipeline</h2>
            <p>
              From first click to recurring revenue — every tool maps to a stage of the
              journey your leads actually travel.
            </p>
          </div>
          {STAGES.map((stage) => (
            <div className="stage" key={stage.tag}>
              <span className="stage-tag">{stage.tag}</span>
              <p className="stage-desc">{stage.desc}</p>
              <div className="feature-grid">
                {stage.features.map((f) => (
                  <article className="feature" key={f.title}>
                    <h3>{f.title}</h3>
                    <ul>
                      {f.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <p className="benefit"><strong>WHY IT MATTERS</strong><br />{f.benefit}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section pricing dark" id="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <h2>Two plans. Unlimited contacts on both.</h2>
            <p>No obligations, no contracts — cancel anytime.</p>
          </div>
          <div className="price-grid">
            <div className="price-card">
              <div>
                <span className="price-name">Starter</span>
              </div>
              <div className="price-figure">$970 <span>/ USD per year</span></div>
              <ul>
                <li>All the tools to capture more leads</li>
                <li>Nurture &amp; close leads into customers</li>
                <li>Full online booking forms</li>
                <li>Sales pipelines &amp; social calendar</li>
                <li>Website builder, funnels, and more</li>
                <li>Unlimited contacts &amp; users</li>
                <li>Set up to three sub-accounts</li>
              </ul>
              <a className="btn btn-primary" href={LINKS.annual}>Get Starter — $970/yr</a>
            </div>
            <div className="price-card featured">
              <div>
                <span className="price-name">Pro SaaS</span>
                <span className="price-badge">MOST POWERFUL</span>
              </div>
              <div className="price-figure">$497 <span>/ USD per month</span></div>
              <ul>
                <li>SaaS Mode</li>
                <li>AI conversational bot</li>
                <li>Nurture &amp; close leads into clients</li>
                <li>Unlimited sub-accounts</li>
                <li>Branded desktop app</li>
                <li>Advanced API access</li>
                <li>Agent reporting</li>
              </ul>
              <a className="btn btn-primary" href={LINKS.proTrial}>Try Pro SaaS — 14 days free</a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section light" id="resources">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Trials, challenges &amp; offers</span>
            <h2>Pick your on-ramp</h2>
            <p>Six ways to get started — from a free trial to live, hands-on coaching.</p>
          </div>
          <div className="resource-grid">
            {RESOURCES.map((r) => (
              <a className="resource" href={r.href} key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <div className="go">Get started →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section light" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="banner">
            <div>
              <h2>Put your AI agents to work today</h2>
              <p>
                Start your free 14-day trial — no obligations, no contracts, cancel
                anytime.
              </p>
            </div>
            <a className="btn" href={LINKS.trial}>Start 14-Day Free Trial</a>
          </div>
        </div>
      </section>
    </main>
  )
}
