import React from 'react';
import { Droplets, Paintbrush, Layers, Zap, Wrench, Home, Sofa, RefreshCw, Users, ArrowRight, MessageCircle, HardHat, Building2, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: '💧',
      title: 'Waterproofing',
      description: 'Complete waterproofing solutions for roofs, walls, and basements.',
    },
    {
      icon: '🎨',
      title: 'Painting',
      description: 'Interior and exterior painting with premium quality finishes.',
    },
    {
      icon: '🏗️',
      title: 'Tiling & Flooring',
      description: 'Professional tiling, marble, and flooring installation services.',
    },
    {
      icon: '⚡',
      title: 'Electrical Work',
      description: 'Complete electrical installations, repairs, and maintenance.',
    },
    {
      icon: '🔧',
      title: 'Plumbing Work',
      description: 'Professional plumbing installations, repairs, and upgrades.',
    },
    {
      icon: '🏢',
      title: 'Exterior Work',
      description: 'Facade work, external repairs, and building maintenance.',
    },
    {
      icon: '🏠',
      title: 'Interior Work',
      description: 'Complete interior design, renovation, and finishing work.',
    },
    {
      icon: '🪑',
      title: 'Furniture Work',
      description: 'Custom furniture design, installation, and repair services.',
    },
    {
      icon: '🔄',
      title: 'Renovation',
      description: 'Complete home and office renovation projects.',
    },
    {
      icon: '👥',
      title: 'Expert Consultancy',
      description: 'Professional consultation and project planning services.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-silk-white to-pearl-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-saffron to-gold rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-glass-white backdrop-blur-glass border border-gold border-opacity-30 rounded-full px-6 py-3 mb-8 shadow-glass">
            <HardHat className="h-5 w-5 text-saffron animate-pulse" />
            <span className="text-onyx font-accent font-semibold text-sm tracking-wide">Our Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-onyx mb-6 tracking-tight">
            Professional
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              Construction Solutions
            </span>
          </h2>
          <div className="w-32 h-1 bg-premium-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-charcoal-noir max-w-4xl mx-auto font-body leading-relaxed">
            From waterproofing to complete renovations, we deliver professional construction 
            and repair solutions for all your building needs.
          </p>
        </div>

        {/* Services Grid - 5 columns on large screens, responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Icon Container */}
                <div className="relative mb-4">
                  <div className="bg-saffron p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-base font-display font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed font-body">
                    {service.description}
                  </p>

                  {/* Explore Service Link */}
                  <div className="relative">
                    <a
                      href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20need%20construction%20services..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-accent font-semibold text-sm transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-contractor-gradient rounded-3xl p-10 text-silk-white shadow-contractor">
            <div className="bg-silk-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <HardHat className="h-8 w-8 text-silk-white" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90 font-body max-w-2xl mx-auto">
              Get professional construction solutions from OPTIMUS PROJECTS. Quality work, transparent pricing, guaranteed results.
            </p>
            <a
              href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20want%20to%20discuss%20a%20construction%20project..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-silk-white hover:bg-pearl-white text-saffron px-8 py-3 rounded-full font-accent font-bold text-lg transition-all duration-300 hover:scale-105 shadow-floating"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;