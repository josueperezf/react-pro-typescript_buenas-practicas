# pj-product-card

Este es un paquete de prueba de despligue en NPM


### Josue Perez

## ejemplo

```
    import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jp-product-card'
```

```
    <ProductCard key={product.id} product={product} initialValues={{count: 4, maxCount: 10}}>
        {
            ({reset, cambiarValor, isMaxCountReached, count, maxCount}) => (
            <>
            <ProductImage  />
            <ProductTitle />
            <ProductButtons />
            <button onClick={reset} > reset</button>
            <button onClick={()=>cambiarValor(-2) } >-2</button>
            { !isMaxCountReached && <button onClick={()=>cambiarValor(+2) } > +2</button>}
            <span>{count} {`${maxCount && - maxCount}`}</span>
            </>
            )
        }
    </ProductCard>

```