import React from 'react';
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

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Ventures />
      <Work />
      <ClientStats />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
