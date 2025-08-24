
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FAQ_DATA } from '../data/faq';
import { ChevronDownIcon } from '../constants/icons';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { getLocalized } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {FAQ_DATA.map((item, index) => (
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left p-5 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue-light"
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <h3 className="text-md font-semibold text-brand-blue">
                {getLocalized(item.question)}
              </h3>
              <ChevronDownIcon
                className={`w-5 h-5 text-brand-teal flex-shrink-0 accordion-icon ${openIndex === index ? 'open' : ''}`}
              />
            </button>
            <div
              id={`faq-content-${index}`}
              className={`accordion-content ${openIndex === index ? 'open' : ''}`}
            >
              <div className="p-5 pt-0 text-gray-600">
                <p>{getLocalized(item.answer)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
