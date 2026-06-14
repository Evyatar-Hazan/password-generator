import { Dimensions, StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const { height, width } = Dimensions.get('window');

const styles = (colors: ThemeType, isRTL: boolean, color?: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.mainLightPurple,
      paddingHorizontal: 20,
    },
    imageAndTextWrapper: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: height * 0.15,
    },
    image: {
      width: width * 0.3,
      height: width * 0.4,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    textContent: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center',
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 16,
      color: '#333',
      lineHeight: 24,
      paddingHorizontal: 24,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
    footerButton: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    skip: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      textDecorationLine: 'underline',
    },
    next: {
      fontSize: 16,
      fontWeight: 'bold',
      color: color,
    },
    paginationContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#ccc',
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: colors.mainPurple,
      width: 10,
      height: 10,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.mainPurple,
    },
  });

export default styles;
