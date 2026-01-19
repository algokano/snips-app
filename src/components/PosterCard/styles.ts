import colors from '@/theme/colors';
import { withOpacity } from '@/utils/colorOpacity';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    width: 160,
    height: 213,
  },
  image: {
    flex: 1,
  },
  imageInner: {
    borderRadius: 12,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 2,
    right: 3,
    backgroundColor: withOpacity(colors.black, 20),
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 12,
  },
  counter: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.white,
  },
  genreText: {
    marginTop: 6,
    fontSize: 11,
    color: withOpacity(colors.white, 60),
  },
  titleText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.white,
  },
});

export default styles;
