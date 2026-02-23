import { Github, Linkedin, Mail } from 'lucide-react';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid #111',
        padding: '20px 24px',
        background: '#0a0a0a',
        fontFamily: MONO,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Left: terminal prompt + copyright */}
        <div style={{ fontSize: 13 }}>
          <span style={{ color: '#444' }}>vivek@portfolio:~$&nbsp;</span>
          <span style={{ color: '#3a3a3a' }}>echo&nbsp;</span>
          <span style={{ color: '#333' }}>\"</span>
          <span style={{ color: '#444' }}>
            © 2026 Vivek Negi · Built with React &amp; Tailwind ·{' '}
          </span>
          <span style={{ color: GREEN, opacity: 0.5 }}>Open to opportunities</span>
          <span style={{ color: '#333' }}>\"</span>
        </div>

        {/* Right: social icons */}
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { href: 'https://github.com/Viveknegi384', Icon: Github, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/vivek-negi-b8271128b/', Icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:viveknegi230384@gmail.com', Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                border: '1px solid #222',
                color: '#3a3a3a',
                textDecoration: 'none',
                transition: 'color 0.08s, border-color 0.08s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#777';
                e.currentTarget.style.borderColor = '#444';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#3a3a3a';
                e.currentTarget.style.borderColor = '#222';
              }}
            >
              <Icon size={13} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}