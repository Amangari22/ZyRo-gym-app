import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExerciseCard = ({ exercise, index, isCompleted, onToggle }) => {
    // State lifted to parent

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
            className={`glass-card ${isCompleted ? 'completed' : ''}`}
            style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(200px, 350px) 1fr',
                gap: '32px',
                padding: '28px',
                borderRadius: '24px',
                background: isCompleted ? 'rgba(0, 255, 136, 0.05)' : 'var(--glass-bg)',
                border: isCompleted ? '1px solid rgba(0, 255, 136, 0.3)' : '1px solid var(--glass-border)',
                boxShadow: isCompleted ? '0 0 20px rgba(0, 255, 136, 0.1)' : 'var(--glass-shadow)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                marginBottom: '30px',
                opacity: isCompleted ? 0.8 : 1
            }}
        >
            {/* Completion Overlay */}
            {isCompleted && (
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.2)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />
            )}

            {/* Checkbox */}
            <div
                onClick={onToggle}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: `2px solid ${isCompleted ? '#00ff88' : 'rgba(255,255,255,0.2)'}`,
                    background: isCompleted ? '#00ff88' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    transition: 'all 0.2s ease'
                }}
            >
                {isCompleted && <span style={{ color: '#000', fontSize: '18px', fontWeight: 'bold' }}>✓</span>}
            </div>

            {/* LEFT SIDE: Image */}
            <div style={{
                position: 'relative',
                height: '240px',
                borderRadius: '16px',
                overflow: 'hidden'
            }}>
                <motion.img
                    src={exercise.image}
                    alt={exercise.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.8)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)'
                }} />
            </div>

            {/* RIGHT SIDE: Info */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    {exercise.muscle}
                </span>
                <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: '800',
                    color: '#fff',
                    marginBottom: '16px',
                    lineHeight: '1.2'
                }}>
                    {exercise.name}
                </h3>

                {/* Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                    <Badge label={exercise.type} primary />
                    <Badge label={`${exercise.sets} Sets`} />
                    <Badge label={`${exercise.reps} Reps`} />
                    <Badge label={`Rest ${exercise.rest}`} />
                </div>

                <p style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '20px'
                }}>
                    {exercise.instructions}
                </p>

                {exercise.safetyTip && (
                    <div style={{
                        padding: '16px',
                        background: 'rgba(0, 255, 136, 0.03)',
                        borderLeft: '4px solid var(--primary-neon)',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        color: 'rgba(255,255,255,0.9)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                        <strong style={{ color: 'var(--primary-neon)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', display: 'block', marginBottom: '4px' }}>Safety Tip</strong>
                        {exercise.safetyTip}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const Badge = ({ label, primary }) => (
    <div style={{
        padding: '6px 16px',
        background: primary ? 'var(--primary-neon)' : 'rgba(255,255,255,0.1)',
        borderRadius: '100px',
        fontSize: '0.85rem',
        fontWeight: '600',
        color: primary ? '#fff' : 'rgba(255,255,255,0.8)',
        border: primary ? 'none' : '1px solid rgba(255,255,255,0.1)'
    }}>
        {label}
    </div>
);

export default ExerciseCard;
