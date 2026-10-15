import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ValuePropositionBar from './components/ValuePropositionBar';
import StakeholdersSection from './components/StakeholdersSection';
import DimensionsGrid from './components/DimensionsGrid';
import HandoverBanner from './components/HandoverBanner';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import PlatformPage from './pages/PlatformPage';
import WhoWeServePage from './pages/WhoWeServePage';
import ContactPage from './pages/ContactPage';
import DemoModal from './components/DemoModal';
import SignInModal from './components/SignInModal';
import StakeholderDetailModal from './components/StakeholderDetailModal';
import SplashScreen from './components/SplashScreen';
import WhatsAppButton from './components/WhatsAppButton';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      const route = (['platform', 'whoweserve', 'about', 'contact'].includes(path) ? path : hash);
      if (['platform', 'whoweserve', 'about', 'contact'].includes(route)) {
        setCurrentPage(route);
      } else if (route === '' || route === 'home') {
        setCurrentPage('home');
      }
    };
    checkRoute();
    window.addEventListener('hashchange', checkRoute);
    window.addEventListener('popstate', checkRoute);
    return () => {
      window.removeEventListener('hashchange', checkRoute);
      window.removeEventListener('popstate', checkRoute);
    };
  }, []);

  // Scroll Reveal Observer: Triggers silky-smooth animations as user scrolls
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08
    });

    const scanAndObserve = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll:not(.is-visible), .reveal-from-left:not(.is-visible), .reveal-from-right:not(.is-visible), .reveal-zoom-in:not(.is-visible)'
      );
      elements.forEach((el) => observer.observe(el));
    };

    // Initial scan and staggered check
    scanAndObserve();
    const timer = setTimeout(scanAndObserve, 150);

    // Watch for DOM changes when pages switch
    const mutationObserver = new MutationObserver(scanAndObserve);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [currentPage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#F15A24] selection:text-white">
      {/* Animated Logo Splash Screen on Initial Load */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onBookDemo={() => setDemoModalOpen(true)}
        onSignIn={() => setSignInModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'contact' && (
          <ContactPage onBookDemo={() => setDemoModalOpen(true)} />
        )}

        {currentPage === 'whoweserve' && (
          <WhoWeServePage onBookDemo={() => setDemoModalOpen(true)} />
        )}

        {currentPage === 'platform' && (
          <PlatformPage onBookDemo={() => setDemoModalOpen(true)} />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBookDemo={() => setDemoModalOpen(true)}
            onNavigateHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'home' && (
          <>
            {/* Hero Section with 3-Image Animated Slider */}
            <HeroSlider onBookDemo={() => setDemoModalOpen(true)} />

            {/* 3-Column Value Proposition Highlights Bar */}
            <ValuePropositionBar />

            {/* Clarity for Every Stakeholder Section */}
            <StakeholdersSection
              onSelectStakeholder={(item) => setSelectedStakeholder(item)}
            />

            {/* Every Dimension of Your Project (6 Modular Capabilities) */}
            <DimensionsGrid
              onSelectFeature={(item) => {
                setSelectedStakeholder({
                  title: item.title,
                  description: item.description,
                  badge: 'Dimension Feature',
                  image: '/images/hero-slide-2.jpg'
                });
              }}
            />

            {/* From Planning to Handover Full-width Banner */}
            <HandoverBanner onBookDemo={() => setDemoModalOpen(true)} />

            {/* Dark Navy CTA Banner */}
            <CtaBanner onBookDemo={() => setDemoModalOpen(true)} />
          </>
        )}
      </main>

      {/* Official Footer */}
      <Footer
        onNavigateHome={() => {
          setCurrentPage('home');
          window.location.hash = '';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateAbout={() => {
          setCurrentPage('about');
          window.location.hash = 'about';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenContact={() => {
          setCurrentPage('contact');
          window.location.hash = 'contact';
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPolicy={(policy) => {
          alert(`${policy} - For full documentation, please visit our compliance portal or reach out to legal@msquaresoftware.com`);
        }}
      />

      {/* Floating Back to Top Button (Stacked above WhatsApp) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-22 sm:bottom-24 right-6 z-40 p-2.5 sm:p-3 rounded-full bg-[#F15A24] text-white shadow-lg hover:bg-[#d94916] transition-all transform hover:scale-110 focus:outline-none"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Integration Button (Right side, +91 9876543210) */}
      <WhatsAppButton phoneNumber="9876543210" />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />

      <StakeholderDetailModal
        item={selectedStakeholder}
        onClose={() => setSelectedStakeholder(null)}
        onBookDemo={() => {
          setSelectedStakeholder(null);
          setDemoModalOpen(true);
        }}
      />
    </div>
  );
}
