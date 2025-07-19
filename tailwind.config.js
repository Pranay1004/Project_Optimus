/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury Premium Color Palette
        'saffron': '#FF9500',
        'gold': '#FFD700',
        'rose-gold': '#E8B4B8',
        'moonstone': '#3AA8C1',
        'silk-white': '#FFF8DC',
        'pearl-white': '#F8F6F0',
        'onyx': '#353839',
        'charcoal-noir': '#36454F',
        'midnight-graphite': '#2F4F4F',
        'silver': '#C0C0C0',
        'platinum': '#E5E4E2',
        
        // Glass and Premium Effects
        'glass-white': 'rgba(255, 255, 255, 0.25)',
        'glass-dark': 'rgba(0, 0, 0, 0.25)',
        
        // Site Colors
        'site-white': '#FFFFFF',
        'site-gray': '#F8F9FA',
        'site-dark': '#1A1A1A',
        'site-darker': '#0F0F0F',
        'text-primary': '#2D3748',
        'text-secondary': '#4A5568',
        'text-light': '#A0AEC0',
        'optimus-blue': '#2563EB',
        'optimus-blue-dark': '#1D4ED8',
        'optimus-blue-light': '#3B82F6',
        'optimus-lime': '#84CC16',
        'steel-gray': '#64748B',
        'steel-gray-light': '#CBD5E1',
        'error-red': '#EF4444',
        'success-green': '#10B981',
        'warning-yellow': '#F59E0B',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'accent': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #FF9500 0%, #FFD700 50%, #E8B4B8 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF9500 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 149, 0, 0.1) 0%, rgba(255, 215, 0, 0.1) 100%)',
        'hero-gradient': 'linear-gradient(135deg, #FFF8DC 0%, #F8F6F0 50%, rgba(255, 149, 0, 0.05) 100%)',
        'contractor-gradient': 'linear-gradient(135deg, #2563EB 0%, #84CC16 100%)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      boxShadow: {
        'floating': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(255, 149, 0, 0.3)',
        'gold-glow': '0 0 30px rgba(255, 215, 0, 0.4)',
        'contractor': '0 10px 25px -3px rgba(37, 99, 235, 0.3)',
        'problem-solver': '0 20px 40px -12px rgba(37, 99, 235, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};