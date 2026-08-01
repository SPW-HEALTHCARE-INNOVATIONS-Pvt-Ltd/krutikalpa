import React from 'react';

export default function TermsConditions() {
  return (
    <section className="section-padding" style={{ paddingTop: '5rem', paddingBottom: '8rem' }}>
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
            <span style={{ width: '8px', height: '8px', background: 'var(--accent-secondary)', borderRadius: '50%', display: 'inline-block' }}></span>
            Legal & Compliance
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 5vw, 4rem)', 
            marginBottom: '1rem', 
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            fontWeight: 800
          }}>
            Terms & <span style={{ color: 'var(--accent-secondary)' }}>Conditions</span>
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
            Welcome to Krutikalpa Solutions Pvt. Ltd. These terms and conditions outline the rules and regulations for the use of our website and digital services.
          </p>
          
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>1. Acceptance of Terms</h3>
            <p>
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Krutikalpa Solutions if you do not agree to take all of the terms and conditions stated on this page.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>2. License</h3>
            <p>
              Unless otherwise stated, Krutikalpa Solutions Pvt. Ltd. and/or its licensors own the intellectual property rights for all material on Krutikalpa Solutions. All intellectual property rights are reserved. You may access this from Krutikalpa Solutions for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>3. Restrictions</h3>
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>publishing any website material in any other media</li>
              <li>selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>publicly performing and/or showing any website material</li>
              <li>using this website in any way that is or may be damaging to this website</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>4. Disclaimer</h3>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will limit or exclude our or your liability for death or personal injury, limit or exclude our or your liability for fraud or fraudulent misrepresentation, or limit any of our or your liabilities in any way that is not permitted under applicable law.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 700 }}>5. Governing Law</h3>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the jurisdiction in which Krutikalpa Solutions Pvt. Ltd. is registered, and you submit to the non-exclusive jurisdiction of the state and federal courts located there for the resolution of any disputes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
