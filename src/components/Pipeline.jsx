// Signature element: the product's job, made visible.
// A lead travels the pipeline: captured -> AI employee -> follow-up -> booked.
const NODES = [
  { x: 60, label: 'NEW LEAD', sub: 'form / funnel / DM' },
  { x: 320, label: 'AI EMPLOYEE', sub: 'qualifies instantly' },
  { x: 580, label: 'FOLLOW-UP', sub: 'SMS · email · voice' },
  { x: 840, label: 'BOOKED', sub: 'on your calendar' },
]

export default function Pipeline() {
  const path = 'M 60 60 H 840'
  return (
    <div className="pipeline" aria-hidden="true">
      <svg viewBox="0 0 900 120" role="img" aria-label="Automation pipeline: new lead to booked appointment">
        <path d={path} stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" />
        {NODES.map((n, i) => (
          <g key={n.label}>
            <circle cx={n.x} cy="60" r="7" fill={i === NODES.length - 1 ? '#14C98A' : '#2B3BEB'} />
            <circle cx={n.x} cy="60" r="13" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <text x={n.x} y="32" textAnchor="middle" className="node-label">{n.label}</text>
            <text x={n.x} y="94" textAnchor="middle" className="node-sub">{n.sub}</text>
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            r="4.5"
            fill="#14C98A"
            className={`flow-dot ${i === 1 ? 'd2' : i === 2 ? 'd3' : ''}`}
            style={{ offsetPath: `path('${path}')` }}
          />
        ))}
      </svg>
    </div>
  )
}
