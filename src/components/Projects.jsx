import { useState } from 'react'

const projects = [
  {
    title: 'NovaPay — FinTech Platform',
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    desc: 'A real-time payment platform handling $2M+ monthly transactions with advanced fraud detection, multi-currency support, and an analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    link: '#',
    github: '#',
    featured: true,
    metrics: ['$2M+ MRV', '99.9% uptime', '50ms avg latency'],
    color: '#6366F1',
  },
  {
    title: 'EcoTrack — Sustainability App',
    category: 'Mobile Web',
    tags: ['Next.js', 'Prisma', 'Chart.js', 'PWA'],
    desc: 'A progressive web app that helps users track their carbon footprint, set eco-goals, and discover sustainable alternatives with gamification.',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&q=80',
    link: '#',
    github: '#',
    featured: true,
    metrics: ['12K users', '4.8 ★ rating', 'PWA score 98'],
    color: '#10B981',
  },
  {
    title: 'DesignOS — UI Component Library',
    category: 'Open Source',
    tags: ['React', 'TypeScript', 'Storybook', 'Rollup'],
    desc: 'An open-source design system with 80+ accessible components, dark mode, theming support, and full TypeScript typings.',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
    link: '#',
    github: '#',
    featured: false,
    metrics: ['800+ GitHub ★', '80+ components', 'WCAG 2.1 AA'],
    color: '#F59E0B',
  },
  {
    title: 'MindMap AI — Learning Tool',
    category: 'AI / ML',
    tags: ['Python', 'FastAPI', 'OpenAI', 'React'],
    desc: 'AI-powered mind mapping tool that auto-generates concept maps from any text or URL, with collaborative editing and export.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    link: '#',
    github: '#',
    featured: false,
    metrics: ['HackSF Winner', '3K users', 'GPT-4 powered'],
    color: '#8B5CF6',
  },
  {
    title: 'CityPulse — Urban Dashboard',
    category: 'Data Viz',
    tags: ['React', 'D3.js', 'Mapbox', 'Python'],
    desc: 'Real-time urban analytics dashboard visualizing traffic, air quality, noise levels, and city events on an interactive 3D map.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
    link: '#',
    github: '#',
    featured: false,
    metrics: ['Live data feeds', '3D Mapbox', 'Open data'],
    color: '#0EA5E9',
  },
  {
    title: 'StoreCraft — E-Commerce Engine',
    category: 'Full-Stack',
    tags: ['Next.js', 'Stripe', 'Sanity', 'Vercel'],
    desc: 'Headless e-commerce engine with CMS integration, A/B testing, personalization, and sub-100ms page loads.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    link: '#',
    github: '#',
    featured: false,
    metrics: ['<100ms loads', 'A/B testing', 'Headless CMS'],
    color: '#EC4899',
  },
]

const filters = ['All', 'Full-Stack', 'Mobile Web', 'AI / ML', 'Data Viz', 'Open Source']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="section-label">My Work</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects__filters">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((project, i) => (
          <div
            key={project.title}
            className={`project-card ${project.featured ? 'project-card--featured' : ''} ${hovered === i ? 'project-card--hovered' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ '--project-color': project.color }}
          >
            <div className="project-card__image">
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-card__overlay">
                <a href={project.link} className="btn btn--sm btn--white" target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>
                <a href={project.github} className="btn btn--sm btn--outline-white" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <div className="project-card__body">
              <div className="project-card__meta">
                <span className="project-card__category">{project.category}</span>
                {project.featured && <span className="project-card__featured">Featured</span>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-card__metrics">
                {project.metrics.map(m => (
                  <span key={m} className="metric-chip">{m}</span>
                ))}
              </div>
              <div className="project-card__tags">
                {project.tags.map(t => (
                  <span key={t} className="tag-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects__cta">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn--ghost-purple">
          View All Projects on GitHub →
        </a>
      </div>
    </section>
  )
}