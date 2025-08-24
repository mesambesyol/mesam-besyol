

import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import BlogPostCard from '../components/BlogPostCard';
import DoctorCarousel from '../components/DoctorCarousel';
import { SERVICES_DATA } from '../data/services';
import { BLOG_POSTS_DATA } from '../data/blog';
import { DOCTORS_DATA } from '../data/doctors';
import { HERO_SLIDES_DATA } from '../data/hero';
import { useLanguage } from '../contexts/LanguageContext';
import NightPatientCounter from '../components/NightPatientCounter';
import AnimatedItem from '../components/AnimatedItem';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import FaqSection from '../components/FaqSection';
import SmileDesigner from '../components/SmileDesigner';
import MetaTags from '../components/MetaTags';
import InstagramFeed from '../components/InstagramFeed';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const location = ReactRouterDom.useLocation();
  const featuredServices = SERVICES_DATA.slice(0, 3);
  const latestPosts = BLOG_POSTS_DATA.slice(0, 3);
  const featuredDoctors = DOCTORS_DATA.slice(0, 6);

  React.useEffect(() => {
    const state = location.state as { scrollToId?: string } | null;
    if (state?.scrollToId) {
      const element = document.getElementById(state.scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <>
      <MetaTags page="home" />
      <HeroSlider slides={HERO_SLIDES_DATA} />

      <AnimatedItem as="section" className="py-16 bg-white overflow-hidden">
        <PageContainer>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://i.hizliresim.com/3uqus43.jpg" 
                alt={t('homePage.teamImageAlt')}
                className="rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div>
              <SectionTitle title={t('homePage.aboutOurClinicTitle')} className="text-left mb-6" />
              <p className="text-gray-600 mb-4">
                {t('homePage.aboutSummary1')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('homePage.aboutSummary2')}
              </p>
              <ReactRouterDom.Link
                to="/hakkimizda"
                className="inline-block bg-brand-blue/80 text-white px-6 py-3 rounded-full hover:bg-brand-blue backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-medium"
              >
                {t('buttons.moreInfo')}
              </ReactRouterDom.Link>
            </div>
          </div>
        </PageContainer>
      </AnimatedItem>
      
      <AnimatedItem>
        <SmileDesigner />
      </AnimatedItem>
      
      <AnimatedItem as="section" className="py-16 bg-stone-100 overflow-hidden">
        <PageContainer>
          <SectionTitle title={t('homePage.featuredDoctorsTitle')} />
          <DoctorCarousel doctors={featuredDoctors} />
          <div className="text-center mt-12">
            <ReactRouterDom.Link
              to="/hekimlerimiz"
              className="inline-block bg-brand-blue/80 text-white px-8 py-3 rounded-full hover:bg-brand-blue backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-medium text-lg"
            >
              {t('buttons.allDoctors')}
            </ReactRouterDom.Link>
          </div>
        </PageContainer>
      </AnimatedItem>

      <NightPatientCounter />

      <AnimatedItem as="section" className="py-16 bg-gradient-to-br from-brand-teal to-brand-blue overflow-hidden">
        <PageContainer>
          <SectionTitle theme="dark" title={t('homePage.treatmentAreasTitle')} subtitle={t('homePage.treatmentAreasSubtitle')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedItem key={service.id} staggerIndex={index}>
                <ServiceCard service={service} isFeatured={true} />
              </AnimatedItem>
            ))}
          </div>
          <div className="text-center mt-12">
            <ReactRouterDom.Link
              to="/hizmetlerimiz"
              className="inline-block bg-brand-blue/80 text-white px-8 py-3 rounded-full hover:bg-brand-blue backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-medium text-lg"
            >
              {t('buttons.allServices')}
            </ReactRouterDom.Link>
          </div>
        </PageContainer>
      </AnimatedItem>

      <AnimatedItem as="section" id="before-after" className="py-16 bg-white overflow-hidden">
        <PageContainer>
          <SectionTitle 
            title={t('homePage.beforeAfterTitle')} 
            subtitle={t('homePage.beforeAfterSubtitle')} 
          />
          <BeforeAfterGallery />
        </PageContainer>
      </AnimatedItem>

      <AnimatedItem as="section" className="py-12 bg-gradient-to-r from-brand-cyan-light to-brand-blue-pastel">
        <PageContainer>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-bold text-brand-blue tracking-tight">
              {t('slogan.line1' as any)}
              <br />
              {t('slogan.line2' as any)}
            </p>
          </div>
        </PageContainer>
      </AnimatedItem>

      <AnimatedItem as="section" className="py-16 bg-white overflow-hidden">
        <PageContainer>
          <SectionTitle title={t('homePage.latestPostsTitle')} subtitle={t('homePage.latestPostsSubtitle')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <AnimatedItem key={post.id} staggerIndex={index}>
                <BlogPostCard post={post} />
              </AnimatedItem>
            ))}
          </div>
           <div className="text-center mt-12">
            <ReactRouterDom.Link
              to="/blog"
              className="inline-block bg-brand-blue/80 text-white px-8 py-3 rounded-full hover:bg-brand-blue backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-medium text-lg"
            >
              {t('buttons.allPosts')}
            </ReactRouterDom.Link>
          </div>
        </PageContainer>
      </AnimatedItem>
      
      <AnimatedItem as="section" className="py-16 bg-stone-100 overflow-hidden">
        <PageContainer>
            <InstagramFeed />
        </PageContainer>
      </AnimatedItem>

      <AnimatedItem as="section" id="faq" className="py-16 bg-white overflow-hidden">
        <PageContainer>
          <SectionTitle title={t('homePage.faqTitle')} subtitle={t('homePage.faqSubtitle')} />
          <FaqSection />
        </PageContainer>
      </AnimatedItem>
    </>
  );
};

export default HomePage;
