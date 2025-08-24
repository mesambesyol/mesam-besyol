
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import PageContainer from './PageContainer';

const SmileDesigner: React.FC = () => {
  const { t, language } = useLanguage();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] =useState<string>('');
  const [error, setError] = useState<string>('');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Lütfen bir resim dosyası seçin.');
        return;
      }
      if (file.size > 4 * 1024 * 1024) {
          setError('Dosya boyutu 4MB\'den küçük olmalıdır.');
          return;
      }
      
      setError('');
      setAiResponse('');
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve((reader.result as string).split(',')[1]);
        reader.onerror = (err) => reject(err);
    });
  };

  const handleAnalyzeClick = async () => {
    if (!imageFile) {
      setError('Lütfen önce bir fotoğraf yükleyin.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    setAiResponse('');

    try {
      const base64Image = await fileToBase64(imageFile);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      
      const promptText = `You are a friendly and encouraging dental aesthetics assistant. Your name is Gülüş. Analyze the user's smile in this photo.
Do NOT provide a medical diagnosis or mention any health problems like cavities, gum disease, or misalignments.
Your goal is to be positive and suggest potential cosmetic improvements.
Follow these steps:
1. Start with a warm, positive, and encouraging comment about their smile.
2. Gently point out one or two aesthetic aspects that could be enhanced (e.g., tooth color, shape, uniformity).
3. Suggest 1-2 specific cosmetic treatments (e.g., teeth whitening, veneers, cosmetic bonding) that could address these aspects. Briefly explain what each treatment does in simple terms.
4. End with an encouraging closing statement, reminding the user to consult a professional dentist for a real assessment.
Keep the entire response short, friendly, and easy to understand. Format the suggestions as a simple list.
Respond in ${language === 'tr' ? 'Turkish' : language === 'de' ? 'German' : 'English'}.
`;
      const imagePart = {
        inlineData: {
          mimeType: imageFile.type,
          data: base64Image,
        },
      };
      const textPart = { text: promptText };

      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: { parts: [textPart, imagePart] },
      });
      
      setAiResponse(response.text);

    } catch (err) {
      console.error(err);
      setError(t('homePage.smileDesignerError'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-br from-brand-teal to-brand-blue text-white">
      <PageContainer>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {t('homePage.smileDesignerTitle')}
            </h2>
            <p className="mt-4 text-lg text-sky-200">
                {t('homePage.smileDesignerSubtitle')}
            </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col items-center">
                    <div className="w-full aspect-square bg-white/20 rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-white/50">
                        {imagePreview ? (
                            <img src={imagePreview} alt="Gülüş önizlemesi" className="w-full h-full object-cover rounded-md"/>
                        ) : (
                            <p className="text-sm text-white/80 p-4 text-center">{t('homePage.smileDesignerInstructions')}</p>
                        )}
                    </div>
                     <label htmlFor="smile-upload" className="mt-4 w-full cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-white/50 rounded-md shadow-sm text-sm font-medium text-white bg-white/20 hover:bg-white/30 transition-colors">
                        {t('homePage.smileDesignerUpload')}
                    </label>
                    <input id="smile-upload" name="smile-upload" type="file" className="sr-only" accept="image/png, image/jpeg, image/webp" onChange={handleImageChange}/>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <div>
                        <button
                            onClick={handleAnalyzeClick}
                            disabled={isLoading || !imageFile}
                            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-brand-blue bg-white hover:bg-gray-200 disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-not-allowed transition-colors"
                        >
                            {isLoading ? (
                                <>
                                    <div className="spinner !w-5 !h-5 !border-2 mr-3 !border-l-brand-blue"></div>
                                    {t('homePage.smileDesignerAnalyzing')}
                                </>
                            ) : (
                                t('homePage.smileDesignerButton')
                            )}
                        </button>
                        {error && <p className="text-red-300 text-sm mt-2 text-center">{error}</p>}
                    </div>
                    <div className="mt-4 text-xs text-white/70 text-center">
                        <p>{t('homePage.smileDesignerDisclaimer')}</p>
                    </div>
                </div>
            </div>

            {(isLoading || aiResponse) && (
                <div className="mt-6 pt-6 border-t border-white/20">
                    <h4 className="font-semibold text-white text-center mb-4">{t('homePage.smileDesignerResultTitle')}</h4>
                    <div className="bg-black/20 p-4 rounded-md shadow-inner min-h-[150px]">
                        {isLoading ? (
                            <div className="flex justify-center items-center h-full">
                                <div className="spinner !border-l-sky-300"></div>
                            </div>
                        ) : (
                           <p className="text-white/90 whitespace-pre-wrap text-sm">{aiResponse}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
      </PageContainer>
    </section>
  );
};

export default SmileDesigner;
