// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App';
import LandingPage from './pages/ladingPage.js';
import Login from './pages/auth/login.js';
import Register from './pages/auth/register.js';
import Dashboard from './pages/dashboard/components/dashboard.js';
import PrivateRoute from './pages/auth/authGuard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Usando o PrivateRoute para proteger a rota do dashboard */}
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
