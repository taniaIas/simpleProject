import {ItemData} from '../../store/products/mock';

export type ItemProps = {
  item: ItemData;
  onPress: () => void;
  increment?: () => void;
  decrement?: () => void;
  whithCounter?: boolean;
};
