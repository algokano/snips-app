import colors from '@/theme/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    backgroundColor: colors.black,
  },
  listContentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    rowGap: 28,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    marginTop: 100,
  },
});
export default styles;
