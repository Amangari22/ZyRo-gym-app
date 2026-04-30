import { Outlet, NavLink, Link } from 'react-router-dom';
import Card from './Card';
import zyroLogoProfessional from '../assets/zyro-logo-professional.png';

const DashboardLayout = () => {
    const tabs = [
        { path: '/dashboard', label: 'Overview', end: true },
        { path: '/diet', label: 'Diet Plan' },
        { path: '/workout', label: 'Workout Plan' },
        { path: '/sleep', label: 'Sleep & Recovery' },
        { path: '/support', label: 'Support' }
    ];

    return (
        <div style={{ minHeight: '100vh', padding: 'var(--container-padding)' }}>
            {/* Top Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 0 15px rgba(0, 224, 255, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            background: '#0a0a0a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img src={zyroLogoProfessional} alt="ZYRO" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', letterSpacing: '2px', fontFamily: "'Orbitron', sans-serif" }}>ZYRO</span>
                    </Link>
                    <div style={{ width: '1px', height: '30px', background: 'var(--glass-border)', margin: '0 10px' }}></div>
                    <div>
                        <h1 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '0' }}>Welcome, Athlete 💪</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Let's crush your goals today.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Card style={{ padding: '10px 20px', borderRadius: '12px' }}>
                        <span style={{ color: 'var(--primary-neon)' }}>Start Date:</span> {new Date().toLocaleDateString()}
                    </Card>
                </div>
            </header>

            {/* Tabs Navigation */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px', overflowX: 'auto' }}>
                {tabs.map(tab => (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        end={tab.end}
                        style={({ isActive }) => ({
                            padding: '10px 20px',
                            borderRadius: '8px',
                            background: isActive ? 'var(--glass-bg)' : 'transparent',
                            color: isActive ? 'var(--primary-neon)' : 'var(--text-muted)',
                            border: isActive ? '1px solid var(--glass-border)' : 'none',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'nowrap',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        })}
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </div>

            {/* Sub-route Content */}
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
