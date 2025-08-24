
import React, { useState } from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const navigate = ReactRouterDom.useNavigate();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/form-basarili');
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xgvzjnjv"
      method="POST"
      className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('contactForm.fullName')}</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contactForm.emailOptional')}</label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('contactForm.phone')}</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">{t('contactForm.subject')}</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contactForm.message')}</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-teal/80 hover:bg-brand-teal backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:bg-gray-400 disabled:shadow-sm disabled:transform-none"
        >
          {status === "sending" ? t('general.loading') : t('buttons.sendMessage')}
        </button>
      </div>
       {status === "error" && <p className="text-red-500 text-sm mt-2 text-center">{t('general.error')}</p>}
    </form>
  );
};

export default ContactForm;
