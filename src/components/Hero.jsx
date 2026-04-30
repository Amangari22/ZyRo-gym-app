import React, { useState } from 'react';
import Button from './Button';
import zyroLogoProfessional from '../assets/zyro-logo-professional.png';
import { motion } from 'framer-motion';

// Intense professional gym background with red-compatible aesthetic
const heroBg = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85&fm=jpg&fit=crop';

const Hero = ({ onStart }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <section
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    transform: loaded ? 'scale(1)' : 'scale(1.08)',
                    transition: 'transform 2.5s ease-out',
                    zIndex: -2
                }}
            />

            {/* Dark gradient overlay that blends into body background */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(15,15,15,0.4) 0%, rgba(15,15,15,0.6) 50%, #0f0f0f 100%)',
                    zIndex: -1
                }}
            />

            {/* Cyan accent glow */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(ellipse at 70% 50%, rgba(255,49,49,0.07) 0%, transparent 60%)',
                    zIndex: -1
                }}
            />

            {/* Preload trigger */}
            <img
                src={heroBg}
                alt=""
                style={{ display: 'none' }}
                onLoad={() => setLoaded(true)}
            />

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1, paddingTop: '220px', paddingBottom: '80px' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '30px',
                    opacity: 0,
                    animation: 'fadeInUp 1s ease forwards'
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(255, 49, 49, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                    }}>
                        <img
                            src={zyroLogoProfessional}
                            alt="ZYRO"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                filter: 'hue-rotate(-155deg) saturate(2) brightness(1.2)'
                            }}
                        />
                    </div>
                    <div style={{
                        marginTop: '12px',
                        fontFamily: "'Orbitron', sans-serif",
                        fontSize: '1.2rem',
                        fontWeight: '900',
                        letterSpacing: '8px',
                        color: '#fff',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(to bottom, #fff 0%, #FF3131 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 15px rgba(255, 49, 49, 0.4))',
                        display: 'inline-block'
                    }}>
                        ZYRO
                    </div>
                </div>

                <h1
                    className="text-gradient"
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        lineHeight: '1.2',
                        marginBottom: '1rem',
                        opacity: 0,
                        animation: 'fadeInUp 1s ease 0.3s forwards',
                        letterSpacing: '-1.5px'
                    }}
                >
                    Transform Your Body <br /> With <span className="neon-text" style={{ textShadow: '0 0 30px rgba(255,49,49,0.3)' }}>Intelligence</span>
                </h1>
                {/* ... rest of the component ... */}

                <p
                    style={{
                        fontSize: '1.15rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        opacity: 0,
                        animation: 'fadeInUp 1s ease 0.5s forwards'
                    }}
                >
                    Personalized Diet. Structured Workout. Smart Recovery.
                </p>

                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        marginBottom: '4rem',
                        opacity: 0,
                        animation: 'fadeInUp 1s ease 0.6s forwards'
                    }}
                >
                    <Button variant="primary" onClick={onStart}>Start My Plan</Button>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            const element = document.getElementById('transformation-goals');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        Explore Platform
                    </Button>
                </div>

                {/* Trust Indicators */}
                <div
                    style={{
                        display: 'flex',
                        gap: '40px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        opacity: 0,
                        animation: 'fadeInUp 1s ease 0.9s forwards'
                    }}
                >
                    {['Beginner Friendly', 'Home-Based Diet', 'Structured Plan', 'No Confusion'].map((item, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--primary-neon)' }}>✔</span>
                            <span style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
