import ProductCard, { ProductImage, ProductTitle, ProductButtons } from '../components';
import  '../styles/custom-styles.css';
import products from '../data/productos';
import { Product } from '../interfaces/interfaces';

const product: Product = products[0];

const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        {
          products.map((product) => (
          <ProductCard key={product.id} product={product} className='bg-dark text-white' initialValues={{count: 4, maxCount: 10}}>
            {
              ({reset, cambiarValor, isMaxCountReached, count, maxCount, ...a}) => (
                <>
                <ProductImage className='custom-image'  />
                <ProductTitle className='text-bold ' />
                <ProductButtons className='custom-buttons' />
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
