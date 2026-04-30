import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Card from './Card';

const Modal = ({ children, onClose, title }) => {
    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return createPortal(
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}
            onClick={onClose}
        >
            <Card
                className="glass-card"
                style={{ width: '100%', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h2 className="text-gradient" style={{ margin: 0 }}>{title}</h2>
                    <button onClick={onClose} style={{ color: '#fff', fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
                </div>
                {children}
            </Card>
        </div>,
        document.body
    );
};

export default Modal;
