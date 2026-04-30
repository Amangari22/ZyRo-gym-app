import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

const testimonials = [
    {
        name: "Alex Rivera",
        role: "Body Recomposition",
        text: "ZYRO AI didn't just give me a plan; it gave me a blueprint for life. The nutrition logic is unlike anything I've seen in free apps.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
        stats: "15kg Lost | 5% BF Drop"
    },
    {
        name: "Sarah Chen",
        role: "Strength Athlete",
        text: "The workout structure is professional-grade. I've broken my deadlift plateau in just 6 weeks with the Power Build protocol.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&q=80",
        stats: "140kg Deadlift | +10kg PR"
    },
    {
        name: "Marcus Thorne",
        role: "Lean Muscle Build",
        text: "Clean, fast, and intelligent. ZYRO's Roman English support made it so much easier for me to follow my local diet.",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&q=80",
        stats: "8kg Muscle Gain | Leaner Core"
    }
];

const Testimonials = () => {
    return (
        <section style={{ padding: 'var(--section-spacing) 0', background: 'rgba(255,49,49,0.02)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(255,49,49,0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--primary-neon)', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gradient"
                        style={{ fontSize: '3.5rem', marginTop: '10px' }}
                    >
                        Athlete Evolutions
                    </motion.h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px'
                }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="glass-card" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '25px' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary-neon)' }}>
                                        <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '4px' }}>{t.name}</h4>
                                        <span style={{ color: 'var(--primary-neon)', fontSize: '0.85rem', fontWeight: '700' }}>{t.role}</span>
                                    </div>
                                </div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '30px', flex: 1, fontStyle: 'italic' }}>
                                    "{t.text}"
                                </p>
                                <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#fff', fontWeight: '800', fontSize: '0.9rem' }}>{t.stats}</span>
                                    <div style={{ display: 'flex', gap: '2px' }}>
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <span key={s} style={{ color: 'var(--primary-neon)', fontSize: '0.8rem' }}>★</span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
