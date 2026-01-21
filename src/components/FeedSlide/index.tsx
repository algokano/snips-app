import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import Video, { VideoRef } from 'react-native-video';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import { FeedTitle } from '@/types/feed';
import {
  LONG_PRESS_DELAY,
  TAB_BAR_HEIGHT,
  VIDEO_BUFFER_CONFIG,
  HIT_SLOP,
} from '@/constants';
import styles from './styles';

import SavedIcon from '@/assets/icon_saved.svg';
import PlayIcon from '@/assets/icon_play.svg';
import ListIcon from '@/assets/icon_list.svg';
import ShareIcon from '@/assets/icon_share.svg';
import MenuIcon from '@/assets/icon_menu.svg';

type FeedSlideProps = {
  data: FeedTitle;
  isActive: boolean;
};

const FeedSlide = ({ data, isActive }: FeedSlideProps) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<VideoRef>(null);
  const pressStartTime = useRef<number>(0);

  const paddingBottom = insets.bottom + TAB_BAR_HEIGHT;

  const handlePressIn = () => {
    pressStartTime.current = Date.now();
  };

  const handlePressOut = () => {
    const pressDuration = Date.now() - pressStartTime.current;

    if (pressDuration >= LONG_PRESS_DELAY) {
      setIsPaused(false);
    }
  };

  const handleLongPress = () => {
    setIsPaused(true);
  };

  const handlePress = () => {
    console.log('Pressed video area');
    setIsMuted(prev => !prev);
  };

  const renderActionButton = (
    icon: React.ReactNode,
    label?: string,
    onPress?: () => void,
  ) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>{icon}</View>
      {label && <Text style={styles.buttonText}>{label}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.absoluteFill} pointerEvents="none">
        {data.poster_url && (
          <Image
            source={{ uri: data.poster_url }}
            style={styles.poster}
            resizeMode="cover"
          />
        )}
        {data.video_playback_url && isActive && isFocused && (
          <Video
            ref={videoRef}
            source={{
              uri: data.video_playback_url,
              bufferConfig: VIDEO_BUFFER_CONFIG,
            }}
            style={[styles.video, { opacity: isVideoReady ? 1 : 0 }]}
            muted={isMuted}
            paused={isPaused}
            playWhenInactive={false}
            playInBackground={false}
            resizeMode="cover"
            progressUpdateInterval={250}
            preventsDisplaySleepDuringVideoPlayback={false}
            hideShutterView
            repeat
            onReadyForDisplay={() => {
              setIsVideoReady(true);
            }}
          />
        )}
      </View>
      <Pressable
        style={styles.absoluteFill}
        onPress={handlePress}
        onLongPress={handleLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        delayLongPress={LONG_PRESS_DELAY}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.7)']}
        style={[styles.bottomGradient, { bottom: paddingBottom }]}
        pointerEvents="none"
      />
      <View style={[styles.bottom, { paddingBottom }]}>
        <View style={styles.bottomLeftContainer}>
          <Text style={styles.title}>{data.name_en}</Text>
          {isExpanded ? (
            <ScrollView style={styles.captionsScrollView}>
              <Text style={styles.captions}>{data.captions_en}</Text>
            </ScrollView>
          ) : (
            <Text numberOfLines={3} style={styles.captions}>
              {data.captions_en}
            </Text>
          )}
          <TouchableOpacity
            onPress={() => setIsExpanded(prev => !prev)}
            hitSlop={HIT_SLOP}
          >
            <Text style={styles.moreButton}>
              {isExpanded ? 'Less' : 'More'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <PlayIcon />
            <Text style={styles.playButtonText}>Watch Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRightContainer}>
          {renderActionButton(<SavedIcon />, '24 k')}
          {renderActionButton(<ListIcon />, 'Episodes')}
          {renderActionButton(<ShareIcon />, 'Share')}
          {renderActionButton(<MenuIcon />)}
        </View>
      </View>
    </View>
  );
};

export default FeedSlide;
