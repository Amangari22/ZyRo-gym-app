import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import BrandLogoComponent from '../components/BrandLogoComponent';

const PersonalizedPlan = () => {
    const { userData } = useUser();
    const navigate = useNavigate();
    const [expandedDay, setExpandedDay] = useState(0);

    if (!userData) {
        return (
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)' }}>
                <Button onClick={() => navigate('/start-plan')}>Create Plan First</Button>
            </div>
        );
    }

    const { calories, protein, water, bmi, weeklySplit, dietPlan, timeline } = userData;

    return (
        <div style={{
            minHeight: '100vh',
            padding: '110px 20px 80px 20px',
            fontFamily: "'Inter', sans-serif",
            position: 'relative'
        }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>

                {/* Header */}
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <BrandLogoComponent size={80} showText={false} />
                    <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginTop: '20px' }}>Your Personalized Blueprint</h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                        Scientifically tailored for your evolution | {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </header>

                {/* Hero Stats */}
                <div className="screen-only" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '80px' }}>
                    <StatCard label="Daily Calories" value={`${calories} kcal`} color="var(--primary-neon)" />
                    <StatCard label="Protein Target" value={`${protein}g`} color="var(--primary-neon)" />
                    <StatCard label="Water Intake" value={`${water}L`} color="var(--primary-neon)" />
                    <StatCard label="Current BMI" value={bmi} color="var(--primary-neon)" />
                </div>

                <div className="screen-only">
                    <SectionTitle title="Weekly Workout Structure" />
                    <div style={{ marginBottom: '80px' }}>
                        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '20px', marginBottom: weeklySplit[expandedDay] ? '20px' : '0' }}>
                            {weeklySplit.map((day, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setExpandedDay(idx)}
                                    style={{
                                        padding: '12px 24px',
                                        background: expandedDay === idx ? 'var(--primary-neon)' : 'rgba(255,255,255,0.05)',
                                        color: expandedDay === idx ? '#000' : '#fff',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontWeight: '800',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s ease',
                                        boxShadow: expandedDay === idx ? '0 0 15px rgba(0, 229, 255, 0.3)' : 'none'
                                    }}
                                >
                                    {day.day}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={expandedDay}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="glass-card" style={{ padding: '40px' }}>
                                    <h3 style={{ color: 'var(--primary-neon)', marginBottom: '30px', fontSize: '1.8rem', fontFamily: "'Orbitron', sans-serif" }}>
                                        {weeklySplit[expandedDay].focus}
                                    </h3>
                                    {weeklySplit[expandedDay].exercises.length > 0 ? (
                                        <div style={{ display: 'grid', gap: '20px' }}>
                                            {weeklySplit[expandedDay].exercises.map((ex, i) => (
                                                <div key={i} style={{
                                                    display: 'flex',
                                                    gap: '24px',
                                                    padding: '24px',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    borderRadius: '20px',
                                                    border: '1px solid rgba(255,255,255,0.05)',
                                                    transition: 'all 0.3s ease',
                                                    alignItems: 'center'
                                                }}>
                                                    <div style={{
                                                        width: '120px',
                                                        height: '120px',
                                                        borderRadius: '16px',
                                                        overflow: 'hidden',
                                                        border: '2px solid rgba(0, 229, 255, 0.2)',
                                                        boxShadow: '0 0 15px rgba(0, 229, 255, 0.1)',
                                                        flexShrink: 0
                                                    }}>
                                                        <img
                                                            src={ex.image}
                                                            alt={ex.name}
                                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                        />
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontWeight: '800', color: '#fff', fontSize: '1.2rem', marginBottom: '6px' }}>{ex.name}</div>
                                                        <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{ex.instr}</div>
                                                    </div>
                                                    <div style={{ textAlign: 'right', minWidth: '130px' }}>
                                                        <div style={{ color: 'var(--primary-neon)', fontWeight: '900', fontSize: '1.4rem' }}>{ex.sets} × {ex.reps}</div>
                                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Rest: {ex.rest}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Full rest and recovery day. Focus on mobility, hydration, and deep sleep.</p>
                                    )}
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <SectionTitle title="Daily Diet Plan" subtitle={`Scientifically Varied Meals for ${dietPlan[expandedDay].day}`} />
                    <div style={{ display: 'grid', gap: '20px', marginBottom: '80px' }}>
                        {dietPlan[expandedDay].meals.map((meal, idx) => (
                            <Card key={idx} style={{ padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ flex: 1 }}>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        background: 'rgba(0, 229, 255, 0.1)',
                                        color: 'var(--primary-neon)',
                                        padding: '6px 14px',
                                        borderRadius: '6px',
                                        marginBottom: '15px',
                                        display: 'inline-block',
                                        fontWeight: '800'
                                    }}>
                                        {meal.type}
                                    </span>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '5px', fontWeight: '700' }}>{meal.menu}</h4>
                                </div>
                                <div style={{ textAlign: 'right', marginLeft: '30px' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary-neon)' }}>{meal.cals} kcal</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '600' }}>{meal.prot}g Protein</div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div style={{ marginBottom: '80px' }}>
                        <SectionTitle title="Supplements & Lifestyle" subtitle="Enhancing Performance & Longevity" />
                        <Card style={{ padding: '40px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                                <div>
                                    <h4 style={{ color: 'var(--primary-neon)', marginBottom: '15px' }}>Core Supplementation</h4>
                                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineStretch: '1.6' }}>
                                        <li>Whey Protein (1 scoop post-workout)</li>
                                        <li>Creatine Monohydrate (3-5g daily)</li>
                                        <li>Multivitamin & Fish Oil (daily with breakfast)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary-neon)', marginBottom: '15px' }}>Lifestyle Non-Negotiables</h4>
                                    <ul style={{ color: 'var(--text-muted)', paddingLeft: '20px', lineStretch: '1.6' }}>
                                        <li>3.2L Water Minimum (Critical for digestion)</li>
                                        <li>Strict Sleep Cycle (10:30 PM - 6:30 AM)</li>
                                        <li>0 Processed Sugar / Refined Oils</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', marginBottom: '80px' }}>
                        <div>
                            <SectionTitle title="Sleep & Recovery" />
                            <Card style={{ padding: '25px' }}>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '15px' }}>
                                    <RecoveryItem icon="🌙" label="Sleep Target" value="7–9 Hours" />
                                    <RecoveryItem icon="💧" label="Water Intake" value={`${water} Liters`} />
                                    <RecoveryItem icon="⏱️" label="Best Timing" value="10:30 PM – 6:30 AM" />
                                    <RecoveryItem icon="🧘" label="Rest Day" value="Essential for muscle repair" />
                                </ul>
                            </Card>
                        </div>
                        <div>
                            <SectionTitle title="Progression Guide" />
                            <Card style={{ padding: '25px' }}>
                                {timeline.map((step, idx) => (
                                    <div key={idx} style={{ position: 'relative', paddingLeft: '30px', marginBottom: idx === 2 ? 0 : '25px' }}>
                                        <div style={{
                                            position: 'absolute',
                                            left: 0,
                                            top: '5px',
                                            width: '12px',
                                            height: '12px',
                                            borderRadius: '50%',
                                            background: 'var(--primary-neon)',
                                            boxShadow: '0 0 10px var(--primary-glow)'
                                        }}></div>
                                        {idx !== 2 && <div style={{ position: 'absolute', left: '5px', top: '20px', width: '2px', height: '30px', background: 'rgba(255,255,255,0.1)' }}></div>}
                                        <div style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--primary-neon)' }}>{step.period}</div>
                                        <div style={{ color: '#fff' }}>{step.focus}</div>
                                    </div>
                                ))}
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="no-print" style={{ textAlign: 'center', paddingBottom: '60px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <Button variant="primary" onClick={() => window.print()}>
                        Print / Save as PDF 📄
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/dashboard')}>
                        Go to Dashboard
                    </Button>
                </div>
            </div>

            {/* Print Styles & Hidden Content */}
            <style>{`
                @media screen {
                    .print-only { display: none !important; }
                }
                @media print {
                    nav, .noise-overlay, .chatbot-container, button, .no-print {
                        display: none !important;
                    }
                    body {
                        background: white !important;
                        color: black !important;
                        font-family: 'Arial', sans-serif !important;
                    }
                    .text-gradient {
                        background: none !important;
                        -webkit-text-fill-color: black !important;
                        color: black !important;
                        font-size: 2.5rem !important;
                        text-align: center !important;
                    }
                    .glass-card {
                        background: white !important;
                        border: 1px solid #ddd !important;
                        box-shadow: none !important;
                        color: black !important;
                        page-break-inside: avoid;
                        margin-bottom: 20px;
                    }
                    .container {
                        max-width: 100% !important;
                        padding: 0 !important;
                    }
                    header {
                        margin-bottom: 40px !important;
                    }
                    .day-section {
                        page-break-before: always;
                    }
                    .screen-only { display: none !important; }
                    .print-only { display: block !important; }
                }
            `}</style>

            <div className="print-only" style={{ padding: '20px' }}>
                <SectionTitle title="Complete 7-Day Protocol" />
                {weeklySplit.map((day, idx) => (
                    <div key={idx} className="day-section" style={{ marginBottom: '50px' }}>
                        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>{day.day}: {day.focus}</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>
                            <div>
                                <h3>Training</h3>
                                {day.exercises.length > 0 ? day.exercises.map((ex, i) => (
                                    <div key={i} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #eee', display: 'flex', gap: '15px', alignItems: 'center' }}>
                                        <img src={ex.image} alt={ex.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                                        <div>
                                            <div style={{ fontWeight: 'bold' }}>{ex.name} - {ex.sets}x{ex.reps}</div>
                                            <div style={{ fontSize: '0.9rem' }}>{ex.instr} (Rest: {ex.rest})</div>
                                        </div>
                                    </div>
                                )) : <p>Rest Day</p>}
                            </div>
                            <div>
                                <h3>Nutrition</h3>
                                {dietPlan[idx].meals.map((meal, i) => (
                                    <div key={i} style={{ marginBottom: '15px' }}>
                                        <div style={{ fontWeight: 'bold' }}>{meal.type}: {meal.menu}</div>
                                        <div style={{ fontSize: '0.8rem' }}>{meal.cals} kcal | {meal.prot}g Protein</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StatCard = ({ label, value, color }) => (
    <Card style={{ padding: '25px', textAlign: 'center', borderTop: `4px solid ${color}` }}>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>{label}</div>
        <div style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff' }}>{value}</div>
    </Card>
);

const SectionTitle = ({ title, subtitle }) => (
    <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>{title}</h2>
        {subtitle && <p style={{ color: 'var(--text-muted)', margin: '5px 0 0' }}>{subtitle}</p>}
        <div style={{ width: '60px', height: '4px', background: 'var(--primary-neon)', marginTop: '15px' }}></div>
    </div>
);

const RecoveryItem = ({ icon, label, value }) => (
    <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{label}</div>
            <div style={{ fontWeight: '700' }}>{value}</div>
        </div>
    </li>
);


export default PersonalizedPlan;
