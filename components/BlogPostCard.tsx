
import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { BlogPost } from '../types';
import { CalendarDaysIcon, UserCircleIcon } from '../constants/icons';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const { t, getLocalized, formatDate } = useLanguage();

  const title = getLocalized(post.title);
  const summary = getLocalized(post.summary);
  
  let authorDisplay: string | undefined;
  if (typeof post.author === 'string') {
    authorDisplay = post.author;
  } else if (post.author) {
    authorDisplay = getLocalized(post.author);
  }

  return (
    <ReactRouterDom.Link to={`/blog/${post.slug}`} className="block group h-full" aria-label={`${t('buttons.readMore')} ${title}`}>
      <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1.5">
        <div className="flex-shrink-0 h-48 overflow-hidden">
          <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={post.imageUrl} alt={title} loading="lazy" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-brand-blue mb-2 group-hover:text-brand-teal transition-colors">
            {title}
          </h3>
          <div className="text-xs text-gray-500 mb-3 flex items-center flex-wrap gap-x-3 gap-y-1">
            <time dateTime={post.date} className="flex items-center">
              <CalendarDaysIcon className="w-4 h-4 mr-1.5 text-gray-400" />
              {formatDate(post.date)}
            </time>
            {authorDisplay && (
              <span className="flex items-center">
                <UserCircleIcon className="w-4 h-4 mr-1.5 text-gray-400" />
                {authorDisplay}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 flex-grow mb-4">{summary}</p>
          <div className="mt-auto">
            <span className="text-sm font-semibold text-brand-teal group-hover:underline">
              {t('buttons.readMore')}
            </span>
          </div>
        </div>
      </div>
    </ReactRouterDom.Link>
  );
};

export default BlogPostCard;