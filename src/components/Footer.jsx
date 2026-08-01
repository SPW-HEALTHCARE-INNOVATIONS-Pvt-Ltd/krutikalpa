import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, CONTACT_LINKS } from '../constants/contactData';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <style>{`
        .footer-quick-btn {
          transition: transform 0.2s, background 0.2s;
        }
        .footer-quick-btn:hover {
          transform: translateY(-3px) scale(1.1);
          background: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

          {/* Brand Column */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', letterSpacing: '-0.02em', fontSize: '1.75rem', fontWeight: 700 }}>
              <div>
                <span style={{ color: 'var(--logo-kruti-color)' }}>Kruti</span>
                <span style={{ color: '#f27921' }}>Kalpa</span>
                <span style={{ color: 'var(--text-primary)', marginLeft: '0.3rem', fontSize: '1.25rem', fontWeight: 500 }}>Solutions</span>
              </div>
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Building the future of digital governance and enterprise automation through Artificial Intelligence.
            </p>
          </div>

          {/* Quick Links Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Quick Links</h4>
            <Link to="/about" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }}>About Us</Link>
            <Link to="/government" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }}>Government</Link>
            <Link to="/enterprise" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }}>Enterprise</Link>
            <Link to="/#contact" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }}>Contact</Link>
          </div>

          {/* Contact Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <Mail size={18} style={{ flexShrink: 0, marginTop: '0.25rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a
                  href={CONTACT_LINKS.email}
                  onClick={(e) => {
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (!isMobile) {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('open-email-options', {
                        detail: {
                          email: CONTACT_INFO.email,
                          subject: CONTACT_INFO.emailSubject,
                          body: CONTACT_INFO.emailBody
                        }
                      }));
                    }
                  }}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '0.25rem' }}
                >
                  {CONTACT_INFO.email}
                </a>
                <a
                  href={CONTACT_LINKS.supportEmail}
                  onClick={(e) => {
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (!isMobile) {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('open-email-options', {
                        detail: {
                          email: CONTACT_INFO.supportEmail,
                          subject: CONTACT_INFO.emailSubject,
                          body: CONTACT_INFO.emailBody
                        }
                      }));
                    }
                  }}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                >
                  {CONTACT_INFO.supportEmail}
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <Phone size={18} style={{ flexShrink: 0 }} />
              <a href={CONTACT_LINKS.phone} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>{CONTACT_INFO.formattedPhone}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <MapPin size={18} style={{ marginTop: '0.25rem', flexShrink: 0 }} />
              <span style={{ lineHeight: '1.5' }}>Sr No-118/2, Chavhan Baug, Dhayari,<br />Pune, Haveli, Maharashtra – 411041</span>
            </div>

            {/* Quick Connect Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>Quick Connect:</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={CONTACT_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-quick-btn"
                  style={{ ...footerIconStyle, color: '#25D366' }}
                  title="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.473 1.332 4.985l-1.417 5.176 5.305-1.392a9.923 9.923 0 0 0 4.767 1.218h.004c5.503 0 9.985-4.482 9.985-9.988C22 6.482 17.518 2 12.012 2zm5.835 14.288c-.241.678-1.22 1.233-1.688 1.31-.468.077-.923.369-3.037-.462-2.545-1.001-4.178-3.585-4.305-3.754-.127-.169-.938-1.246-.938-2.378 0-1.132.593-1.691.805-1.923.212-.231.462-.292.616-.292.154 0 .308.008.439.015.139.008.324-.054.508.393.185.454.631 1.54.685 1.648.054.108.092.231.015.377-.077.154-.116.246-.231.377-.116.131-.246.292-.354.393-.123.116-.254.239-.108.493.146.254.654 1.078 1.401 1.748.962.862 1.77 1.132 2.017 1.254.246.123.393.108.539-.062.146-.169.631-.739.801-.993.169-.254.339-.215.57-.131.231.085 1.463.693 1.717.824.254.131.423.192.485.3.062.108.062.624-.179 1.302z"/>
                  </svg>
                </a>
                <a
                  href={CONTACT_LINKS.sms}
                  className="footer-quick-btn"
                  style={{ ...footerIconStyle, color: '#A855F7' }}
                  title="SMS"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h8" />
                    <path d="M8 14h6" />
                  </svg>
                </a>
                <a
                  href={CONTACT_LINKS.phone}
                  className="footer-quick-btn"
                  style={{ ...footerIconStyle, color: '#3B82F6' }}
                  title="Call Us"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
                <a
                  href={CONTACT_LINKS.email}
                  onClick={(e) => {
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (!isMobile) {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('open-email-options', {
                        detail: {
                          email: CONTACT_INFO.email,
                          subject: CONTACT_INFO.emailSubject,
                          body: CONTACT_INFO.emailBody
                        }
                      }));
                    }
                  }}
                  className="footer-quick-btn"
                  style={{ ...footerIconStyle, color: '#EA4335' }}
                  title="Email"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Legal Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Legal</h4>
            <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms-conditions" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }}>Terms & Conditions</Link>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>CIN: U62020PN2025PTC238309</span>
          </div>

        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
          paddingTop: '2rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span>AI</span> • <span>Digital Transformation</span> • <span>Enterprise Technology</span>
          </div>
          <div>Copyright © {new Date().getFullYear()} Krutikalpa Solutions Pvt. Ltd. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}

const footerIconStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid var(--border-color)',
  cursor: 'pointer'
};
