import React, { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import CenterSection from './components/CenterSection';
import ProcessIntroSection from './components/ProcessIntroSection';
import ProcessSteps from './components/ProcessSteps';
import StatsSection from './components/StatsSection';
import PartnershipSection from './components/PartnershipSection';
import FooterSection from './components/FooterSection';
import ContactDrawer from './components/ContactDrawer';
import BackgroundCanvas from './components/BackgroundCanvas';
import NavigationDots from './components/NavigationDots';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState('intro');
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms'>('home');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-step]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition <= bottom) {
          const step = element.getAttribute('data-step');
          if (step) {
            setCurrentStep(step);
          }
        }
      });

      // Set to 'hero' when in hero section (no data-step attribute)
      const heroSection = document.querySelector('[data-section="hero"]');
      if (heroSection) {
        const heroElement = heroSection as HTMLElement;
        const heroTop = heroElement.offsetTop;
        const heroBottom = heroTop + heroElement.offsetHeight;
        
        if (scrollPosition >= heroTop && scrollPosition <= heroBottom) {
          setCurrentStep('hero');
        }
      }
    };

    const pageWrapper = document.getElementById('page-wrapper');
    if (pageWrapper) {
      pageWrapper.addEventListener('scroll', handleScroll);
      return () => pageWrapper.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Show privacy policy page
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
  }

  // Show terms of service page
  if (currentPage === 'terms') {
    return <TermsOfService onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="relative w-screen bg-gray-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <BackgroundCanvas />
      
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        <div 
          id="page-wrapper" 
          className="snap-y snap-mandatory overflow-y-scroll h-screen w-full overflow-x-hidden scrollbar-hide"
        >
          <div data-section="hero">
            <div className="relative">
              <Navigation onContactClick={() => setIsContactOpen(true)} />
              <HeroSection onContactClick={() => setIsContactOpen(true)} />
            </div>
          </div>
          <CenterSection />
          <div data-step="intro">
            <ProcessIntroSection />
          </div>
          <ProcessSteps />
          <StatsSection />
          <PartnershipSection onContactClick={() => setIsContactOpen(true)} />
          <FooterSection 
            onContactClick={() => setIsContactOpen(true)}
            onPrivacyClick={() => setCurrentPage('privacy')}
            onTermsClick={() => setCurrentPage('terms')}
          />
        </div>

        <ContactDrawer 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </div>
  );
}

export default App;