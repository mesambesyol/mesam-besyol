
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Doctor } from '../types';
import DoctorCard from './DoctorCard';
import { ChevronLeftIcon, ChevronRightIcon } from '../constants/icons';

interface DoctorCarouselProps {
  doctors: Doctor[];
}

const DoctorCarousel: React.FC<DoctorCarouselProps> = ({ doctors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [doctorsPerPage, setDoctorsPerPage] = useState(3);
  const autoPlayTimerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  // Set doctors per page based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile: 1 doctor
        setDoctorsPerPage(1);
      } else if (window.innerWidth < 1024) { // Tablet: 2 doctors
        setDoctorsPerPage(2);
      } else { // Desktop: 3 doctors
        setDoctorsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Memoize pages based on doctors and doctorsPerPage
  const pages = useMemo(() => {
    const result = [];
    if (doctors.length === 0 || doctorsPerPage === 0) return [];
    for (let i = 0; i < doctors.length; i += doctorsPerPage) {
      result.push(doctors.slice(i, i + doctorsPerPage));
    }
    return result;
  }, [doctors, doctorsPerPage]);

  const totalPages = pages.length;

  // Adjust currentIndex if it's out of bounds after resize
  useEffect(() => {
    if (totalPages > 0 && currentIndex >= totalPages) {
      setCurrentIndex(totalPages - 1);
    }
  }, [currentIndex, totalPages]);
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  }, [totalPages]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  }, [totalPages]);
  
  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };
  
  // Autoplay functionality using setTimeout for better control
  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    if (totalPages > 1) {
      autoPlayTimerRef.current = window.setTimeout(goToNext, 3000);
    }
  }, [goToNext, stopAutoPlay, totalPages]);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [currentIndex, startAutoPlay, stopAutoPlay]);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoPlay();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const swipeDistance = touchEndX - touchStartX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      goToPrevious();
    } else if (swipeDistance < -minSwipeDistance) {
      goToNext();
    }
    
    touchStartX.current = null;
    startAutoPlay();
  };

  if (!doctors || doctors.length === 0) {
    return null;
  }

  return (
    <div 
      className="relative"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0 px-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {page.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <>
            <button
                onClick={goToPrevious}
                className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white/80 text-gray-700 p-2 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all z-10"
                aria-label="Önceki hekimler"
            >
                <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white/80 text-gray-700 p-2 rounded-full shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all z-10"
                aria-label="Sonraki hekimler"
            >
                <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
        </>
      )}

      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {pages.map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => goToPage(pageIndex)}
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              currentIndex === pageIndex ? 'bg-brand-blue' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Hekim sayfası ${pageIndex + 1}'e git`}
            aria-current={currentIndex === pageIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorCarousel;
