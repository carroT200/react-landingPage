import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  name: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedName = state.name.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      name: updatedName,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispathCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToHandler = (item) => {
    dispathCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispathCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    name: cartState.name,
    totalAmount: cartState.totalAmount,
    addItem: addItemToHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
