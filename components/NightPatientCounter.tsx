
import React, { useState, useEffect, useMemo } from 'react';
import { MoonIcon } from '../constants/icons'; 
import PageContainer from './PageContainer';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const NightPatientCounter: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [count, setCount] = useState(0);
  
  const finalCount = useMemo(() => {
    const choices = [6, 7, 8];
    return choices[Math.floor(Math.random() * choices.length)];
  }, []);

  useEffect(() => {
    if (isVisible) {
      setCount(0); // Reset count when it becomes visible again
      let start = 0;
      const duration = 1500; // duration in ms
      const startTime = Date.now();
      let animationFrameId: number;

      const frame = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentVal = Math.floor(progress * finalCount);
        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(frame);
        }
      };
      
      animationFrameId = requestAnimationFrame(frame);

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isVisible, finalCount]);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-br from-slate-900 to-brand-blue text-white">
      <PageContainer className="text-center">
        <div className="flex flex-col items-center">
          <MoonIcon 
            className="w-16 h-16 text-sky-400 mb-6" 
            aria-label={t('homePage.moonIconAlt')} 
          />
          <h2 className="text-3xl font-bold text-sky-100 mb-3">
            {t('homePage.nightCounterTitle')}
          </h2>
          <p className="text-sky-200 text-lg mb-6 max-w-xl mx-auto">
            {t('homePage.nightCounterSub')}
          </p>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-xl shadow-2xl inline-block">
            <div className="text-6xl font-extrabold text-sky-300 mb-2 tracking-tight">
              {count}
            </div>
            <p className="text-sky-200 text-sm">
              {t('homePage.nightCounterStat')} <span className="font-semibold">{t('homePage.nightCounterStatSuffix')}</span>
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default NightPatientCounter;