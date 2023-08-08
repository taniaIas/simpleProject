import {StyleSheet, StatusBar} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff',
  },
});

export default style;
