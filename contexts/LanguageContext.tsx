import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Language, LocalizedString } from '../types';
import { translations, TranslationKeys } from '../translations'; 

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKeys) => string;
  getLocalized: <T extends LocalizedString>(obj: T | undefined) => string;
  formatDate: (dateString: string) => string;
  isFading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const storedLang = localStorage.getItem('appLanguage') as Language | null;
    return storedLang || 'tr'; // Default to Turkish
  });
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    localStorage.setItem('appLanguage', language);
    document.documentElement.lang = language; // Set lang attribute on HTML element
  }, [language]);

  const changeLanguage = (lang: Language) => {
    if (lang === language) return;

    setIsFading(true);
    setTimeout(() => {
      setLanguageState(lang);
      setIsFading(false);
    }, 300); // Corresponds to the CSS transition duration
  };

  const t = (key: TranslationKeys): string => {
    const keys = key.split('.') as (keyof typeof translations[Language])[];
    let result: any = translations[language];
    try {
      for (const k of keys) {
        result = result[k];
        if (result === undefined) {
          console.warn(`Translation not found for key: ${key} in language: ${language}`);
          // Fallback to English or Turkish if the key is not found in the current language
          if (language !== 'en' && translations.en) {
            let fallbackResult: any = translations.en;
            for (const fk of keys) {
                fallbackResult = fallbackResult[fk];
                if (fallbackResult === undefined) break;
            }
            if (typeof fallbackResult === 'string') return fallbackResult;
          }
          if (language !== 'tr' && translations.tr) {
             let fallbackResultTr: any = translations.tr;
             for (const fk of keys) {
                fallbackResultTr = fallbackResultTr[fk];
                if (fallbackResultTr === undefined) break;
            }
            if (typeof fallbackResultTr === 'string') return fallbackResultTr;
          }
          return key; 
        }
      }
      return typeof result === 'string' ? result : key;
    } catch (error) {
      console.warn(`Error accessing translation for key: ${key} in language: ${language}`, error);
      return key;
    }
  };
  
  const getLocalized = <T extends LocalizedString>(obj: T | undefined): string => {
    if (!obj) return '';
    // Prefer current language, then English, then Turkish as fallbacks
    return obj[language] || obj.en || obj.tr || ''; 
  };

  const formatDate = (dateString: string): string => {
    // Example dateString: "05 Şubat 2023" (Turkish format is the base for keys)
    const parts = dateString.split(" ");
    if (parts.length !== 3) return dateString; 

    const day = parts[0];
    const monthKey = parts[1].toLowerCase() as keyof typeof translations.tr.months; 
    const year = parts[2];
    
    // Access the months object for the current language
    const currentLanguageMonths = translations[language]?.months;
    const translatedMonth = currentLanguageMonths?.[monthKey] || translations.tr.months[monthKey] || parts[1];


    return `${day} ${translatedMonth} ${year}`;
  };


  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, getLocalized, formatDate, isFading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};