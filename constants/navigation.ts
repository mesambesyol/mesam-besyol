
import { NavLinkItem } from '../types';
import { SERVICES_DATA } from '../data/services';

const serviceLinks: NavLinkItem[] = SERVICES_DATA.map(service => ({
  name: service.name,
  path: `/hizmetlerimiz/${service.id}`
}));

export const NAV_LINKS: NavLinkItem[] = [
  { name: { tr: 'Anasayfa', en: 'Home', de: 'Startseite' }, path: '/' },
  { 
    name: { tr: 'Kurumsal', en: 'Corporate', de: 'Unternehmen' },
    children: [
      { name: { tr: 'Hakkımızda', en: 'About Us', de: 'Über uns' }, path: '/hakkimizda' },
      { name: { tr: 'KVKK Metni', en: 'Privacy Policy (KVKK)', de: 'Datenschutz (KVKK)' }, path: '/kurumsal/kvkk' }
    ]
  },
  { 
    name: { tr: 'Hizmetlerimiz', en: 'Services', de: 'Leistungen' },
    children: [
      { 
        name: { tr: 'Tüm Hizmetlerimiz', en: 'All Services', de: 'Alle Leistungen' }, 
        path: '/hizmetlerimiz' 
      },
      ...serviceLinks
    ]
  },
  { name: { tr: 'Hekimlerimiz', en: 'Our Doctors', de: 'Unsere Ärzte' }, path: '/hekimlerimiz' },
  { name: { tr: 'Blog', en: 'Blog', de: 'Blog' }, path: '/blog' },
  { name: { tr: 'Diş Sağlığı Testi', en: 'Dental Health Quiz', de: 'Zahngesundheits-Quiz' }, path: '/test' },
  { name: { tr: 'İletişim', en: 'Contact', de: 'Kontakt' }, path: '/iletisim' },
];
