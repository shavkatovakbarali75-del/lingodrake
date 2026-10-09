import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PlacementTest from './pages/PlacementTest';
import ReadingSession from './pages/ReadingSession';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Practice from './pages/Practice';
import Rankings from './pages/Rankings';
import Profile from './pages/Profile';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          {/* Public / Onboarding Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/placement" element={<PlacementTest />} />

          {/* Main App Routes with Bottom Navigation */}
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Immersive Learning Route (no bottom nav) */}
          <Route path="/session/:level/:stage" element={<ReadingSession />} />

          {/* Fallback */}
          <Route path="/dashboard" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
