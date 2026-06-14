import { StyleSheet } from 'react-native';

const styles = (isRTL: boolean) =>
  StyleSheet.create({
    svg: {
      transform: [{ scaleX: isRTL ? 1 : -1 }],
    },
  });

export default styles;
