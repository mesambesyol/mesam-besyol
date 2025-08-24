import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import * as ReactRouterDom from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <MetaTags page="about" />
      <div className="bg-white py-12 sm:py-16 overflow-hidden">
        <PageContainer>
          <AnimatedItem>
            <SectionTitle title={t('aboutPage.title')} subtitle={t('aboutPage.subtitle')} />
          </AnimatedItem>
          
          <AnimatedItem className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://i.imgur.com/xRL2dyu.jpg" 
                alt={t('aboutPage.clinicImageAlt1')}
                className="rounded-lg shadow-xl object-cover w-full h-auto aspect-[4/3]"
                loading="lazy"
              />
            </div>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-2xl font-semibold text-brand-blue">{t('aboutPage.mission')}</h3>
              <p className="text-justify">
                {t('aboutPage.missionText')}
              </p>
              <h3 className="text-2xl font-semibold text-brand-blue mt-6">{t('aboutPage.vision')}</h3>
              <p className="text-justify">
                {t('aboutPage.visionText')}
              </p>
            </div>
          </AnimatedItem>

          <AnimatedItem className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-2xl font-semibold text-brand-blue mb-3">{t('aboutPage.values')}</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('aboutPage.valuePatientOriented')}</li>
                <li>{t('aboutPage.valueExpertise')}</li>
                <li>{t('aboutPage.valueTechnology')}</li>
                <li>{t('aboutPage.valueHygiene')}</li>
                <li>{t('aboutPage.valueEthical')}</li>
                <li>{t('aboutPage.valueContinuousImprovement')}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-brand-blue mb-3">{t('aboutPage.ourPhilosophy')}</h3>
              <p className="mb-4 text-justify">
                {t('aboutPage.ourPhilosophyIntro')}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-brand-blue-light p-6 rounded-lg">
                      <h4 className="font-semibold text-brand-blue mb-2">{t('aboutPage.philosophyPersonalized')}</h4>
                      <p className="text-sm">{t('aboutPage.philosophyPersonalizedText')}</p>
                  </div>
                   <div className="bg-brand-blue-light p-6 rounded-lg">
                      <h4 className="font-semibold text-brand-blue mb-2">{t('aboutPage.philosophyModernTech')}</h4>
                      <p className="text-sm">{t('aboutPage.philosophyModernTechText')}</p>
                  </div>
                   <div className="bg-brand-blue-light p-6 rounded-lg">
                      <h4 className="font-semibold text-brand-blue mb-2">{t('aboutPage.philosophyExpertStaff')}</h4>
                      <p className="text-sm">{t('aboutPage.philosophyExpertStaffText')} <ReactRouterDom.Link to="/hekimlerimiz" className="text-brand-teal hover:underline">{t('aboutPage.meetOurTeamLink')}</ReactRouterDom.Link></p>
                  </div>
                   <div className="bg-brand-blue-light p-6 rounded-lg">
                      <h4 className="font-semibold text-brand-blue mb-2">{t('aboutPage.philosophyComfortableEnv')}</h4>
                      <p className="text-sm">{t('aboutPage.philosophyComfortableEnvText')}</p>
                  </div>
              </div>
            </div>
          </AnimatedItem>

           <AnimatedItem className="mt-16 text-center">
              <img 
                src="https://i.hizliresim.com/pb1xll5.jpg" 
                alt={t('aboutPage.teamImageAlt2')}
                className="rounded-lg shadow-xl mx-auto"
                loading="lazy"
              />
              <p className="mt-4 text-gray-600 italic">{t('aboutPage.teamImageCaption')}</p>
          </AnimatedItem>

        </PageContainer>
      </div>
    </>
  );
};

export default AboutPage;