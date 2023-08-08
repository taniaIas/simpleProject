import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  counter: {
    flex: 1,
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
  },
  buttonAdd: {
    width: 260,
    height: 50,
    backgroundColor: '#2a74eb',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default style;
