import React from 'react';

const LoadingScreen = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'var(--bg-dark)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2000
            }}
        >
            <div
                className="loader"
                style={{
                    width: '80px',
                    height: '80px',
                    border: '5px solid rgba(255,255,255,0.1)',
                    borderTop: '5px solid var(--primary-neon)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                    marginBottom: '20px'
                }}
            />
            <h2 className="text-gradient" style={{ animation: 'pulse 1.5s ease infinite' }}>Generating Your Plan...</h2>
            <p style={{ color: 'var(--text-muted)' }}>Analyzing biometric data</p>

            <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
