
import { HeroSlideItem } from '../types';

export const HERO_SLIDES_DATA: HeroSlideItem[] = [
  {
    id: 'slide1',
    imageUrl: 'https://i.hizliresim.com/cbkglw1.jpg',
    titleKey: 'heroSlider.slide1.title',
    subtitleKey: 'heroSlider.slide1.subtitle',
    cta1: { textKey: 'navbar.services', path: '/hizmetlerimiz', variant: 'primary' },
    cta2: { textKey: 'buttons.appointment', path: '/iletisim', variant: 'secondary', scrollToId: 'randevu' },
  },
  {
    id: 'slide4',
    imageUrl: 'https://i.hizliresim.com/et7bzpq.jpg',
    titleKey: 'heroSlider.slide4.title',
    subtitleKey: 'heroSlider.slide4.subtitle',
    cta1: { textKey: 'navbar.contact', path: '/iletisim', variant: 'primary' },
    cta2: { textKey: 'buttons.appointment', path: '/randevu', variant: 'secondary' },
  },
  {
    id: 'slide2',
    imageUrl: 'https://i.hizliresim.com/dnr9nid.jpg',
    titleKey: 'heroSlider.slide2.title',
    subtitleKey: 'heroSlider.slide2.subtitle',
    cta1: { textKey: 'navbar.about', path: '/hakkimizda', variant: 'primary' },
    cta2: { textKey: 'navbar.contact', path: '/iletisim', variant: 'secondary' },
  },
  {
    id: 'slide3',
    imageUrl: 'https://i.hizliresim.com/bvn9kue.jpg',
    titleKey: 'heroSlider.slide3.title',
    subtitleKey: 'heroSlider.slide3.subtitle',
    cta1: { textKey: 'navbar.doctors', path: '/hekimlerimiz', variant: 'primary' },
    cta2: { textKey: 'buttons.appointment', path: '/randevu', variant: 'secondary' },
  },
];