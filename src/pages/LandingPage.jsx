import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import TransformationGoals from '../components/TransformationGoals';
import WhyZyro from '../components/WhyZyro';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import AIGenerationLoader from '../components/AIGenerationLoader';

const LandingPage = () => {
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState(null);

    const handleStart = () => {
        navigate('/start-plan');
        window.scrollTo(0, 0);
    };

    const handleSelectGoal = (planId) => {
        navigate(`/plan/${planId}`);
        window.scrollTo(0, 0);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero onStart={handleStart} />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <TransformationGoals onSelectGoal={handleSelectGoal} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <WhyZyro />
            </motion.div>

            <Testimonials />

            <Footer />
        </motion.div>
    );
};

export default LandingPage;
