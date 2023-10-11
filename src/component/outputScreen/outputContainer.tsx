import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Clipboard from '@react-native-community/clipboard';
import {Svg, Path} from 'react-native-svg';
import {useTranslation} from 'react-i18next';

type GeneratedPasswords = {
  [key: string]: string;
};

type PasswordType = keyof GeneratedPasswords;

const OutputContainer = ({
  generatedPasswords,
}: {
  generatedPasswords: GeneratedPasswords;
}) => {
  const {t} = useTranslation();

  const mapGeneratedPasswords: Record<
    PasswordType,
    {label: string; securityLevel: string; color: string}
  > = {
    numbersPassword: {
      label: t('outputScreen.numbersPassword'),
      securityLevel: t('outputScreen.low'),
      color: 'red',
    },
    lettersPassword: {
      label: t('outputScreen.lettersPassword'),
      securityLevel: t('outputScreen.medium'),
      color: 'orange',
    },
    numbersAndLettersPassword: {
      label: t('outputScreen.numbersAndLettersPassword'),
      securityLevel: t('outputScreen.medium'),
      color: 'orange',
    },
    upperCasePassword: {
      label: t('outputScreen.upperCasePassword'),
      securityLevel: t('outputScreen.high'),
      color: 'green',
    },
    transformToSign: {
      label: t('outputScreen.transformToSign'),
      securityLevel: t('outputScreen.veryHigh'),
      color: 'blue',
    },
  };

  const copyToClipboard = (
    generatedPasswords: GeneratedPasswords,
    passwordType: string,
  ) => {
    Clipboard.setString(generatedPasswords[passwordType]);
    ToastAndroid.show(
      `Copied ${mapGeneratedPasswords[passwordType].label} to clipboard`,
      ToastAndroid.SHORT,
    );
  };
  return (
    <ScrollView style={styles.outputContainer}>
      {Object.keys(generatedPasswords).map((passwordType: string) => (
        <View key={passwordType}>
          <View style={styles.securityLevelIndicator}>
            <Text style={styles.label}>
              {mapGeneratedPasswords[passwordType].label}
            </Text>
            <Text style={styles.label}>
              {mapGeneratedPasswords[passwordType].securityLevel}
            </Text>
          </View>
          <LinearGradient
            style={styles.outputFrame}
            colors={[mapGeneratedPasswords[passwordType].color, 'transparent']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <View style={styles.outputRow}>
              <Text style={styles.output}>
                {generatedPasswords[passwordType]}
              </Text>
              <Svg
                height="16"
                width="16"
                viewBox="0 0 16 16"
                style={styles.copyButton}
                onPress={() =>
                  copyToClipboard(generatedPasswords, passwordType)
                }>
                <Path
                  d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
                  fill="black"
                />
                <Path
                  d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
                  fill="black"
                />
              </Svg>
            </View>
          </LinearGradient>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  copyButton: {
    padding: 8,
    borderRadius: 8,
    marginLeft: 100,
    borderWidth: 2,
    borderColor: 'black',
  },
  copyButtonText: {
    fontSize: 16,
    color: 'white',
  },
  output: {
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
  },
  outputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outputFrame: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 10,
  },
  securityLevelIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outputContainer: {
    width: '100%',
  },
});

export default OutputContainer;
