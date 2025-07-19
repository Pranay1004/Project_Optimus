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
              
              <div className="space-y-6 text-lg text-charcoal-noir leading-relaxed font-body">
                <p className="text-xl font-semibold text-saffron">
                  From Foundations to Finishes.
                </p>
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

            {/* Key Differentiators */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-3xl shadow-floating border border-gold border-opacity-30">
              <h3 className="text-2xl font-display font-bold text-onyx mb-6">
                Unlike fragmented setups, our integrated model gives clients:
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="bg-premium-gradient p-1.5 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-glow">
                      <CheckCircle className="h-4 w-4 text-silk-white" />
                    </div>
                    <span className="text-onyx font-body font-medium group-hover:text-saffron transition-colors duration-300">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-premium-gradient p-8 rounded-3xl text-silk-white shadow-gold-glow">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-8 w-8" />
                <h3 className="text-2xl font-display font-bold">Our Philosophy</h3>
              </div>
              <p className="text-lg font-body leading-relaxed opacity-95">
                We believe in doing things right the first time — not patching or fixing what's 
                broken later. That's why we focus on new projects, long-term solutions, and 
                quality that holds up for years. <strong>From bare concrete to polished finishes — we build it all.</strong>
              </p>
            </div>
          </div>

          {/* Right Content - Achievement Cards */}
          <div className="space-y-8">
            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-glass-white backdrop-blur-glass p-8 rounded-3xl shadow-floating text-center hover:shadow-gold-glow transition-all duration-500 hover:scale-105 border border-gold border-opacity-30"
                  >
                    <div className="relative">
                      <div className="bg-premium-gradient p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                        <IconComponent className="h-8 w-8 text-silk-white" />
                      </div>
                      <div className="text-4xl font-display font-bold text-onyx mb-3 group-hover:bg-premium-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {achievement.number}
                      </div>
                      <div className="text-charcoal-noir font-accent font-medium">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Professional Badge */}
            <div className="bg-glass-white backdrop-blur-glass p-8 rounded-3xl shadow-floating border border-gold border-opacity-30 text-center">
              <div className="bg-premium-gradient p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Shield className="h-10 w-10 text-silk-white" />
              </div>
              <h4 className="text-2xl font-display font-bold text-onyx mb-3">Licensed & Insured</h4>
              <p className="text-charcoal-noir font-body">
                Professional documentation, licenses, and insurance ensuring compliance and peace of mind
              </p>
            </div>

            {/* Process Badge */}
            <div className="bg-premium-gradient p-8 rounded-3xl text-silk-white text-center shadow-gold-glow">
              <div className="bg-silk-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Building className="h-8 w-8 text-silk-white" />
              </div>
              <h4 className="text-xl font-display font-bold mb-2">We are not just executors</h4>
              <p className="text-sm font-body opacity-90">We're delivery partners with methodical planning and skilled execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;