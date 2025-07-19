import React from 'react';
import { Droplets, Home, Layers, Wrench, Zap, Paintbrush, ArrowRight, MessageCircle, HardHat, Sparkles, Crown, Gem } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: 'Luxury Renovation',
      description: 'Complete luxury home transformations that redefine elegance and sophistication.',
      features: ['Master Suite Design', 'Gourmet Kitchens', 'Spa Bathrooms'],
      accent: 'saffron',
      bgGradient: 'from-orange-400 to-orange-600'
    },
    {
      icon: Crown,
      title: 'Bespoke Construction',
      description: 'Custom architectural masterpieces crafted with precision and artistry.',
      features: ['Custom Estates', 'Wine Cellars', 'Home Theaters'],
      accent: 'gold',
      bgGradient: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Gem,
      title: 'Interior Artistry',
      description: 'Curated interior design that reflects your unique style and personality.',
      features: ['Art Curation', 'Luxury Furnishing', 'Lighting Design'],
      accent: 'rose-gold',
      bgGradient: 'from-pink-300 to-pink-500'
    },
    {
      icon: Sparkles,
      title: 'Premium Maintenance',
      description: 'White-glove maintenance services to preserve your investment.',
      features: ['Concierge Service', 'Preventive Care', 'Emergency Response'],
      accent: 'moonstone',
      bgGradient: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Smart Integration',
      description: 'Cutting-edge home automation and intelligent systems integration.',
      features: ['Smart Lighting', 'Climate Control', 'Security Systems'],
      accent: 'gold',
      bgGradient: 'from-amber-400 to-amber-600'
    },
    {
      icon: Home,
      title: 'Wellness Spaces',
      description: 'Luxury wellness amenities for health, relaxation, and rejuvenation.',
      features: ['Spa Installations', 'Steam Rooms', 'Infinity Pools'],
      accent: 'silver',
      bgGradient: 'from-gray-300 to-gray-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-pearl-white via-silk-white to-glass-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-saffron to-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-gold to-moonstone rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-glass-white backdrop-blur-glass border border-gold border-opacity-30 rounded-full px-6 py-3 mb-8 shadow-glass">
            <HardHat className="h-5 w-5 text-saffron animate-pulse" />
            <span className="text-onyx font-accent font-semibold text-sm tracking-wide">Luxury Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-onyx mb-6 tracking-tight">
            Premium
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              Construction Solutions
            </span>
          </h2>
          <div className="w-32 h-1 bg-premium-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-charcoal-noir max-w-4xl mx-auto font-body leading-relaxed">
            From architectural masterpieces to bespoke interiors, we deliver luxury construction 
            and renovation solutions that exceed the highest expectations.
          </p>
        </div>

        {/* Luxury Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-glass-white backdrop-blur-glass p-8 rounded-3xl shadow-floating hover:shadow-gold-glow transition-all duration-500 hover:scale-105 border border-gold border-opacity-20 hover:border-opacity-40 overflow-hidden"
              >
                {/* Luxury Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`bg-${service.accent} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow group-hover:shadow-gold-glow`}>
                    <IconComponent className="h-8 w-8 text-silk-white" />
                  </div>
                  
                  {/* Floating Sparkle Effect */}
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="h-4 w-4 text-gold animate-pulse" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold text-onyx mb-4 group-hover:bg-premium-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-noir mb-6 leading-relaxed font-body group-hover:text-onyx transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Luxury Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-onyx group-hover:text-charcoal-noir transition-colors duration-300">
                        <div className={`w-2 h-2 bg-${service.accent} rounded-full mr-4 group-hover:scale-125 group-hover:bg-gold transition-all duration-300`}></div>
                        <span className="text-sm font-body font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Service Link */}
                  <div className="relative">
                    <a
                      href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20need%20luxury%20construction%20services..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-saffron hover:text-gold font-accent font-semibold text-sm transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Premium Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gold group-hover:border-opacity-30 transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Luxury CTA */}
        <div className="text-center mt-16">
          <div className="bg-premium-gradient rounded-3xl p-12 text-silk-white shadow-gold-glow">
            <div className="bg-silk-white bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Crown className="h-10 w-10 text-silk-white fill-current" />
            </div>
            <h3 className="text-4xl font-display font-bold mb-4">
              Ready for Luxury Excellence?
            </h3>
            <p className="text-xl mb-8 opacity-90 font-body max-w-2xl mx-auto">
              Experience the OPTIMUS PROJECTS difference. Where vision meets craftsmanship, and dreams become reality.
            </p>
            <a
              href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20want%20to%20discuss%20a%20luxury%20project..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-silk-white hover:bg-pearl-white text-saffron px-10 py-4 rounded-full font-accent font-bold text-lg transition-all duration-300 hover:scale-105 shadow-floating"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Begin Your Luxury Journey</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;