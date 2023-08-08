import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CartStackParamList} from '../../navigation/CartNavigation';

export type CartProps = NativeStackScreenProps<
  CartStackParamList,
  'CartScreen'
>;
