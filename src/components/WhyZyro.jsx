import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'AI-Driven Adaptation',
        desc: 'Dynamic program adjustments based on your performance feedback loop.',
        icon: '🧠'
    },
    {
        title: 'Progressive Overload',
        desc: 'Planned intensity increases to ensure continuous physiological adaptation.',
        icon: '📈'
    },
    {
        title: 'Balanced Recovery',
        desc: 'Smart fatigue management to prevent burnout and maximize gains.',
        icon: '🔋'
    },
    {
        title: 'Precision Nutrition',
        desc: 'Macronutrient targets aligned perfectly with your training volume.',
        icon: '🍎'
    }
];

const WhyZyro = () => {
    return (
        <section style={{ padding: 'var(--section-spacing) 0' }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <h2 className="section-title text-gradient">Why ZYRO?</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '60px', fontSize: '1.1rem' }}>
                        Traditional plans are static. ZYRO is dynamic. Experience the difference of an intelligent training system.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px'
                    }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                            }}
                        >
                            <Card style={{ padding: '40px', height: '100%' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'rgba(255, 49, 49, 0.1)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.8rem',
                                    marginBottom: '25px',
                                    color: 'var(--primary-neon)',
                                    border: '1px solid rgba(255, 49, 49, 0.2)'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{feature.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyZyro;
