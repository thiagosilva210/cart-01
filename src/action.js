//Add an item to the cart
export const addCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

//Decrease an item quantity from the cart
export const delCart = (product) => {
  return {
    type: "REMOVE_ITEM",
    payload: product,
  };
};

//Remove an item from the cart
export const remCart = (product) => {
  return {
    type: "REMOVE_COMPLETE",
    payload: product,
  };
};
