import colors from '@/theme/colors';
import { withOpacity } from '@/utils/colorOpacity';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
  imageInner: {
    borderRadius: 12,
  },
  muteButton: {
    position: 'absolute',
    top: 6,
    right: 6,
    height: 28,
    minWidth: 28,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: withOpacity(colors.black, 20),
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    gap: 4,
    top: 6,
    left: 6,
    paddingHorizontal: 5,
    paddingVertical: 4,
    borderRadius: 100,
  },
  mostPopularBadge: {
    backgroundColor: colors.purple,
  },
  badgeText: {
    color: colors.white,
    fontSize: 8,
    fontWeight: '600',
  },
  hotBadge: {
    backgroundColor: colors.orange,
  },
  bottomGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '40%',
  },
  bottom: {
    position: 'absolute',
    bottom: 12,
    left: 16,
    right: 16,
  },
  genreText: {
    fontSize: 11,
    color: withOpacity(colors.white, 60),
  },
  titleText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
});

export default styles;
