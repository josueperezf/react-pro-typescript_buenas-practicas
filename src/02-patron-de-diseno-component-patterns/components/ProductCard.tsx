import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardContextProps, ProductCardsProps } from '../interfaces/interfaces';

// esto es para poder pasar informacion desde el componente padre al componente
export const ProductContext =  createContext({} as ProductCardContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product}: ProductCardsProps) => {
  const { counter, cambiarValor} = useProduct()
  return (
    <Provider value={{product, counter, cambiarValor }}>
      <div className={styles.productCard }>
        {children}
      </div>
    </Provider>
  );
};