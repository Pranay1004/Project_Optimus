import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Crown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    /*{ name: 'Projects', href: '#projects' },*/
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-glass-white backdrop-blur-glass shadow-glass border-b border-gold border-opacity-30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-premium-gradient rounded-lg shadow-glow flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Crown className="h-6 w-6 text-silk-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-onyx tracking-tight">
                  OPTIMUS
                </h1>
                <p className="text-xs text-charcoal-noir font-accent font-medium tracking-wider uppercase">
                  PROJECTS
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-onyx hover:text-saffron px-4 py-2 rounded-lg text-sm font-accent font-medium transition-all duration-300 relative group hover:bg-glass-white hover:backdrop-blur-glass"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-premium-gradient group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-onyx">
                <Phone className="h-4 w-4 text-saffron" />
                <span className="font-body">+91 73030 15133</span>
              </div>
            </div>
            <a
              href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20have%20a%20construction%20problem%20that%20needs%20fixing..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-premium-gradient hover:shadow-gold-glow text-silk-white px-6 py-2.5 rounded-lg font-accent font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-onyx hover:text-saffron p-2 rounded-lg hover:bg-glass-white hover:backdrop-blur-glass transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-glass-white backdrop-blur-glass rounded-2xl mt-4 border border-gold border-opacity-30 shadow-glass">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-onyx hover:text-saffron block px-4 py-3 rounded-xl text-base font-accent font-medium transition-all duration-300 hover:bg-silk-white hover:bg-opacity-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gold border-opacity-30">
                <a
                  href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20have%20a%20construction%20problem%20that%20needs%20fixing..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-premium-gradient text-silk-white px-6 py-3 rounded-xl font-accent font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Us Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;