import React from 'react';

const Footer = () => {
    return (
        <footer
            style={{
                borderTop: '1px solid var(--glass-border)',
                padding: '80px 0 40px',
                marginTop: 'var(--section-spacing)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
                <div style={{ maxWidth: '300px' }}>
                    <h2 className="neon-text" style={{ marginBottom: '16px' }}>ZYRO</h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        Train Smart. Transform Right. <br />
                        The ultimate platform for intelligent fitness transformation.
                    </p>
                </div>

                <div>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Platform</h4>
                    <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#">Methodology</a></li>
                        <li><a href="#">Transformation Stories</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ color: '#fff', marginBottom: '20px' }}>Support</h4>
                    <ul style={{ listStyle: 'none', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div
                className="container"
                style={{
                    marginTop: '60px',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--glass-border)',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}
            >
                © 2026 ZYRO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
