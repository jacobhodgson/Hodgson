import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { LINKS } from '../data.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-dot" aria-hidden="true" />
          Hodgson AI
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          MENU
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>Platform</NavLink>
          <NavLink to="/radio" onClick={close}>Streaming Radio</NavLink>
          <NavLink to="/consulting" onClick={close}>Consulting</NavLink>
          <a href={LINKS.trial} className="nav-cta">Start 14-Day Free Trial</a>
        </nav>
      </div>
    </header>
  )
}
