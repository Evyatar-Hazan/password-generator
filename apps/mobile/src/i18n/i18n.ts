// src/i18n/i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, he } from './locales';

export const languageResources = {
  en: { translation: en },
  he: { translation: he },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en', // default language
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
