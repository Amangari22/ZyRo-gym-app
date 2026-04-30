import React from 'react';
import Card from '../components/Card';
import { useUser } from '../context/UserContext';
import { motion } from 'framer-motion';

const Overview = () => {
    const { userData } = useUser();

    if (!userData) {
        return <div style={{ color: '#fff' }}>Loading profile...</div>;
    }

    const weightChange = userData.targetWeight ? (userData.targetWeight - userData.weight) : 0;
    const changeText = weightChange > 0 ? `+${weightChange} kg` : `${weightChange} kg`;

    const stats = [
        { label: 'Current Weight', value: `${userData.weight} kg`, change: 'Starting', color: '#ff3c3c' },
        { label: 'Target Weight', value: `${userData.targetWeight} kg`, change: changeText, color: '#00ff88' },
        { label: 'BMI', value: userData.bmi, change: 'Calculated', color: '#3c3cff' },
        { label: 'Daily Calories', value: userData.calories, change: 'Target', color: '#ffaa00' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}
        >
            {stats.map((stat, index) => (
                <Card key={index} hoverEffect={true}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>{stat.label}</p>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '4px' }}>{stat.value}</h3>
                    <span style={{ color: stat.color, fontSize: '0.8rem', fontWeight: 'bold' }}>{stat.change}</span>
                </Card>
            ))}
        </motion.div>
    );
};

export default Overview;
