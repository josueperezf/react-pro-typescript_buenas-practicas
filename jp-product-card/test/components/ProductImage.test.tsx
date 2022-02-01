import React from "react";
import  renderer from "react-test-renderer";
import { ProductImage, ProductCard } from '../../src/components/';
import { products } from '../data/products';

describe('ProductImage', () => {

  test('debe de mostrar el componente correctamente con la imagen esperado', () => {
    const wrapper = renderer.create(
      <ProductImage  img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/1200px-15-09-26-RalfR-WLC-0098.jpg" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  test('debe de mostar el componente con la iamgen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[1]}>
        {
          () => (
            <>
              <ProductImage />
            </>
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
});
