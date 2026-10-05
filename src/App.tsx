import React, { useState, useEffect } from 'react';
import { PageId, ServiceItem, ClaimSubmission } from './types';
import { SERVICES } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SubmitClaimModal } from './components/SubmitClaimModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { PortalPage } from './pages/PortalPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  // Sync with browser URL hash for true multi-page URL navigation and back/forward history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentPage('home');
        return;
      }
      
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'service-supplements',
        'service-estimates',
        'service-reinspections',
        'service-analytics',
        'service-training',
        'projects',
        'reviews',
        'faq',
        'calculator',
        'portal',
        'contact'
      ];

      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClaimSubmitted = (submission: ClaimSubmission) => {
    setActiveToast(`Claim tracking ID ${submission.id} successfully created.`);
    setTimeout(() => setActiveToast(null), 5000);
  };

  // Find active service item if on a service detail page
  const getActiveService = (pageId: PageId): ServiceItem | undefined => {
    return SERVICES.find(s => s.pageId === pageId);
  };

  const renderActivePage = () => {
    // Check if this is an individual service page
    if (currentPage.startsWith('service-')) {
      const service = getActiveService(currentPage);
      if (service) {
        return (
          <ServiceDetailPage
            service={service}
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      }
    }

    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'reviews':
        return (
          <ReviewsPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'faq':
        return (
          <FAQPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'calculator':
        return (
          <CalculatorPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'portal':
        return (
          <PortalPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#001433] text-slate-100 flex flex-col font-sans selection:bg-[#69BD27] selection:text-[#001433]">
      
      {/* Global Notification Toast */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#69BD27] text-[#001433] font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs animate-bounce border border-[#5BA822]">
          <span>✓ {activeToast}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Main Multi-Page Content Outlet */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
      />

      {/* Interactive Claim Intake Modal */}
      <SubmitClaimModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitted={handleClaimSubmitted}
      />

    </div>
  );
}
