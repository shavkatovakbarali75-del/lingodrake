import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import './Welcome.css';

const Welcome = () => {
    const navigate = useNavigate();

    // Decorative leaf particles component
    const LeafParticles = () => (
        <div className="particles-container">
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="leaf-particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 15 + 10}px`,
                        height: `${Math.random() * 15 + 10}px`,
                        animationDuration: `${Math.random() * 10 + 10}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>
    );

    return (
        <div className="welcome-container animate-fade-in">
            <LeafParticles />
            <div className="welcome-content card text-center">
                <div className="welcome-icon-wrapper">
                    <BookOpen size={48} className="forest-icon" />
                </div>
                <h1 className="welcome-title">Lingodrake<br />Reading Academy</h1>
                <p className="welcome-subtitle">
                    Structured IELTS Reading progression.<br />Level 0 to Band 8+.
                </p>

                <div className="welcome-actions">
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/placement')}
                    >
                        Start Your Journey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
