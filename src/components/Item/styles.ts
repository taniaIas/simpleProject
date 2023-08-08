import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    borderColor: '#aec9f5',
    borderWidth: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 16,
    color: '#7d7e80',
    padding: 6,
  },
  img: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  textView: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default style;
