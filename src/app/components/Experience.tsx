import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from './About';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'leadership' | 'volunteer';
  responsibilities: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Sniffi Pet Home Care',
    location: 'Pune, India',
    period: 'Mar 2025 – Jul 2025',
    type: 'internship',
    responsibilities: [
      'Designed responsive UI in Figma for mobile and desktop using modern design principles.',
      'Developed frontend in React.js and Tailwind CSS; backend with Node.js, Express.js, and MongoDB.',
      'Integrated AWS S3 for storage, implemented SEO, and deployed live at sniffi.in via GoDaddy.',
    ],
    skills: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'AWS S3', 'Figma'],
  },
  {
    role: 'Joint Secretary',
    company: 'Technical Board, AIT',
    location: 'Pune, India',
    period: 'Jul 2024 – May 2025',
    type: 'leadership',
    responsibilities: [
      "Created UI/UX designs for the Technical Board's website.",
      'Designed social media posters for club promotions.',
      'Contributed to event planning and management for technical fests like TechFest SOLUTION.',
    ],
    skills: ['UI/UX Design', 'Event Management', 'Team Leadership', 'Canva'],
  },
  {
    role: 'FE Member',
    company: 'AIT Research And Development Club',
    location: 'Pune, India',
    period: 'Aug 2023 – May 2024',
    type: 'volunteer',
    responsibilities: [
      'Mentored 50+ students while teaching and applying the concepts of web development.',
      'Organized and managed different Hackathon events like Fusion.',
    ],
    skills: ['HTML/CSS', 'TailwindCSS', 'JavaScript', 'Mentoring'],
  },
];

const typeBadgeColor: Record<ExperienceItem['type'], string> = {
  internship: '#4ade80',
  leadership: '#60a5fa',
  volunteer: '#f59e0b',
};

function ExpEntry({ exp, index }: { exp: ExperienceItem; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      style={{
        borderBottom: '1px solid #111',
      }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '18px 0',
          textAlign: 'left',
          fontFamily: MONO,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 12,
          transition: 'opacity 0.08s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <div style={{ flex: 1 }}>
          {/* Role line */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'baseline',
              gap: '4px 12px',
              marginBottom: 4,
            }}
          >
            <span style={{ color: '#d4d4d4', fontSize: 15 }}>{exp.role}</span>
            <span style={{ color: '#444', fontSize: 13 }}>@</span>
            <span style={{ color: '#666', fontSize: 14 }}>{exp.company}</span>
          </div>

          {/* Meta line */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px 16px',
              fontSize: 12,
              color: '#555',
            }}
          >
            <span>{exp.period}</span>
            <span>{exp.location}</span>
            <span
              style={{
                color: typeBadgeColor[exp.type],
                border: `1px solid ${typeBadgeColor[exp.type]}22`,
                padding: '0 6px',
                fontSize: 11,
                letterSpacing: '0.04em',
              }}
            >
              {exp.type}
            </span>
          </div>
        </div>

        <div style={{ color: '#555', flexShrink: 0, paddingTop: 2 }}>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>

      {/* Expanded body — instant toggle, no animation */}
      {open && (
        <div style={{ paddingBottom: 20 }}>
          {/* Divider */}
          <div style={{ color: '#333', fontSize: 11, marginBottom: 14 }}>
            {'─'.repeat(48)}
          </div>

          {/* Responsibilities */}
          <div style={{ color: '#555', fontSize: 11, marginBottom: 10 }}>
            // key_responsibilities
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
            {exp.responsibilities.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: 10,
                  color: '#666',
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: '#444', flexShrink: 0 }}>{'—'}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {exp.skills.map((skill) => (
              <span
                key={skill}
                style={{
                  color: '#555',
                  fontSize: 11,
                  border: '1px solid #1a1a1a',
                  padding: '2px 8px',
                  fontFamily: MONO,
                  cursor: 'default',
                  transition: 'color 0.08s, border-color 0.08s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = GREEN;
                  e.currentTarget.style.borderColor = '#333';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#555';
                  e.currentTarget.style.borderColor = '#1a1a1a';
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Experience() {
  // Only show leadership and volunteer roles (as per Figma design)
  const leadershipRoles = experiences.filter(e => e.type !== 'internship');

  return (
    <section
      id="experience"
      style={{
        borderTop: '1px solid #111',
        padding: '80px 32px',
        background: '#0a0a0a',
        fontFamily: MONO,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader tag="work_history" title="Leadership & Extracurriculars" />

        <p style={{ color: '#555', fontSize: 13, marginBottom: 28 }}>
          // Leadership positions, technical mentorship, and campus community roles.
        </p>

        {/* Timeline label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 4,
            color: '#555',
            fontSize: 11,
            borderBottom: '1px solid #111',
            paddingBottom: 10,
          }}
        >
          <span>ROLE</span>
          <span style={{ color: '#444' }}>@</span>
          <span>COMPANY</span>
          <span style={{ marginLeft: 'auto' }}>PERIOD / TYPE</span>
        </div>

        {leadershipRoles.map((exp, i) => (
          <ExpEntry key={exp.role + exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}