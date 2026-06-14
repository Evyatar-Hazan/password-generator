import type { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import RenderIcon from '../../assets/svg/icon';
import { IconsEnum } from '../../assets/svg/icon/iconsMap';
import Card from '../../component/card';
import Footer from '../../component/footerButton';
import ScrollBar from '../../component/scrollBar';
import type { RootStackParamList, ScreenEnum } from '../../navigation';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

type AboutUsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.AboutUs
>;

const AboutUs: React.FC<{ navigation: AboutUsScreenNavigationProp }> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const colors = themes[theme];

  return (
    <View style={styles(colors).container}>
      <ScrollBar>
        <Card
          dominantTitle={t('aboutUs.welcome.description')}
          content={t('aboutUs.welcome.details')}
        />
        <Card
          title={t('aboutUs.inspiration.description')}
          content={t('aboutUs.inspiration.details')}
        />
        <Card
          title={t('aboutUs.developmentJourney.description')}
          content={t('aboutUs.developmentJourney.details')}
        />
        <Card
          title={t('aboutUs.featuresAndBenefits.description')}
          content={t('aboutUs.featuresAndBenefits.details')}
        />
        <Card
          title={t('aboutUs.futurePlans.description')}
          content={t('aboutUs.futurePlans.details')}
        />
        <Card
          title={t('aboutUs.thankYou.description')}
          content={t('aboutUs.thankYou.details')}
        />
        <Card
          title={t('aboutUs.getInTouch.description')}
          content={t('aboutUs.getInTouch.details')}
          links={[
            {
              text: t('privacyPolicy.contact.emailName'),
              url: t('privacyPolicy.contact.email'),
            },
            {
              text: t('aboutUs.getInTouch.owner'),
              url: t('aboutUs.getInTouch.linkOwner'),
            },
            {
              text: t('aboutUs.getInTouch.here'),
              url: t('aboutUs.getInTouch.link'),
            },
          ]}
        />
      </ScrollBar>
      <Footer
        buttons={[
          {
            icon: () => (
              <RenderIcon
                name={IconsEnum.Back}
                onPress={() => navigation.goBack()}
                rtl
              />
            ),
            onPress: () => navigation.goBack(),
          },
        ]}
      />
    </View>
  );
};

export default AboutUs;
