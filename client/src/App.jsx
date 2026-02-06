import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Work from './components/Work';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ventures from './components/Ventures';
import ClientStats from './components/ClientStats';
import UpdateWork from './components/UpdateWork';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      {/* <Ventures /> */}
      <Work />
      <ClientStats />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/updatework" element={<UpdateWork />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
