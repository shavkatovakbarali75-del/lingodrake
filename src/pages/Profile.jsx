import React from 'react';
import { User, Settings, Award, History, LogOut } from 'lucide-react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container container animate-fade-in">
            <header className="profile-header text-center">
                <div className="profile-avatar-large mx-auto">
                    <User size={40} color="var(--color-bg-surface)" />
                </div>
                <h1 className="profile-name">Scholar You</h1>
                <p className="profile-level-badge">Level 0: Seedling</p>
            </header>

            <section className="profile-section card">
                <h3 className="section-title">Analytics overview</h3>
                <div className="stats-list">
                    <div className="stat-row">
                        <span className="stat-label">Total Study Time</span>
                        <span className="stat-value">2h 15m</span>
                    </div>
                    <div className="stat-row">
                        <span className="stat-label">Passages Completed</span>
                        <span className="stat-value">12</span>
                    </div>
                    <div className="stat-row">
                        <span className="stat-label">Average Accuracy</span>
                        <span className="stat-value">68%</span>
                    </div>
                    <div className="stat-row">
                        <span className="stat-label">Avg. Reading Speed</span>
                        <span className="stat-value">140 WPM</span>
                    </div>
                </div>
            </section>

            <section className="profile-section">
                <h3 className="section-title">Achievements</h3>
                <div className="badges-grid">
                    <div className="badge-card card text-center">
                        <div className="badge-icon-wrapper gold">
                            <Award size={24} />
                        </div>
                        <span className="badge-name">First Steps</span>
                    </div>
                    <div className="badge-card card text-center">
                        <div className="badge-icon-wrapper silver">
                            <History size={24} />
                        </div>
                        <span className="badge-name">3-Day Streak</span>
                    </div>
                    <div className="badge-card card text-center locked">
                        <div className="badge-icon-wrapper">
                            <Award size={24} />
                        </div>
                        <span className="badge-name">Speed Reader</span>
                    </div>
                </div>
            </section>

            <section className="profile-section">
                <div className="settings-list card">
                    <button className="settings-btn">
                        <Settings size={20} />
                        <span>Account Settings</span>
                    </button>
                    <button className="settings-btn danger">
                        <LogOut size={20} />
                        <span>Log Out</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Profile;
