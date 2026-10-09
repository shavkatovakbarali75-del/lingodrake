import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Book, CheckCircle, Lightbulb } from 'lucide-react';
import './ReadingSession.css';

const ReadingSession = () => {
    const { level, stage } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('passage'); // 'vocab', 'passage', 'questions'

    // Placeholder content for demo
    const samplePassage = `
    The modern forest ecosystem is a complex web of interwoven lives. Canopy trees form the upper layer, capturing the majority of sunlight. This layer dictates the environment for the understory and forest floor below.

    Symbiotic relationships are evident throughout the forest. Mycorrhizal fungi networks, often called the "wood wide web", connect tree roots. Through these networks, trees can share resources such as water and carbon, and even send chemical signals about threats like drought or disease.

    Understanding these relationships is crucial for conservation efforts. When one species is removed or a new one introduced, the entire balance of the forest can be disrupted in unforeseen ways.
  `;

    return (
        <div className="session-container animate-fade-in">
            {/* Top Navbar */}
            <header className="session-header">
                <button className="btn-icon" onClick={() => navigate('/dashboard')}>
                    <ArrowLeft size={24} />
                </button>
                <div className="session-progress">
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: '33%' }}></div>
                    </div>
                    <span className="progress-text">Level {level} - Stage {stage}</span>
                </div>
                <button className="btn-icon">
                    <Lightbulb size={24} className="hint-icon" />
                </button>
            </header>

            {/* Tabs Layout */}
            <div className="session-tabs">
                <button
                    className={`tab-btn ${activeTab === 'vocab' ? 'active' : ''}`}
                    onClick={() => setActiveTab('vocab')}
                >
                    <Book size={18} /> Vocab
                </button>
                <button
                    className={`tab-btn ${activeTab === 'passage' ? 'active' : ''}`}
                    onClick={() => setActiveTab('passage')}
                >
                    Passage
                </button>
                <button
                    className={`tab-btn ${activeTab === 'questions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('questions')}
                >
                    <CheckCircle size={18} /> Questions
                </button>
            </div>

            {/* Content Area */}
            <main className="session-content">
                {activeTab === 'vocab' && (
                    <div className="vocab-view container">
                        <h2 className="section-title">Key Vocabulary</h2>
                        <div className="vocab-list">
                            <div className="vocab-card card">
                                <h3>Canopy</h3>
                                <p className="vocab-type">Noun</p>
                                <p className="vocab-def">The upper branch level of a forest, forming a continuous cover.</p>
                                <button className="btn btn-ghost btn-sm mt-2">See in Context</button>
                            </div>
                            <div className="vocab-card card">
                                <h3>Symbiotic</h3>
                                <p className="vocab-type">Adjective</p>
                                <p className="vocab-def">Involving interaction between two different organisms living in close physical association.</p>
                                <button className="btn btn-ghost btn-sm mt-2">See in Context</button>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-4 w-full" onClick={() => setActiveTab('passage')}>
                            Continue to Passage
                        </button>
                    </div>
                )}

                {activeTab === 'passage' && (
                    <div className="passage-view container">
                        <div className="reading-settings">
                            <button className="btn btn-ghost text-sm">Aa</button>
                            <button className="btn btn-ghost text-sm">EN/UZ</button>
                        </div>
                        <article className="reading-passage">
                            {samplePassage.split('\n\n').map((para, idx) => (
                                <p key={idx} className="reading-text">{para}</p>
                            ))}
                        </article>
                        <button className="btn btn-primary mt-4 w-full" onClick={() => setActiveTab('questions')}>
                            Start Questions
                        </button>
                    </div>
                )}

                {activeTab === 'questions' && (
                    <div className="questions-view container">
                        <div className="question-card card">
                            <p className="question-text">
                                <strong>Question 1:</strong> According to the passage, the "wood wide web" primarily serves to:
                            </p>
                            <div className="options-list">
                                <button className="option-btn">A. Block sunlight from the forest floor</button>
                                <button className="option-btn">B. Connect tree roots to share resources</button>
                                <button className="option-btn">C. Introduce new species to the ecosystem</button>
                            </div>
                        </div>
                        <div className="navigation-buttons mt-4">
                            <button className="btn btn-secondary">Previous</button>
                            <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Submit Stage</button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default ReadingSession;
