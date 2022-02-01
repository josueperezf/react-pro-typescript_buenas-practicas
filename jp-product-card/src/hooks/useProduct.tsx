import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, ProductCardsInitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product,
  onChange?: (args: onChangeArgs) => void,
  value?: number,
  initialValues?: ProductCardsInitialValues
}

export const useProduct = ({product, onChange, value = 0, initialValues }: useProductArgs ) => {
  const [counter, setCounter] = useState<number>((initialValues && initialValues.count) ? initialValues.count : value);
  // la siguiente linea me sirve para saber si se cargo todo el html, al estar cargado montadoElHtml.current retornaria un true, esto no se borra con cada renderizado
  const montadoElHtml = useRef(false);

  const reset = () => {
    setCounter((initialValues && initialValues.count) ? initialValues.count : value);
  }
  
  // 
  useEffect(() => {
    // (montadoElHtml.current) && setCounter(value)
    if (!montadoElHtml.current) return;
    setCounter(value);
  }, [value]);


  useEffect(() => {
    // esto lo coloco fernando para evitar que se renderice varias veces y veamos pero noto que si comento esto tampoco ocurre el doble renderizado
    montadoElHtml.current = true;
  }, []);
  
  
  const cambiarValor = (value: number) => {
    // sirve para incrementar o decrementar, utiliza el math para hacer que jamas permita un valor menor a cero
    let newValue = Math.max( counter + value, 0) ;
    if (initialValues &&  initialValues.maxCount ) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    // setCounter( previo => Math.max(previo + value, 0) )
    setCounter(newValue);
    // si onChange tiene valor, entonces ejecute esa funcion
    onChange && onChange({counter: newValue, product});
  }
  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount || null,
    cambiarValor,
    reset
  }
};
