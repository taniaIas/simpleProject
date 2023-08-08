import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CountButton from '../CountButton';

const Counter = ({
  id,
  count,
  increment,
  decrement,
}: {
  id: string;
  count: number;
  increment?: () => void;
  decrement?: () => void;
}) => {
  console.log(id);
  return (
    <View style={styles.verticalContainer}>
      <CountButton onPress={increment} text={'+'} />
      <Text style={styles.text}>{count}</Text>
      <CountButton onPress={decrement} text={'-'} />
    </View>
  );
};
export default Counter;
