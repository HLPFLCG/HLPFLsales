import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Training } from './pages/Training';
import { RolePlay } from './pages/RolePlay';
import { Team } from './pages/Team';
import { Analytics } from './pages/Analytics';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/role-play" element={<RolePlay />} />
          <Route path="/team" element={<Team />} />
          <Route path="/analytics" element={<Analytics />} />
          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;