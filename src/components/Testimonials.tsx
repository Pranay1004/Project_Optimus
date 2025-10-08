import { Quote, Building, Home, MessageCircle, CheckCircle, ThumbsUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "They didn't just fix it, they ensured it never happened again. OPTIMUS transformed our office space completely and the quality is outstanding.",
      author: "Rajesh Kumar",
      role: "Commercial Property Owner",
      location: "Mumbai",
      verified: true,
      type: "commercial"
    },
    {
      text: "OPTIMUS solved a problem three other contractors couldn't figure out. Their waterproofing work has been perfect for 2 years now.",
      author: "Priya Sharma",
      role: "Residential Client",
      location: "Kharghar",
      verified: true,
      type: "residential"
    },
    {
      text: "Fast, reliable, and they actually showed up when they said they would. The complete renovation was finished on time and within budget.",
      author: "Amit Patel",
      role: "Building Manager",
      location: "Panvel",
      verified: true,
      type: "commercial"
    },
    {
      text: "From RCC work to final painting, everything was handled professionally. No mess, no confusion, just excellent results.",
      author: "Sunita Reddy",
      role: "Homeowner",
      location: "Alibagh",
      verified: true,
      type: "residential"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-pearl-white via-glass-white to-silk-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-gold to-rose-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-saffron to-moonstone rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* Client Trust button commented out
          <button
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-saffron to-gold border-2 border-orange-400 rounded-full px-8 py-5 mb-8 shadow-glass font-display font-bold text-2xl text-silk-white transition-all duration-300 hover:scale-105 hover:shadow-gold-glow focus:outline-none"
            style={{ fontSize: '2rem', padding: '1rem 2rem' }}
          >
            <span className="text-2xl">🤝</span>
            <span>Client Trust</span>
          </button>
          */}
          <h2 className="text-5xl md:text-6xl font-display font-bold text-onyx mb-6 tracking-tight">
            <span className="block bg-premium-gradient bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <div className="w-32 h-1 bg-premium-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-charcoal-noir max-w-3xl mx-auto font-body leading-relaxed">
            Real feedback from satisfied clients who trusted us with their construction and renovation projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-glass-white backdrop-blur-glass p-8 rounded-3xl shadow-floating hover:shadow-gold-glow transition-all duration-500 hover:scale-105 border border-gold border-opacity-20"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-16 w-16 text-saffron" />
              </div>

              {/* Verified Badge */}
              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-accent font-semibold text-xs">Verified Client</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-onyx mb-6 italic font-body leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${testimonial.type === 'commercial' ? 'bg-saffron' : 'bg-gold'}`}>
                    {testimonial.type === 'commercial' ? (
                      <Building className="h-6 w-6 text-silk-white" />
                    ) : (
                      <Home className="h-6 w-6 text-silk-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-display font-bold text-onyx">{testimonial.author}</div>
                    <div className="text-sm text-charcoal-noir font-body">{testimonial.role}</div>
                    <div className="text-xs text-saffron font-body">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs font-accent font-semibold ${
                  testimonial.type === 'commercial' 
                    ? 'bg-saffron text-silk-white' 
                    : 'bg-gold text-silk-white'
                }`}>
                  {testimonial.type === 'commercial' ? 'Commercial' : 'Residential'}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-premium-gradient rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { number: '98%', label: 'Client Satisfaction', icon: ThumbsUp },
            {
              number: '60+',
              label: 'Satisfied Clients · Commercial · Private · Residential',
              icon: Building
            },
            { number: '100%', label: 'Projects Completed', icon: Home },
            { number: '24/7', label: 'Support Available', icon: MessageCircle }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-glass-white backdrop-blur-glass p-6 rounded-2xl text-center shadow-floating border border-gold border-opacity-30 hover:shadow-gold-glow transition-all duration-300 group">
                <div className="bg-premium-gradient p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-6 w-6 text-silk-white" />
                </div>
                <div className="text-3xl font-display font-bold text-saffron mb-2">{stat.number}</div>
                <div className="text-charcoal-noir font-body text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* CTA Section - Commented Out 
        <div className="bg-premium-gradient rounded-3xl p-12 text-center text-silk-white shadow-gold-glow">
          <h3 className="text-4xl font-display font-bold mb-4">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-xl mb-8 opacity-90 font-body max-w-2xl mx-auto">
            Experience the OPTIMUS difference. Professional construction solutions with guaranteed results.
          </p>
          <a
            href="https://wa.me/917303015133?text=Hi%20OPTIMUS,%20I%20have%20a%20construction%20problem%20that%20needs%20fixing..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-silk-white text-saffron px-8 py-4 rounded-lg font-accent font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-floating"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Start Your Project Today</span>
          </a>
        </div>
        */}
      </div>
    </section>
  );
};

export default Testimonials;