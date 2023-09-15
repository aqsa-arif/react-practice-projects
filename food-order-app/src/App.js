import { useState } from 'react';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Meals from './components/Meals/Meals';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  }
  const CloseCartHandler = () => {
    setIsCartShown(false);
  }

  return (
    <div>
      { isCartShown && <Cart CloseCart={CloseCartHandler} /> }

       <Header showCart={showCartHandler} />
       <main>
         <Meals />
       </main>
    </div>
  );
}

export default App;
