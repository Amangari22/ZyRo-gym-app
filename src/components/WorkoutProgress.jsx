import React from 'react';
import { motion } from 'framer-motion';

const WorkoutProgress = ({ percentage }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
                position: 'fixed',
                right: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px'
            }}
        >
            <div style={{
                height: '300px',
                width: '6px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '10px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <motion.div
                    animate={{ height: `${percentage}%` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(to top, #00ff88, #60efff)',
                        boxShadow: '0 0 15px rgba(0, 255, 136, 0.5)'
                    }}
                />
            </div>

            <div style={{ textAlign: 'center' }}>
                <motion.div
                    key={percentage}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: '#fff',
                        textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
                    }}
                >
                    {percentage}%
                </motion.div>
                <div style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginTop: '4px'
                }}>
                    Complete
                </div>
            </div>
        </motion.div>
    );
};

export default WorkoutProgress;
