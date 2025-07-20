import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle, Crown, Gem, Sparkles, Target, Building, Calendar, Users, Trophy, Shield } from 'lucide-react';

const Hero = () => {
  const achievements = [
    { icon: Building, number: '500+', label: 'Projects Completed' },
    { icon: Calendar, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '50+', label: 'Skilled Workers' },
    { icon: Trophy, number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-saffron to-gold rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-gold to-rose-gold rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-rose-gold to-moonstone rounded-full mix-blend-screen filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Premium Badge */}
            <button
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold border-2 border-orange-400 rounded-full px-8 py-5 shadow-glass font-display font-bold text-2xl text-silk-white transition-all duration-300 hover:scale-105 hover:shadow-gold-glow focus:outline-none"
              style={{ fontSize: '2rem', padding: '1rem 2rem' }}
            >
              <span className="text-2xl">🏗️</span>
              <span>Premium Construction</span>
            </button>

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
              <p className="text-xl text-charcoal-noir leading-relaxed font-body max-w-2xl">
                OPTIMUS PROJECTS delivers construction and renovation solutions. 
                You bring the vision, we bring the excellence.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="flex flex-col sm:flex-row gap-6">
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

          {/* Right Content - Premium Achievement Stats */}
          <div className="relative">
            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-glass-white backdrop-blur-glass p-6 rounded-2xl shadow-floating text-center border border-gold border-opacity-30"
                  >
                    <div className="bg-premium-gradient p-3 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <IconComponent className="h-6 w-6 text-silk-white" />
                    </div>
                    <div className="text-3xl font-display font-bold text-onyx mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-charcoal-noir font-accent font-medium text-sm">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Our Philosophy Card */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-2xl shadow-floating border border-gold border-opacity-30 text-center">
              <div className="bg-premium-gradient p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-glow">
                <Target className="h-8 w-8 text-silk-white" />
              </div>
              <h4 className="text-xl font-display font-bold text-onyx mb-3">Our Philosophy</h4>
              <p className="text-charcoal-noir font-body text-sm">
                We believe in doing things right the first time — not patching or fixing what's broken later. That's why we focus on robust projects, long-term solutions, and quality that holds up for years. From bare concrete to polished finishes — we build it all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;