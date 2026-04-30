import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { plans } from '../data/plans';
import { useUser } from '../context/UserContext';
import ExerciseCard from './ExerciseCard';
import WorkoutProgress from './WorkoutProgress';

const WorkoutPlan = () => {
    const { userData } = useUser();
    const planId = userData?.selectedPlan || 'weight-gain';
    const plan = plans[planId];

    // Safe check for current workout
    const currentWorkout = plan?.weeklySplit?.[0];

    const [completedExercises, setCompletedExercises] = useState([]);

    const toggleComplete = (index) => {
        setCompletedExercises(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    // Safe calculation of percentage
    const totalExercises = currentWorkout?.exercises?.length || 0;
    const completionPercentage = totalExercises > 0
        ? Math.round((completedExercises.length / totalExercises) * 100)
        : 0;

    if (!currentWorkout) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px', color: 'var(--text-muted)' }}>
                <h2 style={{ color: '#fff' }}>No Active Workout</h2>
                <p>Rest day or no plan selected. Enjoy your recovery!</p>
            </div>
        );
    }

    return (
        <div style={{ position: 'relative', minHeight: '100vh', paddingBottom: '100px' }}>
            <WorkoutProgress percentage={completionPercentage} />
            {/* Background Effects */}
            <div style={{
                position: 'fixed',
                inset: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(255, 60, 60, 0.05) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(255, 60, 60, 0.03) 0%, transparent 50%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />

            {/* Header Section */}
            <header style={{ marginBottom: '60px', textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        fontSize: ' clamp(2rem, 5vw, 3.5rem)',
                        color: '#fff',
                        marginBottom: '24px',
                        fontWeight: '800'
                    }}
                >
                    {currentWorkout.focus} – Hypertrophy Program
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '15px',
                        marginBottom: '40px'
                    }}
                >
                    <GlassBadge label={`Duration: ${currentWorkout.duration || 'N/A'}`} />
                    <GlassBadge label={`Difficulty: ${currentWorkout.difficulty || 'N/A'}`} />
                    <GlassBadge label={`Goal: ${currentWorkout.goal || 'N/A'}`} />
                </motion.div>

                <div style={{
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)',
                    marginBottom: '60px'
                }} />
            </header>

            {/* Exercise List */}
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {currentWorkout.exercises?.length > 0 ? (
                    currentWorkout.exercises.map((exercise, index) => (
                        <ExerciseCard
                            key={index}
                            exercise={exercise}
                            index={index}
                            isCompleted={completedExercises.includes(index)}
                            onToggle={() => toggleComplete(index)}
                        />
                    ))
                ) : (
                    <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                        Nothing scheduled for today.
                    </div>
                )}
            </div>

            {/* Background spotlight */}
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '1000px',
                height: '1000px',
                background: 'radial-gradient(circle, rgba(255, 60, 60, 0.02) 0%, transparent 70%)',
                zIndex: -2,
                pointerEvents: 'none'
            }} />
        </div>
    );
};

const GlassBadge = ({ label }) => (
    <div style={{
        padding: '8px 20px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
        fontWeight: '500'
    }}>
        {label}
    </div>
);

export default WorkoutPlan;
