// Define the initial state of the application
const initialCartState = {
  items: [],
};
export default function cartReducer(state = initialCartState.items, action) {
  const product = action.payload;
  switch (action.type) {
    case "ADD_TO_CART":
      const index = state.findIndex((x) => x.id === product.id);
      if (index !== -1) {
        // Increase the quantity of an existing item
        const updatedItem = { ...state[index], qty: state[index].qty + 1 };
        return [
          ...state.slice(0, index),
          updatedItem,
          ...state.slice(index + 1),
        ];
      } else {
        // Add a new item to the cart
        return [...state, { ...product, qty: 1 }];
      }

    case "REMOVE_ITEM":
      const index2 = state.findIndex((x) => x.id === product.id);
      if (index2 !== -1) {
        // Decrease the quantity of an existing item
        const updatedItem = { ...state[index2], qty: state[index2].qty - 1 };
        // Remove the item from the cart if the quantity becomes zero
        if (updatedItem.qty === 0) {
          return [...state.slice(0, index2), ...state.slice(index2 + 1)];
        } else {
          return [
            ...state.slice(0, index2),
            updatedItem,
            ...state.slice(index2 + 1),
          ];
        }
      } else {
        // Add a new item to the cart
        return [...state, { ...product, qty: 1 }];
      }

    case "REMOVE_COMPLETE":
      // Find the item to remove
      const itemToRemove = state.find((item) => item.id === action.payload.id);
      // Filter out the item from the cart
      const updatedCart = state.filter((item) => item.id !== itemToRemove.id);
      // Return the updated cart
      return updatedCart;

    default:
      return state;
  }
}
