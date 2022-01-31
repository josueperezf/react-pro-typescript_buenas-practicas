import ProductCard, { ProductImage, ProductTitle, ProductButtons } from '../components';
import products from '../data/productos';

const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        {
          products.map((product) => (
          <ProductCard key={product.id} product={product} initialValues={{count: 4, maxCount: 10}}>
            {
              ({reset, cambiarValor, isMaxCountReached, count, maxCount, ...a}) => (
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
          ))
        }
    </div>
  );
};

export default ShoppingPage;
