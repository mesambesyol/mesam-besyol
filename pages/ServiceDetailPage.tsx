
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { SERVICES_DATA } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import RelatedDoctors from '../components/RelatedDoctors';
import ServicePageCTA from '../components/ServicePageCTA';

const ServiceDetailPage: React.FC = () => {
  const { slug } = ReactRouterDom.useParams<{ slug: string }>();
  const { t, getLocalized } = useLanguage();
  
  const service = SERVICES_DATA.find(s => s.id === slug);

  if (!service) {
    return (
      <PageContainer className="py-16 text-center">
        <h1 className="text-3xl font-bold text-brand-blue mb-4">{t('serviceDetailPage.notFoundTitle')}</h1>
        <p className="text-gray-600 mb-6">{t('serviceDetailPage.notFoundText')}</p>
        <ReactRouterDom.Link 
          to="/hizmetlerimiz"
          className="inline-block bg-brand-teal text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-medium"
        >
          {t('serviceDetailPage.backToServices')}
        </ReactRouterDom.Link>
      </PageContainer>
    );
  }

  const name = getLocalized(service.name);
  const longDescription = getLocalized(service.longDescription);

  return (
    <>
      <MetaTags page="serviceDetail" data={service} />
      <div className="bg-stone-100 py-12 sm:py-16">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
              <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg">
                <article>
                    <div className="mb-8">
                        <ReactRouterDom.Link to="/hizmetlerimiz" className="text-sm font-semibold text-brand-teal hover:text-brand-blue transition-colors">
                        &larr; {t('serviceDetailPage.backToServices')}
                        </ReactRouterDom.Link>
                    </div>
                    <header className="mb-8 border-b border-gray-200 pb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-3">{name}</h1>
                    </header>

                    <img 
                        src={service.imageUrl} 
                        alt={name} 
                        className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md mb-8" 
                        loading="lazy"
                    />

                    <div 
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: longDescription }}
                    />
                </article>
              </div>
          </div>
        </PageContainer>
      </div>
      
      {service.relatedDoctorIds && service.relatedDoctorIds.length > 0 && (
        <RelatedDoctors doctorIds={service.relatedDoctorIds} />
      )}
      
      <div className="pb-12 sm:pb-16 bg-stone-100">
        <PageContainer>
            <div className="max-w-4xl mx-auto">
                <ServicePageCTA />
            </div>
        </PageContainer>
      </div>
    </>
  );
};

export default ServiceDetailPage;