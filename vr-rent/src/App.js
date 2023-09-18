import { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './header/Header';
import MainContent from './main-content/MainContent';
import Cards from './main-content/Cards';
import Footer from './footer/Footer';
import Cart from './UI/cart/Cart';

import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div className="App">
      <CartProvider>
        <Header onShowCart={showCartHandler} />
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <MainContent />
        <Cards onShowCart={showCartHandler} />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
