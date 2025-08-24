import React from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import BlogPostCard from '../components/BlogPostCard';
import { BLOG_POSTS_DATA } from '../data/blog';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-brand-teal to-brand-blue py-12 sm:py-16 overflow-hidden">
      <MetaTags page="blog" />
      <PageContainer>
        <AnimatedItem>
              <SectionTitle 
              theme="dark"
              title={t('blogPage.title')}
              subtitle={t('blogPage.subtitle')} 
              />
        </AnimatedItem>
        {BLOG_POSTS_DATA.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS_DATA.map((post, index) => (
              <AnimatedItem key={post.id} staggerIndex={index}>
                <BlogPostCard post={post} />
              </AnimatedItem>
            ))}
          </div>
        ) : (
          <p className="text-center text-sky-200">{t('blogPage.noPosts')}</p>
        )}
      </PageContainer>
    </div>
  );
};

export default BlogPage;