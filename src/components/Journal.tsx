'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: "The Art of Georgian Barn Conversion: Balancing Heritage and Modern Living",
      excerpt: "Converting historic barns requires a delicate balance between preserving architectural integrity and creating comfortable modern homes. Our latest project in Bedfordshire showcases how traditional craftsmanship can meet contemporary needs.",
      category: "Case Study",
      readTime: "5 min read",
      date: "March 15, 2024",
      author: "James Fletcher",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Planning Permission for Heritage Properties: A Complete Guide",
      excerpt: "Navigate the complex world of heritage planning permissions with our comprehensive guide. From Listed Building Consent to Conservation Area requirements, we break down everything you need to know.",
      category: "Planning Guide",
      readTime: "8 min read",
      date: "February 28, 2024",
      author: "Sarah Fletcher",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Sustainable Building Materials: Reclaimed vs New",
      excerpt: "Exploring the environmental and aesthetic benefits of using reclaimed materials in heritage property development. We examine costs, sourcing, and the impact on both sustainability and authenticity.",
      category: "Sustainability",
      readTime: "6 min read",
      date: "February 10, 2024",
      author: "James Fletcher",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Bedfordshire's Hidden Architectural Gems",
      excerpt: "A journey through some of Bedfordshire's most remarkable historic buildings, from Tudor farmhouses to Victorian estates. Discover the stories behind these architectural treasures.",
      category: "Heritage",
      readTime: "7 min read",
      date: "January 22, 2024",
      author: "Sarah Fletcher",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "The Economics of Heritage Development: Is It Worth It?",
      excerpt: "Breaking down the costs and returns of heritage property development. We examine market trends, buyer preferences, and the long-term value proposition of restored historic homes.",
      category: "Market Insights",
      readTime: "9 min read",
      date: "December 18, 2023",
      author: "James Fletcher",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Working with Traditional Building Techniques in Modern Times",
      excerpt: "How we incorporate centuries-old building methods into contemporary projects. From lime mortar to timber framing, discover the craftsmanship that makes the difference.",
      category: "Craftsmanship",
      readTime: "4 min read",
      date: "November 30, 2023",
      author: "Tom Richards",
      image: "/api/placeholder/400/300"
    }
  ];

  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="journal" className="py-24 bg-cream-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-heading text-sm font-medium text-moss-green uppercase tracking-wide">
              Insights & Stories
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Journal
          </h2>
          <p className="font-serif text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
            Sharing our knowledge, experiences, and insights from the world of heritage property development.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-moss-green/10 flex items-center justify-center">
                  <div className="text-center text-slate-gray">
                    <div className="w-12 h-12 bg-primary/20 rounded mx-auto mb-3 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary/50" />
                    </div>
                    <p className="font-serif text-xs px-4">Article Image</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary font-heading font-medium text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-xs text-moss-green font-heading font-medium mb-3 space-x-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-primary mb-3 line-clamp-2 group-hover:text-warm-brick transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-serif text-slate-gray leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-cream-paper">
                  <span className="font-serif text-sm text-slate-gray">
                    By {article.author}
                  </span>
                  <Button variant="ghost" className="text-primary hover:text-warm-brick p-0 h-auto font-heading font-medium text-sm group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Articles */}
        <div className="bg-white rounded-xl p-8 mb-12">
          <h3 className="font-heading text-2xl font-semibold text-primary mb-6">More Articles</h3>
          <div className="space-y-6">
            {articles.slice(3).map((article) => (
              <div key={article.id} className="flex flex-col md:flex-row gap-6 pb-6 border-b border-cream-paper last:border-b-0 last:pb-0 group">
                <div className="md:w-48 flex-shrink-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-moss-green/5 rounded-lg flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary/30" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center text-xs text-moss-green font-heading font-medium mb-2 space-x-4">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-2 group-hover:text-warm-brick transition-colors duration-200">
                    {article.title}
                  </h4>
                  <p className="font-serif text-slate-gray text-sm leading-relaxed mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-xs text-slate-gray">
                      By {article.author}
                    </span>
                    <Button variant="ghost" className="text-primary hover:text-warm-brick p-0 h-auto font-heading font-medium text-sm group">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold px-8 py-3"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journal;