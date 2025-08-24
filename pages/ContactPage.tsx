import React, { useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations'; 
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';

const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const location = ReactRouterDom.useLocation();
  const currentTranslations = translations[language];

  const rawEmergencyText = currentTranslations.contactPage.emergencyContact;
  const phoneLink = <a href="tel:+905366549868" className="text-brand-teal hover:underline">0536 654 98 68</a>;
  const emergencyTextParts = rawEmergencyText.split('{phoneNumber}');

  useEffect(() => {
    const state = location.state as { scrollToId?: string } | null;
    if (state?.scrollToId) {
      const element = document.getElementById(state.scrollToId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    } else if (location.hash === '#randevu') {
        const element = document.getElementById('randevu');
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 0);
        }
    }
    // General scroll-to-top is handled by the global ScrollToTop component.
  }, [location.state, location.hash]);


  return (
    <>
      <MetaTags page="contact" />
      <div className="py-12 sm:py-16 bg-gradient-to-br from-brand-cyan-light to-brand-blue-pastel overflow-hidden">
        <PageContainer>
          <AnimatedItem>
            <SectionTitle title={t('contactPage.title')} subtitle={t('contactPage.subtitle')} />
          </AnimatedItem>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="space-y-8">
              <AnimatedItem>
                <div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-3">{t('contactPage.clinicInfo')}</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-start">
                      <MapPinIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                      <span>{t('footer.addressLine1')}<br/>{t('footer.addressLine2')}</span>
                    </p>
                    <p className="flex items-center">
                      <PhoneIcon className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0" aria-hidden="true" />
                      <a href="tel:+905366549868" className="hover:text-brand-teal">0536 654 98 68</a>
                    </p>
                     <p className="flex items-center">
                      <EnvelopeIcon className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0" aria-hidden="true" />
                      <a href="mailto:mesambesyol@gmail.com" className="hover:text-brand-teal">mesambesyol@gmail.com</a>
                    </p>
                  </div>
                </div>
              </AnimatedItem>

              <AnimatedItem staggerIndex={1}>
                <div>
                  <h3 className="text-xl font-semibold text-brand-blue mb-3">{t('contactPage.workingHours')}</h3>
                  <ul className="list-disc list-inside text-gray-700 ml-4">
                    {currentTranslations.contactPage.workingHoursList.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                   <p className="text-sm text-gray-600 mt-2 ml-4">
                     {emergencyTextParts[0]}
                     {phoneLink}
                     {emergencyTextParts[1]}
                   </p>
                </div>
              </AnimatedItem>
              
              <AnimatedItem staggerIndex={2}>
                  <div>
                      <h3 className="text-xl font-semibold text-brand-blue mb-3">{t('contactPage.locationTitle')}</h3>
                      <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                          <iframe 
                              src="https://www.google.com/maps/embed?pb=!1m18!m12!1m3!1d546.1699386637769!2d29.054477359112052!3d40.207543828359405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3fcffcac5857%3A0x37386066313c36ca!2sMesam%20Di%C5%9F%20Klinikleri%20Besyol%20Subesi!5e0!3m2!1str!2str!4v1749381420673!5m2!1str!2str" 
                              className="w-full h-full"
                              style={{border:0}} 
                              allowFullScreen={true} 
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={t('contactPage.mapTitle')}>
                          </iframe>
                      </div>
                  </div>
              </AnimatedItem>
            </div>

            <AnimatedItem id="randevu" className="scroll-mt-24 sm:scroll-mt-28 md:scroll-mt-32" staggerIndex={1}>
              <h3 className="text-xl font-semibold text-brand-blue mb-4">{t('contactPage.writeToUs')}</h3>
              <ContactForm />
            </AnimatedItem>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default ContactPage;