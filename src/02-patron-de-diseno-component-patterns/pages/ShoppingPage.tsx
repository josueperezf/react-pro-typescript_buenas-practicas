
import ProductCard, { ProductImage, ProductTitle, ProductButtons } from '../components';

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
            <ProductCard.Image />
            <ProductCard.Title title={'titulo sobreescrito'} />
            <ProductCard.Buttons/>
          </ProductCard>

          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle  />
            <ProductButtons/>
          </ProductCard>
        </div>
    </div>
  );
};

export default ShoppingPage;
