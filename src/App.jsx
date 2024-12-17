import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import Teacher from './pages/Teacher';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;