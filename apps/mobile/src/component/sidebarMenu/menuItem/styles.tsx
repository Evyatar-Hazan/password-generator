import { StyleSheet } from 'react-native';

const styles = (isRTL: boolean, children?: React.ReactNode) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    content: {
      flexDirection: isRTL ? 'row-reverse' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    icon: {
      marginRight: isRTL ? 0 : 10,
      marginLeft: isRTL ? 10 : 0,
    },
    secondaryIcon: {
      marginLeft: isRTL ? 0 : 10,
      marginRight: isRTL ? 10 : 0,
    },
    text: {
      fontSize: 16,
      flex: 1,
      textAlign: isRTL ? 'right' : 'left',
    },
    children: {
      marginTop: children !== null ? 10 : 0,
      paddingLeft: isRTL ? 0 : 20,
      paddingRight: isRTL ? 20 : 0,
    },
  });

export default styles;
