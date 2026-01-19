import React from 'react';
import {
  ImageBackground,
  Pressable,
  Text,
  View,
  type ImageSourcePropType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

import MuteIcon from '../../assets/icon_mute.svg';
import FireIcon from '../../assets/icon_fire.svg';

export type LargeCoverCardBadgeVariant = 'mostPopular' | 'hot' | 'default';

export type LargeCoverCardProps = {
  imageSource: ImageSourcePropType;
  badgeVariant?: LargeCoverCardBadgeVariant;
  onPress?: () => void;
  width?: number;
  height?: number;
  containerStyle?: StyleProp<ViewStyle>;
  genres: string[];
  title: string;
};

const LargeCoverCard = ({
  imageSource,
  onPress,
  badgeVariant,
  width = 235,
  height = 352,
  containerStyle,
  genres,
  title,
}: LargeCoverCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, { width, height }, containerStyle]}
    >
      <ImageBackground
        source={imageSource}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.imageInner}
      >
        {badgeVariant === 'mostPopular' ? (
          <View style={[styles.badge, styles.mostPopularBadge]}>
            <Text style={styles.badgeText}>MOST POPULAR</Text>
          </View>
        ) : badgeVariant === 'hot' ? (
          <View style={[styles.badge, styles.hotBadge]}>
            <FireIcon />
            <Text style={styles.badgeText}>HOT</Text>
          </View>
        ) : null}
        <Pressable style={styles.muteButton}>
          <MuteIcon />
        </Pressable>
        <LinearGradient
          colors={['#00000000', '#0E0E0E']}
          style={styles.bottomGradient}
        />
        <View style={styles.bottom}>
          <Text style={styles.genreText} numberOfLines={1}>
            {genres.join(' ')}
          </Text>

          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default LargeCoverCard;
