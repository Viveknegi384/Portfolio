import { SectionHeader } from './About';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';

const skillCategories = [
  {
    category: 'Programming Languages',
    key: 'languages',
    skills: ['C++', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS'],
  },
  {
    category: 'Developer Tools',
    key: 'dev_tools',
    skills: ['GitHub', 'VS Code', 'Postman', 'Figma', 'Canva', 'AWS S3'],
  },
  {
    category: 'Databases & APIs',
    key: 'databases_apis',
    skills: ['MongoDB', 'MySQL', 'REST APIs', 'Stripe API', 'JWT Auth'],
  },
  {
    category: 'Frameworks & Platforms',
    key: 'frameworks',
    skills: ['React', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
  {
    category: 'Soft Skills',
    key: 'soft_skills',
    skills: ['Team Collaboration', 'Project Management', 'Technical Writing', 'Problem Solving', 'Agile', 'Mentoring'],
  },
  {
    category: 'Core Competencies',
    key: 'core',
    skills: ['Full-Stack Dev', 'Data Structures', 'Algorithms', 'OOP Concepts', 'UI/UX Design'],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      style={{
        borderTop: '1px solid #111',
        padding: '80px 32px',
        background: '#0a0a0a',
        fontFamily: MONO,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader tag="capabilities" title="SKILLS & EXPERTISE" />

        <p style={{ color: '#555', fontSize: 13, marginBottom: 16 }}>
          // A comprehensive overview of my technical and soft skills developed through
          coursework, projects, and hands-on experience.
        </p>

        {/* Visual grid — category skill boxes */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 1, border: '1px solid #111', marginTop: 8 }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.key}
              style={{
                padding: '16px 16px',
                background: '#0b0b0b',
                borderRight: '1px solid #111',
                borderBottom: '1px solid #111',
              }}
            >
              <div
                style={{
                  color: '#555',
                  fontSize: 12,
                  marginBottom: 10,
                  letterSpacing: '0.06em',
                }}
              >
                {cat.category.toUpperCase().replace(/ /g, '_')}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      color: '#555',
                      fontSize: 12,
                      border: '1px solid #1e1e1e',
                      padding: '2px 7px',
                      cursor: 'default',
                      transition: 'color 0.08s, border-color 0.08s',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = GREEN;
                      e.currentTarget.style.borderColor = '#333';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#555';
                      e.currentTarget.style.borderColor = '#1e1e1e';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}