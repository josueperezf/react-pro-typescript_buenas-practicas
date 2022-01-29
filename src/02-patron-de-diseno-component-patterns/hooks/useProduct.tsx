import { useEffect, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void,
  value?: number
}

export const useProduct = ({product, onChange, value = 0 }: useProductArgs ) => {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    setCounter(value)
  }, [value]);
  
  const cambiarValor = (value: number) => {
    // sirve para incrementar o decrementar, utiliza el math para hacer que jamas permita un valor menor a cero
    const newValue = Math.max(counter + value, 0) ;
    // setCounter( previo => Math.max(previo + value, 0) )
    setCounter(newValue);
    // si onChange tiene valor, entonces ejecute esa funcion
    onChange && onChange({counter: newValue, product});
  }
  return {
    counter,
    cambiarValor
  }
};
