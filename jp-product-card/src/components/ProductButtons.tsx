import React, { useCallback, useContext } from "react";
import { ProductButtonsProps } from "../interfaces/interfaces";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";


export const ProductButtons = ({className = '', style}: ProductButtonsProps) => {
  console.log('renderizo');
  
  // extraer del context una nueva propiedad que se llamen maxCount 'opcional'
  /**
   * El useCallback esta optimizado para memorizar la función y nos permitiría ejecutarla de nuevo sin causar re-renders... es decir la llamamos y ya.
   * 
   * El useMemo sirme para memorizar el valor, cosa que también nos podría servir para este caso, porque memorizamos el valor si alcanzamos el valor máximo, pero si tuvieramos que ejecutar una función el useMemo no nos serviría ahí
   * 
   * Usualmente el useMemo se usa para memorizar resultados de tareas pesadas o que toman tiempo, pero en sí, para este caso es indiferente, porque ambos tendrían la mismas dependencias.
   */
    const {counter, cambiarValor, maxCount} = useContext(ProductContext);
    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount , [maxCount, counter]);
    

    return (
      <div className={ `${styles.buttonsContainer} ${className}`} style={ style } >
          <button className={styles.buttonMinus} onClick={()=>cambiarValor(-1)} >-</button>
          <div className={styles.countLabel} >{counter}</div>
          {/* yo lo hice si el uso del callback, como esta comentado, y la verdad no  note cambio en el rederizado.
            segun el memo es cuando por ejemplo, tenemos tres contadores, en el mismo componente, y notamos que al cambiar uno, se redibujan todos, 
            esto hace mas lento todo, pero en este caso n o observo este  tipo de comportamientos.
           */}
          {/* <button className={`${styles.buttonAdd} ${(maxCount == counter ) && styles.disabled  } `} onClick={()=>cambiarValor(1)} >+</button> */}
          <button className={`${styles.buttonAdd} ${ isMaxReached() && styles.disabled  } `} onClick={()=>cambiarValor(1)} >+</button>
      </div>
    )
}