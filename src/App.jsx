import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Podcast from './components/Podcast';
import About from './components/About';
import Footer from './components/Footer';
import CoursePage from './pages/CoursePage';
import BundlePage from './pages/BundlePage';
import PodcastPage from './pages/PodcastPage';
import OtherCoursesPage from './pages/OtherCoursesPage';
import OtherPodcastsPage from './pages/OtherPodcastsPage';
import './App.css';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Courses />
      <Podcast />
      <About />
    </motion.div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/bundle" element={<BundlePage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/other-courses" element={<OtherCoursesPage />} />
          <Route path="/other-podcasts" element={<OtherPodcastsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;