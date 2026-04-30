import React from 'react';

const Card = ({ children, className = '', hoverEffect = false, onClick, style = {} }) => {
    const baseStyle = {
        background: 'var(--glass-bg)',
        backdropFilter: 'var(--glass-backdrop)',
        WebkitBackdropFilter: 'var(--glass-backdrop)',
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        borderRadius: '24px',
        padding: '32px',
        transition: 'var(--transition-smooth)',
        cursor: onClick ? 'pointer' : 'default',
        ...style // Merge custom styles
    };

    return (
        <div
            className={`glass-card ${className}`}
            style={baseStyle}
            onClick={onClick}
            onMouseEnter={(e) => {
                if (hoverEffect) {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = 'var(--primary-neon)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(255, 60, 60, 0.2)';
                }
            }}
            onMouseLeave={(e) => {
                if (hoverEffect) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                }
            }}
        >
            {children}
        </div>
    );
};

export default Card;
