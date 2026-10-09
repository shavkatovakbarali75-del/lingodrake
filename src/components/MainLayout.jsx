import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, PenTool, Trophy, User } from 'lucide-react';
import './MainLayout.css';

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'home', path: '/home', icon: Home, label: 'Home' },
        { id: 'learn', path: '/learn', icon: BookOpen, label: 'Learn' },
        { id: 'practice', path: '/practice', icon: PenTool, label: 'Practice' },
        { id: 'rankings', path: '/rankings', icon: Trophy, label: 'Rankings' },
        { id: 'profile', path: '/profile', icon: User, label: 'Profile' },
    ];

    return (
        <div className="main-layout">
            {/* Background layer for rich forest gradients */}
            <div className="forest-background-layer"></div>

            <main className="content-area">
                <Outlet />
            </main>

            <nav className="bottom-nav">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname.startsWith(item.path);

                    return (
                        <button
                            key={item.id}
                            className={`nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => navigate(item.path)}
                            aria-label={item.label}
                        >
                            <div className="nav-icon-wrapper">
                                <Icon size={24} />
                            </div>
                            <span className="nav-label">{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default MainLayout;
