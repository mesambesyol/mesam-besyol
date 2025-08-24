

import React, { useMemo, useState } from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../data/services';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';

const ServicesPage: React.FC = () => {
  const { t, getLocalized } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const uniqueCategories = new Map<string, string>();
    SERVICES_DATA.forEach(service => {
        const categoryTr = service.category.tr;
        if (!uniqueCategories.has(categoryTr)) {
            uniqueCategories.set(categoryTr, getLocalized(service.category));
        }
    });
    return Array.from(uniqueCategories.entries());
  }, [getLocalized]);
  
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') {
      return SERVICES_DATA;
    }
    return SERVICES_DATA.filter(service => service.category.tr === selectedCategory);
  }, [selectedCategory]);

  const servicesGroupedByCategory = useMemo(() => {
    return categories.map(([categoryTr, localizedCategory]) => ({
        categoryName: localizedCategory,
        services: SERVICES_DATA.filter(s => s.category.tr === categoryTr),
    }));
  }, [categories]);

  const getTabClasses = (categoryKey: string) => {
    const baseClasses = "px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-blue focus:ring-white";
    if (selectedCategory === categoryKey) {
      return `${baseClasses} bg-white/80 backdrop-blur-md text-brand-blue shadow-md`;
    }
    return `${baseClasses} bg-white/20 backdrop-blur-md text-white hover:bg-white/30`;
  };

  return (
    <div className="bg-gradient-to-br from-brand-teal to-brand-blue py-12 sm:py-16 overflow-hidden">
      <MetaTags page="services" />
      <PageContainer>
        <AnimatedItem>
            <SectionTitle theme="dark" title={t('servicesPage.title')} subtitle={t('servicesPage.subtitle')} />
        </AnimatedItem>

        <AnimatedItem>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
                <button onClick={() => setSelectedCategory('all')} className={getTabClasses('all')}>
                    Tümü
                </button>
                {categories.map(([categoryTr, localizedCategory]) => (
                    <button key={categoryTr} onClick={() => setSelectedCategory(categoryTr)} className={getTabClasses(categoryTr)}>
                        {localizedCategory}
                    </button>
                ))}
            </div>
        </AnimatedItem>
        
        {selectedCategory === 'all' ? (
             <div className="space-y-16">
                {servicesGroupedByCategory.map(({ categoryName, services }) => (
                     <AnimatedItem key={categoryName}>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 border-b-2 border-white/20 pb-4">{categoryName}</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <AnimatedItem key={service.id} className="h-full" staggerIndex={index}>
                                    <ServiceCard service={service} />
                                </AnimatedItem>
                            ))}
                        </div>
                    </AnimatedItem>
                ))}
             </div>
        ) : (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                    <AnimatedItem key={service.id} className="h-full" staggerIndex={index}>
                        <ServiceCard service={service} />
                    </AnimatedItem>
                ))}
            </div>
        )}
      </PageContainer>
    </div>
  );
};

export default ServicesPage;