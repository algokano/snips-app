import colors from '@/theme/colors';
import { withOpacity } from '@/utils/colorOpacity';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    rowGap: 12,
    paddingHorizontal: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  rightText: {
    fontSize: 14,
    color: withOpacity(colors.white, 60),
  },
  card: {
    marginBottom: 8,
    width: '49%',
    height: 236,
  },
});
export default styles;
