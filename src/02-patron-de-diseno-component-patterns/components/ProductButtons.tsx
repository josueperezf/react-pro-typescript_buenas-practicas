import { useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductButtons = () => {
    const {counter, cambiarValor} = useContext(ProductContext);
    return (
      <div className={styles.buttonsContainer} >
          <button className={styles.buttonMinus} onClick={()=>cambiarValor(-1)} >-</button>
          <div className={styles.countLabel} >{counter}</div>
          <button className={styles.buttonAdd} onClick={()=>cambiarValor(1)} >+</button>
      </div>
    )
}