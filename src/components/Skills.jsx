import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Vite', level: 75 }, 
      { name: 'JavaScript / C#', level: 70 }, 
      { name: 'Tailwind CSS', level: 78 }, 
      { name: 'HTML5 / CSS3', level: 85 }, 
      { name: 'UI/UX Design', level: 80}, 
    ],
  },
  {
    label: 'Backend & DB',
    icon: '⚙️',
    skills: [
      { name: 'SQL Server / SSMS', level: 70 }, 
      { name: 'C# / Java / Python', level: 75 },
      { name: 'Node.js / Express', level: 60 },
      { name: 'RESTful APIs', level: 65 },
    ],
  },
  {
    label: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 75 }, 
      { name: 'Figma Prototyping', level: 80 }, 
      { name: 'English', level: 65 }, 
      { name: 'Teamwork', level: 85 }, 
    ],
  },
]

const tools = ['React', 'Node.js', 'TypeScript', 'Python', 'Docker', 'AWS', 'Figma', 'PostgreSQL', 'MongoDB', 'Git', 'Tailwind', 'Next.js', 'GraphQL', 'Redis', 'Vue']

function SkillBar({ name, level, visible }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span>{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="section-header">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">Skills & Expertise</h2>
      </div>

      <div className="skills__tabs">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            className={`tab-btn ${activeTab === i ? 'tab-btn--active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills__panel">
        {categories[activeTab].skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} visible={visible} />
        ))}
      </div>

      <div className="skills__tools">
        <h3 className="tools-heading">Also familiar with</h3>
        <div className="tools-cloud">
          {tools.map((tool, i) => (
            <span
              key={tool}
              className="tool-chip"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}