import { Link, useLocation } from 'react-router-dom';
import zyroLogoProfessional from '../assets/zyro-logo-professional.png';
import { useUser } from '../context/UserContext';

const Navbar = () => {
    const location = useLocation();
    const { selectedPlan } = useUser();

    // Hide navbar on dashboard routes if needed, or keep for consistency.
    // User asked for consistency across ALL pages.

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            background: 'rgba(5, 5, 5, 0.85)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 49, 49, 0.1)',
            padding: '12px 0'
        }}>
            <style>{`
                .nav-link {
                    position: relative;
                    text-decoration: none;
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    font-weight: 600;
                    transition: color 0.3s ease;
                    padding: 8px 0;
                }
                .nav-link:hover {
                    color: #fff;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: var(--primary-neon);
                    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 0 10px var(--primary-neon);
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .nav-link.active {
                    color: var(--primary-neon);
                }
                .nav-link.active::after {
                    width: 100%;
                }
                .btn-navbar {
                    padding: 10px 24px;
                    background: var(--primary-neon);
                    color: #000;
                    border: none;
                    borderRadius: 8px;
                    fontWeight: '800';
                    fontSize: '0.9rem';
                    cursor: 'pointer';
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    boxShadow: '0 0 15px rgba(255, 49, 49, 0.3)';
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .btn-navbar:hover {
                    transform: translateY(-2px) scale(1.05);
                    box-shadow: 0 8px 25px rgba(255, 49, 49, 0.5);
                    filter: brightness(1.1);
                }
                .btn-navbar:active {
                    transform: translateY(0) scale(0.98);
                }
            `}</style>
            <div className="container" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 0 20px rgba(255, 49, 49, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(5px)'
                    }}>
                        <img
                            src={zyroLogoProfessional}
                            alt="ZYRO"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                filter: 'hue-rotate(-155deg) saturate(2) brightness(1.2)'
                            }}
                        />
                    </div>
                    <span style={{
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '1.6rem',
                        fontWeight: '900',
                        letterSpacing: '4px',
                        color: '#fff',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(to bottom, #fff 0%, #FF3131 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 15px rgba(255, 49, 49, 0.4))',
                        display: 'inline-block'
                    }}>
                        ZYRO
                    </span>
                </Link>

                <div style={{ display: 'flex', gap: '35px', alignItems: 'center' }}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/brand-identity" className={`nav-link ${location.pathname === '/brand-identity' ? 'active' : ''}`}>Brand</Link>
                    <Link to="/start-plan" style={{ textDecoration: 'none' }}>
                        <button className="btn-navbar" style={{
                            fontWeight: '800',
                            borderRadius: '8px'
                        }}>
                            Start My Plan
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

// NavLink component removed in favor of internal style/class handling for better performance

export default Navbar;
