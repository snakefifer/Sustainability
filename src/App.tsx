import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Problems from './pages/Problems';
import ProblemDetail from './pages/ProblemDetail';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Pledge from './pages/Pledge';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/Sustainability">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/problems/:id" element={<ProblemDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/pledge" element={<Pledge />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;