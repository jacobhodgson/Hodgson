import { Link } from 'react-router-dom'
import { LINKS, SOCIALS } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand"><span className="brand-dot" aria-hidden="true" />Hodgson AI</Link>
            <p style={{ marginTop: 12, maxWidth: '38ch', fontSize: 14 }}>
              All-in-one AI sales &amp; marketing automation. Deploy AI agents, automate
              workflows, and grow your business.
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <Link to="/">Home</Link>
            <Link to="/radio">Streaming Radio</Link>
            <Link to="/consulting">Consulting</Link>
            <a href={LINKS.trial}>14-Day Free Trial</a>
          </nav>
          <nav className="footer-links" aria-label="Social">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </nav>
        </div>
        <div className="footer-meta">
          <span>
            © {new Date().getFullYear()} · <a href="https://hodgsonagency.com">Hodgson Agency LLC</a>
          </span>
          <span>I'm a HighLevel paid affiliate and earn commissions from purchases made through links on this site.</span>
        </div>
      </div>
    </footer>
  )
}
