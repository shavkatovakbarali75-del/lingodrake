import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlacementTest = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);

    const handleSelectLevel = (level) => {
        // In a real app, this affects the adaptive test difficulty
        setStep(1);
    };

    const handleFinishTest = () => {
        navigate('/dashboard');
    };

    return (
        <div className="container animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="card">
                {step === 0 ? (
                    <div className="text-center">
                        <h2>Select Your Estimated Level</h2>
                        <p style={{ color: 'var(--color-text-secondary)', marginTop: '8px', marginBottom: '32px' }}>
                            We'll adapt the placement test based on your choice.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <button className="btn btn-secondary" onClick={() => handleSelectLevel('beginner')}>
                                Beginner (Band 0 - 3)
                            </button>
                            <button className="btn btn-secondary" onClick={() => handleSelectLevel('intermediate')}>
                                Intermediate (Band 4 - 6)
                            </button>
                            <button className="btn btn-secondary" onClick={() => handleSelectLevel('advanced')}>
                                Advanced (Band 7+)
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h3>Placement Test - Adaptive</h3>
                        <p className="reading-text" style={{ marginTop: '24px', marginBottom: '32px' }}>
                            The forest is a complex ecosystem. Each layer provides habitat for distinct species, creating a symbiotic web of life where energy is transferred from the sun to the canopy, down to the forest floor...
                        </p>
                        <p style={{ fontWeight: 600, marginBottom: '16px' }}>Question 1: What does the first paragraph suggest about the forest ecosystem?</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }} onClick={handleFinishTest}>
                                A) It is highly independent
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }} onClick={handleFinishTest}>
                                B) It relies on symbiotic relationships
                            </button>
                            <button className="btn btn-secondary" style={{ justifyContent: 'flex-start' }} onClick={handleFinishTest}>
                                C) It is vulnerable to sunlight changes
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlacementTest;
