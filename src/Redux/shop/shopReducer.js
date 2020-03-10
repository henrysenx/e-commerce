import ShopData from "./shopdata";
import { ShopActionTypes } from "./shopTypes";

const initialState = {
  // collections: null || ShopData
  collections: null
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
