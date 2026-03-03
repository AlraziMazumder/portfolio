const kpiCards = [
  { metric: '$25M+', label: 'Revenue influence across 2 years' },
  { metric: '5.1x', label: 'Blended ROAS on paid media' },
  { metric: '68%', label: 'Pipeline growth for B2B programs' },
  { metric: '14', label: 'Markets scaled with localization' }
];

const serviceCards = [
  {
    title: 'Performance Media',
    text: 'Full-funnel campaign design, media buying, and creative testing across Google, Meta, LinkedIn, and TikTok.'
  },
  {
    title: 'SEO & Content Growth',
    text: 'Technical SEO, topical authority frameworks, and conversion-focused content operations.'
  },
  {
    title: 'CRO & Landing Systems',
    text: 'A/B testing, heatmap-informed optimization, and messaging architecture for higher conversion rates.'
  },
  {
    title: 'Lifecycle Marketing',
    text: 'CRM strategy and automated customer journeys that improve retention, LTV, and expansion revenue.'
  }
];

const featuredProjects = [
  {
    title: 'Demand Gen Transformation',
    outcome: '+74% SQL pipeline with -28% CAC',
    summary:
      'Rebuilt paid media structure and scoring model, then implemented weekly testing across offers, audiences, and landing pages.'
  },
  {
    title: 'SEO Revenue Cluster Program',
    outcome: '+390K organic sessions, +44% conversion lift',
    summary:
      'Created intent-based cluster pages and technical governance, improving discoverability and lead quality.'
  },
  {
    title: 'Retention Engine for E-commerce',
    outcome: 'Repeat revenue share grew from 23% to 40%',
    summary:
      'Launched lifecycle flows for onboarding, replenishment, and win-back using behavior-driven segmentation.'
  }
];

const stack = ['GA4', 'Looker Studio', 'Google Ads', 'Meta Ads', 'HubSpot', 'Semrush', 'Hotjar', 'Ahrefs'];

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  );
}

function CardGrid({ items, className = '' }) {
  return (
    <div className={`card-grid ${className}`.trim()}>
      {items.map((item) => (
        <article key={item.title} className="card">
          <h3>{item.title}</h3>
          {item.outcome ? <p className="outcome">{item.outcome}</p> : null}
          <p>{item.text || item.summary}</p>
        </article>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container">
          <p className="brand">A. Raziq · Digital Marketing Lead</p>
          <div className="links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero container">
        <div className="hero-copy glass">
          <p className="tag">Open to Senior / Lead Digital Marketing Roles</p>
          <h1>Modern growth marketing for brands that want measurable, scalable results.</h1>
          <p>
            I design and lead integrated marketing systems across paid media, SEO, CRO,
            and lifecycle. My approach combines performance creativity with sharp
            analytics, turning channel activity into real pipeline and revenue outcomes.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#contact">
              Schedule intro
            </a>
            <a className="ghost" href="#projects">
              Explore case outcomes
            </a>
          </div>
        </div>

        <aside className="profile-card glass">
          <div className="profile-avatar" aria-label="A. Raziq profile avatar">
            <span>AR</span>
          </div>
          <h3>Senior Digital Marketer</h3>
          <p>
            Specializing in full-funnel growth, demand generation, and conversion systems
            for B2B and e-commerce organizations.
          </p>
        </aside>
      </section>

      <section className="kpi-grid container" aria-label="Key marketing metrics">
        {kpiCards.map((kpi) => (
          <article key={kpi.label} className="kpi-card glass">
            <h3>{kpi.metric}</h3>
            <p>{kpi.label}</p>
          </article>
        ))}
      </section>

      <section id="about" className="section container">
        <SectionHeader
          eyebrow="Profile"
          title="Professional Summary"
          text="I partner with founders and growth teams to create a modern marketing operating model: clear strategy, rapid experimentation, and reporting that links marketing actions to business outcomes."
        />
      </section>

      <section id="services" className="section container">
        <SectionHeader eyebrow="Capabilities" title="Modern Marketing Components" />
        <CardGrid items={serviceCards} />
      </section>

      <section id="projects" className="section container">
        <SectionHeader eyebrow="Case Studies" title="Featured Growth Outcomes" />
        <CardGrid items={featuredProjects} className="projects" />
      </section>

      <section id="stack" className="section container">
        <SectionHeader
          eyebrow="Tools"
          title="Modern Marketing Stack"
          text="Data, media, SEO, and automation tools I use to launch, measure, and scale high-impact campaigns."
        />
        <div className="stack-list">
          {stack.map((tool) => (
            <span key={tool} className="chip">
              {tool}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="section container contact">
        <SectionHeader
          eyebrow="Contact"
          title="Ready to hire a modern digital marketer?"
          text="If you need someone who can own strategy, execution, and optimization across channels, let’s connect."
        />
        <a className="cta" href="mailto:hello@digitalmarketer.dev">
          hello@digitalmarketer.dev
        </a>
      </section>
    </main>
  );
}
