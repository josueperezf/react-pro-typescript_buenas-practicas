import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { ProductImageProps } from "../interfaces/interfaces";

export  const ProductImage = ({img = '', className = '', style}: ProductImageProps)=> {
    const {product} = useContext(ProductContext);
    const imagen = (img) ? img : product.img;

    return (<img className={`${styles.productImg} ${className} `} src={ imagen ? imagen : noImage} alt='' style={style}  />)
}