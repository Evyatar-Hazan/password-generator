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

type PrivacyPolicyScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.PrivacyPolicy
>;

const PrivacyPolicy: React.FC<{
  navigation: PrivacyPolicyScreenNavigationProp;
}> = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const colors = themes[theme];

  return (
    <View style={styles(colors).container}>
      <ScrollBar>
        <Card
          content={
            t('privacyPolicy.lastUpdate.description') +
            t('privacyPolicy.lastUpdate.details')
          }
        />

        <Card content={t('privacyPolicy.owner')} />

        <Card
          title={t('privacyPolicy.dataCollection.description')}
          content={t('privacyPolicy.dataCollection.details')}
        />

        <Card
          title={t('privacyPolicy.accountCreation.description')}
          content={t('privacyPolicy.accountCreation.details')}
        />

        <Card
          title={t('privacyPolicy.internetConnection.description')}
          content={t('privacyPolicy.internetConnection.details')}
        />

        <Card
          title={t('privacyPolicy.advertising.description')}
          content={t('privacyPolicy.advertising.details')}
        />

        <Card
          title={t('privacyPolicy.security.description')}
          content={t('privacyPolicy.security.details')}
        />

        <Card
          title={t('privacyPolicy.childrenPrivacy.description')}
          content={t('privacyPolicy.childrenPrivacy.details')}
        />

        <Card
          title={t('privacyPolicy.changes.description')}
          content={t('privacyPolicy.changes.details')}
        />

        <Card
          title={t('privacyPolicy.contact.description')}
          content={t('privacyPolicy.contact.details')}
          links={[
            {
              text: t('privacyPolicy.contact.emailName'),
              url: t('privacyPolicy.contact.email'),
            },
          ]}
        />

        <Card
          content={t('privacyPolicy.sourceDocument.description')}
          links={[
            {
              text: t('general.privacyPolicy'),
              url: t('privacyPolicy.sourceDocument.link'),
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

export default PrivacyPolicy;
