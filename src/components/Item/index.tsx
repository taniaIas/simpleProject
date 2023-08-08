import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ItemProps} from './types';
import VerticalCounter from '../VerticalCounter';

const Item = ({
  item,
  onPress,
  whithCounter,
  increment,
  decrement,
}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image
      style={styles.img}
      source={{
        uri: item.image,
      }}
    />
    <View style={styles.textView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price} $</Text>
    </View>
    {whithCounter && (
      <VerticalCounter
        id={item.id}
        count={item.count}
        decrement={decrement}
        increment={increment}
      />
    )}
  </TouchableOpacity>
);
export default Item;
