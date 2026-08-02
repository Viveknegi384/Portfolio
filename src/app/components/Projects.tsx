import { ExternalLink, Github } from 'lucide-react';
import { SectionHeader } from './About';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';

const projects = [
  {
    title: 'GitRater — AI Developer Evaluator',
    description:
      'AI-powered evaluation platform integrating the Google Gemini API to analyze GitHub profiles, assess code quality, and generate an \'AI Multiplier\' score based on logic efficiency and best practices.',
    image:
      '/images/projects/gitrater.png',
    tags: ['React.js', 'Node.js', 'TypeScript', 'Gemini API'],
    github: 'https://github.com/Viveknegi384/gitRater',
    demo: 'https://git-rater.vercel.app/' as string | null,
    index: '01',
  },
  {
    title: 'NATOURS — Dynamic Tour Booking',
    description:
      'Full-stack MVC booking system featuring real-time statistics, secure JWT authentication (RBAC), Stripe payment integration, and interactive geospatial maps using Leaflet.js.',
    image:
      '/images/projects/natours.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/Viveknegi384/Natours',
    demo: 'https://natours-tvii.onrender.com' as string | null,
    index: '02',
  },
  {
    title: 'Merit Match Scholarship Management System',
    description:
      'Built a relational database using raw SQL with JOINs and Window Functions for a real-time admin dashboard. Developed RESTful APIs with Node.js/Express, implemented JWT authentication with Role-Based Access Control, and designed a responsive React/Tailwind frontend.',
    image:
      '/images/projects/scholarship.png',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
    github: 'https://github.com/Viveknegi384/MeritMatch',
    demo: null,
    index: '03',
  },
  {
    title: 'Synapse Grid — Multi-Agent AI Research Platform',
    description:
      'Architected a multi-agent AI system using LangChain and Groq API to autonomously execute web research and generate structured Markdown reports. Engineered Search and Reader Agents for live data fetching and scraping, with an interactive Streamlit frontend.',
    image:
      '/images/projects/synapsegrid.png',
    tags: ['Python', 'LangChain', 'Groq API', 'Streamlit'],
    github: 'https://github.com/Viveknegi384/Synapse_Grid',
    demo: null,
    index: '04',
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        borderTop: '1px solid #111',
        padding: '80px 32px',
        background: '#0a0a0a',
        fontFamily: MONO,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader tag="what_ive_built" title="FEATURED PROJECTS" />

        <p style={{ color: '#555', fontSize: 13, marginBottom: 32 }}>
          // Full-stack and AI-driven projects showcasing real-world skills in web development, databases, and system design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 1, border: '1px solid #111' }}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: '#0c0c0c',
                borderRight: '1px solid #111',
                borderBottom: '1px solid #111',
                display: 'flex',
                flexDirection: 'column',
                transition: 'background 0.08s',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = '#0f0f0f')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background = '#0c0c0c')
              }
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  height: 160,
                  overflow: 'hidden',
                  borderBottom: '1px solid #111',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(60%) brightness(0.4)',
                    display: 'block',
                  }}
                />
                {/* Index overlay */}
                <span
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 12,
                    color: GREEN,
                    fontSize: 11,
                    fontFamily: MONO,
                  }}
                >
                  [{project.index}]
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '18px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3
                  style={{
                    color: '#c0c0c0',
                    fontSize: 15,
                    marginBottom: 8,
                    fontFamily: MONO,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: '#5a5a5a',
                    fontSize: 13,
                    lineHeight: 1.75,
                    marginBottom: 14,
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 14,
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        color: '#555',
                        fontSize: 11,
                        border: '1px solid #1a1a1a',
                        padding: '2px 7px',
                        fontFamily: MONO,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 16 }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      color: '#555',
                      fontSize: 12,
                      textDecoration: 'none',
                      fontFamily: MONO,
                      transition: 'color 0.08s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                  >
                    <Github size={13} />
                    github
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        color: '#555',
                        fontSize: 12,
                        textDecoration: 'none',
                        fontFamily: MONO,
                        transition: 'color 0.08s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#5b9bd5')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                    >
                      <ExternalLink size={13} />
                      live_demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}