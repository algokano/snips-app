import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useFeed } from '@/hooks/useFeed';
import Components from '@/components';
import colors from '@/theme/colors';
import {
  SCREEN_HEIGHT,
  SWIPE_THRESHOLD_RATIO,
  VELOCITY_THRESHOLD,
  ANIMATION_DURATION_DEFAULT,
  ANIMATION_DURATION_FAST,
  EDGE_RESISTANCE,
} from '@/constants';

const SWIPE_THRESHOLD = SCREEN_HEIGHT * SWIPE_THRESHOLD_RATIO;

const FeedScreen = () => {
  const { feedTitles, loading, error } = useFeed();
  const [currentIndex, setCurrentIndex] = useState(0);

  const translateY = useSharedValue(0);
  const animationComplete = useSharedValue<'next' | 'prev' | null>(null);

  const goToNext = useCallback(() => {
    if (currentIndex < feedTitles.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, feedTitles.length]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Handle animation completion
  useEffect(() => {
    const interval = setInterval(() => {
      const direction = animationComplete.value;
      if (direction !== null) {
        translateY.value = 0;
        animationComplete.value = null;
        if (direction === 'next') {
          goToNext();
        } else {
          goToPrevious();
        }
      }
    }, 16);
    return () => clearInterval(interval);
  }, [animationComplete, translateY, goToNext, goToPrevious]);

  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      'worklet';
      const isAtStart = currentIndex === 0 && event.translationY > 0;
      const isAtEnd =
        currentIndex === feedTitles.length - 1 && event.translationY < 0;

      if (isAtStart || isAtEnd) {
        translateY.value = event.translationY * EDGE_RESISTANCE;
      } else {
        translateY.value = event.translationY;
      }
    })
    .onEnd(event => {
      'worklet';
      const shouldGoNext =
        (event.translationY < -SWIPE_THRESHOLD ||
          event.velocityY < -VELOCITY_THRESHOLD) &&
        currentIndex < feedTitles.length - 1;

      const shouldGoPrevious =
        (event.translationY > SWIPE_THRESHOLD ||
          event.velocityY > VELOCITY_THRESHOLD) &&
        currentIndex > 0;

      if (shouldGoNext) {
        translateY.value = withTiming(
          -SCREEN_HEIGHT,
          {
            duration: ANIMATION_DURATION_DEFAULT,
            easing: Easing.out(Easing.cubic),
          },
          finished => {
            'worklet';
            if (finished) {
              animationComplete.value = 'next';
            }
          },
        );
      } else if (shouldGoPrevious) {
        translateY.value = withTiming(
          SCREEN_HEIGHT,
          {
            duration: ANIMATION_DURATION_DEFAULT,
            easing: Easing.out(Easing.cubic),
          },
          finished => {
            'worklet';
            if (finished) {
              animationComplete.value = 'prev';
            }
          },
        );
      } else {
        translateY.value = withTiming(0, {
          duration: ANIMATION_DURATION_FAST,
          easing: Easing.out(Easing.cubic),
        });
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const nextAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value + SCREEN_HEIGHT }],
  }));

  const prevAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value - SCREEN_HEIGHT }],
  }));

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Error: {error}</Text>
      </View>
    );
  }

  const currentVideo = feedTitles[currentIndex];
  const nextVideo = feedTitles[currentIndex + 1];
  const prevVideo = feedTitles[currentIndex - 1];

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <View style={styles.gestureContainer}>
          {prevVideo && (
            <Animated.View style={[styles.cardContainer, prevAnimatedStyle]}>
              <Components.FeedSlide
                key={prevVideo.id}
                data={prevVideo}
                isActive={false}
              />
            </Animated.View>
          )}

          <Animated.View style={[styles.cardContainer, animatedStyle]}>
            <Components.FeedSlide
              key={currentVideo.id}
              data={currentVideo}
              isActive={true}
            />
          </Animated.View>

          {nextVideo && (
            <Animated.View style={[styles.cardContainer, nextAnimatedStyle]}>
              <Components.FeedSlide
                key={nextVideo.id}
                data={nextVideo}
                isActive={false}
              />
            </Animated.View>
          )}
        </View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  gestureContainer: {
    flex: 1,
  },
  cardContainer: {
    ...StyleSheet.absoluteFill,
    height: SCREEN_HEIGHT,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default FeedScreen;
