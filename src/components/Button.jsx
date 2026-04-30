import React from 'react';
import '../styles/global.css';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    const baseStyle = {
        padding: '16px 32px',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: variant === 'primary' ? 'var(--primary-neon)' : 'transparent',
        color: variant === 'primary' ? '#000' : '#fff',
        border: variant === 'secondary' ? '1px solid rgba(255,255,255,0.3)' : 'none',
        boxShadow: variant === 'primary' ? '0 0 20px var(--primary-glow)' : 'none',
    };

    const hoverStyle = `
    .btn-${variant}:hover {
      transform: scale(1.05);
      box-shadow: 0 0 30px var(--primary-glow);
    }
  `;

    return (
        <>
            <style>{hoverStyle}</style>
            <button
                className={`btn-${variant} ${className}`}
                style={baseStyle}
                onClick={onClick}
                onMouseEnter={(e) => {
                    if (variant === 'secondary') {
                        e.currentTarget.style.borderColor = 'var(--primary-neon)';
                        e.currentTarget.style.color = 'var(--primary-neon)';
                    }
                }}
                onMouseLeave={(e) => {
                    if (variant === 'secondary') {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                        e.currentTarget.style.color = '#fff';
                    }
                }}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
