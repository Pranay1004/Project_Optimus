import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
// import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsappFloat';

function App() {

  return (
    <div className="min-h-screen bg-silk-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      {/* <BeforeAfter /> */}
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;