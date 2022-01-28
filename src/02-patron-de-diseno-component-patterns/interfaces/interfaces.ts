import { ReactElement } from 'react';

export interface ProductCardsProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties | undefined
  }

export interface ProductTitleProps {
    title?: string,
    className?: string,
    style?: React.CSSProperties | undefined
}

export interface ProductImageProps {
    img?: string,
    className?: string
    style?: React.CSSProperties | undefined
}
export interface ProductButtonsProps {
    className?: string,
    style?: React.CSSProperties | undefined
  }
export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductCardContextProps {
    product: Product;
    counter: number;
    cambiarValor: (value:number) => void,
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardsProps ):JSX.Element,
    Title: (props: ProductTitleProps) => JSX.Element,
    Image: (props: ProductImageProps) => JSX.Element,
    Buttons: (props: ProductButtonsProps) => JSX.Element
}