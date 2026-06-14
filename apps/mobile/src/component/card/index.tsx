import type { ReactNode } from 'react';
import type { TextStyle } from 'react-native';
import { Linking, Text, View } from 'react-native';

import { useRTL } from '../../i18n/RTLContext';
import { useTheme } from '../../themes/ThemeContext';
import { themes } from '../../themes/themes';
import styles from './styles';

interface CardProps {
  dominantTitle?: string;
  title?: string;
  content?: string | undefined;
  links?: { text: string; url: string }[];
  children?: ReactNode;
  dominantTitleStyles?: TextStyle;
  titleStyles?: TextStyle;
  contentStyles?: TextStyle;
}

const Card: React.FC<CardProps> = ({
  dominantTitle,
  title,
  content,
  links,
  children,
  dominantTitleStyles,
  titleStyles,
  contentStyles,
}) => {
  const { theme } = useTheme();
  const colors = themes[theme];
  const { isRTL } = useRTL();

  const renderContent = () => {
    if (typeof content === 'string') {
      if (!links || links.length === 0) {
        const parts = content.split(/(\*\*.*?\*\*)/g);

        return (
          <Text style={[styles(colors, isRTL).content, contentStyles]}>
            {parts.map((part) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <Text key={`bold-${part}`} style={{ fontWeight: 'bold' }}>
                    {part.slice(2, -2)}
                  </Text>
                );
              }
              return part;
            })}
          </Text>
        );
      }

      const splitContent = content.split(/(\[link\d+\]|\*\*.*?\*\*)/g);

      return (
        <Text style={styles(colors, isRTL).content}>
          {splitContent.map((part: string) => {
            const linkMatch = part.match(/\[link(\d+)\]/);
            const boldMatch = part.match(/^\*\*(.*?)\*\*$/);

            if (linkMatch) {
              const linkIndex = parseInt(linkMatch[1], 10) - 1;
              const link = links[linkIndex];
              return (
                <Text
                  key={`link`}
                  style={styles(colors, isRTL).link}
                  onPress={() => Linking.openURL(link.url)}>
                  {link.text}
                </Text>
              );
            } else if (boldMatch) {
              return (
                <Text key={`bold`} style={{ fontWeight: 'bold' }}>
                  {boldMatch[1]}
                </Text>
              );
            }

            return part;
          })}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles(colors, isRTL).card}>
      {dominantTitle !== undefined && (
        <Text
          style={[styles(colors, isRTL).dominantTitle, dominantTitleStyles]}>
          {dominantTitle}
        </Text>
      )}
      {title !== undefined && (
        <Text style={[styles(colors, isRTL).title, titleStyles]}>{title}</Text>
      )}
      {renderContent()}
      {children !== undefined && (
        <View style={styles(colors, isRTL).childrenContainer}>{children}</View>
      )}
    </View>
  );
};

export default Card;
