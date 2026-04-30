import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { plans } from '../data/plans';
import Button from '../components/Button';
import Card from '../components/Card';

const MyPlan = () => {
    const { selectedPlan, userData } = useUser();
    const navigate = useNavigate();
    const [expandedDay, setExpandedDay] = useState(0);

    const planData = plans[selectedPlan];

    useEffect(() => {
        if (!selectedPlan) {
            navigate('/');
        }
    }, [selectedPlan, navigate]);

    if (!planData) return null;

    // Structure the split based on muscleWorkouts or weeklySplit
    // For this redesign, we'll ensure we have a clean 6-7 day split
    const getWeeklySplit = () => {
        if (planData.weeklySplit && planData.weeklySplit.length >= 5) {
            return planData.weeklySplit;
        }

        // Fallback or mapped split if using muscleWorkouts
        const muscles = Object.keys(planData.muscleWorkouts || {});
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        return days.map((day, i) => {
            const muscle = muscles[i] || 'Rest';
            return {
                day,
                focus: muscle === 'Rest' ? 'Recovery & Mobility' : `${muscle} Evolution`,
                exercises: planData.muscleWorkouts?.[muscle] || []
            };
        });
    };

    const weeklySplit = getWeeklySplit();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingBottom: '100px', paddingTop: '110px' }}
        >
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <motion.h2
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="text-gradient"
                    style={{ fontSize: '3rem', marginBottom: '10px' }}
                >
                    {planData.title}
                </motion.h2>
                <p style={{ color: 'var(--primary-neon)', fontSize: '1.2rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
                    Active Transformation Protocol | {planData.stats?.[0]?.value || '12 Weeks'}
                </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <span style={{ width: '8px', height: '24px', background: 'var(--primary-neon)', borderRadius: '2px' }}></span>
                        Weekly Workout Roadmap
                    </h3>
                    <div style={{ display: 'grid', gap: '15px' }}>
                        {weeklySplit.map((day, idx) => (
                            <WorkoutAccordion
                                key={idx}
                                day={day}
                                isOpen={expandedDay === idx}
                                onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Button variant="outline" onClick={() => navigate('/')}>Switch Transformation Plan</Button>
            </div>
        </motion.div>
    );
};

const WorkoutAccordion = ({ day, isOpen, onClick }) => {
    return (
        <Card
            className="glass-card"
            style={{
                padding: '0',
                overflow: 'hidden',
                border: isOpen ? '1px solid var(--primary-neon)' : '1px solid var(--glass-border)',
                transition: 'all 0.3s ease'
            }}
        >
            <div
                onClick={onClick}
                style={{
                    padding: '25px 35px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: isOpen ? 'rgba(0, 229, 255, 0.05)' : 'transparent'
                }}
            >
                <div>
                    <span style={{ color: 'var(--primary-neon)', fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        {day.day}
                    </span>
                    <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: '5px 0 0 0' }}>{day.focus}</h3>
                </div>
                <div style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: isOpen ? 'var(--primary-neon)' : 'var(--text-muted)'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div style={{ padding: '0 35px 35px 35px', borderTop: '1px solid var(--glass-border)' }}>
                            {day.exercises.length > 0 ? (
                                <div style={{ display: 'grid', gap: '15px', paddingTop: '25px' }}>
                                    {day.exercises.map((ex, i) => (
                                        <div key={i} style={{
                                            display: 'flex',
                                            gap: '20px',
                                            padding: '15px',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderRadius: '12px',
                                            alignItems: 'center',
                                            border: '1px solid rgba(255,255,255,0.03)'
                                        }}>
                                            <div style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '10px',
                                                overflow: 'hidden',
                                                border: '1px solid rgba(0, 229, 255, 0.2)',
                                                flexShrink: 0
                                            }}>
                                                <img src={ex.image} alt={ex.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ color: '#fff', fontWeight: 'bold' }}>{ex.name}</div>
                                                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{ex.sets} Sets × {ex.reps} Reps | Rest: {ex.rest}</div>
                                                {ex.instructions && <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginTop: '4px' }}>{ex.instructions.substring(0, 60)}...</div>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p style={{ color: 'var(--text-muted)', paddingTop: '25px', textAlign: 'center' }}>
                                    Active Recovery Day. Focus on hydration and mobility.
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    );
};

export default MyPlan;
