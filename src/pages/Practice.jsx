import React from 'react';
import { Target, AlertCircle, RefreshCw } from 'lucide-react';
import './Practice.css';

const Practice = () => {
    return (
        <div className="practice-container container animate-fade-in">
            <header className="practice-header">
                <h1 className="practice-title">Targeted Practice</h1>
                <p className="practice-subtitle">Master your weaknesses through repetition</p>
            </header>

            <section className="adaptive-drill-section card">
                <div className="drill-icon-header">
                    <RefreshCw size={28} color="var(--color-primary-blue)" />
                    <h2>Daily Adaptive Drill</h2>
                </div>
                <p className="reading-text text-sm">A custom 15-minute drill focusing on your recent mistakes and upcoming stage requirements.</p>
                <button className="btn btn-primary w-full mt-4">Start Drill</button>
            </section>

            <h3 className="section-title mt-6">Weak Areas</h3>
            <div className="weak-areas-grid">
                <div className="weak-area-card card">
                    <div className="weak-area-header">
                        <AlertCircle size={20} className="warning-icon" />
                        <h4>True/False/Not Given</h4>
                    </div>
                    <div className="accuracy-bar">
                        <div className="accuracy-fill" style={{ width: '45%' }}></div>
                    </div>
                    <p className="accuracy-text">45% Accuracy</p>
                    <button className="btn btn-secondary btn-sm mt-3 w-full">Train Specifics</button>
                </div>

                <div className="weak-area-card card">
                    <div className="weak-area-header">
                        <Target size={20} className="warning-icon" />
                        <h4>Matching Headings</h4>
                    </div>
                    <div className="accuracy-bar">
                        <div className="accuracy-fill" style={{ width: '60%' }}></div>
                    </div>
                    <p className="accuracy-text">60% Accuracy</p>
                    <button className="btn btn-secondary btn-sm mt-3 w-full">Train Specifics</button>
                </div>
            </div>
        </div>
    );
};

export default Practice;
