import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void,
  value?: number
}

export const useProduct = ({product, onChange, value = 0 }: useProductArgs ) => {
  const [counter, setCounter] = useState(value);
  /**
   * lo siguiente es para determinar, que si existe en onChange es que el se quiere controlar desde afuera el componente, y no que este hook controle el state,
   * si es controlado de afuera, si presionan en +, retornaria 1, si presionan en '-' retonaria m-1, en cambio si este hook controla el state,
   * el valor retornado seria, 7, 6, 5 segun sea el caso
   */
  const esControladoDesdeFuera = useRef(!!onChange);
  useEffect(() => {
    setCounter(value)
  }, [value]);
  
  const cambiarValor = (value: number) => {
    // si es controlado desde afuera, solo podra retornar el 1 o el -1 segun sea el caso
    if (esControladoDesdeFuera && onChange) {
      return onChange({counter: value, product});;
    }
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
