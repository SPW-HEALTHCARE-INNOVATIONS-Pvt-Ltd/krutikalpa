import React, { useState, useEffect, useRef } from 'react';
import { CONTACT_LINKS } from '../constants/contactData';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const contactItems = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      link: CONTACT_LINKS.whatsapp,
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.459 3.473 1.332 4.985l-1.417 5.176 5.305-1.392a9.923 9.923 0 0 0 4.767 1.218h.004c5.503 0 9.985-4.482 9.985-9.988C22 6.482 17.518 2 12.012 2zm5.835 14.288c-.241.678-1.22 1.233-1.688 1.31-.468.077-.923.369-3.037-.462-2.545-1.001-4.178-3.585-4.305-3.754-.127-.169-.938-1.246-.938-2.378 0-1.132.593-1.691.805-1.923.212-.231.462-.292.616-.292.154 0 .308.008.439.015.139.008.324-.054.508.393.185.454.631 1.54.685 1.648.054.108.092.231.015.377-.077.154-.116.246-.231.377-.116.131-.246.292-.354.393-.123.116-.254.239-.108.493.146.254.654 1.078 1.401 1.748.962.862 1.77 1.132 2.017 1.254.246.123.393.108.539-.062.146-.169.631-.739.801-.993.169-.254.339-.215.57-.131.231.085 1.463.693 1.717.824.254.131.423.192.485.3.062.108.062.624-.179 1.302z"/>
        </svg>
      )
    },
    {
      id: 'email',
      name: 'Email Us',
      link: CONTACT_LINKS.email,
      color: '#EA4335',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      id: 'phone',
      name: 'Call Us',
      link: CONTACT_LINKS.phone,
      color: '#3B82F6',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      id: 'sms',
      name: 'Send SMS',
      link: CONTACT_LINKS.sms,
      color: '#A855F7',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h8" />
          <path d="M8 14h6" />
        </svg>
      )
    }
  ];

  return (
    <div ref={containerRef} style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      {/* CSS Styles for Tooltips and Pulse Effect */}
      <style>{`
        .floating-btn-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s, background 0.3s;
          cursor: pointer;
          position: relative;
          color: white;
        }

        .floating-btn-item:hover {
          transform: scale(1.15);
          background: rgba(255, 255, 255, 0.1);
        }

        .floating-tooltip {
          position: absolute;
          right: 65px;
          top: 50%;
          transform: translateY(-50%) translateX(10px);
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(8px);
        }

        .floating-btn-item:hover .floating-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        @keyframes floating-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

        .main-floating-trigger {
          animation: floating-pulse 2.5s infinite;
        }

        .main-floating-trigger:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Floating Action Menu Items */}
      <div style={{
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        gap: '1rem',
        position: 'relative'
      }}>
        {/* Main Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`floating-btn-item main-floating-trigger`}
          style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            borderColor: 'transparent',
            boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
            transform: isOpen ? 'rotate(135deg)' : 'none',
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.3s'
          }}
          aria-label="Toggle contact menu"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          )}
        </button>

        {/* List of Contact Action Items */}
        {contactItems.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            target={item.id === 'whatsapp' ? '_blank' : undefined}
            rel={item.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
            className="floating-btn-item"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.6)',
              pointerEvents: isOpen ? 'auto' : 'none',
              transition: `opacity 0.25s ease ${index * 0.05}s, transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s`,
              borderWidth: '1.5px',
              color: item.color
            }}
          >
            {item.icon}
            <span className="floating-tooltip">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
