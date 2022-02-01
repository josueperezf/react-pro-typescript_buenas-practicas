import React from "react";
import  renderer from "react-test-renderer";
import { ProductCard } from '../../src/components/';
import { products } from '../data/products';

const {act} = renderer;

describe('ProductCard', () => {

  test('debe de mostrar el componente correctamente', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[0]}>
          {
              () => (
                  <h1>Producto </h1>
              )
          }
    </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
  test('debe incrementar el contador', () => {
    const wrapper = renderer.create(
        <ProductCard product={products[1]}>
        {
            ({count, cambiarValor}) => (
                <>
                    <h1>Product card</h1>
                    <span>{count}</span>
                    <button onClick={()=> cambiarValor(1) } ></button>
                </>
            )
        }
        </ProductCard>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
    act(() => {
        (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();
    // verificamos si el contador aumento luego de simular el click
    // expect((tree as any).children[1].children[0] ).toMatchSnapshot();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
  
});

