import React from 'react';
import { Phone, Mail, MapPin, Clock, Crown, Gem, Sparkles, Star } from 'lucide-react';

const CTA = () => {
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
            <Crown className="h-5 w-5 text-gold animate-pulse" />
            <span className="text-onyx font-accent font-semibold text-sm tracking-wide">Luxury Consultation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-silk-white mb-6 tracking-tight">
            Ready to Create
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              Your Masterpiece?
            </span>
          </h2>
          <div className="w-32 h-1 bg-premium-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-silver max-w-4xl mx-auto font-body leading-relaxed">
            Begin your luxury transformation journey with a complimentary consultation. 
            Our master designers will bring your vision to extraordinary life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-glass-white backdrop-blur-glass p-10 rounded-3xl shadow-floating border border-gold border-opacity-30">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-premium-gradient p-3 rounded-full shadow-glow">
                <Gem className="h-6 w-6 text-silk-white" />
              </div>
              <h3 className="text-3xl font-display font-bold text-onyx">Luxury Consultation</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body placeholder-charcoal-noir placeholder-opacity-60"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body placeholder-charcoal-noir placeholder-opacity-60"
                  />
                </div>
              </div>
              
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body placeholder-charcoal-noir placeholder-opacity-60"
              />
              
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body placeholder-charcoal-noir placeholder-opacity-60"
              />
              
              <select className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body text-charcoal-noir">
                <option>Select Luxury Service</option>
                <option>Estate Renovation</option>
                <option>Bespoke Construction</option>
                <option>Interior Artistry</option>
                <option>Smart Integration</option>
                <option>Wellness Spaces</option>
                <option>Premium Maintenance</option>
              </select>
              
              <div className="relative">
                <textarea
                  placeholder="Describe your vision and project details..."
                  rows={5}
                  className="w-full px-6 py-4 bg-silk-white border border-gold border-opacity-30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-saffron focus:border-transparent transition-all duration-300 font-body placeholder-charcoal-noir placeholder-opacity-60 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-premium-gradient hover:shadow-gold-glow text-silk-white py-4 rounded-2xl font-accent font-bold text-lg transition-all duration-300 hover:scale-105 shadow-glow flex items-center justify-center space-x-3"
              >
                <Sparkles className="h-5 w-5" />
                <span>Begin Luxury Journey</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-glass-white backdrop-blur-glass p-10 rounded-3xl text-onyx border border-silk-white border-opacity-20 shadow-floating">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-premium-gradient p-3 rounded-full shadow-glow">
                  <Crown className="h-6 w-6 text-silk-white" />
                </div>
                <h3 className="text-3xl font-display font-bold">Contact Information</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:bg-silk-white hover:bg-opacity-50 p-4 rounded-2xl transition-all duration-300">
                  <div className="bg-saffron p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg">Luxury Hotline</p>
                    <p className="text-charcoal-noir font-body">(555) 123-LUXURY</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:bg-silk-white hover:bg-opacity-50 p-4 rounded-2xl transition-all duration-300">
                  <div className="bg-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg">Email</p>
                    <p className="text-charcoal-noir font-body">luxury@optimus.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:bg-silk-white hover:bg-opacity-50 p-4 rounded-2xl transition-all duration-300">
                  <div className="bg-rose-gold p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-silk-white" />
                  </div>
                  <div>
                    <p className="font-accent font-semibold text-lg">Luxury Showroom</p>
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

            {/* VIP Service Card */}
            <div className="bg-premium-gradient p-8 rounded-3xl text-silk-white text-center shadow-gold-glow">
              <div className="bg-silk-white bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Star className="h-10 w-10 text-silk-white fill-current" />
              </div>
              <h4 className="text-2xl font-display font-bold mb-3">VIP Concierge Service</h4>
              <p className="mb-6 font-body opacity-90">24/7 luxury support for our elite clientele</p>
              <button className="bg-silk-white hover:bg-pearl-white text-saffron px-8 py-3 rounded-full font-accent font-bold transition-all duration-300 hover:scale-105 shadow-lg">
                Call VIP: (555) 999-ELITE
              </button>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-3xl text-onyx text-center shadow-floating border border-gold border-opacity-30">
              <div className="bg-gold p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gem className="h-8 w-8 text-silk-white" />
              </div>
              <h4 className="text-xl font-display font-bold mb-2">Luxury Guarantee</h4>
              <p className="text-sm font-body text-charcoal-noir">Lifetime craftsmanship warranty on all luxury projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;