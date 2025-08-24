

import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import DoctorCard from '../components/DoctorCard';
import { DOCTORS_DATA } from '../data/doctors';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';

const DoctorsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-brand-teal to-brand-blue py-12 sm:py-16 overflow-hidden">
      <MetaTags page="doctors" />
      <PageContainer>
        <AnimatedItem>
            <SectionTitle 
            theme="dark"
            title={t('doctorsPage.title')}
            subtitle={t('doctorsPage.subtitle')} 
            />
        </AnimatedItem>
        {DOCTORS_DATA.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS_DATA.map((doctor, index) => (
              <AnimatedItem key={doctor.id} staggerIndex={index}>
                <DoctorCard doctor={doctor} />
              </AnimatedItem>
            ))}
          </div>
        ) : (
          <p className="text-center text-sky-200">{t('doctorsPage.noDoctors')}</p>
        )}
        <AnimatedItem className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('doctorsPage.meetOurDoctors')}</h3>
            <p className="text-sky-200 mb-6 max-w-3xl mx-auto">
                {t('doctorsPage.doctorsPageCtaText')}
            </p>
            <ReactRouterDom.Link 
                to="/iletisim" 
                className="inline-block bg-white/80 text-brand-blue px-8 py-3 rounded-full hover:bg-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-medium text-lg"
            >
                {t('buttons.contactUs')}
            </ReactRouterDom.Link>
        </AnimatedItem>
      </PageContainer>
    </div>
  );
};

export default DoctorsPage;
