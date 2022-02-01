import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const products = [
  {
      id: '1',
      title: 'Coffee Mug - Card',
      // img: './coffee-mug.png'
  },
  {
      id: '2',
      title: 'Coffee Mug - Meme',
      // img: './coffee-mug2.png'
  }
]

const App = () => {
  return (
    <>
      {
        products.map((product)=> (
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

        ))
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
