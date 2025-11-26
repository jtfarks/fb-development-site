'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration from environment variables
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'FB Development Company',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="font-heading text-sm font-medium text-moss-green uppercase tracking-wide">
                Get In Touch
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Start Your Heritage Journey
            </h2>
            <p className="font-serif text-lg text-slate-gray max-w-3xl mx-auto leading-relaxed">
              Ready to transform your historic property? We&apos;d love to hear about your project and explore how we can bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-cream-paper/30 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-heading font-medium text-primary mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-2 border-cream-paper focus:border-primary font-serif transition-all duration-200 focus-ring"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-heading font-medium text-primary mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-2 border-cream-paper focus:border-primary font-serif"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-heading font-medium text-primary mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="border-2 border-cream-paper focus:border-primary font-serif"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-heading font-medium text-primary mb-2">
                        Briefly outline your query  *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        
                        className="border-2 border-cream-paper focus:border-primary font-serif resize-none"
                      />
                    </div>

                    <div className="text-xs text-slate-gray font-serif leading-relaxed">
                      <p>
                        By submitting this form, you agree to our processing of your personal data in accordance with our Privacy Policy. 
                        We will use your information to respond to your enquiry and may contact you about our services.
                      </p>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-serif">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-serif">Sorry, there was an error sending your message. Please try again or contact us directly.</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-moss-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-moss-green" />
                      </div>
                      <div>
                        <div className="font-heading font-medium text-primary">Address</div>
                        <div className="font-serif text-slate-gray text-sm leading-relaxed">
                          FB Development Company<br />
                          Bedfordshire, UK
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-moss-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-moss-green" />
                      </div>
                      <div>
                        <div className="font-heading font-medium text-primary">Phone</div>
                        <div className="font-serif text-slate-gray text-sm">
                          <a href="tel:+44123456789" className="hover:text-warm-brick transition-colors">
                            +44 (0) 123 456 789
                          </a>
                        </div>
                      </div>
                    </div>

                    
                
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-gradient-to-br from-moss-green/10 to-primary/5 flex items-center justify-center rounded-lg">
                    <div className="text-center text-slate-gray">
                      <MapPin className="w-12 h-12 mx-auto mb-3 text-primary/30" />
                      <p className="font-serif text-sm">Interactive Map<br />Bedfordshire Area</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="w-48 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="font-heading text-white font-semibold">FB Development Co.</span>
                </div>
              </div>
              <p className="font-serif text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Transforming historic rural properties with sustainable design. Family-owned heritage development company specialising in preservation and contemporary ecological principles.
              </p>
              
              {/* Newsletter Signup */}
              <div>
                <h4 className="font-heading font-semibold mb-3">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 font-serif"
                  />
                  <Button variant="secondary" className="bg-white text-primary hover:bg-cream-paper font-heading font-semibold">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 font-serif">
                <li><a href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="#approach" className="text-primary-foreground/80 hover:text-white transition-colors">Our Approach</a></li>
                <li><a href="#projects" className="text-primary-foreground/80 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#sustainability" className="text-primary-foreground/80 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#journal" className="text-primary-foreground/80 hover:text-white transition-colors">Journal</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold mb-6">Services</h4>
              <ul className="space-y-3 font-serif">
                <li className="text-primary-foreground/80">Heritage Restoration</li>
                <li className="text-primary-foreground/80">Barn Conversions</li>
                <li className="text-primary-foreground/80">Planning Consultation</li>
                <li className="text-primary-foreground/80">Sustainable Design</li>
                <li className="text-primary-foreground/80">Project Management</li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="font-serif text-primary-foreground/80 text-sm">
                © 2024 FB Development Company. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Social Links */}
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                
                {/* Legal Links */}
                <div className="flex space-x-4 font-serif text-primary-foreground/80 text-sm">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;