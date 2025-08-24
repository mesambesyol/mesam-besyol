
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { Doctor } from '../types';
import { AcademicCapIcon, UserCircleIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const { getLocalized, t } = useLanguage();
  const hasRealImage = doctor.imageUrl;
  
  const title = getLocalized(doctor.title);
  const bio = getLocalized(doctor.bio);
  
  const textShadowStyle = { textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' };

  return (
    <ReactRouterDom.Link 
      to={`/hekimlerimiz/${doctor.id}`} 
      className="block group"
      aria-label={`${t('buttons.viewProfile')} ${doctor.name}`}
    >
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl aspect-[3/4]">
        {/* Background Image */}
        <div className="absolute inset-0">
          {hasRealImage ? (
            <img
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={doctor.imageUrl}
              alt={doctor.name}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <UserCircleIcon className="w-24 h-24 text-gray-400" /> 
            </div>
          )}
        </div>

        {/* Gradient Overlay - Dark for text visibility */}
        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none"></div>

        {/* Content Layer */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-1" style={textShadowStyle}>
              {doctor.name}
            </h3>
            <div className="flex items-center justify-center text-sm text-sky-300 mb-3" style={textShadowStyle}>
              <AcademicCapIcon className="w-5 h-5 mr-1.5" />
              <span>{title}</span>
            </div>
            <p className="text-gray-200 text-sm mb-4" style={textShadowStyle}>
              {bio}
            </p>
            <div>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-brand-blue transition-colors duration-300 text-sm font-medium w-full">
                {t('buttons.viewProfile')}
              </span>
            </div>
        </div>
      </div>
    </ReactRouterDom.Link>
  );
};

export default DoctorCard;