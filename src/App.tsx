import { projects } from "./data/projects";
import { ProjectCard } from "./components/ProjectCard";

export default function App() {
  return (
    <div className="app">
      <header>
        <div className="brand">obaijahjah</div>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>
          I build small, evidence-driven <span className="accent">AI products</span> that solve real workflow problems.
        </h1>
        <p className="tagline">
          Portfolio of dependency-light tools — per-task AI agent budgets,
          Shopify stack audits, and similar utilities. Every project ships
          with a real test run, a verified metric, and a published GitHub
          repository.
        </p>
        <div className="ctas">
          <a className="primary" href="#projects">
            View projects
          </a>
          <a href="https://github.com/obaijahjah" target="_blank" rel="noopener noreferrer">
            GitHub →
          </a>
        </div>
      </section>

      <section id="projects">
        <h2>// Projects</h2>
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </section>

      <section id="about">
        <h2>// About</h2>
        <div className="about">
          <p>
            I work on AI products and business automation, with a strong
            preference for evidence over opinion. Every project here started
            with external research — public pain signals, named competitors,
            verified demand — not a "build first, justify later" mindset.
          </p>
          <p>
            I prefer tools that are small enough to read in one sitting, ship
            with their own verification, and stay close to the user's actual
            workflow. I avoid the wrapper trap: a thin layer on top of an LLM
            is rarely the right product unless the research shows an
            underserved need.
          </p>
          <p>
            When a project is not working — wrong thesis, weak evidence, no
            real user — I stop. Sunk cost is not a reason to keep building.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>// Contact</h2>
        <div className="contact">
          <a href="https://github.com/obaijahjah" target="_blank" rel="noopener noreferrer">
            github.com/obaijahjah
          </a>
          <a href="https://t.me/obaijahjah" target="_blank" rel="noopener noreferrer">
            t.me/obaijahjah
          </a>
        </div>
      </section>

      <footer>
        <p>
          Built with Vite + React + TypeScript. Source on{" "}
          <a href="https://github.com/obaijahjah/obaijahjah" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
