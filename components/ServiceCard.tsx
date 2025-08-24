
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { Service } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  service: Service;
  isFeatured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isFeatured = false }) => {
  const { getLocalized, t } = useLanguage();
  const name = getLocalized(service.name);
  const description = getLocalized(service.description);

  return (
    <ReactRouterDom.Link
      to={`/hizmetlerimiz/${service.id}`}
      className="block group h-full"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1.5">
        {isFeatured ? (
          <div className="flex-shrink-0 h-48 w-full flex items-center justify-center bg-brand-blue-light p-4 overflow-hidden">
            {React.cloneElement(service.icon, { className: "w-16 h-16 text-brand-teal mb-4 transition-transform duration-300 group-hover:scale-110" })}
          </div>
        ) : (
          <div className="h-48 overflow-hidden">
            <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={service.imageUrl} alt={name} loading="lazy" />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-brand-blue mb-2 group-hover:text-brand-teal transition-colors">{name}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">
            {description}
          </p>
          <div className="mt-auto">
             <span className="inline-block text-center bg-brand-blue-light/80 backdrop-blur-sm text-brand-blue px-4 py-2 rounded-full group-hover:bg-brand-teal/90 group-hover:text-white transition-colors text-sm font-medium w-full">
              {isFeatured ? t('buttons.moreInfo') : t('buttons.viewDetails')}
            </span>
          </div>
        </div>
      </div>
    </ReactRouterDom.Link>
  );
};

export default ServiceCard;