import React from 'react';
import { CheckCircle, Users, Calendar, Trophy, Building, Shield, Target, Wrench, Crown, Gem, Sparkles } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Building, number: '500+', label: 'Projects Completed' },
    { icon: Calendar, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '50+', label: 'Skilled Workers' },
    { icon: Trophy, number: '100%', label: 'Client Satisfaction' }
  ];

  const capabilities = [
    'Single point of responsibility',
    'Consistent standard of quality',
    'Transparent process from kickoff to handover',
    'Professional documentation & licensing',
    'Experienced site supervision',
    'Milestone-driven execution'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-silk-white via-pearl-white to-glass-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-saffron to-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-gold to-rose-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-glass-white backdrop-blur-glass border border-gold border-opacity-30 rounded-full px-6 py-3 mb-8 shadow-glass">
                <Wrench className="h-5 w-5 text-saffron animate-pulse" />
                <span className="text-onyx font-accent font-semibold text-sm tracking-wide">Who We Are</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-bold text-onyx mb-8 tracking-tight leading-tight">
                We Build, We Transform,
                <span className="block bg-premium-gradient bg-clip-text text-transparent">
                  We Deliver
                </span>
              </h2>
              <div className="w-32 h-1 bg-premium-gradient mb-8 rounded-full"></div>
              
              <div className="text-saffron font-accent font-bold text-lg mb-6">
                From Foundations to Finishes.
              </div>
              
              <div className="space-y-6 text-lg text-charcoal-noir leading-relaxed font-body">
                <p>
                  We are a full-scope contracting company specializing in the end-to-end execution 
                  of new construction and finishing projects. From the earliest structural work to 
                  the final layer of paint or the last piece of furniture, we deliver everything 
                  under a single, seamless contract.
                </p>
                <p>
                  Whether it's a multi-storey residential building, a commercial space, or a custom 
                  interior fit-out, we manage everything in-house — waterproofing, tiling, flooring, 
                  painting, carpentry, furniture work, and even specialized external treatments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Achievement Cards */}
          <div className="space-y-8">
            {/* Why Choose Us - Innovative Design */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-2xl shadow-floating border border-gold border-opacity-30">
              <h3 className="text-xl font-display font-bold text-onyx mb-6">
                Unlike fragmented setups, our integrated model gives clients:
              </h3>
              
              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-premium-gradient p-1.5 rounded-full shadow-glow">
                      <CheckCircle className="h-4 w-4 text-silk-white" />
                    </div>
                    <span className="text-charcoal-noir font-body">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why OPTIMUS Card */}
            <div className="bg-premium-gradient p-8 rounded-2xl text-silk-white shadow-gold-glow">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-6 w-6" />
                <h3 className="text-xl font-display font-bold">Why OPTIMUS?</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-silk-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-xl font-display font-bold mb-1">ONE</div>
                  <div className="text-xs font-body">Contract for Everything</div>
                </div>
                <div className="bg-silk-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-xl font-display font-bold mb-1">ZERO</div>
                  <div className="text-xs font-body">Coordination Hassles</div>
                </div>
                <div className="bg-silk-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-xl font-display font-bold mb-1">100%</div>
                  <div className="text-xs font-body">Quality Guarantee</div>
                </div>
                <div className="bg-silk-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
                  <div className="text-xl font-display font-bold mb-1">24/7</div>
                  <div className="text-xs font-body">Project Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;