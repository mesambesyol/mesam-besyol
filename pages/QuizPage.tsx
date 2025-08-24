

import React, { useState, useEffect, useMemo } from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../contexts/LanguageContext';
import { QUIZ_DATA, QUIZ_RESULTS } from '../data/quiz';
import { CheckCircleIcon, XCircleIcon } from '../constants/icons';
import AnimatedItem from '../components/AnimatedItem';
import MetaTags from '../components/MetaTags';

const QuizPage: React.FC = () => {
  const { t, getLocalized } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(QUIZ_DATA);

  useEffect(() => {
    // Scroll to top on mount is now handled by the global ScrollToTop component.
    // Shuffle questions on initial load
    setShuffledQuestions([...QUIZ_DATA].sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });

    if (optionIndex === shuffledQuestions[currentQuestionIndex].correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        setShowResults(true);
      }
    }, 300); // Short delay for user to see selection
  };
  
  const restartQuiz = () => {
    setShuffledQuestions([...QUIZ_DATA].sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setShowResults(false);
    window.scrollTo(0, 0);
  };
  
  const resultLevel = useMemo(() => {
    if (score <= 4) return QUIZ_RESULTS.level1;
    if (score <= 10) return QUIZ_RESULTS.level2;
    return QUIZ_RESULTS.level3;
  }, [score]);


  if (showResults) {
    return (
      <>
        <MetaTags page="quiz" />
        <div className="bg-white py-12 sm:py-16 overflow-hidden">
          <PageContainer>
            <AnimatedItem>
              <SectionTitle title={t('quizPage.resultsTitle')} />
            </AnimatedItem>
            <AnimatedItem>
              <div className="max-w-3xl mx-auto text-center bg-brand-blue-light p-8 rounded-lg shadow-lg mb-12">
                <h3 className="text-2xl font-bold text-brand-blue">{t('quizPage.yourScore')}</h3>
                <p className="text-5xl font-extrabold text-brand-teal my-2">
                  {score} / {shuffledQuestions.length}
                </p>
                <p className="text-gray-600 mb-4">{t('quizPage.correctAnswers')}</p>
                <div className="mt-4 border-t border-brand-blue/20 pt-4">
                  <h4 className="text-2xl font-semibold text-brand-blue mb-2">{getLocalized(resultLevel.title)}</h4>
                  <p className="text-gray-700">{getLocalized(resultLevel.text)}</p>
                </div>
              </div>
            </AnimatedItem>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <AnimatedItem>
                <h3 className="text-2xl font-bold text-center text-brand-blue">{t('quizPage.reviewAnswers')}</h3>
              </AnimatedItem>
              {shuffledQuestions.map((q, index) => {
                const userAnswerIndex = selectedAnswers[index];
                const isCorrect = userAnswerIndex === q.correctAnswerIndex;
                return (
                  <AnimatedItem key={q.id} staggerIndex={index}>
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: isCorrect ? '#0D9488' : '#EF4444' }}>
                      <p className="font-semibold text-gray-800 mb-4">{index + 1}. {getLocalized(q.question)}</p>
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-start">
                            <span className="font-bold w-32 flex-shrink-0">{t('quizPage.yourAnswer')}:</span>
                            <span className={`flex items-center gap-2 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                                {isCorrect ? <CheckCircleIcon className="w-5 h-5 flex-shrink-0" /> : <XCircleIcon className="w-5 h-5 flex-shrink-0" />}
                                {getLocalized(q.options[userAnswerIndex])}
                            </span>
                        </div>
                         {!isCorrect && (
                             <div className="flex items-start">
                                <span className="font-bold w-32 flex-shrink-0">{t('quizPage.correctAnswer')}:</span>
                                <span className="text-gray-700">{getLocalized(q.options[q.correctAnswerIndex])}</span>
                            </div>
                         )}
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md mt-4">
                         <p className="text-sm font-semibold text-gray-600 mb-1">{t('quizPage.explanation')}:</p>
                         <p className="text-sm text-gray-600">{getLocalized(q.explanation)}</p>
                      </div>
                    </div>
                  </AnimatedItem>
                );
              })}
            </div>

             <AnimatedItem className="text-center mt-12">
              <button
                onClick={restartQuiz}
                className="inline-block bg-brand-teal/80 text-white px-8 py-3 rounded-full hover:bg-brand-teal backdrop-blur-md transition-colors font-medium text-lg"
              >
                {t('quizPage.restartQuiz')}
              </button>
            </AnimatedItem>
          </PageContainer>
        </div>
      </>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  return (
    <>
      <MetaTags page="quiz" />
      <div className="bg-brand-blue-light py-12 sm:py-16 overflow-hidden">
        <PageContainer>
          <AnimatedItem>
              <SectionTitle title={t('quizPage.title')} subtitle={t('quizPage.subtitle')} />
          </AnimatedItem>
          
          <AnimatedItem>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-8 max-w-4xl mx-auto" role="alert">
                <p className="font-bold">{t('quizPage.importantNoteTitle')}</p>
                <p className="text-sm">{t('quizPage.importantNoteText')}</p>
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <div className="max-w-2xl mx-auto bg-white/50 backdrop-blur-lg p-6 sm:p-8 rounded-xl shadow-2xl border border-white/30">
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
                        <span>{t('quizPage.question')} {currentQuestionIndex + 1} {t('quizPage.of')} {shuffledQuestions.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-brand-teal h-2.5 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                </div>

                <div className="min-h-[100px] flex items-center">
                     <h3 className="text-lg md:text-xl font-semibold text-brand-blue text-center w-full">{getLocalized(currentQuestion.question)}</h3>
                </div>
               
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className="w-full text-left p-4 rounded-xl border-2 border-white/20 bg-white/50 backdrop-blur-md hover:bg-brand-blue-light hover:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 transition-all duration-150"
                        >
                            <span className="font-medium text-gray-700">{getLocalized(option)}</span>
                        </button>
                    ))}
                </div>
            </div>
          </AnimatedItem>
        </PageContainer>
      </div>
    </>
  );
};

export default QuizPage;