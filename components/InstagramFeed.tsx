
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { InstagramIcon } from '../constants/icons';
import SectionTitle from './SectionTitle';

const INSTAGRAM_POSTS = [
  { id: 1, imageUrl: 'https://i.imgur.com/57PAVKb.jpg', altKey: 'meta.home.description' },
  { id: 2, imageUrl: 'https://i.imgur.com/xRL2dyu.jpg', altKey: 'meta.home.description' },
  { id: 3, imageUrl: 'https://i.hizliresim.com/3uqus43.jpg', altKey: 'meta.home.description' },
  { id: 4, imageUrl: 'https://i.imgur.com/trE8QJV.jpg', altKey: 'meta.home.description' },
  { id: 5, imageUrl: 'https://i.imgur.com/ntrA30O.jpg', altKey: 'meta.home.description' },
  { id: 6, imageUrl: 'https://i.imgur.com/vX6QMpE.jpg', altKey: 'meta.home.description' },
];

const InstagramFeed: React.FC = () => {
  const { t } = useLanguage();
  const instagramProfileUrl = 'https://www.instagram.com/besyolmesam/';

  return (
    <>
      <SectionTitle 
        title={t('homePage.instagram.title')} 
        subtitle={t('homePage.instagram.subtitle')} 
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {INSTAGRAM_POSTS.map(post => (
          <a
            key={post.id}
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square rounded-lg overflow-hidden relative group instagram-post"
          >
            <img 
              src={post.imageUrl} 
              alt={t(post.altKey as any)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center overlay">
              <InstagramIcon className="w-10 h-10 text-white" />
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href={instagramProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 font-medium text-lg"
        >
          {t('homePage.instagram.viewProfile')}
        </a>
      </div>
    </>
  );
};

export default InstagramFeed;
