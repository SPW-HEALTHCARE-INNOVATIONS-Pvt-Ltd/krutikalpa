import React, { useState } from 'react';
import { Cpu, Zap, LineChart, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Enterprise() {
  const [hoverOffer, setHoverOffer] = useState(null);

  const capabilities = [
    'Artificial Intelligence & Machine Learning',
    'Natural Language Processing (including Marathi NLP)',
    'Computer Vision',
    'Workflow Automation',
    'Cloud Computing with Auto-scaling',
    'REST API Integration',
    'Mobile Apps (Android, iOS, PWA)',
    'GIS & Geo-tagged Reporting',
    'Business Intelligence Dashboards',
    'Real-Time Analytics',
    'Secure Authentication & Role-Based Access',
    'Audit Logging'
  ];

  const offerings = [
    'Artificial Intelligence Solutions', 'Business Process Automation',
    'Custom Software Development', 'Digital Transformation',
    'Enterprise Applications', 'Data & Analytics'
  ];

  return (
    <section id="enterprise" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Lumina Style Hero Section for Enterprise */}
        <div style={{ 
          display: 'grid',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '85vh',
          marginBottom: '6rem',
          paddingTop: '2rem'
        }} className="grid-2">
          
          {/* Left Column */}
          <div style={{ textAlign: 'left' }}>
            {/* Pill Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(79, 70, 229, 0.1)', padding: '0.5rem 1rem',
              borderRadius: '2rem',
              marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 600,
              color: '#4f46e5'
            }}>
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>⚡</span>
              Built for modern enterprises
            </div>
            
            <h2 style={{
              fontSize: 'clamp(3rem, 4vw + 1rem, 4.5rem)',
              lineHeight: '1.1',
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-primary)'
            }}>
              AI That Drives <br />
              Business Performance
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              Krutikalpa partners with businesses to design intelligent software, automate operations,
              and unlock growth through Artificial Intelligence and Digital Transformation.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
              <button style={{ 
                padding: '1rem 2rem', 
                fontSize: '1.125rem',
                background: '#4f46e5',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(79, 70, 229, 0.4)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
              >
                Start Free Trial &rarr;
              </button>
              <button style={{ 
                padding: '1rem 2rem', 
                fontSize: '1.125rem',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: '0.5rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                Learn More
              </button>
            </div>

            {/* Metrics */}
            <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>10k+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Happy Customers</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>98%</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Satisfaction Rate</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>150+</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Components</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Floating Badge */}
          <div style={{ position: 'relative' }}>
            <img 
              src="/enterprise_hero.png" 
              alt="Enterprise Professionals" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '1.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }} 
            />
            
            {/* Floating Badge (like "Revenue Up") */}
            <div style={{ 
              position: 'absolute', 
              bottom: '15%', 
              left: '-10%', 
              background: 'var(--glass-bg)', 
              backdropFilter: 'blur(12px)',
              padding: '1.5rem',
              borderRadius: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              zIndex: 2
            }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>Revenue Up</div>
              <div style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>+42% this month</div>
            </div>
          </div>
        </div>

        {/* Section 1 - What We Offer */}
        <div style={{ marginBottom: '6rem' }}>
          <h3 style={{ textAlign: 'center', color: 'var(--accent-secondary)', marginBottom: '3rem', fontSize: '2rem' }}>What We Offer</h3>
          <div className="grid-3">
            {offerings.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverOffer(i)}
                onMouseLeave={() => setHoverOffer(null)}
                className="glass-panel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  background: hoverOffer === i ? 'var(--accent-primary)' : 'var(--glass-bg)',
                  border: hoverOffer === i ? '1px solid transparent' : '1px solid var(--border-color)',
                  boxShadow: hoverOffer === i ? '0 10px 25px -5px rgba(59, 130, 246, 0.5)' : 'none',
                  transform: hoverOffer === i ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.3s ease'
                }}>
                <Cpu size={24} color={hoverOffer === i ? '#ffffff' : 'var(--accent-secondary)'} />
                <span style={{ fontWeight: 600, color: hoverOffer === i ? '#ffffff' : 'inherit' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 - Industries We Serve */}
        <div style={{ marginBottom: '8rem', textAlign: 'center', overflow: 'hidden' }}>
          <h3 style={{ marginBottom: '3rem', fontSize: '2rem', color: 'var(--text-secondary)' }}>Trusted across key industries</h3>
          <div className="marquee-container">
            <div className="marquee-content">
              {[...['Healthcare', 'Manufacturing', 'Retail', 'Education', 'Logistics', 'Professional Services', 'Government Contractors'], ...['Healthcare', 'Manufacturing', 'Retail', 'Education', 'Logistics', 'Professional Services', 'Government Contractors']].map((ind, i) => (
                <div key={i} style={{
                  padding: '1.25rem 2.5rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '3rem',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
                  whiteSpace: 'nowrap',
                  color: 'var(--text-primary)'
                }}>
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 & 4 Grid */}
        <div className="grid-2" style={{ marginBottom: '6rem' }}>
          {/* Section 3 - Why Businesses Choose Us */}
          <div className="glass-panel" style={{ background: 'rgba(6, 182, 212, 0.05)', height: 'fit-content' }}>
            <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Why Businesses Choose Krutikalpa</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
              Technology is only valuable when it creates measurable business outcomes.
              Our approach combines consulting, technology, and execution to help organizations:
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { text: 'Improve productivity', icon: <LineChart size={20} /> },
                { text: 'Reduce operational costs', icon: <Zap size={20} /> },
                { text: 'Automate repetitive work', icon: <Cpu size={20} /> },
                { text: 'Enable faster decision-making', icon: <Globe size={20} /> },
                { text: 'Build scalable digital systems', icon: <Globe size={20} /> }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-secondary)' }}>{item.icon}</div>
                  <span style={{ fontSize: '1.1rem' }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 - Our Capabilities */}
          <div className="glass-panel">
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Our Capabilities</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {capabilities.map((cap, i) => (
                <span key={i} style={{
                  padding: '0.75rem 1.25rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '2rem',
                  fontSize: '1rem'
                }}>
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '6rem',
          padding: '5rem 3rem',
          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
          borderRadius: '1.5rem',
          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
        }}>
          <h3 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', color: '#ffffff', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Let's Build Smarter Businesses
          </h3>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Whether you're starting your AI journey or scaling enterprise-wide transformation, we're ready to help.
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1.125rem',
            fontWeight: 600,
            background: '#ffffff',
            color: 'var(--accent-primary)',
            border: 'none',
            borderRadius: '2rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
          }}>
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
