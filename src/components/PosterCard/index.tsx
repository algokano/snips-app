import React from 'react';
import {
  ImageBackground,
  Pressable,
  Text,
  View,
  type ImageSourcePropType,
  type ViewStyle,
} from 'react-native';
import styles from './styles';

import EyeIcon from '../../assets/icon_eye.svg';

export type LargeCoverCardProps = {
  imageSource: ImageSourcePropType;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  viewCount?: number;
  genres?: string[];
  title?: string;
};

const PosterCard = React.memo(
  ({
    imageSource,
    onPress,
    containerStyle,
    viewCount,
    genres = [],
    title,
  }: LargeCoverCardProps) => {
    return (
      <Pressable onPress={onPress} style={[styles.container, containerStyle]}>
        <ImageBackground
          source={imageSource}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.imageInner}
        >
          <View style={styles.bottom}>
            <EyeIcon />
            <Text style={styles.counter}>{viewCount}</Text>
          </View>
        </ImageBackground>
        {genres.length > 0 && (
          <Text style={styles.genreText} numberOfLines={1}>
            {genres.join(' ')}
          </Text>
        )}
        {title && (
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
        )}
      </Pressable>
    );
  },
);

export default PosterCard;
