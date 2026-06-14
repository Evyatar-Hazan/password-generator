import { useTranslation } from 'react-i18next';

import introIcon1 from '../../../assets/images/intro/1.png';
import introIcon2 from '../../../assets/images/intro/2.png';
import introIcon3 from '../../../assets/images/intro/3.png';
import introIcon4 from '../../../assets/images/intro/4.png';
import introIcon5 from '../../../assets/images/intro/5.png';
import introIcon6 from '../../../assets/images/intro/6.png';
import introIcon7 from '../../../assets/images/intro/7.png';

export const useOnboardingPages = () => {
  const { t } = useTranslation();

  return [
    {
      image: introIcon1,
      title: t('onboarding.page0.title'),
      subtitle: t('onboarding.page0.subtitle'),
    },
    {
      image: introIcon2,
      title: t('onboarding.page1.title'),
      subtitle: t('onboarding.page1.subtitle'),
    },
    {
      image: introIcon3,
      title: t('onboarding.page2.title'),
      subtitle: t('onboarding.page2.subtitle'),
    },
    {
      image: introIcon4,
      title: t('onboarding.page3.title'),
      subtitle: t('onboarding.page3.subtitle'),
    },
    {
      image: introIcon5,
      title: t('onboarding.page4.title'),
      subtitle: t('onboarding.page4.subtitle'),
    },
    {
      image: introIcon6,
      title: t('onboarding.page5.title'),
      subtitle: t('onboarding.page5.subtitle'),
    },
    {
      image: introIcon7,
      title: t('onboarding.page6.title'),
      subtitle: t('onboarding.page6.subtitle'),
    },
  ];
};
