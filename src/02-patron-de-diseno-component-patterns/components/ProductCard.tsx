import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardContextProps, ProductCardsProps } from '../interfaces/interfaces';

// esto es para poder pasar informacion desde el componente padre al componente
export const ProductContext =  createContext({} as ProductCardContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style = {}, onChange, value}: ProductCardsProps) => {
  const { counter, cambiarValor} = useProduct({onChange, product, value});
  return (
    <Provider value={{product, counter, cambiarValor}}>
      <div className={`${styles.productCard} ${className}`} style={style} >
        {children}
      </div>
    </Provider>
  );
};