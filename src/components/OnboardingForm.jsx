import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { calculatePlan } from '../utils/calculator';
import Card from './Card';
import Button from './Button';
import LoadingScreen from './LoadingScreen';

const OnboardingForm = () => {
    const navigate = useNavigate();
    const { setUserData } = useUser();
    const [isGenerating, setIsGenerating] = useState(false);

    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        height: '',
        weight: '',
        activity: '',
        diet: '',
        goal: '',
        experience: '',
        targetWeight: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsGenerating(true);

        // Simulate AI Calculation
        setTimeout(() => {
            try {
                const plan = calculatePlan(formData);
                const completeProfile = { ...formData, ...plan };
                setUserData(completeProfile);
                setIsGenerating(false);
                navigate('/plan-result');
                window.scrollTo(0, 0);
            } catch (error) {
                console.error("Error generating plan", error);
                setIsGenerating(false);
            }
        }, 1500); // More "scientific" feel for computation
    };

    if (isGenerating) {
        return <LoadingScreen />;
    }

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '110px 20px 40px 20px',
                background: 'radial-gradient(circle at top right, rgba(0, 229, 255, 0.05), transparent 40%)'
            }}
        >
            <style>{`
                select option {
                    background: #1c1c1c;
                    color: #fff;
                    padding: 10px;
                }
                .form-group {
                    position: relative;
                }
                .form-group label {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                    display: block;
                    color: var(--text-muted);
                    font-weight: 600;
                }
                input:focus, select:focus {
                    border-color: var(--primary-neon) !important;
                    box-shadow: 0 0 15px rgba(0, 229, 255, 0.2);
                    background: rgba(255,255,255,0.12) !important;
                }
            `}</style>
            <Card className="glass-card" style={{ maxWidth: '750px', width: '100%', padding: '40px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
                        Profile Setup
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        The final step to your personalized blueprint.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '30px' }}>
                    {/* Grid Section */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px' }}>
                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                placeholder="e.g. 25"
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Height (cm)</label>
                            <input
                                type="number"
                                name="height"
                                value={formData.height}
                                onChange={handleChange}
                                placeholder="e.g. 175"
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Current Weight (kg)</label>
                            <input
                                type="number"
                                name="weight"
                                value={formData.weight}
                                onChange={handleChange}
                                placeholder="e.g. 70"
                                required
                                style={inputStyle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Workout Experience</label>
                            <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            >
                                <option value="">Select Experience</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate / Advanced</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ height: '1px', background: 'var(--glass-border)', margin: '10px 0' }}></div>

                    {/* Selects Section */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                        <div className="form-group">
                            <label>Activity Level</label>
                            <select
                                name="activity"
                                value={formData.activity}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            >
                                <option value="">Select Activity</option>
                                <option value="sedentary">Sedentary</option>
                                <option value="light">Lightly Active</option>
                                <option value="moderate">Moderately Active</option>
                                <option value="active">Very Active</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Diet Preference</label>
                            <select
                                name="diet"
                                value={formData.diet}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            >
                                <option value="">Select Diet Type</option>
                                <option value="veg">Vegetarian</option>
                                <option value="nonveg">Non-Vegetarian</option>
                            </select>
                        </div>
                    </div>

                    <div style={{ height: '1px', background: 'var(--glass-border)', margin: '10px 0' }}></div>

                    {/* Goals Section */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                        <div className="form-group">
                            <label>Primary Goal</label>
                            <select
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            >
                                <option value="">Select Goal</option>
                                <option value="loss">Fat Loss</option>
                                <option value="gain">Weight Gain</option>
                                <option value="build">Muscle Build</option>
                                <option value="lean">Get Lean / Toned</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Target Weight (kg)</label>
                            <input
                                type="number"
                                name="targetWeight"
                                value={formData.targetWeight}
                                onChange={handleChange}
                                placeholder="e.g. 75"
                                required
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    <Button type="submit" variant="primary" style={{ marginTop: '20px', width: '100%', padding: '18px', fontSize: '1.1rem' }}>
                        Generate Personal Plan ✨
                    </Button>
                </form>
            </Card>
        </div>
    );
};

const inputStyle = {
    width: '100%',
    padding: '14px 20px',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
};

const focusStyle = {
    borderColor: 'var(--primary-neon)',
    boxShadow: '0 0 15px rgba(255, 60, 60, 0.2)'
};

export default OnboardingForm;
