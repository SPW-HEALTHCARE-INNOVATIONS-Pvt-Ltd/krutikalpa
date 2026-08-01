import React, { useState } from 'react';
import { Shield, Settings, Users, MessageSquare, BarChart, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Government() {
  const [hoverDo, setHoverDo] = useState(null);
  const [hoverPlatform, setHoverPlatform] = useState(null);
  const platforms = [
    {
      title: "WardMitra",
      desc: "AI-powered digital governance platform enabling citizen engagement, grievance management, workflow automation, multilingual communication, and administrative dashboards."
    },
    {
      title: "Field Assist",
      desc: "Geo-tagged field reporting and monitoring application designed for mobile workforce management, secure data collection, and real-time field operations."
    },
    {
      title: "ArogyaMitra",
      desc: "Digital healthcare and public health platform designed to improve healthcare accessibility, streamline operations, and enhance citizen service delivery."
    }
  ];

  return (
    <section id="government" className="section-padding">
      <div className="container">
        {/* Hero Section of Government */}
        <div style={{ textAlign: 'center', marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem auto' }}>
          {/* Pill Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--glass-bg)', padding: '0.5rem 1rem',
            borderRadius: '2rem', border: '1px solid var(--border-color)',
            marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 600,
            color: 'var(--text-secondary)'
          }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
            Public Sector Solutions
          </div>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 4vw + 1rem, 4rem)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            fontWeight: 800
          }}>
            Building the Future of <br />
            <span className="text-gradient-accent">Digital Governance</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            Krutikalpa helps governments deliver faster, smarter, and citizen-centric public services
            through Artificial Intelligence, Automation, and Digital Platforms.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Request a Demo</button>
        </div>

        {/* Section 1 - What We Do */}
        <div style={{ marginBottom: '6rem' }}>
          <h3 style={{ textAlign: 'center', color: 'var(--accent-primary)', marginBottom: '1.5rem', fontSize: '2rem' }}>What We Do</h3>
          <p style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            We partner with government organizations to design and implement technology solutions
            that improve governance, increase operational efficiency, and enhance citizen experiences.
          </p>
          <div className="grid-3">
            {['AI-Powered Citizen Services', 'Digital Governance Platforms', 'Workflow Automation', 'Grievance Management', 'Analytics & Dashboards', 'Smart City Solutions'].map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoverDo(i)}
                onMouseLeave={() => setHoverDo(null)}
                className="glass-panel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  background: hoverDo === i ? 'var(--accent-primary)' : 'var(--glass-bg)',
                  border: hoverDo === i ? '1px solid transparent' : '1px solid var(--border-color)',
                  boxShadow: hoverDo === i ? '0 10px 25px -5px rgba(59, 130, 246, 0.5)' : 'none',
                  transform: hoverDo === i ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.3s ease'
                }}>
                <Shield size={24} color={hoverDo === i ? '#ffffff' : 'var(--accent-primary)'} />
                <span style={{ fontWeight: 600, color: hoverDo === i ? '#ffffff' : 'inherit' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 - Our Platforms */}
        <div style={{ marginBottom: '6rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Our Platforms</h3>
          <div className="grid-3">
            {platforms.map((p, i) => {
              const Icon = [Building2, Shield, Settings][i];
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoverPlatform(i)}
                  onMouseLeave={() => setHoverPlatform(null)}
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2.5rem 2rem',
                    cursor: 'pointer',
                    background: hoverPlatform === i
                      ? 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))'
                      : 'var(--glass-bg)',
                    border: '1px solid',
                    borderColor: hoverPlatform === i ? 'transparent' : 'var(--border-color)',
                    borderRadius: '1.5rem',
                    boxShadow: hoverPlatform === i ? '0 15px 35px -5px rgba(59, 130, 246, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.03)',
                    transform: hoverPlatform === i ? 'translateY(-4px)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}>
                  <div style={{
                    width: '60px', height: '60px',
                    borderRadius: '1rem',
                    background: hoverPlatform === i ? 'rgba(255, 255, 255, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    <Icon size={32} color={hoverPlatform === i ? '#ffffff' : 'var(--accent-primary)'} />
                  </div>
                  <h4 style={{
                    color: hoverPlatform === i ? '#ffffff' : 'var(--text-primary)',
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em'
                  }}>{p.title}</h4>
                  <p style={{
                    margin: 0,
                    fontSize: '1.05rem',
                    color: hoverPlatform === i ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)',
                    lineHeight: '1.7'
                  }}>{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section 3 & 4 Grid */}
        <div className="grid-2" style={{ marginBottom: '6rem' }}>
          {/* Section 3 - Why Choose Us */}
          <div className="glass-panel" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Why Government Organizations Choose Krutikalpa</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {['Governance-first approach', 'AI-native platforms with Marathi NLP', 'Secure & scalable architecture', 'Citizen-centric multilingual design', 'Data-driven administrative insights', 'Aligned with India\'s DPDP Act'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <CheckCircle2 size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.1rem' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 - Our Commitment */}
          <div className="glass-panel" style={{ background: 'rgba(6, 182, 212, 0.05)' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-secondary)' }}>Our Commitment</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              We are committed to supporting governments in building transparent, accountable, efficient, and future-ready public administration through the responsible adoption of Artificial Intelligence and digital technologies.
            </p>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              We believe that the future of governance lies in intelligent systems that empower administrators, improve citizen trust, and enable better policy decisions through data.
            </p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              We look forward to partnering with governments to deliver intelligent, citizen-centric governance to every corner of the state.
            </p>
          </div>
        </div>

        {/* Section 5 - Impact in Numbers */}
        <div style={{ marginBottom: '6rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Our Impact in Numbers</h3>
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {[
              { num: '50 Lakhs+', label: 'Citizens Enrolled & Served' },
              { num: '10+', label: 'States Across India' },
              { num: '8', label: 'Major Government Schemes' },
              { num: '15+', label: 'Years of Experience' },
              { num: '99%', label: 'Platform Uptime Commitment' }
            ].map((stat, i) => (
              <div key={i} className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '1rem' }}>{stat.num}</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: '1.4' }}>{stat.label}</div>
              </div>
            ))}
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
            Ready to Modernize Public Services?
          </h3>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Let's build the next generation of digital governance together.
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
            Schedule a Discussion
          </button>
        </div>
      </div>
    </section>
  );
}
