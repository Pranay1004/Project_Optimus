import React from 'react';
import { CheckCircle, Target, Crown } from 'lucide-react';

const About = () => {
  /*const achievements = [
    { icon: Building, number: '500+', label: 'Projects Completed' },
    { icon: Calendar, number: '10+', label: 'Years Experience' },
    { icon: Users, number: '50+', label: 'Skilled Workers' },
    { icon: Trophy, number: '100%', label: 'Client Satisfaction' }
  ];*/

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
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

          {/* Right Content - Philosophy, Why OPTIMUS, and Capabilities */}
          <div className="space-y-8">
            {/* Our Philosophy Card */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-2xl shadow-floating border border-gold border-opacity-30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-premium-gradient p-3 rounded-xl">
                  <Target className="h-6 w-6 text-silk-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-onyx">Our Philosophy</h3>
              </div>
              <p className="text-charcoal-noir font-body leading-relaxed">
                We believe in doing things right the first time — not patching or fixing what's broken later. That's why we focus on robust projects, long-term solutions, and quality that holds up for years. From bare concrete to polished finishes — we build it all.
              </p>
            </div>

            {/* Why OPTIMUS Card */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-2xl shadow-floating border border-gold border-opacity-30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-saffron to-gold p-2 rounded-xl">
                  <Crown className="h-5 w-5 text-silk-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-onyx">Why OPTIMUS?</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-saffron/10 to-gold/10 p-4 rounded-xl border border-gold border-opacity-10">
                  <div className="text-2xl font-display font-bold mb-1 text-saffron">ONE</div>
                  <div className="font-body text-charcoal-noir">Contract for Everything</div>
                </div>
                <div className="bg-gradient-to-br from-saffron/10 to-gold/10 p-4 rounded-xl border border-gold border-opacity-10">
                  <div className="text-2xl font-display font-bold mb-1 text-saffron">ZERO</div>
                  <div className="font-body text-charcoal-noir">Coordination Hassles</div>
                </div>
                <div className="bg-gradient-to-br from-saffron/10 to-gold/10 p-4 rounded-xl border border-gold border-opacity-10">
                  <div className="text-2xl font-display font-bold mb-1 text-saffron">100%</div>
                  <div className="font-body text-charcoal-noir">Quality Guarantee</div>
                </div>
                <div className="bg-gradient-to-br from-saffron/10 to-gold/10 p-4 rounded-xl border border-gold border-opacity-10">
                  <div className="text-2xl font-display font-bold mb-1 text-saffron">24/7</div>
                  <div className="font-body text-charcoal-noir">Project Support</div>
                </div>
              </div>
            </div>
            
            {/*
            Why Choose Us - Capabilities
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
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;