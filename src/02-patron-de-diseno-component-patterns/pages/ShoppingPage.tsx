import ProductCard, { ProductImage, ProductTitle, ProductButtons } from '../components';
import  '../styles/custom-styles.css';
import products from '../data/productos';
import { useShoppingCart } from '../hooks/useShoppingCart';


const ShoppingPage = () => {
  const {shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            products.map(product => (
              // onChange en html retorna un valor, conocido como evento, este se pasa a la funcion que asignemos, en este caso a 'onProductCountChange'
              <ProductCard key={product.id} product={product} value={shoppingCart[product.id]?.count || 0 } className='bg-dark text-white' onChange={onProductCountChange } >
                <ProductImage className='custom-image'  />
                <ProductTitle className='text-bold ' />
                <ProductButtons className='custom-buttons' />
              </ProductCard>
            ))
          }

        </div>

        <div className='shopping-cart'>
          {
            Object.entries(shoppingCart).map(([key, product,]) => (
              <ProductCard key={key}  product={product } value={product.count} className='bg-dark text-white ' style={{ width: '100px' }} onChange={onProductCountChange }>
                <ProductImage className='custom-image'  />
                <ProductButtons className='custom-buttons' style={{ display: 'flex', justifyContent: 'center' }}  />
              </ProductCard>
            ))
          }
        </div>
    </div>
  );
};

export default ShoppingPage;
