
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { ClockIcon, InstagramIcon, YouTubeIcon, FacebookIcon, XIcon, LinkedInIcon, MapPinIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const mainLinks = [
    { nameKey: 'navbar.home', path: '/' },
    { nameKey: 'navbar.about', path: '/hakkimizda' },
    { nameKey: 'navbar.services', path: '/hizmetlerimiz' },
    { nameKey: 'navbar.doctors', path: '/hekimlerimiz' },
    { nameKey: 'navbar.blog', path: '/blog' },
    { nameKey: 'navbar.contact', path: '/iletisim' },
    { nameKey: 'navbar.kvkk', path: '/kurumsal/kvkk' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold text-white">{t('appName')}</h3>
            <p className="mt-2 text-sm text-gray-400">
              {t('footer.tagline')}
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start text-sm">
                <MapPinIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-sky-400" />
                <span>
                  {t('footer.addressLine1')}<br/>
                  {t('footer.addressLine2')}
                </span>
              </li>
              <li className="flex items-start text-sm">
                <ClockIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-sky-400" />
                <span className="font-semibold text-sky-300">{t('footer.availability')}</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">{t('footer.quickLinks')}</h3>
            <ul className="mt-2 space-y-2">
              {mainLinks.map((link) => (
                <li key={link.path}>
                  <ReactRouterDom.Link to={link.path} className="text-sm hover:text-white transition-colors">
                    {t(link.nameKey as any)}
                  </ReactRouterDom.Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>{t('footer.phone')}: <a href="tel:+905366549868" className="hover:text-white transition-colors">0536 654 98 68</a></li>
              <li>{t('footer.email')}: <a href="mailto:mesambesyol@gmail.com" className="hover:text-white transition-colors">mesambesyol@gmail.com</a></li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white">{t('footer.socialMedia.title')}</h3>
              <div className="mt-4 flex space-x-5">
                <a href="https://www.instagram.com/besyolmesam/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.instagram')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com/besyolmesam/" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.youtube')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <YouTubeIcon className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/besyolmesam" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.facebook')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="https://x.com/besyolmesam" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.x')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <XIcon className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/besyolmesam" target="_blank" rel="noopener noreferrer" aria-label={t('footer.socialMedia.linkedin')} className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110">
                  <LinkedInIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;