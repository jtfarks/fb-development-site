import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OurApproach from '@/components/OurApproach';
import Projects from '@/components/Projects';
import Sustainability from '@/components/Sustainability';
import Journal from '@/components/Journal';
import ContactFooter from '@/components/ContactFooter';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <OurApproach />
      <Projects />
      <Sustainability />
      <Journal />
      <ContactFooter />
    </div>
  );
}
