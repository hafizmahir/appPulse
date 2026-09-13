import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { InstalledProvider } from './context/InstalledContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingSpinner } from './components/LoadingSpinner';

import { Home } from './pages/Home';
import { AllApps } from './pages/AllApps';
import { AppDetails } from './pages/AppDetails';
import { MyInstallation } from './pages/MyInstallation';
import { NotFound } from './pages/NotFound';

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
          <LoadingSpinner label="Navigating page..." />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default function App() {
  return (
    <InstalledProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" reverseOrder={false} />
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
          <Header />
          <main className="flex-grow">
            <PageTransitionWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apps" element={<AllApps />} />
                <Route path="/apps/:id" element={<AppDetails />} />
                <Route path="/installation" element={<MyInstallation />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransitionWrapper>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </InstalledProvider>
  );
}
