
import React, { useState, useEffect, useRef } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { MenuIcon, XMarkIcon, ChevronDownIcon, TurkeyFlagIcon, UKFlagIcon, GermanyFlagIcon, WhatsAppIcon } from '../constants/icons';
import { NAV_LINKS } from '../constants/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import { Language, NavLinkItem } from '../types';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const location = ReactRouterDom.useLocation();
  const { language, setLanguage, t, getLocalized } = useLanguage();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';
  const whatsappLink = `https://wa.me/905366549868`;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHomePage ? 50 : 10;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangDropdownOpen(false);
    setActiveDropdown(null);
    setMobileActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isTransparent = !isScrolled && isHomePage;

  const headerClasses = `sticky top-0 z-50 transition-all duration-300 ${
    isTransparent 
      ? 'bg-transparent text-gray-800' 
      : 'bg-white text-gray-800 shadow-lg'
  }`;
  
  const logoClasses = `w-auto transition-all duration-300 h-24 md:${
    isScrolled || !isHomePage ? 'h-24' : 'h-28'
  }`;

  const headerHeightClasses = `h-28 md:transition-all md:duration-300 ${
    isScrolled || !isHomePage ? 'md:h-28' : 'md:h-32'
  }`;

  const getLinkClasses = (path?: string) => {
    const isActive = location.pathname === path;
    
    const baseClasses = `px-3 py-2 rounded-md text-[12px] font-semibold transition-colors`;
    const themeClasses = isTransparent
      ? 'text-gray-800 hover:text-brand-blue [text-shadow:0_1px_2px_rgba(255,255,255,0.9)]'
      : 'text-gray-600 hover:text-brand-blue';
    const activeClasses = isActive
      ? (isTransparent ? 'bg-black/10' : 'text-brand-blue')
      : '';

    return `${baseClasses} ${themeClasses} ${activeClasses}`;
  };
  
  const mobileMenuIconClasses = `p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
    isTransparent
      ? 'text-gray-800 hover:bg-black/10 focus:ring-brand-blue [filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.9))]'
      : 'text-gray-800 hover:bg-gray-100 focus:ring-brand-blue'
  }`;

  const languages = [
    { code: 'tr' as Language, nameKey: 'navbar.languages.tr', Icon: TurkeyFlagIcon },
    { code: 'en' as Language, nameKey: 'navbar.languages.en', Icon: UKFlagIcon },
    { code: 'de' as Language, nameKey: 'navbar.languages.de', Icon: GermanyFlagIcon },
  ];
  
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];

  const LanguageSelector = ({ isMobile = false }) => {
    const buttonBaseClasses = 'flex items-center gap-2 px-3 py-2 rounded-md transition-colors duration-200 text-[12px] font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue';
    const buttonThemeClasses = isTransparent && !isMobile
      ? 'bg-black/5 text-gray-800 hover:bg-black/10 [text-shadow:0_1px_1px_rgba(255,255,255,0.9)]'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    
    const dropdownClasses = `absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 origin-top-right transition-all duration-200 ease-out ${isLangDropdownOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95 pointer-events-none'}`;
  
    return (
      <div className={`relative ${isMobile ? 'flex justify-center mt-4' : 'ml-4'}`} ref={langDropdownRef}>
        <div>
          <button
            type="button"
            className={`${buttonBaseClasses} ${buttonThemeClasses}`}
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            aria-haspopup="true"
            aria-expanded={isLangDropdownOpen}
            aria-label={t('navbar.selectLanguage')}
          >
            <selectedLanguage.Icon className="w-5 h-auto rounded-sm" />
            <span className="font-bold">{selectedLanguage.code.toUpperCase()}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <div className={dropdownClasses} role="menu" aria-orientation="vertical">
          <div className="py-1" role="none">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsLangDropdownOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 text-[12px] text-left ${language === lang.code ? 'font-bold text-brand-blue bg-brand-blue-light' : 'text-gray-700 hover:bg-gray-100'}`}
                role="menuitem"
              >
                <lang.Icon className="w-5 h-auto rounded-sm" />
                <span>{t(lang.nameKey as any)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <header className={headerClasses}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${headerHeightClasses}`}>
          <div className="flex-shrink-0">
            <ReactRouterDom.Link to="/" className="flex items-center" aria-label={t('appName') + ' ' + t('navbar.home')}>
              <img 
                className={logoClasses}
                src="https://i.hizliresim.com/kw923ek.png" 
                alt={`${t('appName')} Logo`}
              />
            </ReactRouterDom.Link>
          </div>

          <nav className="hidden md:flex space-x-2 items-center" ref={navRef}>
            {NAV_LINKS.map((link) => 
              link.children ? (
                <div 
                  key={getLocalized(link.name)} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(getLocalized(link.name))}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={`${getLinkClasses(link.path)} flex items-center gap-1`}>
                    {getLocalized(link.name)}
                    <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === getLocalized(link.name) ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`
                      absolute top-full left-1/2 -translate-x-1/2 pt-3 
                      transition-all duration-300 ease-in-out
                      ${activeDropdown === getLocalized(link.name) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
                    `}
                  >
                    <div className="w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10 max-h-96 overflow-y-auto">
                      <div className="py-1">
                        {link.children.map(child => (
                           <ReactRouterDom.Link
                            key={child.path}
                            to={child.path!}
                            className="block px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-brand-blue transition-colors"
                          >
                            {getLocalized(child.name)}
                          </ReactRouterDom.Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <ReactRouterDom.Link
                  key={link.path}
                  to={link.path!}
                  className={`${getLinkClasses(link.path)} nav-link-desktop`}
                >
                  {getLocalized(link.name)}
                </ReactRouterDom.Link>
              )
            )}
             <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center justify-center gap-2 px-4 py-2 border border-transparent rounded-full shadow-sm text-[12px] font-medium text-white bg-green-500/80 hover:bg-green-600 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cta-pulse"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {t('header.whatsappLine')}
            </a>
            <ReactRouterDom.Link
              to="/randevu" 
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-[12px] font-medium text-white bg-brand-teal/80 hover:bg-brand-teal backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t('buttons.appointment')}
            </ReactRouterDom.Link>
            <LanguageSelector />
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={mobileMenuIconClasses}
              aria-label={t('navbar.openMenu')}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40" id="mobile-menu">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" role="navigation" aria-label="Mobil ana navigasyon">
             {NAV_LINKS.map(item => {
               const itemName = getLocalized(item.name);
               if (item.children) {
                 const isDropdownOpen = mobileActiveDropdown === itemName;
                 return (
                   <div key={itemName}>
                     <button
                       onClick={() => setMobileActiveDropdown(isDropdownOpen ? null : itemName)}
                       className="w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                     >
                       <span>{itemName}</span>
                       <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                     </button>
                     <div className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out ${isDropdownOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                       <div className="pt-1 pb-2 space-y-1">
                          {item.children.map(child => (
                            <ReactRouterDom.Link
                                key={child.path}
                                to={child.path!}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 hover:text-brand-blue transition-colors ${
                                    location.pathname === child.path ? 'bg-brand-blue-light text-brand-blue' : ''
                                }`}
                            >
                                {getLocalized(child.name)}
                            </ReactRouterDom.Link>
                          ))}
                       </div>
                     </div>
                   </div>
                 );
               } else {
                 return (
                   <ReactRouterDom.Link
                     key={item.path}
                     to={item.path!}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className={`text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                       location.pathname === item.path ? 'bg-brand-blue-light text-brand-blue' : ''
                     }`}
                   >
                     {itemName}
                   </ReactRouterDom.Link>
                 );
               }
             })}
             <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 w-full text-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-green-500/80 hover:bg-green-600 backdrop-blur-md transition-colors cta-pulse"
            >
               <WhatsAppIcon className="w-5 h-5" />
              {t('header.whatsappLine')}
            </a>
            <ReactRouterDom.Link
              to="/randevu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-1 block w-full text-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-teal/80 hover:bg-brand-teal backdrop-blur-md transition-colors"
            >
              {t('buttons.appointment')}
            </ReactRouterDom.Link>
            <LanguageSelector isMobile={true}/>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
