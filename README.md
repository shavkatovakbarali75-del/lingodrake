# 🐉 LingoDrake — Gamified Language Learning Platform

**LingoDrake** is a modern, responsive, and gamified language learning web application built with React, Vite, and React Router. Inspired by Duolingo, it helps users learn and practice new languages through interactive lessons, placement tests, reading sessions, and competitive leaderboards.

---

## ✨ Features

- 🎯 **Placement Test:** Evaluates your current language proficiency level before starting.
- 📚 **Interactive Learning:** Step-by-step modular curriculum covering vocabulary and grammar.
- 📖 **Reading Sessions:** Contextual reading comprehension with instant feedback.
- 🏆 **Leaderboards & Rankings:** Compete with other learners, earn XP, and level up.
- 👤 **User Profiles & Streaks:** Track your learning streak, stats, and achievements.
- 📱 **Mobile-Friendly UI:** Designed with a clean, bottom-navigation app layout suitable for mobile and desktop.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router v6
- **Build Tool:** Vite
- **Styling:** CSS3 (Custom responsive layouts, animations)
- **Icons & Assets:** Custom UI components

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shavkatovakbarali75-del/lingodrake.git
cd lingodrake
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

---

## 📁 Project Structure

```
Lingodrake/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # Shared UI components (MainLayout, Navbar)
│   ├── context/         # Application state management
│   ├── pages/           # Application views
│   │   ├── Welcome.jsx
│   │   ├── PlacementTest.jsx
│   │   ├── Home.jsx
│   │   ├── Learn.jsx
│   │   ├── Practice.jsx
│   │   ├── ReadingSession.jsx
│   │   ├── Rankings.jsx
│   │   └── Profile.jsx
│   ├── App.jsx          # Routes and top-level layout
│   └── main.jsx         # App entry point
├── package.json
└── vite.config.js
```

---

## 👨‍💻 Author

- **Akbarali Shavkatov** — [@shavkatovakbarali75-del](https://github.com/shavkatovakbarali75-del)
