import { useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import '../styles/fonts.css';

const BG = '#0a0a0a';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.background = BG;
    document.body.style.background = BG;
    document.body.style.color = '#d4d4d4';
    document.body.style.fontFamily = "'JetBrains Mono', monospace";
    document.body.style.fontSize = '15px';
    document.body.style.lineHeight = '1.7';
    document.body.style.margin = '0';
  }, []);

  return (
    <div style={{ background: BG, color: '#d4d4d4', minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <Toaster
        toastOptions={{
          style: {
            background: '#111',
            border: '1px solid #333',
            color: '#d4d4d4',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            borderRadius: 0,
          },
        }}
      />
    </div>
  );
}