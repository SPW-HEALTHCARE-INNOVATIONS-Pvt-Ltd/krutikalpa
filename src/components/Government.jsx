import React, { useState } from 'react';
import { Shield, Settings, Users, MessageSquare, BarChart, Building2, CheckCircle2, ArrowRight, Map, Briefcase, Award, Activity } from 'lucide-react';

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

  const experienceData = [
    { year: '2009', scheme: 'RSBY – Rashtriya Swasthya Bima Yojana', states: ['Pan-India'], scale: '1,50,000' },
    { year: '2010', scheme: 'RSBY – Rashtriya Swasthya Bima Yojana', states: ['Pan-India'], scale: '3,70,000' },
    { year: '2011', scheme: 'RSBY – Rashtriya Swasthya Bima Yojana', states: ['Pan-India'], scale: '5,90,000' },
    { year: '2012', scheme: 'BKKY – Biju Krushak Kalyan Yojana', states: ['Odisha'], scale: '1,70,000' },
    { year: '2013', scheme: 'RSBY – Rashtriya Swasthya Bima Yojana', states: ['Pan-India'], scale: '1,10,000' },
    { year: '2014', scheme: 'CMUHIS – CM Universal Health Insurance', states: ['Arunachal-Pradesh'],scale: '90,000' },
    { year: '2015', scheme: 'RSBY – Rashtriya Swasthya Bima Yojana', states: ['Pan-India'], scale: '5,10,000' },
    { year: '2016', scheme: 'AAA – Atal Amrit Abhiyan', states: ['Assam'], scale: '4,10,000' },
    { year: '2018', scheme: 'MSBY – Mukhya Mantri Swasthya Bima Yojana', states: ['Chhattisgarh'], scale: '2,40,000' },
    { year: '2023–25', scheme: 'Ayushman Bharat – Claims Desk & Field Audit', states: ['Pan-India'], scale: '6,00,000 claims' }
  ];

  return (
    <section id="government" className="section-padding" style={{ paddingTop: '5rem' }}>
      <div className="container">
        {/* Lumina Style Hero Section for Government */}
        <div style={{ 
          display: 'grid',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '75vh',
          marginBottom: '6rem'
        }} className="grid-2">
          
          {/* Left Column */}
          <div style={{ textAlign: 'left' }}>
            {/* Pill Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem 1rem',
              borderRadius: '2rem',
              marginBottom: '2rem', fontSize: '0.875rem', fontWeight: 600,
              color: 'var(--accent-primary)'
            }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
              Public Sector Solutions
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.75rem, 4vw + 1rem, 4.25rem)',
              lineHeight: '1.15',
              marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-primary)'
            }}>
              Building the Future of <br />
              <span className="text-gradient-accent">Digital Governance</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}>
              Krutikalpa helps governments deliver faster, smarter, and citizen-centric public services
              through Artificial Intelligence, Automation, and Digital Platforms.
            </p>
            
          
          </div>

          {/* Right Column - Image & Floating Badge */}
          <div style={{ position: 'relative' }}>
            <img 
              src="/government_hero.png" 
              alt="Digital Governance Platforms" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '1.5rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
              }} 
            />
            
            {/* Floating Badge (like "Uptime 99.9%") */}
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
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
                Platform Status
              </div>
              <div style={{ color: '#10b981', fontWeight: 600, fontSize: '0.9rem' }}>99.9% Uptime Active</div>
            </div>
          </div>
        </div>

        {/* Section 2 - Government Experience */}
          <div className="grid-2" style={{ 
            marginBottom: '4.5rem', 
            background: 'rgba(59, 130, 246, 0.03)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '1.5rem', 
            padding: '3rem 2.5rem', 
            position: 'relative', 
            overflow: 'hidden',
            alignItems: 'center'
          }}>
            {/* Ambient Background Glow */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              left: '-50px',
              width: '250px',
              height: '250px',
              background: 'rgba(59, 130, 246, 0.12)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              zIndex: 0,
              pointerEvents: 'none'
            }}></div>
            
            {/* Left Column - Heading & Badge */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                background: 'rgba(16, 185, 129, 0.1)', 
                color: '#10b981', 
                padding: '0.5rem 1.25rem', 
                borderRadius: '2rem', 
                fontWeight: 700, 
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}>
                <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', marginRight: '8px' }}></span>
                15+ Years of Delivery
              </div>
              <h2 style={{ 
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', 
                fontWeight: 850, 
                lineHeight: '1.15', 
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                margin: 0
              }}>
                Government <br />
                <span className="text-gradient-accent">Experience</span>
              </h2>
            </div>

            {/* Right Column - Narrative description */}
            <div style={{ 
              position: 'relative', 
              zIndex: 1,
              borderLeft: '4px solid var(--accent-primary)',
              paddingLeft: '2rem'
            }}>
              <p style={{ 
                fontSize: '1.15rem', 
                color: 'var(--text-secondary)', 
                lineHeight: '1.75',
                margin: 0,
                fontWeight: 500
              }}>
                Krutikalpa’s leadership and execution team has contributed to the successful implementation of large-scale technology-driven government programmes across multiple states in India, spanning beneficiary enrolment, smart identity solutions, healthcare technology, and claims audit at national scale.
              </p>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '0', overflow: 'hidden', borderRadius: '1.25rem', border: '1px solid var(--border-color)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: 'rgba(59, 130, 246, 0.08)', borderBottom: '1px solid var(--border-color)' }}>
                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', textAlign: 'center' }}>Year</th>
                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', textAlign: 'center' }}>Scheme / Programme</th>
                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', textAlign: 'center' }}>State(s)</th>
                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem', textAlign: 'center' }}>Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {experienceData.map((row, index) => (
                    <tr 
                      key={index} 
                      style={{ 
                        borderBottom: index === experienceData.length - 1 ? 'none' : '1px solid var(--border-color)',
                        transition: 'background 0.2s',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(59, 130, 246, 0.03)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <td style={{ padding: '1.25rem 2rem', whiteSpace: 'nowrap', textAlign: 'center' }}>
                        <span style={{ 
                          background: row.year.includes('–') ? 'rgba(99, 102, 241, 0.15)' : 'rgba(59, 130, 246, 0.1)', 
                          color: row.year.includes('–') ? '#6366f1' : 'var(--accent-primary)', 
                          padding: '0.4rem 0.8rem', 
                          borderRadius: '2rem', 
                          fontWeight: 700,
                          fontSize: '0.95rem'
                        }}>
                          {row.year}
                        </span>
                      </td>
                      <td style={{ padding: '1.25rem 2rem', color: '#f56f10ff', fontWeight: 600, fontSize: '1.05rem', textAlign: 'center' }}>
                        {row.scheme}
                      </td>
                      <td style={{ padding: '1.25rem 2rem', textAlign: 'center' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                          {row.states.map((state, sIdx) => (
                            <span 
                              key={sIdx} 
                              style={{ 
                                background: 'rgba(255, 255, 255, 0.05)', 
                                border: '1px solid var(--border-color)', 
                                color: 'var(--text-secondary)', 
                                padding: '0.25rem 0.6rem', 
                                borderRadius: '0.5rem', 
                                fontSize: '0.85rem',
                                fontWeight: 500
                              }}
                            >
                              {state}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td style={{ padding: '1.25rem 2rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
                        <span style={{ 
                          color: '#10b981', 
                          fontWeight: 800, 
                          fontSize: '1.1rem' 
                        }}>
                          {row.scale}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
                    background: hoverPlatform === i ? 'var(--accent-primary)' : 'var(--glass-bg)',
                    border: '1px solid',
                    borderColor: hoverPlatform === i ? 'var(--accent-primary)' : 'var(--border-color)',
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
              { num: '50 Lakhs+', label: 'Citizens Enrolled & Served', icon: <Users size={28} />, color: 'var(--accent-primary)', glow: 'rgba(59, 130, 246, 0.15)' },
              { num: '10+', label: 'States Across India', icon: <Map size={28} />, color: 'var(--accent-secondary)', glow: 'rgba(6, 182, 212, 0.15)' },
              { num: '8', label: 'Major Government Schemes', icon: <Briefcase size={28} />, color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.15)' },
              { num: '15+', label: 'Years of Experience', icon: <Award size={28} />, color: '#10b981', glow: 'rgba(16, 185, 129, 0.15)' },
              { num: '99%', label: 'Platform Uptime Commitment', icon: <Activity size={28} />, color: '#6366f1', glow: 'rgba(99, 102, 241, 0.15)' }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="glass-panel" 
                style={{ 
                  textAlign: 'center', 
                  padding: '2.5rem 1.5rem 2rem 1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderTop: `4px solid ${stat.color}`,
                  background: 'linear-gradient(180deg, var(--bg-secondary) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Floating Icon Background Glow */}
                <div style={{
                  position: 'absolute',
                  top: '-1rem',
                  right: '-1rem',
                  width: '80px',
                  height: '80px',
                  background: stat.glow,
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: 0,
                  opacity: 0.5
                }}></div>

                {/* Icon Container */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: stat.glow,
                  color: stat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: `0 8px 16px ${stat.glow}`
                }}>
                  {stat.icon}
                </div>

                {/* Value/Number */}
                <div style={{ 
                  fontSize: '2.25rem', 
                  fontWeight: 850, 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                  position: 'relative',
                  zIndex: 1,
                  lineHeight: '1.1'
                }}>
                  {stat.num}
                </div>

                {/* Label */}
                <div style={{ 
                  fontSize: '0.95rem', 
                  color: 'var(--text-secondary)', 
                  fontWeight: 600, 
                  lineHeight: '1.4',
                  position: 'relative',
                  zIndex: 1,
                  maxWidth: '90%'
                }}>
                  {stat.label}
                </div>
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
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Let's build the next generation of digital governance together.
          </p>
          
        </div>
      </section>
  );
}
