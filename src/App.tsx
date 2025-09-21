import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stories from './pages/Stories';
import ShareStory from './pages/ShareStory';
import Resources from './pages/Resources';
import About from './pages/About';
import Auth from './pages/Auth';
import Footer from './components/Footer';
import EditStory from './pages/EditStory';
import AdminDashboard from './pages/AdminDashboard';
import FAQs from './pages/FAQs';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/share-story" element={<ShareStory />} />
            <Route path="/edit-story/:id" element={<EditStory />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />

          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" />
      </div>
    </Router>
  );
}

export default App;