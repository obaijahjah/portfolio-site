import type { Project } from "../data/projects";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="project" id={p.slug}>
      <div className="head">
        <h3>{p.name}</h3>
        <span className="status">{p.status}</span>
      </div>
      <p className="tagline">{p.tagline}</p>

      <div className="field">
        <div className="field-label">Problem</div>
        <div className="field-body">{p.problem}</div>
      </div>

      <div className="field">
        <div className="field-label">Solution</div>
        <div className="field-body">{p.solution}</div>
      </div>

      <div className="field">
        <div className="field-label">Why this matters</div>
        <div className="field-body">{p.why}</div>
      </div>

      <div className="metrics" aria-label="verified metrics">
        {p.metrics.map((m) => (
          <div key={m.label} className="metric">
            <div className="value">{m.value}</div>
            <div className="label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="stack" aria-label="tech stack">
        {p.stack.map((s) => (
          <span key={s} className="pill">{s}</span>
        ))}
      </div>

      <div className="links">
        <a href={p.repo} target="_blank" rel="noopener noreferrer">
          GitHub →
        </a>
        <span style={{ color: "var(--muted)" }}>shipped {p.date}</span>
      </div>
    </article>
  );
}
