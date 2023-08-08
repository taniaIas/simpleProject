import React from 'react';
import styles from './styles';
import {TouchableOpacity, Text} from 'react-native';

const CountButton = ({onPress, text}: {onPress?: () => void; text: string}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
export default CountButton;
