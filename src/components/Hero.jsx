import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{ 
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '5rem',
      paddingBottom: '8rem',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--bg-primary)'
    }}>
      {/* Subtle Geometric Background Pattern (Hexagon-inspired) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(30deg, var(--border-color) 12%, transparent 12.5%, transparent 87%, var(--border-color) 87.5%, var(--border-color)), linear-gradient(150deg, var(--border-color) 12%, transparent 12.5%, transparent 87%, var(--border-color) 87.5%, var(--border-color)), linear-gradient(30deg, var(--border-color) 12%, transparent 12.5%, transparent 87%, var(--border-color) 87.5%, var(--border-color)), linear-gradient(150deg, var(--border-color) 12%, transparent 12.5%, transparent 87%, var(--border-color) 87.5%, var(--border-color)), linear-gradient(60deg, var(--border-color) 25%, transparent 25.5%, transparent 75%, var(--border-color) 75%, var(--border-color)), linear-gradient(60deg, var(--border-color) 25%, transparent 25.5%, transparent 75%, var(--border-color) 75%, var(--border-color))',
        backgroundSize: '80px 140px',
        backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
        opacity: 0.1,
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '850px' }}>
          
          {/* Header Tag */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '1rem', 
            color: '#1e3a8a', fontWeight: 600, fontSize: '1.1rem',
            marginBottom: '1.5rem'
          }}>
            Delight your Customers
            <div style={{ height: '2px', width: '40px', background: '#1e3a8a' }}></div>
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 4vw, 4.5rem)', 
            lineHeight: '1.15', 
            marginBottom: '1.5rem', 
            letterSpacing: '-0.02em', 
            fontWeight: 800, 
            color: 'var(--text-primary)'
          }}>
            Do you want to see <br />
            <span style={{ color: '#1e3a8a' }}>what you've been missing?</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '3rem', 
            lineHeight: '1.7', 
            maxWidth: '750px'
          }}>
            We are equipped with an updated technical knowledge to serve our customers 
            properly. Our method of application maintains the industry standards for Government & Enterprise solutions.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/enterprise" style={{ 
              padding: '1rem 2.5rem', 
              background: '#1e3a8a', 
              color: '#fff', 
              borderRadius: '0.25rem', 
              fontWeight: 600, 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              boxShadow: '0 4px 15px rgba(30, 58, 138, 0.3)', 
              transition: 'transform 0.2s', 
              cursor: 'pointer' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            >
              View Details
            </Link>
            <Link to="/#contact" style={{ 
              padding: '1rem 2.5rem', 
              background: 'transparent', 
              color: 'var(--text-primary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '0.25rem', 
              fontWeight: 600, 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              transition: 'background 0.2s' 
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
