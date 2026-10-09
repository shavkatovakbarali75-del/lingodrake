import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Lock, Book, CheckCircle, Star, Sparkles } from 'lucide-react';
import './Learn.css';

const Learn = () => {
    const navigate = useNavigate();
    const [scrollY, setScrollY] = useState(0);

    // Parallax scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stages = [
        { id: 1, title: 'Introduction to Scanning', type: 'reading', status: 'completed' },
        { id: 2, title: 'Vocabulary Context', type: 'vocab', status: 'current' },
        { id: 3, title: 'Skimming Practice', type: 'practice', status: 'locked' },
        { id: 4, title: 'True/False/Not Given', type: 'reading', status: 'locked' },
        { id: 5, title: 'Synonym Matching', type: 'vocab', status: 'locked' },
        { id: 6, title: 'Mid-Level Checkpoint', type: 'exam', status: 'locked' },
        { id: 7, title: 'Paragraph Headings', type: 'reading', status: 'locked' },
        { id: 8, title: 'Advanced Context Clues', type: 'vocab', status: 'locked' },
        { id: 9, title: 'Summary Completion', type: 'practice', status: 'locked' },
        { id: 10, title: 'Level 0 Mastery Exam', type: 'exam', status: 'locked' },
    ];

    const getIcon = (type, status) => {
        if (status === 'locked') return <Lock size={22} className="opacity-60" />;
        if (type === 'reading') return <Book size={24} fill="currentColor" strokeWidth={1} />;
        if (type === 'vocab') return <Star size={24} fill="currentColor" strokeWidth={1} />;
        if (type === 'practice') return <CheckCircle size={24} fill="currentColor" strokeWidth={1} />;
        if (type === 'exam') return <Star size={28} fill="currentColor" strokeWidth={1} />;
        return <Play size={24} fill="currentColor" strokeWidth={1} />;
    };

    return (
        <div className="learn-container animate-fade-in premium-bg">
            {/* --- Premium Depth Parallax Layers --- */}
            <div
                className="parallax-layer layer-back-trees"
                style={{ transform: `translateY(${scrollY * 0.15}px)` }}
            />
            <div
                className="parallax-layer layer-mid-mist"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            />
            <div
                className="parallax-layer layer-sunbeams"
                style={{ transform: `translateY(${scrollY * 0.05}px) rotate(15deg)` }}
            />

            <header className="learn-header">
                <h1 className="learn-title">Level 0: Seedling</h1>
                <p className="learn-subtitle">Foundations of IELTS Reading</p>
            </header>

            <div className="journey-wrapper">
                <div className="path-container">
                    {stages.map((stage, index) => (
                        <div
                            key={stage.id}
                            className={`path-node-wrapper ${stage.status} stage-${index + 1}`}
                        >
                            {/* Thicker Continuous Curved Connection Line */}
                            {index < stages.length - 1 && (
                                <svg className="path-line-svg" viewBox="0 0 100 120" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id={`path-grad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="var(--color-primary-blue-light)" stopOpacity={stage.status === 'locked' ? 0.3 : 0.9} />
                                            <stop offset="100%" stopColor="var(--color-primary-blue-light)" stopOpacity={stages[index + 1].status === 'locked' ? 0.1 : 0.8} />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d={index % 2 === 0
                                            ? "M50,0 C90,40 90,80 50,120"
                                            : "M50,0 C10,40 10,80 50,120"}
                                        className={`path-line-draw ${stage.status === 'completed' ? 'active-line' : 'locked-line'}`}
                                        stroke={`url(#path-grad-${index})`}
                                    />
                                </svg>
                            )}

                            <button
                                className={`path-node ${stage.type} premium-node`}
                                onClick={() => stage.status !== 'locked' && navigate(`/session/0/${stage.id}`)}
                                disabled={stage.status === 'locked'}
                            >
                                {/* Node Texture Overlay */}
                                <div className="node-texture"></div>

                                <div className="node-content">
                                    {getIcon(stage.type, stage.status)}
                                </div>

                                {/* Status Glows & Rings */}
                                {stage.status === 'completed' && <div className="node-glow-completed"></div>}
                                {stage.status === 'current' && (
                                    <>
                                        <div className="node-ring-animated"></div>
                                        <div className="node-glow-current"></div>
                                        <Sparkles className="current-sparkle" size={16} />
                                    </>
                                )}
                            </button>

                            <div className={`node-label-container ${stage.status === 'locked' ? 'blurred-label' : ''}`}>
                                <h3 className="node-title">{stage.title}</h3>
                                <span className="node-stage-num">Stage {index + 1}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Locked Preview Levels */}
            <div className="preview-levels">
                {/* Blue mist depth overlay strictly bound to the bottom area */}
                <div className="parallax-layer layer-blue-mist" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>

                <div className="level-preview-card locked">
                    <div className="lock-overlay"><Lock size={32} /></div>
                    <h2>Level 1: Sapling</h2>
                    <p>Intermediate comprehension techniques</p>
                </div>

                <div className="level-preview-card locked opacity-50">
                    <div className="lock-overlay"><Lock size={32} /></div>
                    <h2>Level 2: Canopy</h2>
                    <p>Complex sentence structures</p>
                </div>
            </div>
        </div>
    );
};

export default Learn;
