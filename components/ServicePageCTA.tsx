

import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { WhatsAppIcon } from '../constants/icons';

const ServicePageCTA: React.FC = () => {
    const { t } = useLanguage();
    const whatsappLink = `https://wa.me/905366549868`;

    return (
        <div className="bg-brand-blue rounded-lg shadow-xl">
            <div className="max-w-4xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">{t('serviceDetailPage.ctaTitle')}</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-sky-200">
                    {t('serviceDetailPage.ctaSubtitle')}
                </p>
                <div className="mt-8 flex justify-center flex-wrap gap-4">
                    <div className="inline-flex rounded-full shadow">
                        <ReactRouterDom.Link
                            to="/randevu"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-brand-blue bg-white/80 hover:bg-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            {t('buttons.appointment')}
                        </ReactRouterDom.Link>
                    </div>
                    <div className="inline-flex rounded-full">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-teal/80 hover:bg-brand-teal backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <WhatsAppIcon className="w-5 h-5" />
                            {t('header.whatsappLine')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePageCTA;
