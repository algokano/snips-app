import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    columnGap: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  header: {
    marginHorizontal: 16,
    paddingVertical: 4,
    paddingHorizontal: 4,
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
  seeAllButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
