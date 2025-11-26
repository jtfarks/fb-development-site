'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Recycle, TreePine } from 'lucide-react';

const Sustainability = () => {
  const sustainabilityFeatures = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Carbon Footprint Reduction",
      description: "Implementing energy-efficient systems, improved insulation, and renewable energy sources while maintaining historical authenticity."
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Native Landscape Preservation",
      description: "Protecting and enhancing existing ecosystems, working with natural drainage patterns, and preserving mature trees and hedgerows."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Reclaimed Materials Usage",
      description: "Sourcing reclaimed timber, stone, and brick to maintain character while reducing environmental impact and supporting circular economy."
    }
  ];

  return (
    <section id="sustainability" className="relative py-24 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Nature Photography */}
        <div className="w-1/2 bg-gradient-to-r from-moss-green/20 to-primary/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary/40">
              <TreePine className="w-24 h-24 mx-auto mb-4" />
              <p className="font-serif text-sm">Nature Photography:<br />Trees, Countryside</p>
            </div>
          </div>
        </div>
        {/* Right Side - Cream Paper */}
        <div className="w-1/2 bg-cream-paper"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-moss-green/20 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-moss-green" />
              </div>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Building with Nature in Mind
            </h2>
            <p className="font-serif text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Sustainable development isn&apos;t just about using green materials—it&apos;s about understanding and working with the natural environment to create homes that enhance rather than compromise their surroundings.
            </p>
          </div>

          {/* Three Column Icon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sustainabilityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-moss-green/10 rounded-full mb-6 group-hover:bg-moss-green/20 transition-colors duration-300">
                  <div className="text-moss-green group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-primary mb-4 group-hover:text-warm-brick transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="font-serif text-slate-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              className="bg-moss-green hover:bg-moss-green/90 text-white font-heading font-semibold px-8 py-4 text-base"
            >
              Our Sustainability Commitment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;