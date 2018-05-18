import initialState from './initialState';
import { UPDATE_STOCK } from './constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STOCK: {
      console.log('stock:', action.stock);
      return {
        ...state,
        stock: action.stock
      };
    }
    default:
      return state;
  }
};
