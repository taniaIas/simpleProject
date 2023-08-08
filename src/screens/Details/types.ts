import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeNavigation';

export type DetailsProps = NativeStackScreenProps<
  HomeStackParamList,
  'Details'
>;
