import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PendingItems from './pages/PendingItems';
import FormDetail from './pages/FormDetail';
import SignIn from './pages/SignIn';
import Workspace from './components/Workspace';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Workspace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pending" element={<PendingItems />} />
        <Route path="/form/:id" element={<FormDetail />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
