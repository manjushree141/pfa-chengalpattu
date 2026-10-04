import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AmbulanceBannerSection } from './components/AmbulanceBannerSection';
import { GodsGraceServicesSection } from './components/GodsGraceServicesSection';
import { GodsGraceEventsSection } from './components/GodsGraceEventsSection';
import { GodsGraceDonateSection } from './components/GodsGraceDonateSection';
import { FounderPage } from './components/FounderPage';
import { FullGallerySection } from './components/FullGallerySection';
import { LinkedInUpdatesPage } from './components/LinkedInUpdatesPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DonateModal } from './components/DonateModal';
import { VolunteerModal } from './components/VolunteerModal';

export function App() {
  const getInitialPage = (): 'home' | 'founder' | 'linkedin' | 'gallery' => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'founder', 'linkedin', 'gallery'].includes(hash)) {
      return hash as 'home' | 'founder' | 'linkedin' | 'gallery';
    }
    return 'home';
  };

  const [currentPage, setCurrentPageState] = useState<'home' | 'founder' | 'linkedin' | 'gallery'>(getInitialPage);
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [donateInitialAmount, setDonateInitialAmount] = useState<number>(1000);
  const [donateTitle, setDonateTitle] = useState<string>('');

  const setCurrentPage = (page: 'home' | 'founder' | 'linkedin' | 'gallery') => {
    setCurrentPageState(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  React.useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPageState(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenDonate = (amount: number = 1000, title: string = '') => {
    setDonateInitialAmount(amount);
    setDonateTitle(title);
    setIsDonateOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EE] text-[#5D6C7B]">
      {/* Top Header & Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenDonate={() => handleOpenDonate(1000, 'General Rescue Fund')}
        onOpenVolunteer={() => setIsVolunteerOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero with Asymmetrical Arch Cutout & Layered Abstract Shapes */}
            <Hero
              onOpenDonate={() => handleOpenDonate(1000, 'Animal Emergency Rescue')}
              onNavigateFounder={() => {
                setCurrentPage('founder');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 2. Deep Plum Ambulance Banner with Diamond Dividers */}
            <AmbulanceBannerSection />

            {/* 3. Services Grid on Pale Neutral Cards */}
            <GodsGraceServicesSection
              onNavigateGallery={() => {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 4. Recent Field Dispatches with Date Badges */}
            <GodsGraceEventsSection
              onNavigateLinkedIn={() => {
                setCurrentPage('linkedin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Support Our Mission Donation Section */}
            <GodsGraceDonateSection
              onOpenFullModal={(amt) => handleOpenDonate(amt, 'Mission Sponsorship')}
            />

            {/* 6. Contact & Headquarters */}
            <ContactSection />
          </>
        )}

        {currentPage === 'founder' && (
          <FounderPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDonate={() => handleOpenDonate(2500, 'Legal Advocacy & Shelter Fund')}
          />
        )}

        {currentPage === 'gallery' && (
          <FullGallerySection />
        )}

        {currentPage === 'linkedin' && (
          <LinkedInUpdatesPage />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={(page) => setCurrentPage(page as any)} />

      {/* Interactive Modals */}
      <DonateModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialAmount={donateInitialAmount}
        initialTitle={donateTitle}
      />

      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />
    </div>
  );
}

export default App;
