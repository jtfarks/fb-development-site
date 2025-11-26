'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const navHeight = 112;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center-left transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('/images/hero/barnsketch.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(14,59,46,0.15) 0%, rgba(14,59,46,0.35) 50%, rgba(109,143,117,0.2) 100%)'
        }}
      />
      
      {/* Additional text contrast overlay on left side */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:from-black/30 lg:to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-primary font-heading font-medium text-sm mb-8">
              Family-owned • Bedfordshire, UK
            </div>

            {/* Main Heading */}
            <h1 className="font-heading font-bold text-cream-paper mb-6 drop-shadow-lg">
              <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-2">
                PRESERVING CHARACTER.
              </div>
              <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                BUILDING BEAUTY.
              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-cream-paper font-serif leading-relaxed mb-8 max-w-lg drop-shadow-md">
              We transform historic rural sites into high-quality homes, pairing traditional craftsmanship with contemporary ecological design principles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-4 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => scrollToSection('#projects')}
              >
                View Our Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold px-8 py-4 text-base bg-white/95 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                onClick={() => scrollToSection('#approach')}
              >
                Learn Our Approach
              </Button>
            </div>
          </div>

          {/* Right side - can be used for additional content or kept empty for image focus */}
          <div className="hidden lg:block">
            {/* This space intentionally left for the background image to show through */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;