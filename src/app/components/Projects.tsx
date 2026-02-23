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
      'https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvZGUlMjBhbmFseXNpcyUyMGRldmVsb3BlciUyMHRlcm1pbmFsfGVufDF8fHx8MTc3MTg1MTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React.js', 'Node.js', 'TypeScript', 'Gemini API'],
    github: 'https://github.com/viveknegi1',
    demo: 'https://gitrater.example.com' as string | null,
    index: '01',
  },
  {
    title: 'NATOURS — Dynamic Tour Booking',
    description:
      'Full-stack MVC booking system featuring real-time statistics, secure JWT authentication (RBAC), Stripe payment integration, and interactive geospatial maps using Leaflet.js.',
    image:
      'https://images.unsplash.com/photo-1718253819439-dec133a0d7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB0cmF2ZWwlMjB0b3VyJTIwbW91bnRhaW5zJTIwYm9va2luZ3xlbnwxfHx8fDE3NzE4NTE1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Node.js', 'Express', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/viveknegi1',
    demo: 'https://natours.example.com' as string | null,
    index: '02',
  },
  {
    title: 'Scholarship Management System',
    description:
      'Designed and implemented a robust database schema to store, manage, and process student scholarship records utilizing complex SQL queries, joins, and aggregate functions.',
    image:
      'https://images.unsplash.com/photo-1723746571161-e45723f5db33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMG1hbmFnZW1lbnQlMjBzdHVkZW50JTIwc2Nob2xhcnNoaXAlMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MTg1MTU3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['MySQL', 'Database Design', 'SQL'],
    github: 'https://github.com/viveknegi1',
    demo: null,
    index: '03',
  },
  {
    title: 'E-Hospital Management System',
    description:
      'A comprehensive digital healthcare platform designed to streamline hospital operations, manage patient appointments, and maintain secure medical records.',
    image:
      'https://images.unsplash.com/photo-1758691462620-9018c602ed3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGRpZ2l0YWwlMjBoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHJlY29yZHN8ZW58MXx8fHwxNzcxODUxNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/viveknegi1',
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