import React from 'react';
import Card from './Card';

const meals = [
    { type: 'Breakfast', name: 'Oatmeal & Berries', cal: '450 kcal', img: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800&auto=format&fit=crop' },
    { type: 'Lunch', name: 'Grilled Chicken Salad', cal: '600 kcal', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop' },
    { type: 'Snack', name: 'Greek Yogurt & Nuts', cal: '300 kcal', img: 'https://images.unsplash.com/photo-1488477181946-6428a029177b?q=80&w=800&auto=format&fit=crop' },
    { type: 'Dinner', name: 'Salmon & Asparagus', cal: '550 kcal', img: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?q=80&w=800&auto=format&fit=crop' },
];

import { useUser } from '../context/UserContext';

import { motion } from 'framer-motion';

const DietPlan = () => {
    const { userData } = useUser();
    const waterGoal = userData?.water || '2.5';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start' }}
        >

            {/* Meal Grid */}
            <div style={{ display: 'grid', gap: '20px' }}>
                {meals.map((meal, index) => (
                    <Card key={index} className="glass-card" hoverEffect={true} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
                        <img
                            src={meal.img}
                            alt={meal.name}
                            style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }}
                        />
                        <div>
                            <span style={{ color: 'var(--primary-neon)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{meal.type}</span>
                            <h4 style={{ fontSize: '1.2rem', margin: '4px 0', color: '#fff' }}>{meal.name}</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{meal.cal}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Side Panel */}
            <Card style={{ position: 'sticky', top: '20px' }}>
                <h3 style={{ color: '#fff', marginBottom: '20px' }}>Hydration & Tips</h3>

                <div style={{ marginBottom: '20px' }}>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Daily Water Goal</p>
                    <div style={{ height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{ width: '60%', height: '100%', background: '#00aaff' }}></div>
                    </div>
                    <p style={{ textAlign: 'right', color: '#00aaff', fontSize: '0.8rem', marginTop: '4px' }}>0.5L / {waterGoal}L</p>
                </div>

                <ul style={{ listStyle: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li>🚫 Avoid sugar after 8PM</li>
                    <li>🥗 Eat greens with every meal</li>
                    <li>🥩 Protein first approach</li>
                </ul>
            </Card>

        </motion.div>
    );
};

export default DietPlan;
