import React from 'react';
import BrandLogoComponent from '../components/BrandLogoComponent';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const BrandIdentityShowcase = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#050505',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            justifyContent: 'center',
            padding: '120px 40px 40px 40px', // Increased top padding for fixed navbar
            fontFamily: "'Inter', sans-serif"
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ textAlign: 'center', marginBottom: '100px' }}
            >
                <h1 style={{ fontSize: '1.2rem', color: 'var(--primary-neon)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '50px', opacity: 0.8 }}>Professional Brand Identity</h1>
                <BrandLogoComponent size={150} />
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '800px', width: '100%' }}>
                <IdentityCard title="Core Concept" description="The 'Z' for Zyro integrated with advanced cybernetic circuitry patterns." />
                <IdentityCard title="Typography" description="Orbitron Black - A futuristic, high-performance modular typeface." />
                <IdentityCard title="Visual Identity" description="Neon Red accents on a deep obsidian matte background." />
            </div>

            <Button
                variant="outline"
                onClick={() => navigate('/')}
                style={{ marginTop: '80px', border: '1px solid rgba(255,255,255,0.1)' }}
            >
                Back to Dashboard
            </Button>
        </div>
    );
};

const IdentityCard = ({ title, description }) => (
    <div style={{
        padding: '24px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '16px',
        textAlign: 'center'
    }}>
        <h3 style={{ color: '#FF3131', fontSize: '0.9rem', marginBottom: '8px', textTransform: 'uppercase' }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>{description}</p>
    </div>
);

export default BrandIdentityShowcase;
