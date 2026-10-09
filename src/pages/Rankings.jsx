import React from 'react';
import { Trophy, Medal, Crown } from 'lucide-react';
import './Rankings.css';

const Rankings = () => {
    return (
        <div className="rankings-container container animate-fade-in">
            <header className="rankings-header">
                <h1 className="rankings-title">Academy Ladder</h1>
                <p className="rankings-subtitle">Compete with fellow scholars</p>
            </header>

            <div className="season-info card">
                <h3>Season 1: Deep Roots</h3>
                <p className="season-ends">Ends in 14 days</p>
            </div>

            <div className="podium-section">
                <div className="podium-spot silver">
                    <Medal size={24} color="#C0C0C0" />
                    <div className="avatar">A</div>
                    <span className="name">Aziz</span>
                    <span className="score">1240 XP</span>
                </div>
                <div className="podium-spot gold">
                    <Crown size={32} color="var(--color-accent-gold)" />
                    <div className="avatar">S</div>
                    <span className="name">Sardor</span>
                    <span className="score">1500 XP</span>
                </div>
                <div className="podium-spot bronze">
                    <Medal size={24} color="#CD7F32" />
                    <div className="avatar">N</div>
                    <span className="name">Nodira</span>
                    <span className="score">1100 XP</span>
                </div>
            </div>

            <div className="leaderboard-list card">
                <div className="leaderboard-row current-user">
                    <span className="rank">12</span>
                    <div className="avatar-sm">Y</div>
                    <span className="name">You</span>
                    <span className="score">850 XP</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">13</span>
                    <div className="avatar-sm">M</div>
                    <span className="name">Malika</span>
                    <span className="score">820 XP</span>
                </div>
                <div className="leaderboard-row">
                    <span className="rank">14</span>
                    <div className="avatar-sm">B</div>
                    <span className="name">Bobur</span>
                    <span className="score">790 XP</span>
                </div>
            </div>
        </div>
    );
};

export default Rankings;
