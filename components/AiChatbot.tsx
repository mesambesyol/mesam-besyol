
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import { RobotHeadsetIcon, PaperAirplaneIcon, SparklesIcon, XMarkIcon } from '../constants/icons';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { language, t } = useLanguage();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeChat = () => {
    const systemInstruction = `You are 'Mesam Asistan', a friendly, polite, and helpful virtual assistant for Mesam Beşyol Dental Clinic. Your goal is to help users with non-medical questions and assist with appointment requests.
    - Your language is ${language === 'tr' ? 'Turkish' : language === 'de' ? 'German' : 'English'}.
    - ALWAYS be polite and professional.
    - You CAN answer basic questions about the clinic:
      - Location: "Çirişhane Mh. Etibank Cd. NO:117/1 A, Osmangazi, Bursa"
      - Working Hours: "We provide 24/7 emergency dental services."
      - Phone Number: "0536 654 98 68"
    - You CAN help with appointment requests. If a user wants an appointment, you MUST ask for:
      1. Their full name.
      2. Their phone number.
      3. Their preferred day and time.
    - After collecting these 3 pieces of information, confirm it with the user and say: "Thank you! We have received your request. Our clinic staff will contact you shortly to finalize your appointment."
    - CRITICAL RULE: You MUST NOT provide any medical advice, diagnosis, treatment recommendations, or opinions on dental problems. If the user asks a medical question (e.g., "my tooth hurts," "what is this spot," "which treatment is best"), you MUST respond politely by saying something like: "I cannot provide medical advice. For any dental health concerns, it's best to consult with one of our dentists. Would you like me to help you request an appointment?"
    - Keep your answers concise and easy to understand.`;

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
    const newChat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
      },
    });
    setChat(newChat);

    const initialMessage: Message = {
      role: 'model',
      text: t('chatbot.greetingLoading')
    };
     setMessages([initialMessage]);

    // Send an initial message to get a greeting
    newChat.sendMessageStream({ message: "Hello, introduce yourself briefly." }).then(async (stream) => {
      let text = '';
      for await (const chunk of stream) {
        text += chunk.text;
      }
      setMessages([{ role: 'model', text }]);
    });
  };

  const toggleChat = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen && !chat) {
      initializeChat();
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !chat || isLoading) return;

    const userMessage: Message = { role: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
        const stream = await chat.sendMessageStream({ message: userInput });
        
        let currentModelMessage = '';
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        for await (const chunk of stream) {
            currentModelMessage += chunk.text;
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { role: 'model', text: currentModelMessage };
                return newMessages;
            });
        }
    } catch (error) {
        console.error("Error sending message:", error);
        setMessages(prev => [...prev, { role: 'model', text: t('general.error') }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="chatbot-fab"
        aria-label={t('chatbot.openAriaLabel')}
      >
        <RobotHeadsetIcon className="w-6 h-6"/>
        <span className="text-sm">{t('chatbot.fabText')}</span>
      </button>
      <div className={`chat-window ${!isOpen ? 'hidden' : ''}`}>
        <div className="chat-header">
          <div className="flex items-center gap-3">
            <SparklesIcon className="w-6 h-6 text-sky-300"/>
            <h3 className="font-bold">{t('chatbot.assistantName')}</h3>
          </div>
          <button onClick={toggleChat} aria-label={t('chatbot.closeAriaLabel')}>
            <XMarkIcon className="w-6 h-6"/>
          </button>
        </div>
        <div className="chat-messages" ref={messagesEndRef}>
            {messages.map((msg, index) => (
                <div key={index} className={`chat-bubble ${msg.role}`}>
                    {msg.text || <span className="italic opacity-70">...</span>}
                </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role === 'user' && (
                 <div className="chat-bubble model">
                    <div className="flex items-center gap-2">
                        <div className="spinner !w-4 !h-4 !border-2"></div>
                        <span>...</span>
                    </div>
                 </div>
            )}
        </div>
        <form onSubmit={handleSendMessage} className="chat-input-form">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t('chatbot.placeholder')}
            disabled={isLoading}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal text-sm bg-white"
          />
          <button type="submit" disabled={isLoading || !userInput.trim()} className="ml-2 p-3 rounded-full bg-brand-teal text-white disabled:bg-gray-400 transition-colors">
            <PaperAirplaneIcon className="w-5 h-5"/>
          </button>
        </form>
      </div>
    </>
  );
};

export default AiChatbot;