import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Wrench, Clock, Shield, CheckCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Waterproofing', href: '#services' },
    { name: 'RCC & Plastering', href: '#services' },
    { name: 'Tiling & Flooring', href: '#services' },
    { name: 'Electrical & Plumbing', href: '#services' },
    { name: 'Painting & Finishing', href: '#services' },
    { name: 'Emergency Repairs', href: '#contact' }
  ];

  const serviceAreas = [
    'Mumbai, Maharashtra',
    'Navi Mumbai, Maharashtra',
    'Panvel, Maharashtra',
    'Thane, Maharashtra',
    'Kalyan, Maharashtra',
    'Mira Bhayandar, Maharashtra',
    'South Mumbai, Maharashtra',
    'Borivali, Maharashtra',
    'Alibaug, Maharashtra',
  ];

  return (
    <footer className="bg-onyx text-silk-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-saffron rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gold rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-premium-gradient rounded-2xl shadow-glow flex items-center justify-center">
                    <Wrench className="h-8 w-8 text-silk-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold text-silk-white">OPTIMUS</h3>
                  <p className="text-sm text-silver font-body tracking-wider uppercase">PROJECTS</p>
                </div>
              </div>
              
              <div className="w-24 h-1 bg-premium-gradient mb-6 rounded-full"></div>
              <p className="text-silver leading-relaxed font-body">
                Professional contractors solving construction & repair problems. From RCC to painting to final fixes - OPTIMUS delivers it all.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="bg-saffron p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-silk-white" />
                </div>
                <span className="font-body text-silver group-hover:text-gold transition-colors duration-300">+91 73030 15133</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-gold p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-silk-white" />
                </div>
                <span className="font-body text-silver group-hover:text-gold transition-colors duration-300">mukesh244@pm.me</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <button
              className="flex items-center space-x-2"
            >
              <MapPin className="h-5 w-5 text-gold" />
              <h4 className="text-xl font-display font-bold text-gold">Our Services</h4>
            </button>
            <div className="w-12 h-0.5 bg-premium-gradient rounded-full"></div>
            <ul className="space-y-3">
              {quickLinks.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    className="text-silver hover:text-gold transition-all duration-300 text-sm font-body hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gold" />
              <h4 className="text-xl font-display font-bold text-gold">Service Areas</h4>
            </div>
            <div className="w-12 h-0.5 bg-premium-gradient rounded-full"></div>
            <ul className="space-y-3">
              {serviceAreas.map((area, areaIndex) => (
                <li key={areaIndex}>
                  <span className="text-silver text-sm font-body">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-gold" />
              <h4 className="text-xl font-display font-bold text-gold">Quick Contact</h4>
            </div>
            <div className="w-12 h-0.5 bg-premium-gradient rounded-full"></div>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/917303015133?text=Hi%20OPTIMUS,%20I%20have%20a%20construction%20problem%20that%20needs%20fixing..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-premium-gradient hover:shadow-gold-glow text-silk-white px-6 py-3 rounded-lg font-accent font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
              
              <div className="bg-charcoal-noir p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-saffron" />
                  <span className="font-accent font-semibold text-silk-white text-sm">Response Time</span>
                </div>
                <p className="text-silver font-body text-xs">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-silver border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gold" />
                <span className="text-silver font-body text-sm">Licensed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-gold" />
                <span className="text-silver font-body text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-silver font-body text-sm"> Support with 24 hours</span>
              </div>
            </div>
            <div className="text-silver font-body text-sm">
              Professional Construction Solutions Since 2020
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-silver border-opacity-20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver font-body text-sm">
            © 2025 OPTIMUS Projects. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-silver hover:text-gold text-sm font-body transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-silver hover:text-gold text-sm font-body transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;