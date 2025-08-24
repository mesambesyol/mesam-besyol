

import React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import PageContainer from '../components/PageContainer';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';
import { CheckCircleIcon } from '../constants/icons';

const FormSuccessPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <MetaTags page="formSuccess" />
      <div className="bg-white py-16 sm:py-24">
        <PageContainer>
          <AnimatedItem>
            <div className="max-w-2xl mx-auto text-center">
              <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-brand-blue sm:text-4xl mb-4">
                {t('formSuccessPage.title')}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {t('formSuccessPage.message')}
              </p>
              <ReactRouterDom.Link
                to="/"
                className="inline-block bg-brand-teal/80 text-white px-8 py-3 rounded-full hover:bg-brand-teal backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-medium text-lg"
              >
                {t('formSuccessPage.button')}
              </ReactRouterDom.Link>
            </div>
          </AnimatedItem>
        </PageContainer>
      </div>
    </>
  );
};

export default FormSuccessPage;
