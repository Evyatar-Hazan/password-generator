import type { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import RenderIcon from '../../assets/svg/icon';
import { IconsEnum } from '../../assets/svg/icon/iconsMap';
import Card from '../../component/card';
import Footer from '../../component/footerButton';
import FrameInput from '../../component/frameInput';
import type { RootStackParamList } from '../../navigation';
import { ScreenEnum } from '../../navigation';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenEnum.Home
>;

const Home: React.FC<{ navigation: HomeScreenNavigationProp }> = ({
  navigation,
}) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const { t } = useTranslation();
  const [Keyword1, setKeyword1] = useState('');
  const [Keyword2, setKeyword2] = useState('');

  const isActive = Keyword1.length > 0 && Keyword2.length > 0;

  const onPressGenerator = () => {
    if (isActive) {
      navigation.navigate(ScreenEnum.Hub, { Keyword1, Keyword2 });
    }
  };

  return (
    <View style={styles(colors).container}>
      <KeyboardAvoidingView
        style={styles(colors).contentContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={[styles(colors).innerContainer]}
            keyboardShouldPersistTaps="handled">
            <Card
              dominantTitle={t('home.subTitle')}
              dominantTitleStyles={{ textAlign: 'center' }}
              content={t('home.note')}
              contentStyles={{ textAlign: 'center' }}
            />

            <View style={styles(colors).inputContainer}>
              <FrameInput
                isInput={true}
                label={t('home.Keyword1Title')}
                placeholder={t('home.inputPlaceholder')}
                value={Keyword1}
                onChangeText={setKeyword1}
              />
              <FrameInput
                isInput={true}
                label={t('home.Keyword2Title')}
                placeholder={t('home.inputPlaceholder')}
                value={Keyword2}
                onChangeText={setKeyword2}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer
        buttons={[
          {
            icon: () => (
              <RenderIcon
                name={
                  isActive ? IconsEnum.ActiveEnter : IconsEnum.DisabledEnter
                }
                onPress={onPressGenerator}
              />
            ),
            onPress: () => onPressGenerator(),
          },
        ]}
      />
    </View>
  );
};

export default Home;
