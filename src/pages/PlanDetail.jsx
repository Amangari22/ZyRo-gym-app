import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { plans } from '../data/plans';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import ExerciseCard from '../components/ExerciseCard';

import { useUser } from '../context/UserContext';

const PlanDetail = () => {
    const { planId } = useParams();
    const navigate = useNavigate();
    const { setSelectedPlan } = useUser();
    const plan = plans[planId];
    const [selectedDay, setSelectedDay] = useState(null);

    const handleStartPlan = () => {
        setSelectedPlan(planId);
        navigate('/my-plan');
    };

    // Handle invalid plan ID
    if (!plan) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#fff' }}>
                <h2>Plan Not Found</h2>
                <Button onClick={() => navigate('/')}>Go Home</Button>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh', paddingBottom: '80px', paddingTop: '70px' }}
        >
            {/* HERO SECTION */}
            <div style={{ position: 'relative', height: '60vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img
                    src={plan.heroImage}
                    alt={plan.title}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle, transparent 20%, var(--bg-dark) 100%)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gradient"
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '10px' }}
                    >
                        {plan.title}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.5rem', color: 'var(--primary-neon)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px' }}
                    >
                        {plan.tagline}
                    </motion.p>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Button
                            variant="primary"
                            style={{ padding: '16px 40px', fontSize: '1.1rem' }}
                            onClick={() => {
                                handleStartPlan();
                            }}
                        >
                            Start This Plan
                        </Button>
                    </motion.div>
                </div>

                <Button
                    variant="outline"
                    onClick={() => navigate('/')}
                    style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    ← Back
                </Button>
            </div>

            <div className="container" style={{ marginTop: '-60px', position: 'relative', zIndex: 5 }}>
                {/* OVERVIEW SECTION */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
                    {plan.stats.map((stat, i) => (
                        <Card key={i} className="glass-card" style={{ textAlign: 'center', padding: '30px' }}>
                            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '5px' }}>{stat.label}</h4>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>{stat.value}</div>
                        </Card>
                    ))}
                </div>

                {/* DESCRIPTION */}
                <div style={{ marginBottom: '80px', textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
                    <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '20px' }}>Mission Brief</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>{plan.description}</p>
                </div>

                {/* WORKOUT SECTIONS BY MUSCLE GROUP */}
                <div style={{ marginBottom: '100px' }}>
                    <h3 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '60px', textAlign: 'center' }}>Project Workout Routine</h3>

                    {plan.muscleWorkouts && Object.entries(plan.muscleWorkouts).map(([muscleGroup, exercises], groupIndex) => (
                        <div key={muscleGroup} style={{ marginBottom: '80px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                marginBottom: '40px',
                                paddingLeft: '20px',
                                borderLeft: '4px solid var(--primary-neon)'
                            }}>
                                <h4 style={{
                                    color: '#fff',
                                    fontSize: '2rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    margin: 0
                                }}>
                                    {muscleGroup} Workout
                                </h4>
                                <div style={{
                                    height: '1px',
                                    flex: 1,
                                    background: 'linear-gradient(to right, var(--glass-border), transparent)'
                                }}></div>
                                <span style={{ color: 'var(--primary-neon)', fontWeight: 'bold' }}>{exercises.length} Exercises</span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                                {exercises.map((ex, i) => (
                                    <ExerciseCard key={i} exercise={{ ...ex, muscle: muscleGroup }} index={i + groupIndex * 5} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* DIET STRATEGY */}
                <div style={{ marginBottom: '100px' }}>
                    <h3 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Fuel Protocol</h3>
                    <div style={{ display: 'grid', gap: '15px', maxWidth: '800px', margin: '0 auto' }}>
                        {(plan.diet || []).map((meal, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                                <div>
                                    <span style={{ display: 'block', color: 'var(--primary-neon)', fontSize: '0.8rem', letterSpacing: '1px' }}>{meal.type}</span>
                                    <span style={{ color: '#fff', fontSize: '1.1rem' }}>{meal.name}</span>
                                </div>
                                <span style={{ color: 'var(--text-muted)' }}>{meal.calories}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* TIMELINE */}
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '40px', textAlign: 'center' }}>Progression Timeline</h3>
                    <div style={{ borderLeft: '2px solid var(--primary-neon)', paddingLeft: '30px', display: 'grid', gap: '40px' }}>
                        {(plan.timeline || []).map((phase, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '-36px', top: '5px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary-neon)', boxShadow: '0 0 10px var(--primary-neon)' }}></div>
                                <h4 style={{ color: '#fff', fontSize: '1.2rem' }}>{phase.week}</h4>
                                <p style={{ color: 'var(--text-muted)' }}>{phase.focus}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* EXERCISE MODAL */}
            {selectedDay && selectedDay.exercises && selectedDay.exercises.length > 0 && (
                <Modal isOpen={!!selectedDay} onClose={() => setSelectedDay(null)} title={`${selectedDay.day} - ${selectedDay.focus}`}>
                    <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        {selectedDay.duration && <div style={{ fontSize: '0.8rem', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>{selectedDay.duration}</div>}
                        {selectedDay.difficulty && <div style={{ fontSize: '0.8rem', padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>{selectedDay.difficulty}</div>}
                    </div>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {selectedDay.exercises.map((ex, i) => (
                            <ExerciseCard key={i} exercise={ex} index={i} />
                        ))}
                    </div>
                </Modal>
            )}
        </motion.div>
    );
};


export default PlanDetail;
