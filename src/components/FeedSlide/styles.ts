import { StyleSheet } from 'react-native';
import colors from '@/theme/colors';
import { withOpacity } from '@/utils/colorOpacity';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  absoluteFill: {
    ...StyleSheet.absoluteFill,
  },
  video: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  poster: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },
  bottom: {
    position: 'absolute',
    bottom: 24,
    left: 8,
    right: 8,
    gap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomLeftContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    flex: 0.8,
  },
  bottomRightContainer: {
    flex: 0.2,
    rowGap: 16,
    justifyContent: 'center',
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%',
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  captions: {
    color: withOpacity(colors.white, 80),
    fontSize: 12,
    marginTop: 8,
  },
  captionsScrollView: {
    height: 136,
    marginTop: 8,
  },
  moreButton: {
    color: colors.white,
    fontSize: 12,
    textDecorationLine: 'underline',
    marginTop: 4,
    textAlign: 'right',
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: colors.accent,
    gap: 8,
    borderRadius: 16,
    height: 44,
  },
  playButtonText: {
    color: colors.white,
    fontSize: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  buttonText: {
    marginTop: 4,
    color: withOpacity(colors.white, 60),
    fontSize: 10,
    textAlign: 'center',
  },
});

export default styles;
