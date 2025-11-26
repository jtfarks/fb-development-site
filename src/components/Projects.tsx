'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Victorian Farm Conversion, Bedfordshire",
      description: "Historic 18th-century barn transformed into a contemporary family home",
      image: "/api/placeholder/600/400",
      category: "Barn Conversion",
      year: "2023"
    }
  ];

  const visibleProjects = projects;

  return (
    <section id="projects" className="py-24 bg-cream-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-heading text-sm font-medium text-moss-green uppercase tracking-wide">
              Our Portfolio
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Preserving History, Creating Homes
          </h2>
          <p className="font-serif text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Each project represents our commitment to honoring architectural heritage while creating beautiful, functional spaces for modern living.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border border-cream-paper/50 bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                {/* Placeholder for project image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-moss-green/10 flex items-center justify-center">
                  <div className="text-center text-slate-gray">
                    <div className="w-12 h-12 bg-primary/20 rounded mx-auto mb-3 flex items-center justify-center">
                      <div className="w-6 h-6 bg-primary/30 rounded"></div>
                    </div>
                    <p className="font-serif text-xs px-4">Project Image: {project.title}</p>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    className="bg-white text-primary hover:bg-cream-paper font-heading font-semibold"
                  >
                    View Details
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary font-heading font-medium text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-white font-heading font-medium text-xs px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-warm-brick transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-serif text-slate-gray leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;