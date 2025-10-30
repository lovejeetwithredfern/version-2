import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Advantage from './components/Advantage';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Features />
      <Advantage />
      <Reviews />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
