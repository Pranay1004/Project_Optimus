import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-saffron to-gold rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-gold to-rose-gold rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-rose-gold to-moonstone rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-onyx leading-tight tracking-tight">
                We Build, We Transform,
                <span className="block text-saffron">
                  We Deliver
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-accent font-semibold text-saffron mb-6">
                From Foundations to Finishes
              </div>
              <p className="text-xl text-charcoal-noir leading-relaxed font-body mx-auto max-w-2xl">
                OPTIMUS PROJECTS delivers construction and renovation solutions. 
                You bring the vision, we bring the excellence.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                'End-to-end solutions',
                'Quality craftsmanship',
                'Professional finishes',
                'Transparent process'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-premium-gradient p-1.5 rounded-full shadow-glow">
                    <CheckCircle className="h-4 w-4 text-silk-white" />
                  </div>
                  <span className="text-onyx font-body font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20have%20a%20construction%20problem%20that%20needs%20fixing..."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-premium-gradient hover:shadow-gold-glow text-silk-white px-10 py-4 rounded-lg font-accent font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp Us Now</span>
              </a>
              <a
                href="#contact"
                className="group border-2 border-saffron text-saffron hover:bg-saffron hover:text-silk-white px-10 py-4 rounded-lg font-accent font-bold text-lg transition-all duration-300 hover:shadow-glow flex items-center justify-center space-x-3"
              >
                <span>Send Us Your Problem</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;