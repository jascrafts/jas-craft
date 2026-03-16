import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EngineerGrowth from './components/EngineerGrowth';
import Services from './components/Services';
import Timeline from './components/Timeline';
import ImpactStats from './components/ImpactStats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white" style={{ background: '#0D0D0F' }}>
      <Navbar />
      <main>
        <Hero />
        <EngineerGrowth />
        <Services />
        <Timeline />
        <ImpactStats />
        <Testimonials />
        <Blog />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
