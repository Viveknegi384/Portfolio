import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { SectionHeader } from './About';

const MONO = "'JetBrains Mono', monospace";
const GREEN = '#4ade80';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'viveknegi230384@gmail.com',
    href: 'mailto:viveknegi230384@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-6397797228',
    href: 'tel:+916397797228',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, India',
    href: null as string | null,
  },
];

const openTo = [
  'Full-Stack Web Development',
  'Hackathons & Coding Competitions',
  'Software Engineering Internships',
  'Open Source Contributions',
];

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again or email me directly.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please email me directly at viveknegi230384@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: '100%',
    background: focused === name ? '#0f0f0f' : '#0a0a0a',
    border: `1px solid ${focused === name ? '#2a2a2a' : '#161616'}`,
    borderRadius: 0,
    padding: '10px 12px',
    color: '#c0c0c0',
    fontSize: 13,
    outline: 'none',
    fontFamily: MONO,
    transition: 'border-color 0.08s, background 0.08s',
  });

  return (
    <section
      id="contact"
      style={{
        borderTop: '1px solid #111',
        padding: '80px 32px',
        background: '#0a0a0a',
        fontFamily: MONO,
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <SectionHeader tag="lets_connect" title="GET IN TOUCH" />

        <p style={{ color: '#555', fontSize: 13, marginBottom: 32 }}>
          // I'm always open to discussing new projects, opportunities, or collaborations.
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 1 }}>

          {/* ── Left: contact info ── */}
          <div
            style={{
              border: '1px solid #151515',
              padding: '24px',
              background: '#0c0c0c',
            }}
          >
            <div style={{ color: '#555', fontSize: 11, marginBottom: 20 }}>
              // contact_information
            </div>

            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    marginBottom: 16,
                    padding: '10px 12px',
                    border: '1px solid #111',
                    background: '#0a0a0a',
                  }}
                >
                  <Icon size={13} style={{ color: '#555', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ color: '#555', fontSize: 10, marginBottom: 3 }}>
                      {info.label.toLowerCase()}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        style={{
                          color: '#777',
                          fontSize: 14,
                          textDecoration: 'none',
                          fontFamily: MONO,
                          transition: 'color 0.08s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#777')}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ color: '#777', fontSize: 14 }}>{info.value}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Open to */}
            <div style={{ marginTop: 24 }}>
              <div style={{ color: '#555', fontSize: 11, marginBottom: 12 }}>
                // open_to_collaboration_on
              </div>
              {openTo.map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    gap: 10,
                    marginBottom: 7,
                    color: '#5a5a5a',
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: '#444' }}>›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div
            style={{
              border: '1px solid #151515',
              padding: '24px',
              background: '#0c0c0c',
            }}
          >
            <div style={{ color: '#555', fontSize: 11, marginBottom: 20 }}>
              // send_a_message
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label
                  style={{
                    color: '#555',
                    fontSize: 11,
                    display: 'block',
                    marginBottom: 5,
                  }}
                >
                  &gt; name:
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your name"
                  required
                  style={fieldStyle('name')}
                />
              </div>

              <div>
                <label
                  style={{
                    color: '#555',
                    fontSize: 11,
                    display: 'block',
                    marginBottom: 5,
                  }}
                >
                  &gt; email:
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="your.email@example.com"
                  required
                  style={fieldStyle('email')}
                />
              </div>

              <div>
                <label
                  style={{
                    color: '#555',
                    fontSize: 11,
                    display: 'block',
                    marginBottom: 5,
                  }}
                >
                  &gt; message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                  style={{ ...fieldStyle('message'), resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: 'none',
                  border: '1px solid #2a2a2a',
                  color: isSubmitting ? '#555' : GREEN,
                  fontFamily: MONO,
                  fontSize: 13,
                  padding: '10px 18px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'border-color 0.08s, background 0.08s',
                  alignSelf: 'flex-start',
                  opacity: isSubmitting ? 0.6 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.borderColor = GREEN;
                    e.currentTarget.style.background = 'rgba(74,222,128,0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.borderColor = '#2a2a2a';
                    e.currentTarget.style.background = 'none';
                  }
                }}
              >
                <Send size={13} />
                {isSubmitting ? './sending...' : './send-message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}