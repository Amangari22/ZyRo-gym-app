import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import DietPlan from './DietPlan';
import WorkoutPlan from './WorkoutPlan';

const Dashboard = ({ user }) => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'diet', label: 'Diet Plan' },
        { id: 'workout', label: 'Workout Plan' },
        { id: 'sleep', label: 'Sleep & Recovery' },
        { id: 'support', label: 'Support' }
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewStats user={user} />;
            case 'diet':
                return <DietPlan user={user} />;
            case 'workout':
                return <WorkoutPlan />;
            default:
                return <div style={{ padding: '40px', color: '#fff' }}>Module Coming Soon</div>;
        }
    };

    return (
        <div style={{ minHeight: '100vh', padding: 'var(--container-padding)' }}>
            {/* Top Welcome */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                    <h1 className="text-gradient">Welcome, Athlete 💪</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Let's crush your goals today.</p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Card style={{ padding: '10px 20px', borderRadius: '12px' }}>
                        <span style={{ color: 'var(--primary-neon)' }}>Start Date:</span> {new Date().toLocaleDateString()}
                    </Card>
                </div>
            </header>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px', overflowX: 'auto' }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            background: activeTab === tab.id ? 'var(--glass-bg)' : 'transparent',
                            color: activeTab === tab.id ? 'var(--primary-neon)' : 'var(--text-muted)',
                            border: activeTab === tab.id ? '1px solid var(--glass-border)' : 'none',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            {renderContent()}
        </div>
    );
};

const OverviewStats = ({ user }) => {
    if (!user) return null;

    const weightChange = user.targetWeight ? (user.targetWeight - user.weight) : 0;
    const changeText = weightChange > 0 ? `+${weightChange} kg` : `${weightChange} kg`;

    const stats = [
        { label: 'Current Weight', value: `${user.weight} kg`, change: 'Starting', color: '#ff3c3c' },
        { label: 'Target Weight', value: `${user.targetWeight} kg`, change: changeText, color: '#00ff88' },
        { label: 'BMI', value: user.bmi, change: 'Calculated', color: '#3c3cff' },
        { label: 'Daily Calories', value: user.calories, change: 'Target', color: '#ffaa00' },
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {stats.map((stat, index) => (
                <Card key={index} hoverEffect={true}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>{stat.label}</p>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '4px' }}>{stat.value}</h3>
                    <span style={{ color: stat.color, fontSize: '0.8rem', fontWeight: 'bold' }}>{stat.change}</span>
                </Card>
            ))}
        </div>
    );
};

export default Dashboard;
