import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "Analyzing Your Goal...",
    "Designing Your Personalized Plan...",
    "Optimizing Nutrition & Training...",
    "Finalizing Your Transformation Roadmap..."
];

const ParticleBackground = () => {
    // Create an array of 40 particles with random positions and sizes
    const particles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5
    }));

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: -1
        }}>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{
                        opacity: 0,
                        x: `${p.x}%`,
                        y: `${p.y}%`
                    }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        y: [`${p.y}%`, `${p.y - 10}%`, `${p.y}%`],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
                    }}
                />
            ))}
        </div>
    );
};

const AIGenerationLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const duration = 400; // Super fast (0.4s)
        const interval = 20; // update faster
        const step = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 100); // Near-instant exit
                    return 100;
                }
                return prev + step;
            });
        }, interval);

        const messageTimer = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % messages.length);
        }, 120); // Rapid message cycling

        return () => {
            clearInterval(timer);
            clearInterval(messageTimer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(5, 5, 5, 0.95)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                color: '#fff'
            }}
        >
            <ParticleBackground />

            {/* Background Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    zIndex: -1
                }}
            />

            {/* Rotating Rings */}
            <div style={{ position: 'relative', width: '200px', height: '200px', marginBottom: '40px' }}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid transparent',
                        borderTopColor: 'var(--primary-neon)',
                        borderRadius: '50%',
                        boxShadow: '0 0 15px var(--primary-glow)'
                    }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        inset: '15px',
                        border: '2px solid transparent',
                        borderBottomColor: 'var(--primary-neon)',
                        opacity: 0.5,
                        borderRadius: '50%'
                    }}
                />

                {/* Percentage Counter */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    fontVariantNumeric: 'tabular-nums'
                }}>
                    {Math.min(100, Math.floor(progress))}%
                </div>
            </div>

            {/* Center Text */}
            <div style={{ height: '40px', overflow: 'hidden', textAlign: 'center' }}>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={messageIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '1px',
                            margin: 0
                        }}
                    >
                        {messages[messageIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Scanning Line Effect */}
            <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--primary-neon), transparent)',
                    opacity: 0.2,
                    zIndex: 1
                }}
            />
        </motion.div>
    );
};

export default AIGenerationLoader;
