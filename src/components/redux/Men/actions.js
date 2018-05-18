import { UPDATE_STOCK } from './constants';

export const updateStock = selectedStock => {
  return { type: UPDATE_STOCK, stock: selectedStock };
};
