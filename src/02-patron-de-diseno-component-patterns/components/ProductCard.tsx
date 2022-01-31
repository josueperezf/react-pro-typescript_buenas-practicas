import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardContextProps, ProductCardsProps } from '../interfaces/interfaces';

// esto es para poder pasar informacion desde el componente padre al componente
export const ProductContext =  createContext({} as ProductCardContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style = {}, onChange, value, initialValues }: ProductCardsProps) => {
  const { counter, maxCount, cambiarValor, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});
  return (
    <Provider value={{product, counter, cambiarValor, maxCount}}>
      <div className={`${styles.productCard} ${className}`} style={style} >
        {
          children && children({
            count: counter,
            maxCount: initialValues?.maxCount,
            isMaxCountReached: isMaxCountReached,
            product,
            cambiarValor,
            reset
          })
        }
      </div>
    </Provider>
  );
};