// Noah Rank's Wealth Protection Guide - Main Application
import { useState, useEffect, useRef } from 'react';
import { masterPlanSections, llcGuideSections } from './data/contentData';
import { TableOfContents, MobileTableOfContents } from './components/TableOfContents';
import { DocumentSection } from './components/DocumentSection';
import { LogoGallery } from './components/LogoGallery';
import { CarShowcase } from './components/CarShowcase';
import { RandomLogoSpawn } from './components/RandomLogoSpawn';

// Header Component
const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-hlpfl-dark/95 backdrop-blur-sm border-b border-hlpfl-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-hlpfl-gold/20 rounded-lg flex items-center justify-center">
              <span className="text-hlpfl-gold font-bold text-lg">H</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">HLPFL</div>
              <div className="text-gray-500 text-xs">Wealth Protection</div>
            </div>
          </div>

          {/* Center Title - Hidden on mobile */}
          <div className="hidden md:block text-center">
            <div className="text-hlpfl-gold font-semibold">Master Wealth Protection Plan</div>
            <div className="text-gray-500 text-xs">Wyoming LLC Structure & Tax Optimization</div>
          </div>

          {/* Noah's Info */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-white text-sm font-medium">Noah Rank</div>
              <div className="text-gray-500 text-xs">Zaitsev Partner | PRIV Artist</div>
            </div>
            <div className="w-10 h-10 bg-hlpfl-gold rounded-full flex items-center justify-center">
              <span className="text-hlpfl-dark font-bold">NR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-hlpfl-gold text-hlpfl-dark rounded-full shadow-lg hover:bg-hlpfl-gold-light transition-all flex items-center justify-center"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

// Mobile TOC Toggle Button
const MobileTocToggle = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden fixed bottom-6 left-6 z-50 w-12 h-12 bg-hlpfl-dark-secondary border border-hlpfl-gold/30 text-hlpfl-gold rounded-full shadow-lg hover:bg-hlpfl-gold/10 transition-all flex items-center justify-center"
      aria-label="Open table of contents"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
      </svg>
    </button>
  );
};

// Main App
function App() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [showLogos, setShowLogos] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<number | undefined>();
  const mainRef = useRef<HTMLElement>(null);

  // Track active section on scroll
  useEffect(() => {
    const allSections = [...masterPlanSections, ...llcGuideSections];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -50% 0px', threshold: 0 }
    );

    allSections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLogoClick = () => {
    setShowLogos(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-hlpfl-dark text-gray-100">
      {/* Random Logo Spawn on Page Load */}
      <RandomLogoSpawn />

      <Header />

      <div className="max-w-7xl mx-auto flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0 px-4 py-8">
          <TableOfContents
            masterPlanSections={masterPlanSections}
            llcGuideSections={llcGuideSections}
            activeSection={activeSection}
            showLogos={true}
            onLogoClick={handleLogoClick}
          />
        </aside>

        {/* Main Content */}
        <main ref={mainRef} className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
          {/* Logo Gallery Section */}
          {showLogos && (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-hlpfl-gold">
                  🎨 NR Consulting Logo Options
                </h1>
                <button
                  onClick={() => setShowLogos(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-400 mb-8">
                Select a logo concept for NR Consulting. These designs blend trading aesthetics with professional consulting branding.
              </p>
              <LogoGallery
                selectedLogo={selectedLogo}
                onSelectLogo={setSelectedLogo}
              />
              {selectedLogo && (
                <div className="mt-8 p-4 bg-hlpfl-gold/10 border border-hlpfl-gold/30 rounded-lg">
                  <p className="text-hlpfl-gold font-medium">
                    Logo #{selectedLogo} selected! This choice has been noted.
                  </p>
                </div>
              )}
              <div className="my-12 border-t border-hlpfl-gold/20" />
            </div>
          )}

          {/* Document 1: Master Wealth Protection Plan */}
          <div className="mb-16">
            {/* Document Header */}
            <div className="text-center mb-12 pb-8 border-b border-hlpfl-gold/20">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                Prepared for
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                NOAH RANK
              </h1>
              <div className="text-lg text-hlpfl-gold mb-6">
                Ohio Day Trader | Zaitsev Holding Group Best Friend & Brother | PRIV Artist
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-hlpfl-gold-light mb-4">
                MASTER WEALTH PROTECTION PLAN
              </h2>
              <p className="text-gray-400">
                Wyoming LLC Structure & Tax Optimization Strategy
              </p>
              <div className="mt-8 text-sm text-gray-500">
                <p>Prepared by: <span className="text-white">Jim Rockel</span></p>
                <p>Founder & CEO, HLPFL | Managing Member, Zaitsev Holding Group LLC</p>
                <p className="text-hlpfl-gold">founder@hlpfl.org</p>
                <p className="mt-2">January 15, 2026</p>
              </div>
            </div>

            {/* Car Showcase - 2025 Lexus IS350 */}
            <CarShowcase onTopStepClick={() => console.log('TopStepX clicked')} />

            {/* Master Plan Sections */}
            {masterPlanSections.map((section) => (
              <DocumentSection key={section.id} section={section} variant="master" />
            ))}
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center gap-4">
            <div className="flex-1 border-t border-professional-blue-500/30" />
            <div className="text-professional-blue-400 font-semibold text-sm uppercase tracking-wider">
              Reference Guide
            </div>
            <div className="flex-1 border-t border-professional-blue-500/30" />
          </div>

          {/* Document 2: Wyoming LLC Guide */}
          <div>
            {/* Document Header */}
            <div className="text-center mb-12 pb-8 border-b border-professional-blue-500/20">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comprehensive Guide
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-professional-blue-400 mb-4">
                Wyoming LLC Structure for Day Trading Business
              </h2>
              <p className="text-gray-400">
                Tax Optimization & Asset Protection for High-Net-Worth Traders
              </p>
            </div>

            {/* LLC Guide Sections */}
            {llcGuideSections.map((section) => (
              <DocumentSection key={section.id} section={section} variant="guide" />
            ))}
          </div>

          {/* Footer Disclaimer */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="bg-hlpfl-dark-secondary rounded-lg p-6 text-sm text-gray-400">
              <p className="font-semibold text-white mb-2">Important Disclaimer</p>
              <p className="leading-relaxed">
                This document is for strategic planning purposes and does not constitute legal, tax, or financial advice.
                Consult with licensed professionals for advice specific to your situation. Every situation is unique and complex.
                Laws and regulations change frequently. Tax laws are complex and subject to interpretation.
              </p>
            </div>
            <div className="mt-8 text-center text-gray-500 text-sm">
              <p>© 2026 HLPFL Consulting Group LLC. All rights reserved.</p>
              <p className="mt-1">
                Built with partnership in mind. Your success = Our success.
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile TOC */}
      <MobileTableOfContents
        masterPlanSections={masterPlanSections}
        llcGuideSections={llcGuideSections}
        activeSection={activeSection}
        isOpen={isMobileTocOpen}
        onClose={() => setIsMobileTocOpen(false)}
        showLogos={true}
        onLogoClick={handleLogoClick}
      />

      {/* Mobile TOC Toggle */}
      <MobileTocToggle onClick={() => setIsMobileTocOpen(true)} />

      {/* Back to Top */}
      <BackToTop />
    </div>
  );
}

export default App;
