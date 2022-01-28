import ProductCard, { ProductImage, ProductTitle, ProductButtons } from '../components';
import  '../styles/custom-styles.css';
const product = {
  id: '1',
  title: 'cafe madrid',
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          <ProductCard product={product}>
            <ProductCard.Image className='custom-image' />
            <ProductCard.Title title={'titulo sobreescrito'} />
            <ProductCard.Buttons/>
          </ProductCard>

          <ProductCard product={product} className='bg-dark text-white ' >
            <ProductImage className='custom-image'  />
            <ProductTitle className='text-bold ' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>

          <ProductCard product={product} style={{backgroundColor: 'blue'}} >
            <ProductImage style={{boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}} />
            <ProductTitle style={{fontWeight: 'bold'}} />
            <ProductButtons style={{display: 'flex', justifyContent: 'end'}} />
          </ProductCard>
        </div>
    </div>
  );
};

export default ShoppingPage;
