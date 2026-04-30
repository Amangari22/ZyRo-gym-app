import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import chatbotLogo from '../assets/chatbot-logo.png';

// --- AI CONFIGURATION ---
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const SYSTEM_PROMPT = `You are ZYRO AI, a dedicated gym and fitness AI coach integrated inside the ZYRO fitness platform.

ROLE:
You are a specialized gym and fitness assistant. You ONLY answer questions related to:
- Gym workouts, exercises, and training programs
- Fat loss, muscle gain, body recomposition
- Nutrition and diet plans for fitness goals
- Supplements (protein, creatine, etc.)
- Recovery, rest, and injury prevention
- Motivation and fitness mindset
- Gym equipment and techniques
- Bodyweight training and home workouts

IF the user asks about anything NOT related to gym, fitness, health, or nutrition (e.g., coding, business, politics, technology), politely refuse and redirect them to fitness topics.

LANGUAGE RULES:
- Understand both English and Roman English (e.g., "mera fat loss kaise hoga", "muscle kaise banaye").
- Always reply in clear, simple English.

TONE:
- Energetic, Motivating, Professional. Like a personal gym trainer.

ANSWER STYLE:
- ALWAYS return your response as a valid JSON object with this exact structure:
  {"title": "Short catchy title", "explanation": "Main answer here.", "bullets": ["Point 1", "Point 2"]}
- If bullets are not needed, use empty array [].
- Keep answers practical and actionable.

SAFETY RULES:
- Do NOT provide medical diagnosis.
- If user asks about serious injuries, suggest consulting a doctor.

BEHAVIOR:
- If off-topic (not gym/fitness), respond: {"title": "Gym Only Zone 💪", "explanation": "I am ZYRO AI, your dedicated gym coach. I can only help with fitness, workouts, nutrition, and gym-related topics!", "bullets": []}
- Always be motivating and encouraging.`;

const SUGGESTIONS = [
    "Fat loss kaise hoga?",
    "Best chest workout?",
    "Muscle gain diet plan"
];

// --- COMPONENTS ---

const ChatTrigger = ({ isOpen, onClick }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(17, 24, 39, 0.8)',
            border: '1px solid rgba(255, 49, 49, 0.3)',
            boxShadow: '0 8px 32px rgba(255, 49, 49, 0.2)',
            backdropFilter: 'blur(8px)',
            cursor: 'pointer',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF3131',
            overflow: 'hidden'
        }}
    >
        {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        ) : (
            <motion.div
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        '0 0 10px rgba(255, 49, 49, 0.2)',
                        '0 0 25px rgba(255, 49, 49, 0.4)',
                        '0 0 10px rgba(255, 49, 49, 0.2)'
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            >
                <img src={chatbotLogo} alt="ZYRO AI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
        )}
    </motion.button>
);

const ChatWindow = ({ isOpen, onClose, messages, isTyping, onSend, chatRef }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '30px',
                        width: '380px',
                        height: '550px',
                        maxHeight: '80vh',
                        background: '#111827',
                        borderRadius: '20px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        zIndex: 1000,
                        border: '1px solid rgba(255,255,255,0.05)'
                    }}
                >
                    {/* HEADER */}
                    <div style={{
                        padding: '16px 20px',
                        background: '#0B0F14',
                        borderBottom: '2px solid #FF3131',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img
                                src={chatbotLogo}
                                alt="ZYRO AI"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 0 5px #FF3131) hue-rotate(-155deg) saturate(2) brightness(1.2)'
                                }}
                            />
                            <h3 style={{
                                margin: 0,
                                color: '#fff',
                                fontSize: '1rem',
                                fontWeight: '600',
                                letterSpacing: '1px'
                            }}>ZYRO AI Coach</h3>
                        </div>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'rgba(255,255,255,0.5)',
                                cursor: 'pointer',
                                padding: '4px'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    {/* MESSAGES */}
                    <div
                        ref={chatRef}
                        style={{
                            flex: 1,
                            padding: '20px',
                            background: '#0B0F14',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px'
                        }}
                    >
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%'
                                }}
                            >
                                {msg.sender === 'user' ? (
                                    <div style={{
                                        background: '#FF3131',
                                        color: '#0B0F14',
                                        padding: '12px 16px',
                                        borderRadius: '16px 16px 4px 16px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        {msg.content}
                                    </div>
                                ) : (
                                    <div style={{
                                        background: msg.isSystem ? 'rgba(255, 100, 100, 0.1)' : '#1F2937',
                                        color: msg.isSystem ? '#FF6B6B' : '#E5E7EB',
                                        padding: '16px',
                                        borderRadius: '16px 16px 16px 4px',
                                        fontSize: '0.9rem',
                                        border: msg.isSystem ? '1px solid rgba(255, 100, 100, 0.2)' : '1px solid rgba(255,255,255,0.05)',
                                        boxShadow: '5px 5px 15px rgba(0,0,0,0.2)'
                                    }}>
                                        {msg.content.title && (
                                            <div style={{
                                                color: msg.isSystem ? '#FF6B6B' : '#FF3131',
                                                fontWeight: '600',
                                                marginBottom: '6px',
                                                fontSize: '0.95rem'
                                            }}>
                                                {msg.content.title}
                                            </div>
                                        )}
                                        <div style={{ marginBottom: '8px', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                                            {typeof msg.content === 'string' ? msg.content : msg.content.explanation}
                                        </div>
                                        {msg.content.bullets && msg.content.bullets.length > 0 && (
                                            <ul style={{
                                                margin: 0,
                                                paddingLeft: '16px',
                                                color: 'rgba(255,255,255,0.7)',
                                                fontSize: '0.85rem'
                                            }}>
                                                {msg.content.bullets.map((b, j) => (
                                                    <li key={j} style={{ marginBottom: '4px' }}>{b}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                        {isTyping && (
                            <div style={{ alignSelf: 'flex-start', padding: '10px 16px', background: '#1F2937', borderRadius: '16px 16px 16px 4px' }}>
                                <div style={{ display: 'flex', gap: '4px' }}>
                                    {[0, 1, 2].map(i => (
                                        <motion.div
                                            key={i}
                                            animate={{ y: [0, -5, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                            style={{ width: '6px', height: '6px', background: '#FF3131', borderRadius: '50%' }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* INPUT AREA */}
                    <div style={{ padding: '16px', background: '#111827' }}>
                        {messages.length < 3 && (
                            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '12px', paddingBottom: '4px', scrollbarWidth: 'none' }}>
                                {SUGGESTIONS.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => onSend(s)}
                                        style={{
                                            background: 'rgba(255, 49, 49, 0.1)',
                                            border: '1px solid rgba(255, 49, 49, 0.2)',
                                            color: '#FF3131',
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.75rem',
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}
                        <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask your gym coach..."
                                style={{
                                    width: '100%',
                                    background: '#1F2937',
                                    border: '1px solid #374151',
                                    borderRadius: '12px',
                                    padding: '12px 48px 12px 16px',
                                    color: '#fff',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: input.trim() && !isTyping ? '#FF3131' : 'transparent',
                                    border: 'none',
                                    borderRadius: '8px',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: input.trim() && !isTyping ? 'pointer' : 'default',
                                    color: input.trim() && !isTyping ? '#0B0F14' : 'rgba(255,255,255,0.3)',
                                    transition: 'all 0.2s'
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                            </button>
                        </form>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// --- MAIN WRAPPER ---
const Chatbot = () => {
    const { userData } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [conversationHistory, setConversationHistory] = useState([]);
    const chatRef = useRef(null);

    // Initial Message Setup
    useEffect(() => {
        if (isOpen) {
            setConversationHistory([]);
            setMessages([{
                sender: 'bot',
                content: {
                    title: '💪 ZYRO Gym Coach Active',
                    explanation: 'I am ZYRO AI, your personal gym and fitness coach. Ask me anything about workouts, fat loss, muscle gain, diet, and supplements!',
                    bullets: [
                        'Workout & Exercise Guidance',
                        'Fat Loss & Muscle Gain Plans',
                        'Nutrition & Supplement Advice'
                    ]
                }
            }]);
        } else {
            setMessages([]);
            setConversationHistory([]);
        }
    }, [isOpen]);

    // Auto-scroll
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async (text) => {
        setMessages(prev => [...prev, { sender: 'user', content: text }]);
        setIsTyping(true);

        const newHistory = [
            ...conversationHistory,
            { role: "user", content: text }
        ];

        try {
            const response = await fetch(GROQ_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${GROQ_API_KEY}`
                },
                body: JSON.stringify({
                    model: "llama-3.3-70b-versatile",
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...newHistory
                    ],
                    temperature: 0.7,
                    max_tokens: 1024,
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                console.error('Groq API Error:', errData);
                throw new Error(errData?.error?.message || `HTTP ${response.status}`);
            }

            const data = await response.json();
            const rawText = data?.choices?.[0]?.message?.content || '';

            // Safely parse JSON from response
            let jsonResponse;
            try {
                const jsonMatch = rawText.match(/```json\n?([\s\S]*?)\n?```/) || rawText.match(/([\s\S]*)/);
                const jsonStr = jsonMatch ? jsonMatch[1] || jsonMatch[0] : rawText;
                jsonResponse = JSON.parse(jsonStr.trim());
            } catch {
                jsonResponse = { title: 'ZYRO Coach 💪', explanation: rawText, bullets: [] };
            }

            // Update conversation history
            setConversationHistory([
                ...newHistory,
                { role: "assistant", content: rawText }
            ]);

            setMessages(prev => [...prev, { sender: 'bot', content: jsonResponse }]);

        } catch (error) {
            console.error("Groq Fetch Error:", error);
            setMessages(prev => [...prev, {
                sender: 'bot',
                isSystem: true,
                content: {
                    title: 'Connection Error',
                    explanation: `Failed to reach ZYRO AI via Groq. Error: ${error.message}. Please check your Groq API key in the .env file.`,
                    bullets: ['Get a key at console.groq.com']
                }
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            <ChatTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <ChatWindow
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                messages={messages}
                isTyping={isTyping}
                onSend={handleSend}
                chatRef={chatRef}
            />
        </>
    );
};

export default Chatbot;
