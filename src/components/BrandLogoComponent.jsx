import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import zyroLogoProfessional from '../assets/zyro-logo-professional.png';

const BrandLogoComponent = ({ size = 120, className = "", showText = true }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            className={`brand-logo-container ${className}`}
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                cursor: 'pointer'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
        >
            <div style={{
                width: size,
                height: size,
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(255, 49, 49, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img
                    src={zyroLogoProfessional}
                    alt="ZYRO"
                    style={{
                        width: '90%',
                        height: '90%',
                        objectFit: 'contain',
                        filter: 'hue-rotate(-155deg) saturate(2) brightness(1.2)'
                    }}
                />
            </div>

            {showText && (
                <span style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: size * 0.2,
                    fontWeight: '900',
                    letterSpacing: '6px',
                    color: '#FFF',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(to bottom, #FFF 0%, #FF3131 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 10px rgba(255,49,49,0.4))',
                    display: 'inline-block',
                    textAlign: 'center'
                }}>
                    ZYRO
                </span>
            )}
        </motion.div>
    );
};

export default BrandLogoComponent;
