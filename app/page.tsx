import { AboutSection } from '@/components/about-section';
import { ContactForm } from '@/components/contact-form';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { IndustriesSection } from '@/components/industries-section';
import { Navbar } from '@/components/navbar';
import { ProjectsGrid } from '@/components/projects-grid';
import { ServicesGrid } from '@/components/services-grid';
import { StatsSection } from '@/components/stats-section';
import { TrustSection } from '@/components/trust-section';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <ProjectsGrid />
      <IndustriesSection />
      <AboutSection />
      <TrustSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
