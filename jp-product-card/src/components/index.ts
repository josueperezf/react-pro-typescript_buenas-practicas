import { ProductCard as ProductCardComponent } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHOCProps } from '../interfaces/interfaces';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardComponent, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export {
    ProductTitle,
    ProductImage,
    ProductButtons,
}

export default ProductCard;
