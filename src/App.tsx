import React, { Suspense, lazy } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhatsAppFloat from './components/WhatsappFloat';
import DeferredSection from './components/DeferredSection';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-silk-white">
      <Navigation />
      <Hero />

      <DeferredSection placeholderHeightClass="min-h-[520px]">
        <Suspense fallback={<div className="min-h-[520px] animate-pulse bg-white/40" />}>
          <About />
        </Suspense>
      </DeferredSection>

      <DeferredSection placeholderHeightClass="min-h-[620px]">
        <Suspense fallback={<div className="min-h-[620px] animate-pulse bg-white/40" />}>
          <Services />
        </Suspense>
      </DeferredSection>

      <DeferredSection placeholderHeightClass="min-h-[460px]">
        <Suspense fallback={<div className="min-h-[460px] animate-pulse bg-white/40" />}>
          <Testimonials />
        </Suspense>
      </DeferredSection>

      <DeferredSection placeholderHeightClass="min-h-[760px]" rootMargin="450px">
        <Suspense fallback={<div className="min-h-[760px] animate-pulse bg-white/40" />}>
          <ContactForm />
        </Suspense>
      </DeferredSection>

      <DeferredSection placeholderHeightClass="min-h-[220px]">
        <Suspense fallback={<div className="min-h-[220px] animate-pulse bg-white/40" />}>
          <Footer />
        </Suspense>
      </DeferredSection>

      <WhatsAppFloat />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;