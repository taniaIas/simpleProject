import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeNavigation';
import {ItemData} from '../../store/products/mock';

export type HomeProps = NativeStackScreenProps<
  HomeStackParamList,
  'HomeScreen'
>;

export type ItemProps = {
  item: ItemData;
  onPress: () => void;
};
