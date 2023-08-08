import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
  },
  item: {
    marginVertical: 8,
    marginBottom: 20,
    borderRadius: 5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 16,
    color: '#7d7e80',
    paddingVertical: 6,
  },
  image: {
    width: 160,
    height: 160,
    marginRight: 20,
    borderRadius: 5,
  },
  viewContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
});

export default style;
