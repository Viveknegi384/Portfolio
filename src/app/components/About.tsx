import { Code, Terminal, Lightbulb, Award } from 'lucide-react';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';
// comment colour — readable on black but clearly secondary
const COMMENT = '#555';

const highlights = [
  {
    icon: Code,
    tag: '[01]',
    title: 'Full Stack Dev',
    description: 'Proficient in React.js, Node.js, Express, and MongoDB for building robust web applications.',
  },
  {
    icon: Terminal,
    tag: '[02]',
    title: 'Problem Solving',
    description: 'Strong grasp of DSA. Solved 300+ problems; Pupil on Codeforces & 5-Star on HackerRank.',
  },
  {
    icon: Lightbulb,
    tag: '[03]',
    title: 'Innovation',
    description: 'Proven track record in hackathons, including securing 2nd Runner-Up at the Innerve X Hackathon.',
  },
  {
    icon: Award,
    tag: '[04]',
    title: 'Academic Excellence',
    description: 'Consistently maintaining a high academic standing with a 9.1 CGPA in Information Technology.',
  },
];

export function About() {
  return (
    <section
      id="about"
      style={{
        borderTop: '1px solid #111',
        padding: '80px 32px',
        background: '#0a0a0a',
        fontFamily: MONO,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        <SectionHeader tag="who_i_am" title="ABOUT ME" />

        {/* Bio */}
        <div style={{ marginBottom: 44, maxWidth: 760 }}>
          <p style={{ color: '#7a7a7a', lineHeight: 1.9, marginBottom: 14, fontSize: 14 }}>
            I'm a third-year Information Technology engineering student at Army Institute of Technology, Pune. My focus is on full-stack web development, where I enjoy architecting scalable applications using the MERN stack and integrating AI to solve complex real-world problems.
          </p>
          <p style={{ color: '#6a6a6a', lineHeight: 1.9, fontSize: 14 }}>
            When I'm not writing code or debugging, you can find me participating in competitive programming, mentoring peers in web technologies, or managing events and UI/UX design as the Joint Secretary of the Technical Board.
          </p>
        </div>

        {/* Highlights */}
        <div style={{ color: COMMENT, fontSize: 12, marginBottom: 16 }}>
          // capabilities
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 1, border: '1px solid #111' }}>
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  padding: '20px 18px',
                  borderRight: '1px solid #111',
                  background: '#0c0c0c',
                  transition: 'background 0.08s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background = '#111')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background = '#0c0c0c')
                }
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <span style={{ color: '#4a4a4a', fontSize: 11 }}>{item.tag}</span>
                  <Icon size={13} style={{ color: GREEN }} />
                </div>
                <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>
                  {item.title.toUpperCase().replace(/ /g, '_')}
                </div>
                <p style={{ color: '#5a5a5a', fontSize: 13, lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Shared section header ── */
export function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ color: '#555', fontSize: 12, marginBottom: 8 }}>// {tag}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span
          style={{
            color: GREEN,
            fontSize: 13,
            letterSpacing: '0.12em',
            whiteSpace: 'nowrap',
          }}
        >
          ## {title}
        </span>
        <div style={{ flex: 1, height: 1, background: '#161616' }} />
      </div>
    </div>
  );
}