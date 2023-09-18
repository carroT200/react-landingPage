import React from 'react';

const CartContext = React.createContext({
  name: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
