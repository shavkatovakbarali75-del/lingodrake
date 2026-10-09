import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Clock, Target, Zap, Play } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();

    const stages = [
        { id: 1, title: 'Introduction to Scanning', score: 85, locked: false },
        { id: 2, title: 'Vocabulary Context', score: 0, locked: false },
        { id: 3, title: 'Heading Matching', score: 0, locked: true },
        { id: 4, title: 'Level 0 Exam', score: 0, locked: true },
    ];

    return (
        <div className="dashboard-container container animate-fade-in">
            {/* Profile Header */}
            <div className="profile-header card">
                <div className="profile-info">
                    <div>
                        <h2 className="profile-level">Level 0: Seedling</h2>
                        <p className="profile-subtitle">Current Stage: Vocabulary Context</p>
                    </div>
                    <div className="streak-badge">
                        <Zap size={20} />
                        <span>3 Day Streak</span>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <Target className="stat-icon" />
                        <div className="stat-value">68%</div>
                        <div className="stat-label">Accuracy</div>
                    </div>
                    <div className="stat-card">
                        <Clock className="stat-icon" />
                        <div className="stat-value">2h 15m</div>
                        <div className="stat-label">Study Time</div>
                    </div>
                    <div className="stat-card">
                        <Trophy className="stat-icon" />
                        <div className="stat-value">4</div>
                        <div className="stat-label">Badges</div>
                    </div>
                </div>
            </div>

            {/* Level Path */}
            <h3 className="section-title">Level 0 Map</h3>
            <div className="stages-list">
                {stages.map((stage, index) => (
                    <div key={stage.id} className={`stage-card card ${stage.locked ? 'locked' : ''}`}>
                        <div className="stage-info">
                            <div className="stage-number">{index + 1}</div>
                            <div>
                                <h4>{stage.title}</h4>
                                {stage.score > 0 && <p className="stage-score">Highest Score: {stage.score}%</p>}
                            </div>
                        </div>
                        {!stage.locked ? (
                            <button
                                className="btn btn-primary"
                                onClick={() => navigate(`/session/0/${stage.id}`)}
                            >
                                <Play size={16} /> Start
                            </button>
                        ) : (
                            <button className="btn btn-ghost" disabled>
                                Locked
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
