import React from 'react';
import { CONTACT_INFO, CONTACT_LINKS } from '../constants/contactData';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <style>{`
        .contact-badge-item {
          transition: transform 0.2s;
        }
        .contact-badge-item:hover {
          transform: translateX(6px);
        }
        .contact-badge-item a {
          transition: color 0.2s;
        }
        .contact-badge-item:hover a {
          color: var(--accent-primary) !important;
        }
      `}</style>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            marginBottom: '1rem', 
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            fontWeight: 800
          }}>
            Let's Build Something <span className="text-gradient-accent">Meaningful</span>
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            fontWeight: 500,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Whether you're a Government organization or a growing business, 
            we'd love to understand your challenges and explore how 
            technology can create lasting impact.
          </p>
        </div>

        <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          
          {/* Left Side: New Team Image */}
          <div style={{ position: 'relative' }}>
            <img 
              src="/contact_team.png" 
              alt="Our Professional Team" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '1.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                objectFit: 'cover'
              }} 
            />
            {/* Floating Contact Info Badge */}
            <div style={{ 
              position: 'absolute', 
              bottom: '-3rem', 
              right: '2rem', 
              background: 'var(--glass-bg)', 
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 2,
              minWidth: '280px'
            }}>
              {/* Phone */}
              <div className="contact-badge-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#3B82F6', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <a href={CONTACT_LINKS.phone} style={badgeLinkStyle}>
                  {CONTACT_INFO.formattedPhone}
                </a>
              </div>

              {/* Email */}
              <div className="contact-badge-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#EA4335', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <a href={CONTACT_LINKS.email} style={badgeLinkStyle}>
                  {CONTACT_INFO.email}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="contact-badge-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#25D366', display: 'flex', alignItems: 'center' }}>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.473 1.332 4.985l-1.417 5.176 5.305-1.392a9.923 9.923 0 0 0 4.767 1.218h.004c5.503 0 9.985-4.482 9.985-9.988C22 6.482 17.518 2 12.012 2zm5.835 14.288c-.241.678-1.22 1.233-1.688 1.31-.468.077-.923.369-3.037-.462-2.545-1.001-4.178-3.585-4.305-3.754-.127-.169-.938-1.246-.938-2.378 0-1.132.593-1.691.805-1.923.212-.231.462-.292.616-.292.154 0 .308.008.439.015.139.008.324-.054.508.393.185.454.631 1.54.685 1.648.054.108.092.231.015.377-.077.154-.116.246-.231.377-.116.131-.246.292-.354.393-.123.116-.254.239-.108.493.146.254.654 1.078 1.401 1.748.962.862 1.77 1.132 2.017 1.254.246.123.393.108.539-.062.146-.169.631-.739.801-.993.169-.254.339-.215.57-.131.231.085 1.463.693 1.717.824.254.131.423.192.485.3.062.108.062.624-.179 1.302z"/>
                  </svg>
                </div>
                <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" style={badgeLinkStyle}>
                  Message on WhatsApp
                </a>
              </div>

              {/* SMS */}
              <div className="contact-badge-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ color: '#A855F7', display: 'flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h8" />
                    <path d="M8 14h6" />
                  </svg>
                </div>
                <a href={CONTACT_LINKS.sms} style={badgeLinkStyle}>
                  Send SMS Inquiry
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '1.5rem', background: 'var(--glass-bg)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)', fontWeight: 700 }}>Send us a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <input type="text" placeholder="Name *" style={inputStyle} required />
                <input type="text" placeholder="Designation" style={inputStyle} />
              </div>
              <input type="text" placeholder="Organization *" style={inputStyle} required />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <input type="email" placeholder="Email *" style={inputStyle} required />
                <input type="tel" placeholder="Phone" style={inputStyle} />
              </div>
              <textarea placeholder="Message" rows={5} style={{...inputStyle, resize: 'vertical'}}></textarea>
              
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.125rem' }}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid var(--border-color)',
  borderRadius: '0.5rem',
  color: 'white', // Consider adapting for light mode if needed, but keeping it standard for now.
  fontFamily: 'inherit',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s'
};

const badgeLinkStyle = {
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '0.95rem',
  transition: 'color 0.2s',
  cursor: 'pointer'
};

