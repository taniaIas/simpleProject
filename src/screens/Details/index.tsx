import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Counter from '../../components/Counter';
import {useDispatch} from 'react-redux';
import {setValue} from '../../store/products/productSlice';
import {DetailsProps} from './types';

export default function Details({route, navigation}: DetailsProps) {
  const dispatch = useDispatch();
  const {item} = route.params;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.item}>
          <Image
            style={styles.image}
            source={{
              uri: item.image,
            }}
          />
          <View style={styles.viewContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price} $</Text>
          </View>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Counter
        onPress={count => {
          dispatch(setValue({id: item.id, count: count}));
          navigation.goBack();
        }}
        count={item.count}
      />
    </ScrollView>
  );
}
