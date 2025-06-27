export const productReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
      case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
    default:
      break;
  }
};
