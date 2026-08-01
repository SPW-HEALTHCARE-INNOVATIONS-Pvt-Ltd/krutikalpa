import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

          {/* Brand Column */}
          <div>
            <h3 style={{ marginBottom: '1.5rem', letterSpacing: '-0.02em', fontSize: '1.75rem', fontWeight: 700 }}>
              <span style={{ color: 'var(--logo-kruti-color)' }}>Kruti</span>
              <span style={{ color: '#f27921' }}>Kalpa</span>
              <span style={{ color: 'var(--text-primary)', marginLeft: '0.3rem' }}>Solutions</span>
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
                <a href="mailto:info@krutikalpa.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '0.25rem' }}>info@krutikalpa.com</a>
                <a href="mailto:support@krutikalpa.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>support@krutikalpa.com</a>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <Phone size={18} style={{ flexShrink: 0 }} />
              <a href="tel:+916364917021" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>+91 636491 7021</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <MapPin size={18} style={{ marginTop: '0.25rem', flexShrink: 0 }} />
              <span style={{ lineHeight: '1.5' }}>Sr No-118/2, Chavhan Baug, Dhayari,<br />Pune, Haveli, Maharashtra – 411041</span>
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
