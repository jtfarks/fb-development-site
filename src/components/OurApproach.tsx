'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const OurApproach = () => {
  return (
    <section id="approach" className="py-24 bg-white relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-moss-green to-primary opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content (60% width) */}
          <div className="lg:col-span-7">
            <div className="max-w-3xl">
              <div className="mb-6">
                <span className="font-heading text-sm font-medium text-moss-green uppercase tracking-wide">
                  Our Philosophy
                </span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Honoring Heritage, Embracing Tomorrow
              </h2>
              
              <div className="space-y-8 font-serif text-lg leading-loose text-slate-gray">
                <p>
                  Every historic property tells a story. Our approach begins with deep respect for existing structures and their place in the landscape, understanding that these buildings have weathered decades or centuries for good reason.
                </p>
                
                <p>
                  We believe that sustainable development doesn&apos;t mean compromise. By carefully integrating modern ecological design principles with traditional craftsmanship, we create homes that honor their heritage while meeting contemporary living standards.
                </p>
                
                <p>
                  Our family has called Bedfordshire home for generations. This deep local knowledge, combined with extensive experience navigating planning permissions and heritage requirements, allows us to transform challenging rural sites into exceptional properties.
                </p>
              </div>
              
              {/* Key Principles */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-cream-paper/30 p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-primary mb-3">Heritage Preservation</h3>
                  <p className="font-serif text-slate-gray">Protecting and celebrating original architectural elements while ensuring structural integrity.</p>
                </div>
                
                <div className="bg-cream-paper/30 p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-primary mb-3">Modern Comfort</h3>
                  <p className="font-serif text-slate-gray">Integrating contemporary amenities and energy efficiency without compromising character.</p>
                </div>
                
                <div className="bg-cream-paper/30 p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-primary mb-3">Local Expertise</h3>
                  <p className="font-serif text-slate-gray">Deep understanding of planning requirements and heritage regulations across Bedfordshire.</p>
                </div>
                
                <div className="bg-cream-paper/30 p-6 rounded-lg">
                  <h3 className="font-heading font-semibold text-primary mb-3">Quality Craftsmanship</h3>
                  <p className="font-serif text-slate-gray">Partnering with skilled local trades who understand traditional building techniques.</p>
                </div>
              </div>
              
              <div className="mt-12">
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold px-8 py-3"
                >
                  Read Our Full Story
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual (40% width) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Carpenters Image */}
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/approach/carpenters.png"
                  alt="Traditional craftsmanship and building techniques"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-warm-brick/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-moss-green/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;