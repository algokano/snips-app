import colors from '@/theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  listContentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    rowGap: 28,
  },
});
export default styles;
