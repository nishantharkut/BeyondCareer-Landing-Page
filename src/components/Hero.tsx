
import React, { useEffect, useState } from 'react';
import { lazy, Suspense, /*…*/ } from 'react';
import { ChevronDown, ArrowRight, Github, Linkedin, Twitter, Instagram, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypedText from '@/components/TypedText';
// import ParallaxBackground from '@/components/ParallaxBackground';
const ParallaxBackground = lazy(() => import('@/components/ParallaxBackground'));
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/**
 * Enhanced Hero Section Component
 * Features: Parallax background, glassmorphism effects, responsive design, social media integration
 * Height optimized to not cover navbar and provide better UX
 */
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Mount effect for smooth animations
  useEffect(() => {
    if (prefersReduced) return;
    setMounted(true);
  }, []);

  // Mouse tilt effect with error handling
  useEffect(() => {
    if (prefersReduced) return;
    const handleMouseMove = (e: MouseEvent) => {
      try {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const tiltX = (e.clientY - centerY) / centerY * 2; // Reduced intensity
        const tiltY = (e.clientX - centerX) / centerX * 2; // Reduced intensity
        setTilt({ x: tiltX, y: tiltY });
      } catch (error) {
        console.warn('Mouse move handler error:', error);
      }
    };

    const handleScroll = () => {
      try {
        setScrollY(window.scrollY);
      } catch (error) {
        console.warn('Scroll handler error:', error);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Smooth scroll to about section
   */
  const scrollToAbout = () => {
    try {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.warn('Scroll to about error:', error);
    }
  };

  /**
   * Smooth scroll to contact section
   */
  const scrollToContact = () => {
    try {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.warn('Scroll to contact error:', error);
    }
  };

  // Social media links configuration
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <section
      id="hero"
      // className="relative min-h-[80vh] max-h-[90vh] pt-16 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950"
      // className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950"
      // className="relative h-auto min-h-[70vh] sm:min-h-screen pt-16 sm:pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950"
      // className="relative h-auto min-h-[90vh] sm:min-h-[80vh] md:min-h-screen pt-16 sm:pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950"
      className="relative h-auto min-h-[90vh] sm:min-h-[80vh] md:min-h-screen pt-16 sm:pt-20 flex items-center justify-center overflow-hidden bg-cover bg-center"
style={{ backgroundImage: "url('/heroBg.webp')" }}
      role="banner"
      aria-label="Hero section with company introduction"
    >
      {/* <ParallaxBackground /> */}
      <Suspense fallback={null}>
        {!prefersReduced && <ParallaxBackground />}
      </Suspense>

      {/* Main Content Panel with Glassmorphism */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-2xl max-w-6xl mx-4 sm:mx-6"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Subtle glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl sm:rounded-3xl blur-md animate-pulse" />

        <div className="relative">
          {/* Main Heading with staggered animations */}
          <div className={`transition-all duration-1000 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 sm:mb-6 leading-tight text-white">
              <span className="block mb-1 sm:mb-2">ALL ABOUT</span>
              <span className="block">
                <span className="text-blue-400 mr-2">YOUR</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  <TypedText />
                </span>
              </span>
            </h1>
          </div>

          {/* Description with delay */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed"> */}
            {/* <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-7xl mx-auto leading-relaxed"> */}
            <p className="text-base sm:text-3xl md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-7xl mx-auto leading-relaxed">
              From <strong className="text-blue-400 font-semibold">IIT Kharagpur</strong> to your career excellence.
              We provide world-class career guidance, premium internships, and expert mentorship
              to transform your aspirations into achievements.
            </p>
          </div>

          {/* CTA Buttons with responsive design */}
          <div className={`transition-all duration-1000 delay-600 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <Button
                size="lg"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base border-2 border-white/30 sm:text-lg rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                // className="group px-6 sm:px-8 py-3 rounded-full w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                onClick={scrollToAbout}
                aria-label="Begin your career journey"
              >
                <span className="relative z-10 mr-2">Begin Your Journey</span>
                <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-black backdrop-blur-sm transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                onClick={scrollToContact}
                aria-label="Watch demo video"
              >
                <Play className=" w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">Watch demo video</span>
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className={`transition-all duration-1000 delay-900 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    className={`group p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Compact Stats Grid */}
          <div className={`transition-all duration-1000 delay-1200 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"> */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:grid-cols-2 sm:gap-3 md:grid-cols-4 max-w-4xl mx-auto">
              {[
                { number: '2,500+', label: 'Students Guided', color: 'from-blue-500 to-cyan-500' },
                { number: '1,200+', label: 'Premium Placements', color: 'from-purple-500 to-pink-500' },
                { number: '150+', label: 'Partner Companies', color: 'from-emerald-500 to-teal-500' },
                { number: '98%', label: 'Success Rate', color: 'from-orange-500 to-red-500' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  role="text"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  <div className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 group-hover:animate-pulse`}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      {/* Simplified Scroll Indicator */}
<div
  className={`hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-500 ${
    scrollY > 200 ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}
>
  
  <button
    onClick={scrollToAbout}
    className="flex items-center justify-center w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
    aria-label="Scroll down to explore more"
  >
    <ChevronDown
      size={24}
      className="text-white animate-bounce"
    />
    
  </button>
</div>

      {/* Floating CTA for better accessibility */}
      {/* <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"> */}
      <div className="hidden md:block fixed bottom-6 right-6 sm:bottom-6 sm:right-6 z-50 ">  
        <Button
          onClick={scrollToContact}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 font-semibold"
          aria-label="Get started with Beyond Career"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
