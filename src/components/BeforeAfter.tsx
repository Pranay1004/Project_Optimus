/*
(import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Wrench, CheckCircle } from 'lucide-react';

const BeforeAfter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Commercial Office Renovation',
      location: 'Mumbai, Maharashtra',
      problem: 'Water damage and outdated interiors',
      solution: 'Complete waterproofing, modern flooring, and interior redesign',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Residential Building Repair',
      location: 'Delhi, NCR',
      problem: 'Structural cracks and plaster damage',
      solution: 'RCC repair, complete replastering, and waterproofing',
      beforeImage: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Multi-Storey Construction',
      location: 'Bangalore, Karnataka',
      problem: 'Ground-up construction with modern finishes',
      solution: 'Complete construction from foundation to finishing',
      beforeImage: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      afterImage: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-glass-white via-silk-white to-pearl-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-moonstone to-saffron rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-gold to-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <button
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold border-2 border-orange-400 rounded-full px-8 py-5 mb-8 shadow-glass font-display font-bold text-2xl text-silk-white transition-all duration-300 hover:scale-105 hover:shadow-gold-glow focus:outline-none"
            style={{ fontSize: '2rem', padding: '1rem 2rem' }}
*/
          >
            <span className="text-2xl">🖼️</span>
            <span>Our Work</span>
          </button>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-onyx mb-6 tracking-tight">
            Before & After
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <div className="w-32 h-1 bg-premium-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-charcoal-noir max-w-3xl mx-auto font-body leading-relaxed">
            See how we transform problems into solutions. Real projects, real results.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative bg-glass-white backdrop-blur-glass rounded-3xl shadow-floating overflow-hidden border border-gold border-opacity-30">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Before Image */}
            <div className="relative group">
              <div className="absolute top-4 left-4 bg-red-500 text-silk-white px-4 py-2 rounded-full font-accent font-bold text-sm z-10">
                BEFORE
              </div>
              <img
                src={currentProject.beforeImage}
                alt="Before"
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-30"></div>
            </div>

            {/* After Image */}
            <div className="relative group">
              <div className="absolute top-4 left-4 bg-green-500 text-silk-white px-4 py-2 rounded-full font-accent font-bold text-sm z-10">
                AFTER
              </div>
              <img
                src={currentProject.afterImage}
                alt="After"
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent opacity-30"></div>
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project Info */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-display font-bold text-onyx mb-4">
                  {currentProject.title}
                </h3>
                <div className="flex items-center space-x-2 text-charcoal-noir mb-6">
                  <MapPin className="h-5 w-5 text-saffron" />
                  <span className="font-body">{currentProject.location}</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-accent font-bold text-onyx mb-2 flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      Problem:
                    </h4>
                    <p className="text-charcoal-noir font-body pl-6">{currentProject.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-accent font-bold text-onyx mb-2 flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      Solution:
                    </h4>
                    <p className="text-charcoal-noir font-body pl-6">{currentProject.solution}</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={prevSlide}
                    className="bg-saffron hover:bg-gold text-silk-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-glow"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-onyx">
                      {currentSlide + 1} / {projects.length}
                    </div>
                    <div className="text-sm text-charcoal-noir font-body">Projects</div>
                  </div>
                  
                  <button
                    onClick={nextSlide}
                    className="bg-saffron hover:bg-gold text-silk-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-glow"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-saffron scale-125' 
                          : 'bg-silver hover:bg-gold'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/*<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
            { number: '10+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={index} className="bg-glass-white backdrop-blur-glass p-6 rounded-2xl text-center shadow-floating border border-gold border-opacity-30 hover:shadow-gold-glow transition-all duration-300">
              <div className="text-3xl font-display font-bold text-saffron mb-2">{stat.number}</div>
              <div className="text-charcoal-noir font-body text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>*/}
  );
};

export default BeforeAfter;) 
*/