import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, TrendingUp, Target, Clock, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container container animate-fade-in">
            <header className="home-header">
                <div>
                    <h1 className="home-greeting">Welcome back, Scholar</h1>
                    <p className="home-date">Tuesday, October 24</p>
                </div>
                <div className="streak-badge-pill">
                    <Zap size={16} /> 3
                </div>
            </header>

            {/* Hero Continue Card */}
            <section className="hero-section">
                <div className="resume-card card">
                    <div className="resume-content">
                        <span className="level-label">Level 0 • Seedling</span>
                        <h2 className="stage-title">Vocabulary Context</h2>
                        <div className="progress-row">
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '25%' }}></div>
                            </div>
                            <span className="progress-text">Stage 2/8</span>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary btn-resume"
                        onClick={() => navigate('/session/0/2')}
                    >
                        <Play size={20} fill="currentColor" />
                        Continue
                    </button>
                </div>
            </section>

            {/* Daily Mission */}
            <section className="mission-section">
                <h3 className="section-title">Daily Mission</h3>
                <div className="mission-card card">
                    <div className="mission-icon">
                        <Target size={24} color="var(--color-primary-blue)" />
                    </div>
                    <div className="mission-info">
                        <h4>Complete 2 Reading Passages</h4>
                        <div className="mission-progress">
                            <div className="progress-bar mb-1">
                                <div className="progress-fill" style={{ width: '50%' }}></div>
                            </div>
                            <span className="progress-text">1/2 Passages</span>
                        </div>
                    </div>
                    <div className="mission-reward">
                        <span>+50 XP</span>
                    </div>
                </div>
            </section>

            {/* Weekly Stats Summary */}
            <section className="stats-section grid-2">
                <div className="mini-stat-card card">
                    <TrendingUp size={20} className="stat-icon" />
                    <div className="stat-value">850</div>
                    <div className="stat-label">Total XP</div>
                </div>
                <div className="mini-stat-card card">
                    <Clock size={20} className="stat-icon" />
                    <div className="stat-value">2h 15m</div>
                    <div className="stat-label">Time Studied</div>
                </div>
            </section>
        </div>
    );
};

export default Home;
