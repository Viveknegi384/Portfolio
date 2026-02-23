import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'home', id: 'home' },
  { label: 'about', id: 'about' },
  { label: 'experience', id: 'experience' },
  { label: 'projects', id: 'projects' },
  { label: 'skills', id: 'skills' },
  { label: 'education', id: 'education' },
  { label: 'contact', id: 'contact' },
];

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 80;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: '#0a0a0a',
        borderBottom: '1px solid #1e1e1e',
        fontFamily: MONO,
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 32px',
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Terminal prompt / logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span style={{ color: '#555', fontSize: 13 }}>vivek</span>
          <span style={{ color: '#444', fontSize: 13 }}>@</span>
          <span style={{ color: '#777', fontSize: 13 }}>portfolio</span>
          <span style={{ color: '#444', fontSize: 13 }}>:</span>
          <span style={{ color: '#5b9bd5', fontSize: 13 }}>~</span>
          <span style={{ color: GREEN, fontSize: 13 }}>$</span>
        </button>

        {/* Desktop links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: 'center', gap: 4 }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isActive ? GREEN : '#555',
                  fontSize: 13,
                  fontFamily: MONO,
                  padding: '6px 12px',
                  transition: 'color 0.08s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#999';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#555';
                }}
              >
                {isActive && <span style={{ color: GREEN }}>{'>'} </span>}
                {item.label}
              </button>
            );
          })}

          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginLeft: 12,
              color: GREEN,
              fontSize: 13,
              textDecoration: 'none',
              border: '1px solid #2a2a2a',
              padding: '5px 12px',
              fontFamily: MONO,
              transition: 'border-color 0.08s, background 0.08s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = GREEN;
              e.currentTarget.style.background = 'rgba(74,222,128,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a2a';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            resume.pdf ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden"
          style={{
            background: 'none',
            border: '1px solid #222',
            cursor: 'pointer',
            color: '#555',
            padding: '4px 6px',
            fontFamily: MONO,
          }}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile menu — instant toggle, no animation */}
      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: '#0a0a0a',
            borderBottom: '1px solid #1e1e1e',
            padding: '12px 20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: isActive ? GREEN : '#555',
                  fontSize: 13,
                  fontFamily: MONO,
                  textAlign: 'left',
                  padding: '6px 0',
                }}
              >
                <span style={{ color: GREEN }}>{'>'} </span>
                {item.label}
              </button>
            );
          })}
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: GREEN,
              fontSize: 13,
              textDecoration: 'none',
              fontFamily: MONO,
              marginTop: 6,
              paddingTop: 6,
              borderTop: '1px solid #1a1a1a',
            }}
          >
            {'>'} resume.pdf ↗
          </a>
        </div>
      )}
    </nav>
  );
}