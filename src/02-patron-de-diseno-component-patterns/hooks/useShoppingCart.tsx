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
      // obtengo el primer objecto
      const productInCarrito : ProductIntCart = oldshoppingCart[product.id] || {...product, count: 0};

      // Math.max determina el valor mayor, si el count es menor a cero '-1', entonces no entra, si es '1' si entra
      if (Math.max(productInCarrito.count + counter, 0 )) {
        productInCarrito.count += counter;
        return { ...shoppingCart,
            [product.id] : productInCarrito
          }
      }
      // si entra aqui, 'no entro al if anterior' es por que hay que borrar el prodcuto del carrito de compra
      // eliminado es que fernando renombra la variable y luego no la utiliza para nada, el no utilizo el delete como yo lo hice por que eso muta el objeto
        const {[product.id]: eliminado, ...rest} = oldshoppingCart;
        // delete oldshoppingCart[product.id];
        return { ...rest}


      // if (counter === 0) {
      //   const {[product.id]: eliminado, ...rest} = oldshoppingCart;
      //   // delete oldshoppingCart[product.id];
      //   return { ...rest}
      // }
      // return { ...shoppingCart,
      //   [product.id] : {...product, count: counter }
      // }
    })
  }
  return {
      shoppingCart,
      onProductCountChange,
  }
};
