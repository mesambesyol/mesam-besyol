

import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { BLOG_POSTS_DATA } from '../data/blog';
import { CalendarDaysIcon, UserCircleIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { SERVICES_DATA } from '../data/services';

const BlogPostPage: React.FC = () => {
  const { slug } = ReactRouterDom.useParams<{ slug: string }>();
  const navigate = ReactRouterDom.useNavigate();
  const { t, getLocalized, formatDate } = useLanguage();
  
  const post = BLOG_POSTS_DATA.find(p => p.slug === slug);
  const relatedService = post?.relatedServiceId ? SERVICES_DATA.find(s => s.id === post.relatedServiceId) : null;

  if (!post) {
    return (
      <PageContainer className="py-12 text-center">
        <h1 className="text-3xl font-bold text-brand-blue mb-4">{t('blogPostPage.notFoundTitle')}</h1>
        <p className="text-gray-600 mb-6">{t('blogPostPage.notFoundText')}</p>
        <ReactRouterDom.Link 
          to="/blog"
          className="inline-block bg-brand-teal text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-medium"
        >
          {t('buttons.browseAllPosts')}
        </ReactRouterDom.Link>
      </PageContainer>
    );
  }

  const title = getLocalized(post.title);
  const contentHtml = getLocalized(post.content); // Get localized HTML content
  
  let authorDisplay: string | undefined;
  if (typeof post.author === 'string') {
    authorDisplay = post.author;
  } else if (post.author) { // It's LocalizedString
    authorDisplay = getLocalized(post.author);
  }

  return (
    <>
      <MetaTags page="blogPost" data={post} />
      <div className="bg-stone-100 py-12 sm:py-16">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 sm:p-10 rounded-lg shadow-lg">
              <article>
                 <div className="mb-8">
                  <ReactRouterDom.Link
                    to="/blog"
                    className="text-sm font-semibold text-brand-teal hover:text-brand-blue transition-colors"
                  >
                    &larr; {t('blogPostPage.backToBlog')}
                  </ReactRouterDom.Link>
                </div>
                <header className="mb-8 border-b border-gray-200 pb-8">
                  <h1 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">{title}</h1>
                  <div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <time dateTime={post.date} className="flex items-center">
                      <CalendarDaysIcon className="w-4 h-4 mr-1.5 text-gray-400" aria-hidden="true" />
                      {t('blogPostPage.publishedDate')} {formatDate(post.date)}
                    </time>
                    {authorDisplay && (
                      <span className="flex items-center">
                        <UserCircleIcon className="w-4 h-4 mr-1.5 text-gray-400" aria-hidden="true" />
                        {t('blogPostPage.author')} {authorDisplay}
                      </span>
                    )}
                  </div>
                </header>

                <img 
                  src={post.imageUrl} 
                  alt={title} 
                  className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md mb-8" 
                  loading="lazy"
                />

                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: contentHtml }} // Use localized HTML
                />

                {relatedService && (
                  <div className="mt-10 pt-6 border-t border-gray-200 bg-brand-blue-light p-6 rounded-lg flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      {React.cloneElement(relatedService.icon, { className: "w-12 h-12 text-brand-teal" })}
                    </div>
                    <div className="text-center sm:text-left flex-grow">
                      <h3 className="text-lg font-semibold text-brand-blue mb-1">{t('blogPostPage.relatedServiceTitle')}</h3>
                      <p className="text-gray-700">{getLocalized(relatedService.name)}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <ReactRouterDom.Link
                        to={`/hizmetlerimiz/${relatedService.id}`}
                        className="inline-block bg-brand-teal/80 text-white px-5 py-2.5 rounded-full hover:bg-brand-teal backdrop-blur-md transition-colors font-medium"
                      >
                        {t('blogPostPage.relatedServiceButton')}
                      </ReactRouterDom.Link>
                    </div>
                  </div>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-600 mb-2">{t('blogPostPage.tags')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <ReactRouterDom.Link
                          to="/blog"
                          key={tag}
                          className="bg-brand-blue-light text-brand-blue text-xs font-medium px-2.5 py-1 rounded-full hover:bg-brand-cyan-light transition-colors"
                        >
                          {`#${tag}`}
                        </ReactRouterDom.Link>
                      ))}
                    </div>
                  </div>
                )}
                 <div className="mt-12 text-center">
                   <button
                      onClick={() => navigate(-1)}
                      className="inline-block bg-gray-200/80 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-300 backdrop-blur-md transition-colors font-medium mr-4"
                    >
                      {t('buttons.goBack')}
                    </button>
                  <ReactRouterDom.Link 
                      to="/blog"
                      className="inline-block bg-brand-teal/80 text-white px-6 py-3 rounded-full hover:bg-brand-teal backdrop-blur-md transition-colors font-medium"
                  >
                      {t('buttons.allPosts')}
                  </ReactRouterDom.Link>
              </div>
              </article>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default BlogPostPage;