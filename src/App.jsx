import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

const Home = () => (
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
