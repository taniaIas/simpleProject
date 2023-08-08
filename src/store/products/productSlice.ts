import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DATA, ItemData} from './mock';

export interface ProductsState {
  products: ItemData[];
}

const initialState: ProductsState = {
  products: DATA,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const newProductState = [...state.products];
      newProductState.forEach(x => {
        console.log(x.id, x.title);
        if (x.id === action.payload) {
          x.count = x.count + 1;
        }
      });
      state.products = newProductState;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const newProductState = [...state.products];
      newProductState.forEach(x => {
        if (x.id === action.payload && x.count > 0) {
          x.count = x.count - 1;
        }
      });
      state.products = newProductState;
    },
    setValue: (state, action: PayloadAction<{id: string; count: number}>) => {
      const newProductState = [...state.products];
      newProductState.forEach(x => {
        if (x.id === action.payload.id && action.payload.count >= 0) {
          x.count = action.payload.count;
        }
      });
      state.products = newProductState;
    },
  },
});

export const {increment, decrement, setValue} = counterSlice.actions;
export default counterSlice.reducer;
