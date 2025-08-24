import React from 'react';
import { MapPinIcon, InstagramIcon, YouTubeIcon, FacebookIcon, XIcon, LinkedInIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';

const TopBar: React.FC = () => {
    const { t } = useLanguage();
    const fullAddress = `${t('footer.addressLine1')} ${t('footer.addressLine2')}`;
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=Mesam+Diş+Klinikleri+Besyol+Subesi`;

    const socialLinks = [
      { href: "https://www.instagram.com/besyolmesam/", label: t('footer.socialMedia.instagram'), Icon: InstagramIcon },
      { href: "https://www.youtube.com/besyolmesam/", label: t('footer.socialMedia.youtube'), Icon: YouTubeIcon },
      { href: "https://www.facebook.com/besyolmesam", label: t('footer.socialMedia.facebook'), Icon: FacebookIcon },
      { href: "https://x.com/besyolmesam", label: t('footer.socialMedia.x'), Icon: XIcon },
      { href: "https://www.linkedin.com/company/besyolmesam", label: t('footer.socialMedia.linkedin'), Icon: LinkedInIcon },
    ];

    return (
        <div className="bg-gray-800 text-white text-[12px]">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between items-center gap-x-4 gap-y-2 py-2">
                {/* Address on the left */}
                <a
                    href={googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-sky-300 transition-colors"
                    aria-label={`${t('general.address')}: ${fullAddress}`}
                >
                    <MapPinIcon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                    <span className="hidden sm:inline">{fullAddress}</span>
                    <span className="sm:hidden">{t('general.address')}</span>
                </a>

                {/* Right side content */}
                <div className="flex items-center gap-x-4 sm:gap-x-6">
                    {/* Flashing "Open 24/7" text */}
                    <div className="font-bold pulse-white uppercase tracking-wider">
                        {t('header.open247')}
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map(({ href, label, Icon }) => (
                            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110">
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;