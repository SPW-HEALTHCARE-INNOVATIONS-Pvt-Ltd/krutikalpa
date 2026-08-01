import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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
              bottom: '-2rem', 
              right: '2rem', 
              background: 'var(--glass-bg)', 
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 2,
              minWidth: '250px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+916364917021" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>+91 636491 7021</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <a href="mailto:info@krutikalpa.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 600 }}>info@krutikalpa.com</a>
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
