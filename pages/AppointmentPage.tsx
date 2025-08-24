

import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageContainer from '../components/PageContainer';
import SectionTitle from '../components/SectionTitle';
import { DOCTORS_DATA } from '../data/doctors';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';

const AppointmentPage: React.FC = () => {
  const { t, getLocalized } = useLanguage();
  const navigate = ReactRouterDom.useNavigate();
  const [minDate, setMinDate] = useState('');
  const [status, setStatus] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayDateString = `${yyyy}-${mm}-${dd}`;
    setMinDate(todayDateString);
  }, []);

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
    <>
      <MetaTags page="appointment" />
      <div className="bg-gradient-to-br from-brand-cyan-light to-brand-blue-pastel py-12 sm:py-16">
        <PageContainer>
          <SectionTitle title={t('appointmentForm.title')} subtitle={t('appointmentForm.subtitle')} />
          
          <div className="mt-10 max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
            <div className="mb-10 lg:mb-0 lg:sticky lg:top-28">
              <img
                src="https://i.hizliresim.com/oa9cd6p.jpg"
                alt={t('appointmentForm.visualAlt')}
                className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[500px] lg:max-h-[calc(100vh-8rem)]"
                loading="lazy"
              />
            </div>

            <div>
                <form 
                  onSubmit={handleSubmit}
                  action="https://formspree.io/f/xgvzjnjv"
                  method="POST"
                  className="bg-white p-8 rounded-lg shadow-xl space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
                        {t('appointmentForm.firstName')} <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="patientName" id="patientName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white" />
                    </div>
                    <div>
                      <label htmlFor="patientSurname" className="block text-sm font-medium text-gray-700">
                        {t('appointmentForm.lastName')} <span className="text-red-500">*</span>
                      </label>
                      <input type="text" name="patientSurname" id="patientSurname" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700">
                      {t('appointmentForm.phone')} <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" name="patientPhone" id="patientPhone" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white" />
                  </div>
                  <div>
                    <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700">
                      {t('appointmentForm.emailOptional')}
                    </label>
                    <input type="email" name="email" id="patientEmail" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white" />
                  </div>

                  <div>
                    <label htmlFor="doctorId" className="block text-sm font-medium text-gray-700">
                      {t('appointmentForm.doctorSelection')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="doctorId"
                      id="doctorId"
                      required
                      defaultValue=""
                      className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm appearance-none bg-white bg-no-repeat bg-right pr-8 text-gray-500`}
                      style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
                      onChange={(e) => { e.target.classList.toggle('text-gray-500', !e.target.value); e.target.classList.toggle('text-gray-900', !!e.target.value);}}
                    >
                      <option value="" disabled>{t('appointmentForm.selectDoctorPlaceholder')}</option>
                      {DOCTORS_DATA.map(doctor => (
                        <option key={doctor.id} value={doctor.id}>{doctor.name} - {getLocalized(doctor.title)}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">
                        {t('appointmentForm.appointmentDate')} <span className="text-red-500">*</span>
                      </label>
                      <input type="date" name="appointmentDate" id="appointmentDate" min={minDate} defaultValue={minDate} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white" />
                    </div>
                    <div>
                      <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700">
                        {t('appointmentForm.appointmentTime')} <span className="text-red-500">*</span>
                      </label>
                      <input type="time" name="appointmentTime" id="appointmentTime" step="1800" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white" />
                      <p className="mt-1 text-xs text-gray-500">{t('appointmentForm.workingHours')}</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                      {t('appointmentForm.additionalNotes')}
                    </label>
                    <textarea name="notes" id="notes" rows={3} placeholder={t('appointmentForm.notesPlaceholder')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm bg-white"></textarea>
                  </div>

                  <div>
                    <button type="submit" disabled={status === "sending"} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-teal/80 hover:bg-brand-teal backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:bg-gray-400 disabled:shadow-sm disabled:transform-none">
                      {status === "sending" ? t('general.loading') : t('appointmentForm.submitButton')}
                    </button>
                    <p className="mt-3 text-xs text-gray-500 text-center">{t('appointmentForm.submissionInfo')}</p>
                  </div>
                  {status === "error" && <p className="text-red-500 text-sm mt-2 text-center">{t('general.error')}</p>}
                </form>
            </div>
          </div>
        </PageContainer>
      </div>
    </>
  );
};

export default AppointmentPage;