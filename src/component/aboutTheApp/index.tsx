import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../public';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

type AboutTheAppProps = {
  navigation: StackNavigationProp<RootStackParamList, 'AboutTheApp'>;
};

const AboutTheApp: React.FC<AboutTheAppProps> = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{t('aboutTheApp.title')}</Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>{t('aboutTheApp.gettingStarted')}</Text>
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          {t('aboutTheApp.enterYourPersonalWordTitle')}
        </Text>{' '}
        {t('aboutTheApp.enterYourPersonalWordText')}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          {t('aboutTheApp.enterPlatformSpecificWordTitle')}
        </Text>{' '}
        {t('aboutTheApp.enterPlatformSpecificWordText')}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>{t('aboutTheApp.exampleUsageTitle')}</Text>{' '}
        {t('aboutTheApp.exampleUsageText')}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          {t('aboutTheApp.generatedPasswordsTitle')}
        </Text>{' '}
        {t('aboutTheApp.generatedPasswordsText')}
      </Text>
      <Text style={styles.paragraph}></Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>{t('aboutTheApp.securityTips')}</Text>
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          {t('aboutTheApp.keepYourPersonalWordSecretTitle')}
        </Text>{' '}
        {t('aboutTheApp.keepYourPersonalWordSecretText')}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          {t('aboutTheApp.avoidUsingObviousPlatformWordsTitle')}
        </Text>{' '}
        {t('aboutTheApp.avoidUsingObviousPlatformWordsText')}
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>
          {t('aboutTheApp.selectThePasswordTitle')}
        </Text>{' '}
        {t('aboutTheApp.selectThePasswordText')}
      </Text>
      <Text style={styles.paragraph}>{t('aboutTheApp.thanks')}</Text>
      <Text style={styles.paragraph}></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 15,
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default AboutTheApp;
