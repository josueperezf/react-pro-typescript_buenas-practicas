import React from "react";
import  renderer from "react-test-renderer";
import { ProductTitle, ProductCard } from '../../src/components/';
import { products } from '../data/products';

describe('ProductTitle', () => {

  test('debe de mostrar el componente correctamente con el titulo esperado', () => {
    const wrapper = renderer.create(
      <ProductTitle title="titulo para prueba"/>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  test('debe de mostar el componente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>
        {
          () => (
            <>
              <ProductTitle title="titulo para prueba"/>
            </>
          )
        }
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
});
