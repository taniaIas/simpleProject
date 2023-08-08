import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {useState} from 'react';
import CountButton from '../CountButton';

const Counter = ({
  count,
  onPress,
}: {
  count: number;
  onPress: (count: number) => void;
}) => {
  const [localCount, setLocalCount] = useState<number>(count);
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <CountButton
          onPress={() =>
            setLocalCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
          }
          text={'-'}
        />
        <Text style={styles.text}>{localCount}</Text>
        <CountButton
          onPress={() => setLocalCount(prevCount => prevCount + 1)}
          text={'+'}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => onPress(localCount)}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;
