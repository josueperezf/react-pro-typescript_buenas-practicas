import { ReactElement } from 'react';

export interface ProductCardsProps {
    product: Product,
    children?: ReactElement | ReactElement[]
  }
  
export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductCardContextProps {
    product: Product;
    counter: number;
    cambiarValor: (value:number) => void
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardsProps ):JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element
}