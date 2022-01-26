import { useState } from 'react';

export const useProduct = () => {
  const [counter, setCounter] = useState(0);

    const cambiarValor = (value: number) => {
        // sirve para incrementar o decrementar, utiliza el math para hacer que jamas permita un valor menor a cero
        setCounter( previo => Math.max(previo + value, 0) )
    }
  return {
    counter,
    cambiarValor
  }
};
