import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType) =>
  StyleSheet.create({
    footer: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingHorizontal: 15,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: colors.mainLightPurple,
      paddingVertical: 10,
      height: 70,
    },
    buttonContainer: {
      marginHorizontal: 5,
      position: 'relative',
    },
    button: {
      borderRadius: 50,
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    oval: {
      width: 100,
      height: 50,
      backgroundColor: 'gray',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      position: 'absolute',
      bottom: -10,
      left: -15,
      zIndex: 1,
      opacity: 0.4,
    },
  });

export default styles;
