import React, {useCallback} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import {HomeProps} from './types';
import {ItemData} from '../../store/products/mock';
import Item from '../../components/Item';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export default function Home({navigation}: HomeProps) {
  const products = useSelector((state: RootState) => state.products.products);

  const renderItem = useCallback(
    ({item}: {item: ItemData}) => {
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate('Details', {item})}
        />
      );
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
