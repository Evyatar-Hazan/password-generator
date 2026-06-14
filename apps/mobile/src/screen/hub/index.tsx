import AsyncStorage from '@react-native-async-storage/async-storage';
import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  combineNumbersAndLetters,
  extractLetters,
  extractNumbers,
  transformToSign,
  transformToUpperCase,
} from 'password-generator-npm';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import { randomKeyStorageKey } from '../../App';
import Footer from '../../component/footerButton';
import FrameInput from '../../component/frameInput';
import type { RootStackParamList, ScreenEnum } from '../../navigation';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

type HubScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.Hub
>;
type HubScreenRouteProp = RouteProp<RootStackParamList, 'Hub'>;

type HubProps = {
  navigation: HubScreenNavigationProp;
  route: HubScreenRouteProp;
};
const Hub: React.FC<HubProps> = ({ route }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const colors = themes[theme];
  const { Keyword1, Keyword2 } = route.params;
  const [numCharacters, setNumCharacters] = useState<number>(8);
  const [KeywordArr, setKeywordArr] = useState<string[]>([
    Keyword1 || '',
    Keyword2 || '',
  ]);

  useEffect(() => {
    const loadRandomKey = async () => {
      const existingRandomKey = await AsyncStorage.getItem(randomKeyStorageKey);
      setKeywordArr([
        Keyword1,
        Keyword2,
        existingRandomKey !== null ? existingRandomKey : '',
      ]);
    };

    loadRandomKey();
  }, [Keyword1, Keyword2]);

  const NumButton = (num: number) => (
    <Text style={styles(colors).numButton}>{num}</Text>
  );

  const inputConfigs = [
    {
      label: t('hub.veryStrongTitle'),
      value: transformToSign(KeywordArr, numCharacters),
      strengthType: 'veryStrong',
    },
    {
      label: t('hub.strongTitle'),
      value: transformToUpperCase(KeywordArr, numCharacters),
      strengthType: 'strong',
    },
    {
      label: t('hub.mediumTitle'),
      value: combineNumbersAndLetters(KeywordArr, numCharacters),
      strengthType: 'medium',
    },
    {
      label: t('hub.weakTitle'),
      value: extractLetters(KeywordArr, numCharacters),
      strengthType: 'weak',
    },
    {
      label: t('hub.veryWeakTitle'),
      value: extractNumbers(KeywordArr, numCharacters),
      strengthType: 'veryWeak',
    },
  ];

  return (
    <>
      <View style={styles(colors).inputContainer}>
        {inputConfigs.map((config) => (
          <FrameInput
            key={config.label}
            isInput={false}
            label={config.label}
            value={config.value}
            strengthType={config.strengthType}
          />
        ))}
      </View>
      <Footer
        defaultFocusedIndex={1}
        buttons={[
          { icon: () => NumButton(4), onPress: () => setNumCharacters(4) },
          {
            icon: () => NumButton(8),
            onPress: () => setNumCharacters(8),
          },
          { icon: () => NumButton(12), onPress: () => setNumCharacters(12) },
          // {
          //   icon: () => <RenderIcon name={IconsEnum.PasswordLength} />,
          //   onPress: () => null, //console.log('Define a meaningful action'),
          // },
        ]}
      />
    </>
  );
};

export default Hub;
