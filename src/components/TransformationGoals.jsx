import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Card from './Card';

const goals = [
    {
        id: 'weight-gain',
        title: 'Weight Gain',
        desc: 'Build mass with caloric surplus strategies.',
        img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop',
        color: 'var(--primary-neon)'
    },
    {
        id: 'fat-loss',
        title: 'Fat Loss',
        desc: 'Shred fat while maintaining muscle.',
        img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
        color: '#00ff88'
    },
    {
        id: 'lean-cut',
        title: 'Lean & Cut',
        desc: 'Sculpt a defined, athletic physique.',
        img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
        color: '#3c3cff'
    },
    {
        id: 'muscle-build',
        title: 'Muscle Build',
        desc: 'Hypertrophy focused training plans.',
        img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000&auto=format&fit=crop',
        color: '#ffaa00'
    }
];

const TransformationGoals = ({ onSelectGoal }) => {
    const navigate = useNavigate();

    const handleGoalClick = (goalId) => {
        if (onSelectGoal) {
            onSelectGoal(goalId);
        } else {
            navigate(`/plan/${goalId}`);
        }
    };

    return (
        <section id="transformation-goals" style={{ padding: '60px 0 var(--section-spacing) 0', position: 'relative' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-gradient"
                    style={{
                        fontSize: '3rem',
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}
                >
                    Choose Your Transformation
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}
                >
                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                        >
                            <Card
                                hoverEffect={true}
                                className="goal-card"
                                onClick={() => handleGoalClick(goal.id)}
                            >
                                <div
                                    style={{
                                        height: '200px',
                                        borderRadius: '16px',
                                        marginBottom: '20px',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}
                                >
                                    <img
                                        src={goal.img}
                                        alt={goal.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                                        }}
                                    />
                                </div>

                                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#fff' }}>
                                    {goal.title}
                                </h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                    {goal.desc}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TransformationGoals;
