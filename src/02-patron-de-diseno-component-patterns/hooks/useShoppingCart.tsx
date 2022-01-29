import { useState } from 'react';
import { Product, ProductIntCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
    /**
   * useState<{ [key: string]: ProductIntCart }>
   * decimos que useState va a contener un objeto, que va a tener 'n' cantidad de key de tipo string [key: string], eso lo indica gracias a las '[]'
   * y este va a ser del tipo  'ProductIntCart'
   * // ejemplo '1': {...product2, count: 10},
   */
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductIntCart }>({});

  const onProductCountChange = ({counter, product}:{counter:number, product:Product}) => {
    // counter vale 1 si esta sumando, -1 si esta restando
    // console.log({counter});
    
    setShoppingCart(oldshoppingCart => {
      if (counter === 0) {
        const {[product.id]: eliminado, ...rest} = oldshoppingCart;
        // delete oldshoppingCart[product.id];
        return { ...rest}
      }
      return { ...shoppingCart,
        [product.id] : {...product, count: counter }
      }
    })
  }
  return {
      shoppingCart,
      onProductCountChange,
  }
};
