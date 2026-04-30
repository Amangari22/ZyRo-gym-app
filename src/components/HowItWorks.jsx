import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Choose Your Goal',
        desc: 'Select from our specialized hypertrophy, strength, or endurance protocols.'
    },
    {
        num: '02',
        title: 'Generate Plan',
        desc: 'AI analyzes your inputs to craft a hyper-personalized training roadmap.'
    },
    {
        num: '03',
        title: 'Train & Evolve',
        desc: 'Execute the plan, track progress, and adapt with real-time feedback.'
    }
];

const HowItWorks = () => {
    return (
        <section style={{ padding: 'var(--section-spacing) 0', background: 'var(--bg-darker)' }}>
            <div className="container">
                <h2 className="section-title text-gradient">System Logic</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '40px',
                    marginTop: '60px'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative', padding: '20px' }}>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '900',
                                color: 'var(--glass-border)',
                                lineHeight: '1',
                                marginBottom: '20px',
                                fontFamily: "'Orbitron', sans-serif"
                            }}>
                                {step.num}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                color: '#fff',
                                marginBottom: '12px',
                                fontWeight: '700'
                            }}>
                                {step.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                {step.desc}
                            </p>

                            {/* Decorative Line */}
                            {index !== steps.length - 1 && (
                                <div className="step-connector" style={{
                                    position: 'absolute',
                                    right: '-20px',
                                    top: '50%',
                                    width: '40px',
                                    height: '2px',
                                    background: 'var(--glass-border)',
                                    display: 'none' // Hide on mobile, show on desktop via media query if needed
                                }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
