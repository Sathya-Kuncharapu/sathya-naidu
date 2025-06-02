
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-portfolio-dark-tertiary">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-portfolio-text-muted">
            © 2024 Sathya Naidu Kuncharapu. All rights reserved.
          </p>
          <p className="text-sm text-portfolio-text-muted mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
