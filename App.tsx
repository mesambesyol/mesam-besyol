

import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorDetailPage from './pages/DoctorDetailPage';
import AppointmentPage from './pages/AppointmentPage'; 
import QuizPage from './pages/QuizPage';
import { useLanguage } from './contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppIcon } from './constants/icons';
import KVKKPage from './pages/KVKKPage';
import FormSuccessPage from './pages/FormSuccessPage';

const App: React.FC = () => {
  const { isFading, t } = useLanguage();
  const whatsappLink = `https://wa.me/905366549868`;

  return (
    <ReactRouterDom.HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-stone-100 text-gray-800">
        <TopBar />
        <Navbar />
        <main className={`flex-grow content-fade ${isFading ? 'content-fading-out' : ''}`}>
          <ReactRouterDom.Routes>
            <ReactRouterDom.Route path="/" element={<HomePage />} />
            <ReactRouterDom.Route path="/hakkimizda" element={<AboutPage />} />
            <ReactRouterDom.Route path="/kurumsal/kvkk" element={<KVKKPage />} />
            <ReactRouterDom.Route path="/hizmetlerimiz" element={<ServicesPage />} />
            <ReactRouterDom.Route path="/hizmetlerimiz/:slug" element={<ServiceDetailPage />} />
            <ReactRouterDom.Route path="/hekimlerimiz" element={<DoctorsPage />} />
            <ReactRouterDom.Route path="/hekimlerimiz/:slug" element={<DoctorDetailPage />} />
            <ReactRouterDom.Route path="/blog" element={<BlogPage />} />
            <ReactRouterDom.Route path="/blog/:slug" element={<BlogPostPage />} />
            <ReactRouterDom.Route path="/test" element={<QuizPage />} />
            <ReactRouterDom.Route path="/iletisim" element={<ContactPage />} />
            <ReactRouterDom.Route path="/randevu" element={<AppointmentPage />} /> 
            <ReactRouterDom.Route path="/form-basarili" element={<FormSuccessPage />} />
          </ReactRouterDom.Routes>
        </main>
        <Footer />
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-fab cta-pulse"
          aria-label={t('header.whatsappLine')}
        >
          <WhatsAppIcon className="w-8 h-8"/>
        </a>
      </div>
    </ReactRouterDom.HashRouter>
  );
};

export default App;