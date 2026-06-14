import { StyleSheet } from 'react-native';

import type { ThemeType } from '../../themes/themes';

const styles = (colors: ThemeType, isRTL: boolean) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-start',
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      [isRTL ? 'right' : 'left']: 0,
      width: '75%',
      backgroundColor: colors.background,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
      borderTopLeftRadius: !isRTL ? 0 : 20,
      borderTopRightRadius: !isRTL ? 20 : 0,
      borderBottomLeftRadius: !isRTL ? 0 : 20,
      borderBottomRightRadius: !isRTL ? 20 : 0,
      borderWidth: 2,
      borderColor: colors.mainPurple,
    },
    titleContainer: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    titleIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: isRTL ? 0 : 10,
      marginLeft: isRTL ? 10 : 0,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    menuItemsContainer: {
      flexGrow: 1,
    },
    menuContent: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      flex: 1,
    },
    menuItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    menuText: {
      fontSize: 16,
      marginLeft: isRTL ? 0 : 5,
      marginRight: isRTL ? 5 : 0,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    settingsContainer: {
      paddingLeft: isRTL ? 0 : 10,
      paddingRight: isRTL ? 10 : 0,
      borderTopWidth: 1,
      borderColor: colors.mainLightPurple,
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginTop: 8,
    },
    settingItem: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    settingText: {
      fontSize: 16,
      flex: 1,
      marginLeft: isRTL ? 0 : 10,
      marginRight: isRTL ? 10 : 0,
      color: colors.text,
      textAlign: isRTL ? 'right' : 'left',
    },
    privacyContainer: {
      padding: 10,
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    iconContainer: {
      marginRight: isRTL ? 0 : 8,
      marginLeft: isRTL ? 8 : 0,
    },
    versionText: {
      fontSize: 10,
      textAlign: isRTL ? 'right' : 'left',
    },
  });

export default styles;
