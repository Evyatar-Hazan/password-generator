import AsyncStorage from '@react-native-async-storage/async-storage';
import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { I18nManager } from 'react-native';
import * as Localization from 'react-native-localize';

import i18n from '../i18n/i18n';

interface RTLContextProps {
  isRTL: boolean;
  toggleRTL: (isRTL: boolean) => void;
}

const RTLContext = createContext<RTLContextProps>({
  isRTL: I18nManager.isRTL,
  toggleRTL: () => {},
});

interface RTLProviderProps {
  children: ReactNode;
}

export const RTLProvider: React.FC<RTLProviderProps> = ({ children }) => {
  const [isRTL, setIsRTL] = useState(I18nManager.isRTL);

  const handleLanguageChange = useCallback(async (lng: string) => {
    const rtl = lng === 'he';
    setIsRTL(rtl);
    await AsyncStorage.setItem('language', lng);
  }, []);

  useEffect(() => {
    const loadSettings = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');

      if (savedLanguage !== null) {
        void i18n.changeLanguage(savedLanguage);
        void handleLanguageChange(savedLanguage);
      } else {
        const deviceLocales = Localization.getLocales();
        if (deviceLocales.length > 0) {
          const deviceLanguage = deviceLocales[0].languageTag.split('-')[0];
          void i18n.changeLanguage(deviceLanguage);
          void handleLanguageChange(deviceLanguage);
        }
      }
    };

    loadSettings();

    const onLanguageChanged = (lng: string) => {
      const currentRTL = lng === 'he';
      if (currentRTL !== isRTL) {
        void handleLanguageChange(lng);
      }
    };

    i18n.on('languageChanged', onLanguageChanged);

    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, [handleLanguageChange, isRTL]);

  const toggleRTL = (newIsRTL: boolean) => {
    const newLanguage = newIsRTL ? 'he' : 'en';
    if (newIsRTL !== isRTL) {
      void i18n.changeLanguage(newLanguage);
      void handleLanguageChange(newLanguage);
    }
  };

  return (
    <RTLContext.Provider value={{ isRTL, toggleRTL }}>
      {children}
    </RTLContext.Provider>
  );
};

export const useRTL = () => useContext(RTLContext);
