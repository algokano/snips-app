import { Dimensions, Platform } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

// Screen dimensions
export { SCREEN_HEIGHT, SCREEN_WIDTH };

// API
export const API_BASE_URL =
  'https://snips-testing-data.s3.us-east-2.amazonaws.com';

// Animation
export const ANIMATION_DURATION_FAST = 200;
export const ANIMATION_DURATION_DEFAULT = 250;

// Gesture
export const SWIPE_THRESHOLD_RATIO = 0.2;
export const VELOCITY_THRESHOLD = 500;
export const LONG_PRESS_DELAY = 200;
export const EDGE_RESISTANCE = 0.3;

// Video buffer config (in milliseconds)
export const VIDEO_BUFFER_CONFIG = {
  minBufferMs: 1500,
  maxBufferMs: 3000,
  bufferForPlaybackMs: 1500,
  bufferForPlaybackAfterRebufferMs: 1500,
  cacheSizeMB: 2048,
};

// UI
export const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 45 : 55;
export const HIT_SLOP = { top: 10, bottom: 10, left: 10, right: 10 };
