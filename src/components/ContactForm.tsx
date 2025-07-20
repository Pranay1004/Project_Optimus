import React, { useEffect } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Crown, Gem, Sparkles, Star, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-onyx via-charcoal-noir to-midnight-graphite relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-saffron to-gold rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-gold to-rose-gold rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-glass-white backdrop-blur-glass border border-gold border-opacity-30 rounded-full px-6 py-3 mb-8 shadow-glass">
            <MessageCircle className="h-5 w-5 text-gold animate-pulse" />
            <span className="text-onyx font-accent font-semibold text-sm tracking-wide">Free Consultation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-silk-white mb-6 tracking-tight">
            Ready to Start
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          <div className="w-32 h-1 bg-premium-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-silver max-w-4xl mx-auto font-body leading-relaxed">
            Begin your construction project with a complimentary consultation. 
            Our expert team will bring your vision to life with professional execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-glass-white backdrop-blur-glass p-10 rounded-3xl shadow-floating border border-gold border-opacity-30">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-premium-gradient p-3 rounded-full shadow-glow">
                <MessageCircle className="h-6 w-6 text-silk-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-onyx">Free Consultation</h3>
            </div>
            
            {/* Typeform Embed */}
            <div className="mb-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body"
                />
                
                <select className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body text-charcoal-noir">
                  <option>Select Service</option>
                  <option>Waterproofing</option>
                  <option>Painting</option>
                  <option>Tiling & Flooring</option>
                  <option>Electrical Work</option>
                  <option>Plumbing Work</option>
                  <option>Renovation</option>
                </select>
                
                <textarea
                  placeholder="Describe your project details..."
                  rows={5}
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-saffron hover:bg-gold text-silk-white py-4 rounded-2xl font-accent font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            <div className="bg-silk-white bg-opacity-50 p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-saffron" />
                <span className="font-accent font-bold text-onyx">24-Hour Response Guarantee</span>
              </div>
              <p className="text-charcoal-noir font-body text-sm">
                Submit your project details and we'll call you within 24 hours with a professional solution and detailed quote.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-glass-white backdrop-blur-glass p-10 rounded-3xl text-onyx border border-silk-white border-opacity-20 shadow-floating">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-premium-gradient p-3 rounded-full shadow-glow">
                  <Phone className="h-6 w-6 text-silk-white" />
                </div>
                <h3 className="text-3xl font-display font-bold">Contact Information</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:bg-silk-white hover:bg-opacity-50 p-4 rounded-2xl transition-all duration-300">
                  <div className="bg-saffron p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg">Project Hotline</p>
                    <p className="text-charcoal-noir font-body">+91 73030 15133</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:bg-silk-white hover:bg-opacity-50 p-4 rounded-2xl transition-all duration-300">
                  <div className="bg-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg">Email</p>
                    <p className="text-charcoal-noir font-body">mukesh244@pm.me</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:bg-silk-white hover:bg-opacity-50 p-4 rounded-2xl transition-all duration-300">
                  <div className="bg-rose-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg">Office Location</p>
                    <p className="text-charcoal-noir font-body">123 Prestige Boulevard<br />Elite District, ED 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:bg-silk-white hover:bg-opacity-50 p-4 rounded-2xl transition-all duration-300">
                  <div className="bg-moonstone p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg">Consultation Hours</p>
                    <p className="text-charcoal-noir font-body">Mon-Fri: 9AM-7PM<br />Sat: 10AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Priority Service Card */}
            <div className="bg-premium-gradient p-8 rounded-3xl text-silk-white text-center shadow-gold-glow">
              <div className="bg-silk-white bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <MessageCircle className="h-10 w-10 text-silk-white" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-3">Priority Support</h4>
              <p className="mb-6 font-body opacity-90">24/7 project support for our valued clients</p>
              <a
                href="https://wa.me/917303015133?text=Hi%20OPTIMUS%20PROJECTS,%20I%20need%20priority%20construction%20services..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-silk-white hover:bg-pearl-white text-saffron px-8 py-3 rounded-full font-accent font-bold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-3xl text-onyx text-center shadow-floating border border-gold border-opacity-30">
              <div className="bg-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-silk-white" />
              </div>
              <h4 className="text-xl font-display font-bold mb-2">Quality Guarantee</h4>
              <p className="text-sm font-body text-charcoal-noir">Professional craftsmanship warranty on all construction projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;