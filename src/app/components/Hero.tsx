import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';
const DIM = '#666';

const stats = [
  { value: '9.1', label: 'CGPA' },
  { value: '3+', label: 'Hackathons' },
  { value: '4+', label: 'Projects' },
];

const socials = [
  { href: 'https://github.com/viveknegi1', Icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/vivek-negi', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:viveknegi230384@gmail.com', Icon: Mail, label: 'Email' },
];

export function Hero() {
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursorOn((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 32px 56px',
        fontFamily: MONO,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

        {/* ── Terminal Window ── */}
        <div style={{ border: '1px solid #1e1e1e' }}>

          {/* Title bar */}
          <div
            style={{
              background: '#111',
              borderBottom: '1px solid #1e1e1e',
              padding: '8px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
            }}
          >
            {[1, 2, 3].map((i) => (
              <span
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#222',
                  display: 'inline-block',
                }}
              />
            ))}
            <span style={{ color: '#555', fontSize: 12, marginLeft: 8 }}>
              bash — vivek@portfolio: ~/
            </span>
          </div>

          {/* Body */}
          <div style={{ padding: '28px 28px 32px', background: '#0c0c0c' }}>

            <div style={{ color: DIM, fontSize: 13, marginBottom: 20 }}>
              $ whoami
            </div>

            {/* Name */}
            <h1
              style={{
                color: '#e0e0e0',
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                lineHeight: 1.15,
                marginBottom: 12,
                fontFamily: MONO,
              }}
            >
              Hi, I'm <span style={{ color: GREEN }}>Vivek Negi</span>
              <span style={{ opacity: cursorOn ? 1 : 0 }}>_</span>
            </h1>

            {/* Subtitle */}
            <div
              style={{
                color: '#666',
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                marginBottom: 24,
              }}
            >
              Full-Stack Developer &amp;{' '}
              <span style={{ color: '#888' }}>IT Engineering Student</span>
            </div>

            {/* Bio */}
            <p
              style={{
                color: '#666',
                lineHeight: 1.85,
                marginBottom: 32,
                maxWidth: 620,
                fontSize: 14,
              }}
            >
              Passionate about building scalable web applications and solving complex problems through clean architecture. Pursuing Information Technology at AIT Pune with a strong focus on the MERN stack and AI integrations.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                marginBottom: 22,
              }}
            >
              <TermBtn accent onClick={() => scrollTo('projects')}>
                ./view-projects
              </TermBtn>
              <TermBtn icon={<Download size={13} />} href="/resume/resume.pdf" download>
                Download Resume
              </TermBtn>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 20 }}>
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: '#555',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    textDecoration: 'none',
                    fontSize: 12,
                    fontFamily: MONO,
                    transition: 'color 0.08s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = '#888')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = '#555')
                  }
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <div
            style={{
              borderTop: '1px solid #1a1a1a',
              background: '#0a0a0a',
              padding: '12px 28px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 32px',
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}
              >
                <span style={{ color: GREEN, fontSize: 16 }}>{s.value}</span>
                <span style={{ color: '#555', fontSize: 11 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{ marginTop: 28, color: '#555', fontSize: 11 }}
        >
          // scroll down ↓
        </div>
      </div>
    </section>
  );
}

/* ── Shared terminal button ── */
function TermBtn({
  children,
  onClick,
  accent,
  icon,
  href,
  download,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  accent?: boolean;
  icon?: React.ReactNode;
  href?: string;
  download?: boolean;
}) {
  const Tag = href ? 'a' : 'button';
  
  return (
    <Tag
      onClick={onClick}
      href={href}
      download={download}
      style={{
        background: 'none',
        border: `1px solid ${accent ? '#2a2a2a' : '#1a1a1a'}`,
        color: accent ? GREEN : '#555',
        fontFamily: MONO,
        fontSize: 13,
        padding: '9px 18px',
        cursor: 'pointer',
        transition: 'border-color 0.08s, color 0.08s, background 0.08s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent ? GREEN : '#444';
        e.currentTarget.style.color = accent ? GREEN : '#d4d4d4';
        if (accent) e.currentTarget.style.background = 'rgba(74,222,128,0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = accent ? '#2a2a2a' : '#1a1a1a';
        e.currentTarget.style.color = accent ? GREEN : '#555';
        e.currentTarget.style.background = 'none';
      }}
    >
      {icon}
      {children}
    </Tag>
  );
}
