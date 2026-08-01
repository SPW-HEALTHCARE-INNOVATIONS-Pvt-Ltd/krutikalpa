import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="section-padding" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          {/* Pill Badge */}
          <div style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
            background: 'var(--glass-bg)', padding: '0.5rem 1rem', 
            borderRadius: '2rem', border: '1px solid var(--border-color)',
            marginBottom: '1.5rem', fontSize: '0.875rem', fontWeight: 600,
            color: 'var(--text-secondary)'
          }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
            Legal & Compliance
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4rem)', 
            marginBottom: '1rem', 
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            fontWeight: 800
          }}>
            Privacy <span className="text-gradient-accent">Policy</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 500 }}>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="glass-panel" style={{ 
          padding: '3rem', 
          display: 'flex', flexDirection: 'column', gap: '2rem', 
          lineHeight: '1.8', fontSize: '1.125rem', color: 'var(--text-secondary)',
          borderRadius: '1.5rem', border: '1px solid var(--border-color)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
        }}>
          <p>
            At Krutikalpa Solutions Pvt. Ltd., we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our AI and digital governance platforms.
          </p>
          
          <div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>1. Information We Collect</h3>
            <p>
              We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>2. How We Use Collected Information</h3>
            <p>
              Krutikalpa Solutions may collect and use Users' personal information for the following purposes:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>To improve customer service</li>
              <li>To personalize user experience</li>
              <li>To improve our Site</li>
              <li>To send periodic emails</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>3. How We Protect Your Information</h3>
            <p>
              We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>4. Sharing Your Personal Information</h3>
            <p>
              We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>5. Changes to This Privacy Policy</h3>
            <p>
              Krutikalpa Solutions has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
