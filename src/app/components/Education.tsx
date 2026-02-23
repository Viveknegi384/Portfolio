import { SectionHeader } from './About';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';

const education = [
  {
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Army Institute of Technology, Pune',
    period: 'Aug 2023 – Jul 2027',
    gpa: '9.1 / 10.0',
    gpaLabel: 'CGPA',
    achievements: [
      '2nd Runner Up – Innerve X Hackathon',
      'Pupil (Codeforces) & 5-Star (HackerRank)',
      'Runner Up – Graphica Hackathon',
    ],
  },
];

const certifications = [
  'Node.js, Express, MongoDB & More: The Complete Bootcamp',
  'React Crash Course: From Zero to Hero',
];

const relevantCourses = [
  'Data Structures and Algorithms',
  'Database Management System',
  'Operating System',
  'Object-Oriented Programming',
  'Web Development',
];

export function Education() {
  return (
    <section
      id="education"
      style={{
        borderTop: '1px solid #111',
        padding: '80px 32px',
        background: '#0a0a0a',
        fontFamily: MONO,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader tag="academic_background" title="EDUCATION" />

        {/* Degree block */}
        {education.map((edu, i) => (
          <div
            key={i}
            style={{
              border: '1px solid #151515',
              padding: '22px 22px',
              marginBottom: 1,
              background: '#0c0c0c',
            }}
          >
            {/* Key-value pairs */}
            {[
              { k: 'DEGREE', v: edu.degree },
              { k: 'SCHOOL', v: edu.institution },
              { k: 'PERIOD', v: edu.period },
              { k: edu.gpaLabel, v: edu.gpa },
            ].map(({ k, v }) => (
              <div
                key={k}
                style={{
                  display: 'flex',
                  gap: 12,
                  marginBottom: 8,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                <span
                  style={{
                    color: '#555',
                    width: 72,
                    flexShrink: 0,
                    fontSize: 12,
                    paddingTop: 1,
                  }}
                >
                  {k}
                </span>
                <span style={{ color: '#444', flexShrink: 0 }}>:</span>
                <span style={{ color: '#999', fontSize: 14 }}>{v}</span>
              </div>
            ))}

            {/* Achievements */}
            <div style={{ marginTop: 16 }}>
              <div style={{ color: '#555', fontSize: 11, marginBottom: 8 }}>
                // achievements
              </div>
              {edu.achievements.map((ach) => (
                <div
                  key={ach}
                  style={{
                    display: 'flex',
                    gap: 10,
                    marginBottom: 4,
                    color: '#666',
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: GREEN }}>★</span>
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom two panels */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 1, marginTop: 1 }}>
          {/* Certifications */}
          <div
            style={{
              border: '1px solid #151515',
              padding: '20px 22px',
              background: '#0c0c0c',
            }}
          >
            <div style={{ color: '#555', fontSize: 12, marginBottom: 14 }}>
              // certifications
            </div>
            {certifications.map((cert, i) => (
              <div
                key={cert}
                style={{
                  display: 'flex',
                  gap: 10,
                  marginBottom: 8,
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: '#444', flexShrink: 0 }}>
                  [{String(i + 1).padStart(2, '0')}]
                </span>
                <span>{cert}</span>
              </div>
            ))}
          </div>

          {/* Relevant Coursework */}
          <div
            style={{
              border: '1px solid #151515',
              padding: '20px 22px',
              background: '#0c0c0c',
            }}
          >
            <div style={{ color: '#555', fontSize: 12, marginBottom: 14 }}>
              // relevant_coursework
            </div>
            <div
              className="grid grid-cols-2"
              style={{ gap: '6px 12px' }}
            >
              {relevantCourses.map((course) => (
                <div
                  key={course}
                  style={{
                    fontSize: 13,
                    color: '#555',
                    padding: '4px 8px',
                    border: '1px solid #111',
                    background: '#0a0a0a',
                    cursor: 'default',
                    transition: 'color 0.08s, border-color 0.08s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.color = '#999';
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#222';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.color = '#555';
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#111';
                  }}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}