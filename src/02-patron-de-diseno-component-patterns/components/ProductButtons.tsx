import { useContext } from "react";
import { ProductButtonsProps } from "../interfaces/interfaces";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({className = '', style}: ProductButtonsProps) => {
    const {counter, cambiarValor} = useContext(ProductContext);
    return (
      <div className={ `${styles.buttonsContainer} ${className}`} style={ style } >
          <button className={styles.buttonMinus} onClick={()=>cambiarValor(-1)} >-</button>
          <div className={styles.countLabel} >{counter}</div>
          <button className={styles.buttonAdd} onClick={()=>cambiarValor(1)} >+</button>
      </div>
    )
}