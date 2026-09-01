import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section style={{ 
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '5rem',
      paddingBottom: '8rem',
      minHeight: '100vh',
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        
        {/* Lumina Style Hero Section for About Us */}
        <div style={{ 
          maxWidth: '900px',
          marginBottom: '6rem'
        }}>
          {/* Pill Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem 1rem',
            borderRadius: '2rem',
            marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 600,
            color: 'var(--accent-primary)'
          }}>
            <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>⚡</span>
            Corporate Profile
          </div>
          
          <h1 style={{
            fontSize: 'clamp(3rem, 4vw + 1rem, 4.5rem)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            fontWeight: 800,
            color: 'var(--text-primary)'
          }}>
            Empowering Public <br />
            Services with <span className="text-gradient-accent">AI</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '2.5rem',
            lineHeight: '1.6',
            maxWidth: '750px'
          }}>
            <strong>Krutikalpa Solutions Private Limited</strong> is an Indian technology company focused on developing Artificial Intelligence-powered digital governance solutions for governments and public institutions.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
            <Link to="/#contact" style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.125rem',
              background: 'var(--accent-primary)',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              Contact Us &rarr;
            </Link>
            <Link to="/government" style={{ 
              padding: '1rem 2rem', 
              fontSize: '1.125rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '0.5rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              Explore Solutions
            </Link>
          </div>

          {/* Metrics */}
          <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>10+</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Years Experience</p>
            </div>
            <div>
              <h4 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>50+</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Projects Delivered</p>
            </div>
            <div>
              <h4 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>100%</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Secure Infrastructure</p>
            </div>
          </div>
        </div>

        {/* Extended About Section */}
        <div className="grid-2" style={{ gap: '4rem', marginTop: '6rem', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>Who We Are</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              We believe technology should simplify governance, strengthen institutional accountability, and enhance the everyday experience of citizens. By combining a deep understanding of government workflows with modern digital technologies, Krutikalpa develops scalable platforms that enable faster service delivery, transparency, and measurable administrative performance.
            </p>
          </div>
          
          <div className="glass-panel" style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Our Vision</h3>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              To become India's trusted technology partner in building intelligent, transparent, and citizen-centric digital governance ecosystems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
