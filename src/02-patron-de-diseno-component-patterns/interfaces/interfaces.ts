import { ReactElement } from 'react';

export interface ProductCardsProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties | undefined
    onChange?: (args: onChangeArgs) => void,
    value?: number
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

// argumentos que el onchange va a recibir, que eventualmente sera los que va a estar emitiendoa a los componentes externos
export interface onChangeArgs {
    product: Product,
    counter: number;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardsProps ):JSX.Element,
    Title: (props: ProductTitleProps) => JSX.Element,
    Image: (props: ProductImageProps) => JSX.Element,
    Buttons: (props: ProductButtonsProps) => JSX.Element
}

export interface ProductIntCart extends Product {
    count: number
  }
  