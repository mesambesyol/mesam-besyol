
import React, { useEffect } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Service, Doctor, BlogPost, FaqItem } from '../types';
import { FAQ_DATA } from '../data/faq';

type PageKey = 'home' | 'about' | 'services' | 'doctors' | 'blog' | 'quiz' | 'contact' | 'appointment' | 'kvkk' | 'formSuccess';
type DynamicData = Service | Doctor | BlogPost;

interface MetaTagsProps {
  page: PageKey | 'serviceDetail' | 'doctorDetail' | 'blogPost';
  data?: DynamicData;
}

const monthTrToEn: { [key: string]: string } = {
    'ocak': 'January', 'şubat': 'February', 'mart': 'March', 'nisan': 'April',
    'mayıs': 'May', 'haziran': 'June', 'temmuz': 'July', 'ağustos': 'August',
    'eylül': 'September', 'ekim': 'October', 'kasım': 'November', 'aralık': 'December'
};

const MetaTags: React.FC<MetaTagsProps> = ({ page, data }) => {
  const { t, getLocalized, language } = useLanguage();
  const location = ReactRouterDom.useLocation();

  useEffect(() => {
    
    const generateSchema = () => {
        const siteUrl = window.location.origin;
        const logoUrl = "https://i.hizliresim.com/kw923ek.png";

        const baseSchema = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": t('appName'),
        "image": logoUrl,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+905366549868",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": t('footer.addressLine1'),
            "addressLocality": "Osmangazi",
            "addressRegion": "Bursa",
            "postalCode": "16200",
            "addressCountry": "TR"
        },
        "openingHoursSpecification": [
            {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/besyolmesam/",
            "https://www.youtube.com/besyolmesam/",
            "https://www.facebook.com/besyolmesam",
            "https://x.com/besyolmesam",
            "https://www.linkedin.com/company/besyolmesam"
        ]
        };
        
        switch (page) {
            case 'home':
                const faqSchema = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": FAQ_DATA.map((item: FaqItem) => ({
                        "@type": "Question",
                        "name": getLocalized(item.question),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": getLocalized(item.answer)
                        }
                    }))
                };
                const webSiteSchema = {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": siteUrl,
                     "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": `${siteUrl}/#/?s={search_term_string}`
                        },
                        "query-input": "required name=search_term_string"
                    }
                };
                return [baseSchema, faqSchema, webSiteSchema];

            case 'serviceDetail':
                const service = data as Service;
                if (!service) return baseSchema;
                const serviceSchema = {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": getLocalized(service.name),
                    "provider": {
                        "@id": siteUrl
                    },
                    "name": getLocalized(service.name),
                    "description": getLocalized(service.description)
                };
                return [baseSchema, serviceSchema];
            
            case 'doctorDetail':
                const doctor = data as Doctor;
                if (!doctor) return baseSchema;
                const personSchema = {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": doctor.name,
                    "jobTitle": getLocalized(doctor.title),
                    "image": doctor.imageUrl,
                    "worksFor": {
                        "@id": siteUrl
                    }
                };
                return [baseSchema, personSchema];
            
            case 'blogPost':
                const post = data as BlogPost;
                if (!post) return baseSchema;
                let authorName = '';
                if (typeof post.author === 'string') {
                    authorName = post.author;
                } else if (post.author) {
                    authorName = getLocalized(post.author);
                }
                const dateParts = post.date.split(' ');
                let isoDate = new Date().toISOString();
                if (dateParts.length === 3) {
                    const day = dateParts[0];
                    const monthNameTr = dateParts[1];
                    const year = dateParts[2];
                    const monthNameEn = monthTrToEn[monthNameTr.toLowerCase()];
                    if (monthNameEn) {
                        isoDate = new Date(`${monthNameEn} ${day}, ${year}`).toISOString();
                    }
                }
                const articleSchema = {
                    "@context": "https://schema.org",
                    "@type": "Article",
                     "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": window.location.href
                    },
                    "headline": getLocalized(post.title),
                    "image": post.imageUrl,
                    "author": {
                        "@type": "Person",
                        "name": authorName
                    },
                    "publisher": {
                      "@type": "Organization",
                      "name": t('appName'),
                      "logo": { "@type": "ImageObject", "url": logoUrl }
                    },
                    "datePublished": isoDate
                };
                return [baseSchema, articleSchema];
                
            default:
                return baseSchema;
        }
    };
      
    let title = t('appName');
    let description = t('meta.home.description');

    if (page === 'serviceDetail' && data) {
      const service = data as Service;
      const serviceName = getLocalized(service.name);
      title = `${serviceName} | ${t('appName')}`;
      description = getLocalized(service.description);
    } else if (page === 'doctorDetail' && data) {
      const doctor = data as Doctor;
      const doctorName = doctor.name;
      const doctorTitle = getLocalized(doctor.title);
      title = `${doctorName} - ${doctorTitle} | ${t('appName')}`;
      description = getLocalized(doctor.bio);
    } else if (page === 'blogPost' && data) {
      const post = data as BlogPost;
      const postTitle = getLocalized(post.title);
      title = `${postTitle} | ${t('appName')}`;
      description = getLocalized(post.summary);
    } else if (['home', 'about', 'services', 'doctors', 'blog', 'quiz', 'contact', 'appointment', 'kvkk', 'formSuccess'].includes(page)) {
      title = t(`meta.${page}.title` as any);
      description = t(`meta.${page}.description` as any);
    }

    // Update Meta Tags
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical URL
    const canonicalUrl = window.location.origin + window.location.pathname + location.hash;
    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update JSON-LD Schema
    const existingScriptTag = document.getElementById('json-ld-schema');
    if (existingScriptTag) {
      existingScriptTag.remove();
    }
    
    const schema = generateSchema();
    if (schema) {
      const newScriptTag = document.createElement('script');
      newScriptTag.id = 'json-ld-schema';
      newScriptTag.type = 'application/ld+json';
      newScriptTag.innerHTML = JSON.stringify(schema);
      document.head.appendChild(newScriptTag);
    }

  }, [page, data, t, getLocalized, language, location]);

  return null;
};

export default MetaTags;