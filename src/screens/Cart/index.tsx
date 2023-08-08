import React, {useCallback} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Item from '../../components/Item';
import {ItemData} from '../../store/products/mock';
import {RootState} from '../../store';
import {increment, decrement} from '../../store/products/productSlice';
import styles from './styles';
import {CartProps} from './types';

export default function Cart({navigation}: CartProps) {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  const cart = products.filter(x => x.count > 0);
  const total = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.count,
    0,
  );

  const renderItem = useCallback(
    ({item}: {item: ItemData}) => {
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate('Details', {item})}
          increment={() => dispatch(increment(item.id))}
          decrement={() => dispatch(decrement(item.id))}
          whithCounter
        />
      );
    },
    [dispatch, navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total}</Text>
      </View>
    </SafeAreaView>
  );
}
